export default function HomePage() {
  return (
    <section>
      <div className="hero bg-white-200 p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a Cortinas Siglo XXI</h1>
        <p className="text-lg">
          Decoración de interiores y exteriores con estilo y calidad.
        </p>
      </div>
      <div className="gallery bg-white p-8">
        <h2 className="text-2xl font-bold mb-4">Nuestros Trabajos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Mock de imágenes */}
          <div className="bg-gray-white h-40"></div>
          <div className="bg-gray-white h-40"></div>
          <div className="bg-gray-white h-40"></div>
        </div>
      </div>
    </section>
  );
}
