export default function ProductosPage() {
    return (
      <section>
        <h1 className="text-4xl font-bold mb-4">Nuestros Productos</h1>
        <p className="text-lg mb-8">Explora nuestra gama de productos de interior y exterior.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 shadow">
            <h2 className="text-xl font-bold mb-2">Productos de Interior</h2>
            <p>Cortinas blackout, romanas, paneles japoneses.</p>
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
          <div className="p-4 shadow">
            <h2 className="text-xl font-bold mb-2">Productos de Exterior</h2>
            <p>Persianas enrollables, cortinas de PVC, toldos.</p>
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
        </div>
      </section>
    );
  }
  