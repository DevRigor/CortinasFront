export default function ProductosPage() {
    return (
      <section>
        <h1 className="text-4xl font-bold mb-4">Nuestros Productos</h1>
        <p className="text-lg mb-8">Explora nuestra gama de productos de interior y exterior.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-cyan-300 p-4 shadow">
            <h2 className="text-xl font-bold mb-2">Productos de Interior</h2>
            <p>Cortinas blackout, romanas, paneles japoneses.</p>
          </div>
          <div className="bg-cyan-300 p-4 shadow">
            <h2 className="text-xl font-bold mb-2">Productos de Exterior</h2>
            <p>Persianas enrollables, cortinas de PVC, toldos.</p>
          </div>
        </div>
      </section>
    );
  }
  