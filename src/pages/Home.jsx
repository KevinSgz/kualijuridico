import Banner from "../components/Banner";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Servicios from "../components/Servicios";

function home() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Servicios />
      <Contacto />
      <Footer />
    </div>
  );
}

export default home;
