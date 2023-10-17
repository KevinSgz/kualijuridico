import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function RepresentacionConsultoria() {
  return (
    <div>
      <NavBar />
      <section className="bg-gray-100">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-sky-700 md:text-3xl">
              Representación y Consultoria
            </h2>

            <p className="hidden text-gray-500 sm:mt-4 sm:block text-lg">
              Asesoría y Consultoría prestan sus servicios con el objetivo de
              identificar y evaluar las nuevas oportunidades de negocio para la
              empresa.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-sky-700 md:text-3xl">
              Negocios
            </h2>
            <p className=" text-gray-500 sm:mt-4 sm:block text-lg">
              Consultoria, asesoria y representación en todo tipo de negocios,
              así como revisión y elaboración de contratos, convenios y de
              documentación en general.
              <ul>
                <li>- Compra - ventas</li>
                <li>- Arrendamientos</li>
                <li>- Préstamos</li>
              </ul>
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-sky-700 md:text-3xl">
              Representacion en juicios
            </h2>
            <p className=" text-gray-500 sm:mt-4 sm:block text-lg">
              Asesoramiento y defensoria juridica en juicios civiles,
              familiares, mercantiles, laborales, fiscales, administrativos,
              etc. Incluyendo aquellos que se encuentran en curso.
              <ul>
                <li>- Presentación de demandas</li>
                <li>- Contestación de demandas</li>
                <li>- Desahogo de audiencias</li>
                <li>- Interposición de recursos</li>
                <li>- Presentación de promociones</li>
              </ul>
            </p>
          </div>
        </div>
      </section>
      <Contacto />
      <Footer />
    </div>
  );
}

export default RepresentacionConsultoria;
