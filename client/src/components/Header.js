import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-blue-900 text-white">
      <h1 className="text-2xl font-bold">The NextEra Solution</h1>
      <nav className="space-x-4">
        <a href="#services" className="hover:text-green-400">Services</a>
        <a href="#contact" className="hover:text-green-400">Contact</a>
      </nav>
    </header>
  );
}
