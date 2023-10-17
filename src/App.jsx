import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./pages/Contacto";
import Servicios from "./pages/Servicios";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import DerechoPenal from "./pages/DerechoPenal";
import DerechoCorporativo from "./pages/DerechoCorporativo";
import RepresentacionConsultoria from "./pages/RepresentacionConsultoria";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="servicios" element={<Servicios />} />
        <Route path="derechopenal" element={<DerechoPenal />} />
        <Route path="derechocorporativo" element={<DerechoCorporativo />} />
        <Route
          path="representacionyconsultoria"
          element={<RepresentacionConsultoria />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
