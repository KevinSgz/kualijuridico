import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function DerechoCorporativo() {
  return (
    <div>
      <NavBar />
      <section className="bg-gray-100">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-sky-700 md:text-3xl">
              Derecho Corporativo
            </h2>

            <p className="hidden text-gray-500 sm:mt-4 sm:block text-lg">
              El derecho corporativo estudia las normas relativas a la empresa,
              entendiendo a esta última como una unidad de organización dedicada
              a actividades industriales, mercantiles o de prestación de
              servicios con fines lucrativos.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-sky-700 md:text-3xl">
              Viabilidad y registro de marca
            </h2>
            <p className=" text-gray-500 sm:mt-4 sm:block text-lg">
              Estudio y orentación en la constitución de una marc, así como el
              eventual registro y trámite requerido para la legalizaión de la
              misma.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-sky-700 md:text-3xl">
              Documentación administrativa
            </h2>
            <p className=" text-gray-500 sm:mt-4 sm:block text-lg">
              Elaboración conforme a los requerimientos legales y
              administrativos de la documentación y papeleria que se requiere
              para las actividades cotidianas de cada empresa.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-sky-700 md:text-3xl">
              Licencias y permiso
            </h2>
            <p className=" text-gray-500 sm:mt-4 sm:block text-lg">
              Gestión y cumplimiento administrativo de la legislación aplicable
              al tipo de negocio a fin de obtener las licencias y permisos
              correspondientes para el adecuado funcionamiento del mismo.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-sky-700 md:text-3xl">
              Cumplimiento de NOMS
            </h2>
            <p className=" text-gray-500 sm:mt-4 sm:block text-lg">
              Capacitación para la correcta aplicación de las NOM
              correspondientes al negocio.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-sky-700 md:text-3xl">
              Asambleas
            </h2>
            <p className=" text-gray-500 sm:mt-4 sm:block text-lg">
              Protolización y legalización de las asambleas, así como de los
              acuerdos que de ellas emanen.
            </p>
          </div>
        </div>
      </section>
      <Contacto />
      <Footer />
    </div>
  );
}

export default DerechoCorporativo;
