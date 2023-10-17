import { NavLink } from "react-router-dom";

function Servicios() {
  return (
    <section className="bg-gray-100 text-sky-700">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Servicios Kuali Juridico
          </h2>

          <p className="mt-4 text-gray-700">
            Rompimos los paradigmas del despacho tradicional, para ofrecer un
            servicio de nueva generación, tomando en cuenta tus necesidades y
            las de tu empresa.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <NavLink
            to="/derechopenal"
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-sky-500/10 hover:shadow-sky-500/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-sky-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-sky-700">
              Derecho Penal
            </h2>

            <p className="mt-1 text-sm text-gray-700">
              <ul>
                <li>- Detenciones</li>
                <li>- Audiencia inicial</li>
                <li>- Medios alternos de solución de conflictos</li>
                <li>- Juicio oral - Audiencias intermedias</li>
                <li>- Recursos contra sentencias</li>
              </ul>
            </p>
          </NavLink>

          <NavLink
            to="/derechocorporativo"
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-sky-500/10 hover:shadow-sky-500/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-sky-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-sky-700">
              Derecho corporativo
            </h2>

            <p className="mt-1 text-sm text-gray-700">
              <ul>
                <li>- Actas constitutivas</li>
                <li>- Registro de marca</li>
                <li>- Elaboración de documentos administrativos</li>
                <li>- Tramitación de permisos y licencias</li>
                <li>- Cumplimiento de reglamentación</li>
                <li>- Asambleas de socios</li>
                <li>- Capacitación departamiento legal y recursos humanos</li>
              </ul>
            </p>
          </NavLink>

          <NavLink
            to="/representacionyconsultoria"
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-sky-500/10 hover:shadow-sky-500/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-sky-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-sky-700">
              Representación y Consultoria
            </h2>

            <p className="mt-1 text-sm text-gray-700">
              <ul>
                <li>- Asesoria de negocios</li>
                <li>- representación en juicio</li>
                <li>- Estudio de proyectos empresariales</li>
              </ul>
            </p>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
