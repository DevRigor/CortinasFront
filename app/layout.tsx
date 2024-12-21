import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Cortinas Siglo XXI',
  description: 'Decoración de interiores y exteriores con estilo.',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        {/* Navbar persistente */}
        <header className="bg-blue-600 text-white p-4">
          <nav className="container mx-auto flex justify-between">
            <h1 className="text-xl font-bold">Cortinas Siglo XXI</h1>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:underline">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/productos" className="hover:underline">
                  Productos
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </header>
        {/* Contenido dinámico */}
        <main className="flex-grow container mx-auto p-4">{children}</main>
        {/* Footer persistente */}
        <footer className="bg-gray-800 text-white text-center p-4">
          <p>&copy; 2024 Cortinas Siglo XXI. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
