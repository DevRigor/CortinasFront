import Navbar from './components/Navbar';
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
        <Navbar />
        <main className="flex-grow container mx-auto p-4">{children}</main>
        <footer className="bg-gray-800 text-white text-center p-4">
          <p>&copy; 2024 Cortinas Siglo XXI. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
