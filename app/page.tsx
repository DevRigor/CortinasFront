import Link from "next/link";

export default function HomePage() {
  return (
    <section className="grid grid-cols-1 gap-8">
      {/* Sección Hero */}
      <div className="hero bg-white-200 p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Bienvenido a Cortinas Siglo XXI
        </h1>
        <p className="text-lg">
          Decoración de interiores y exteriores con estilo y calidad.
        </p>
      </div>

      {/* Sección ¿Quiénes Somos? */}
      <div className="gallery bg-white p-8">
        <h2 className="text-2xl font-bold mb-4">¿Quiénes Somos?</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>

      {/* Sección Nuestros Trabajos */}
      <div className="gallery bg-white p-8">
        <h2 className="text-2xl font-bold mb-4">Nuestros Trabajos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Imágenes */}
          <div className="relative bg-gray-200 aspect-w-16 aspect-h-9">
            <img
              src="/assets/test2.jpeg"
              alt="Trabajo 1"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative bg-gray-200 aspect-w-16 aspect-h-9">
            <img
              src="/assets/test1.jpeg"
              alt="Trabajo 2"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative bg-gray-200 aspect-w-16 aspect-h-9">
            <img
              src="/assets/test3.jpeg"
              alt="Trabajo 3"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Sección Contacto */}
      <div className="contact bg-white p-8 text-center text-black">
        <h2 className="text-2xl font-bold mb-4">¿Quieres Contactarnos?</h2>
        <p className="mb-4">
          Estamos aquí para ayudarte. Haz clic en el botón de abajo para
          contactarnos.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-700 text-black font-semibold px-6 py-2 rounded hover:bg-blue-800"
        >
          Ir a Contacto
        </Link>
      </div>
    </section>
  );
}
