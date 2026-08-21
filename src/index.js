import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import GraphicDesign from './pages/GraphicDesign';
import WebDevelopment from './pages/WebDevelopment';
import Seo from './pages/Seo';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Pricing from './pages/Pricing';
import Career from './pages/Career';



const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutes = createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'pricing',
      element:<Pricing/>
    },
    {
      path:'services',
      element:<Services/>
    },
    {
      path:'about',
      element:<About/>
    },
    {
      path:'graphic-designing',
      element:<GraphicDesign/>
    },
    {
      path:'web-development',
      element:<WebDevelopment/>
    },
    {
      path:'search-engine-optimization',
      element:<Seo/>
    },
    {
      path:'portfolio',
      element:<Portfolio/>
    },
    {
      path:'contact',
      element:<Contact/>
    },
    {
      path:'career',
      element:<Career/>
    }
  ]
)
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <App/>
   <RouterProvider router={allRoutes}/>
   <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </HelmetProvider>
  </React.StrictMode>
);
reportWebVitals();
