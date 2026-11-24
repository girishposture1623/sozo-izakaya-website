import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import SiteLayout from "./layouts/SiteLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import MenuPage from "./pages/MenuPage";
import Reservations from "./pages/Reservations";
import GalleryPage from "./pages/GalleryPage";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
