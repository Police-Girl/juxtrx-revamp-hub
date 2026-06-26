import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import JsonLd from "@/components/JsonLd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceLTR from "./pages/ServiceLTR";
import ServiceRegulatory from "./pages/ServiceRegulatory";
import ServicePharmacy from "./pages/ServicePharmacy";
import ServiceSystems from "./pages/ServiceSystems";
import Shop from "./pages/Shop";

const App = () => (
  <>
    <JsonLd />
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services/ltr" element={<ServiceLTR />} />
        <Route path="/services/regulatory" element={<ServiceRegulatory />} />
        <Route path="/services/pharmacy" element={<ServicePharmacy />} />
        <Route path="/services/systems" element={<ServiceSystems />} />
        <Route path="/shop" element={<Shop />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;