---
name: seo-aeo-geo-specialist
description: >-
  Expert toolkit for auditing, optimizing, and implementing Technical SEO, On-Page SEO,
  Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO) across web applications,
  single-page apps (React/Vue/Angular), and modern websites. Use whenever analyzing SEO health,
  generating JSON-LD schemas, configuring robots.txt/sitemaps/llms.txt, creating SEO-optimized pages,
  or aligning brand entities for AI search engines like Perplexity, ChatGPT, Claude, and Google AI Overviews.
---

# SEO, AEO & GEO Specialist Skill

This skill provides comprehensive workflows, checklists, standards, and code patterns to audit, optimize, and build websites for traditional search engines (Google, Bing), AI answer engines (Perplexity, ChatGPT Search, Claude), and Generative Engine Optimization (GEO / Google AI Overviews).

---

## 1. Core Pillars of Modern Search

### A. Traditional Technical & On-Page SEO
* **Metadata & Canonicalization**: Distinct `<title>` (50-60 chars), `<meta name="description">` (140-160 chars), and self-referencing `<link rel="canonical" href="...">` on every route.
* **Social Graph**: Complete Open Graph (`og:type`, `og:title`, `og:description`, `og:url`, `og:image`, `og:site_name`) and Twitter Card tags with absolute URLs.
* **Crawl Architecture**: Clean `robots.txt`, dynamic/static `sitemap.xml` listing canonical HTTPS URLs, and custom 404 error boundaries.
* **DOM & Semantics**: Single `<h1>` per page reflecting primary search intent, sequential heading hierarchy (`<h2>`, `<h3>`), valid HTML (no nested anchors `<Link><a>`), descriptive image `alt` attributes, and `rel="noopener noreferrer"` on external links.
* **Rendering Architecture**: For client-side rendered (CSR) SPAs (e.g. React CRA / Vite), implement pre-rendering (SSG, server middleware, or framework migration to Next.js/Remix/Astro) so bots receive fully populated DOM and metadata.

### B. Answer Engine Optimization (AEO)
AEO focuses on direct question answering in Perplexity, ChatGPT Search, Claude, and Google Featured Snippets:
* **Direct Answer Formula**: Place direct, concise, 40-60 word definitive answers immediately beneath `<h2>` or `<h3>` question headings.
* **FAQ Structuring**: Implement clear FAQ blocks pairing natural conversational queries with authoritative answers.
* **Schema.org Structured Data**: Embed valid JSON-LD schemas on every page:
  * `Organization` / `LocalBusiness` for brand knowledge graphs
  * `Service` with detailed provider, areaServed, and descriptions
  * `FAQPage` with `mainEntity` array
  * `BreadcrumbList` for structural context
  * `JobPosting` for career opportunities

### C. Generative Engine Optimization (GEO)
GEO optimizes content for citation and inclusion in LLM-synthesized overviews:
* **Information Density & Factual Grounding**: High-density statistics, specific methodologies, concrete pricing figures, and verified client outcomes.
* **`llms.txt` and `llms-full.txt`**: Standardized Markdown documentation in `/public` providing AI crawlers with structured summaries, core services, entity identity, pricing models, and key links.
* **AI Bot Permissions**: Explicitly permit AI crawlers (`GPTBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended`, `CCBot`) in `robots.txt`.
* **Entity Hygiene**: Eliminate brand contradictions (e.g., template placeholder names, mismatched phone numbers, conflicting addresses) to preserve knowledge graph confidence.
* **E-E-A-T Signals**: Prominent author/team credentials, verifiable case studies, physical headquarters data, and legal/regulatory compliance pages.

---

## 2. Standard Implementation Runbooks

### Runbook 1: Generating JSON-LD Schema (React/SPA)
```jsx
// Template for LocalBusiness + WebSite + Service
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://webpalm.ie/#organization",
      "name": "WebPalm",
      "url": "https://webpalm.ie",
      "logo": "https://webpalm.ie/assets/images/site_logo/site_logo_002.png",
      "image": "https://webpalm.ie/assets/images/site_logo/site_logo_002.png",
      "description": "Web and custom software development agency based in Dublin, Ireland.",
      "telephone": "+353894205316",
      "email": "info@webpalm.ie",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dublin",
        "addressCountry": "IE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "53.349805",
        "longitude": "-6.26031"
      },
      "areaServed": [
        { "@type": "Country", "name": "Ireland" },
        { "@type": "AdministrativeArea", "name": "Dublin" }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/webpalm"
      ]
    }
  ]
})}
</script>
```

### Runbook 2: Modern `robots.txt` for SEO + AEO + GEO
```txt
# Modern robots.txt supporting search engines and AI answer engines
User-agent: *
Allow: /

# Dedicated AI Scrapers and Generative Search Engines
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: CCBot
Allow: /

# Sitemaps and LLM Documentation
Sitemap: https://webpalm.ie/sitemap.xml
```

### Runbook 3: Enhanced `llms.txt` Spec
Place `llms.txt` in the root (`/public/llms.txt`) with:
* `# Project / Brand Name`
* `> Short 1-2 sentence core mission / value proposition`
* `## Core Services` with links and 1-line capabilities
* `## Products / Technologies`
* `## Pricing Model`
* `## Geographic Coverage & Contact`
* Reference link to `/llms-full.txt` containing full textual content for LLMs.

---

## 3. SEO/AEO/GEO Quality Checklist

Before completing any page or SEO enhancement:
1. [ ] Title tag: Unique, contains primary keyword + brand name, under 60 chars.
2. [ ] Meta description: Compelling value proposition, includes target keywords and CTA, 140-160 chars.
3. [ ] Canonical link: Present with absolute HTTPS URL.
4. [ ] Open Graph & Twitter Cards: Absolute image URLs, accurate titles/descriptions.
5. [ ] Single `<h1>`: Clear main topic, no duplicate `<h1>` tags on page.
6. [ ] Alt text: Every informative `<img>` has a descriptive, contextual `alt` (no template names).
7. [ ] Link Integrity: Zero links to `.html` files; no nested `<a>` inside `<Link>`; no `href="#"`.
8. [ ] External links: Include `rel="noopener noreferrer"`.
9. [ ] Schema markup: Valid JSON-LD tested against Schema.org guidelines.
10. [ ] FAQ section: Includes natural language queries matching user search and voice/AI intent.
11. [ ] Entity consistency: Zero mentions of template names (e.g. "Techco") or mismatched contact data.
