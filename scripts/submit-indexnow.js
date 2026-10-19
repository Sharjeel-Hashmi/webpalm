/**
 * IndexNow Automated URL Submission Script for WebPalm
 *
 * Automatically parses all URLs from public/sitemap.xml and notifies
 * search engines (Bing, Yandex, Seznam, etc.) via the IndexNow protocol.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const HOST = 'webpalm.ie';
const KEY = '68c5d938dca94d99bd256aa1f9a4204f';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_PATH = path.resolve(__dirname, '../public/sitemap.xml');

// 1. Read sitemap and parse URLs
if (!fs.existsSync(SITEMAP_PATH)) {
  console.error(`❌ Sitemap file not found at: ${SITEMAP_PATH}`);
  process.exit(1);
}

const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf8');
const urlMatches = sitemapContent.match(/<loc>(https:\/\/[^<]+)<\/loc>/g);

if (!urlMatches || urlMatches.length === 0) {
  console.error('❌ No URLs found in sitemap.xml');
  process.exit(1);
}

const urlList = urlMatches.map((m) => m.replace(/<\/?loc>/g, '').trim());

console.log(`📋 Found ${urlList.length} URLs in sitemap to submit to IndexNow:`);
urlList.forEach((u, i) => console.log(`   ${i + 1}. ${u}`));

// 2. Prepare payload
const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urlList,
});

// 3. Endpoints to notify (IndexNow central API and Bing)
const endpoints = [
  { hostname: 'api.indexnow.org', path: '/indexnow' },
  { hostname: 'www.bing.com', path: '/indexnow' },
];

function submitToIndexNow(endpoint) {
  return new Promise((resolve) => {
    console.log(`\n🚀 Submitting to https://${endpoint.hostname}${endpoint.path}...`);

    const options = {
      hostname: endpoint.hostname,
      port: 443,
      path: endpoint.path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload),
      },
    };

    const req = https.request(options, (res) => {
      let responseBody = '';
      res.on('data', (chunk) => {
        responseBody += chunk;
      });

      res.on('end', () => {
        const status = res.statusCode;
        if (status === 200) {
          console.log(`   ✅ [${status}] OK: URLs submitted successfully to ${endpoint.hostname}.`);
        } else if (status === 202) {
          console.log(`   ℹ️ [${status}] Accepted: Request queued by ${endpoint.hostname} (key validation pending).`);
        } else if (status === 400) {
          console.log(`   ⚠️ [${status}] Bad Request: Invalid format or payload.`);
        } else if (status === 403) {
          console.log(`   ⚠️ [${status}] Forbidden: Key not found or mismatched at ${KEY_LOCATION}. (Ensure production site is deployed with key file).`);
        } else if (status === 422) {
          console.log(`   ⚠️ [${status}] Unprocessable: URLs don't belong to host ${HOST}.`);
        } else {
          console.log(`   ℹ️ [${status}] Response: ${responseBody || 'No response body'}`);
        }
        resolve({ endpoint: endpoint.hostname, status });
      });
    });

    req.on('error', (err) => {
      console.error(`   ❌ Network error for ${endpoint.hostname}:`, err.message);
      resolve({ endpoint: endpoint.hostname, error: err.message });
    });

    req.write(payload);
    req.end();
  });
}

async function run() {
  for (const ep of endpoints) {
    await submitToIndexNow(ep);
  }
  console.log('\n✨ IndexNow setup and submission complete.');
  console.log(`ℹ️ Note: IndexNow validates key ownership by verifying: ${KEY_LOCATION}`);
}

run();
