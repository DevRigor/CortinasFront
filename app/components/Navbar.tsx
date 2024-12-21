"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary text-white relative">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Cortinas Siglo XXI
        </Link>

        {/* Botón Hamburguesa */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12" // Ícono "Cerrar"
                  : "M4 6h16M4 12h16M4 18h16" // Ícono "Hamburguesa"
              }
            />
          </svg>
        </button>

        {/* Menú de Navegación */}
        <ul
          className={`absolute left-0 top-full w-full bg-primary md:static md:w-auto md:flex md:space-x-6 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              href="/"
              className="block py-2 px-4 md:py-0 hover:text-secondary"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="block py-2 px-4 md:py-0 hover:text-secondary"
            >
              Productos
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block py-2 px-4 md:py-0 hover:text-secondary"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
