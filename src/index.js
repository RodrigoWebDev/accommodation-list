import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { PageProvider } from "./context/pageContext"

//Pages
import Home from "./pages/home";
import Product from "./pages/product";
import Favorites from "./pages/favorites";

const root = createRoot(document.getElementById("app"));

root.render(
  <PageProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </BrowserRouter>
  </PageProvider>
);