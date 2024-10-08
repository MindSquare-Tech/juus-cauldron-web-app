import React, { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageFallback from "./PageFallback.jsx";
const Home = lazy(() => import("../pages/Home/Home.jsx"));
const About = lazy(() => import("../pages/About/About.jsx"));
// const Shop = lazy(() => import("../pages/Shop/Shop.jsx"));
const FAQs = lazy(() => import("../pages/FAQs/FAQs.jsx"));
// const Contact = lazy(() => import("../pages/Contact/Contact.jsx"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound.jsx"));
const NovaHome = lazy(() => import("../pages/NovaHome/NovaHome.jsx"));
const JuusHome = lazy(() => import("../pages/JuusHome/JuusHome.jsx"));

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index path="/" element={<Suspense fallback={<PageFallback />}><Home /></Suspense>}/>
        <Route path="juus" element={<Suspense fallback={<PageFallback />}><JuusHome /></Suspense>} />
        <Route path="nova" element={<Suspense fallback={<PageFallback />}><NovaHome /></Suspense>} />
        <Route path="about" element={<Suspense fallback={<PageFallback />}><About /></Suspense>} />
        {/* <Route path="shop" element={<Suspense fallback={<PageFallback />}><Shop /></Suspense>} /> */}
        <Route path="faqs" element={<Suspense fallback={<PageFallback />}><FAQs /></Suspense>} />
        {/* <Route path="contact" element={<Suspense fallback={<PageFallback />}><Contact /></Suspense>} />  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
