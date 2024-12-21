export default function ContactoPage() {
    return (
      <section>
        <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
        <p className="text-lg mb-8">
          Puedes escribirnos para cotizaciones o consultas.
        </p>
        <form className="bg-gray-100 p-4 rounded shadow">
          <input
            type="text"
            placeholder="Nombre"
            className="block w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Correo Electrónico"
            className="block w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Mensaje"
            className="block w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Enviar
          </button>
        </form>
      </section>
    );
  }
  