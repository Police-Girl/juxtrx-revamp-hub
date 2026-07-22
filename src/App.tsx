import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import JsonLd from "@/components/JsonLd";
import CursorGlow from "@/components/CursorGlow";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceRegulatory from "./pages/ServiceRegulatory";
import ServiceSystems from "./pages/ServiceSystems";
import ServiceBrand from "./pages/ServiceBrand";
import ServiceCreative from "./pages/ServiceCreative";
import ServiceTrade from "./pages/ServiceTrade";
import ServicePeople from "./pages/ServicePeople";
import AboutPage from "./pages/AboutPage";
import Partners from "./pages/Partners";
import Shop from "./pages/Shop";

const App = () => (
  <>
    <CursorGlow />
    <JsonLd />
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services/regulatory" element={<ServiceRegulatory />} />
        <Route path="/services/systems" element={<ServiceSystems />} />
        <Route path="/services/brand" element={<ServiceBrand />} />
        <Route path="/services/creative" element={<ServiceCreative />} />
        <Route path="/services/trade" element={<ServiceTrade />} />
        <Route path="/services/people" element={<ServicePeople />} />
        <Route path="/partners" element={<Partners />} />
        {/* legacy redirects */}
        <Route path="/services/ltr" element={<ServiceTrade />} />
        <Route path="/services/pharmacy" element={<ServiceSystems />} />
        <Route path="/shop" element={<Shop />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
