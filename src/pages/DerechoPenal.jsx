import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Contacto from "../components/Contacto";

function DerechoPenal() {
  return (
    <div>
      <NavBar />
      <section className="bg-gray-100">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-sky-700 md:text-3xl">
              Derecho Penal
            </h2>

            <p className="hidden text-gray-500 sm:mt-4 sm:block text-lg">
              En su sentido objetivo lo define como: conjunto de normas que
              regulan el Derecho Punitivo. El Derecho Penal, es el complejo de
              las normas del derecho positivo destinadas a la definición de los
              delitos y fijación de las sanciones.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-sky-700 md:text-3xl">
              Detenciones
            </h2>
            <p className=" text-gray-500 sm:mt-4 sm:block text-lg">
              Aseoramiento y representación ante autoridades judiciales por la
              detención de una persona, ya sea por orden de aprehensión o en
              flagancia
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-sky-700 md:text-3xl">
              Audiencia inicial
            </h2>
            <p className=" text-gray-500 sm:mt-4 sm:block text-lg">
              Representación en la udiencia inicial, para vigilar la legalidad
              de la detención, la imputación, vinculación a proceso o no y la
              imposición de medidas cautelares.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-sky-700 md:text-3xl">
              Medios Alternos de solucion de conflictos
            </h2>
            <p className=" text-gray-500 sm:mt-4 sm:block text-lg">
              Promoción, asesoramiento y representación en la celebración de
              cualquier medio que genere la terminación del conflicto y la
              conciliación entre las partes.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-sky-700 md:text-3xl">
              Audicnecias intermedias y jucio oral
            </h2>
            <p className=" text-gray-500 sm:mt-4 sm:block text-lg">
              Representación y asesoramiento legal en el desarrollo del proceso,
              hasta la emisión de la sentencia.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-sky-700 md:text-3xl">
              Recursos para modificar sentencia
            </h2>
            <p className=" text-gray-500 sm:mt-4 sm:block text-lg">
              Asesoramiento e imposición de recursos que busquen modificar o
              revocar la decisión emitida en sentencia.
            </p>
          </div>
        </div>
      </section>
      <Contacto />

      <Footer />
    </div>
  );
}

export default DerechoPenal;
