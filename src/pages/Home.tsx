import React from 'react';

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-[--color-avocado-100] text-gray-900 font-sans">
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[--color-avocado-600] animate-pulse">
          🌀 DatosLab
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Laboratorio de datos
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform ease-[--ease-snappy] duration-300">
          <h2 className="text-2xl font-bold text-[--color-avocado-500] mb-2">🟥 Trabajo 1</h2>
          <p>Prueba1</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform ease-[--ease-snappy] duration-300">
          <h2 className="text-2xl font-bold text-[--color-avocado-500] mb-2">🟩 Trabajo 2</h2>
          <p>Prueba 2</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform ease-[--ease-snappy] duration-300">
          <h2 className="text-2xl font-bold text-[--color-avocado-500] mb-2">🟦 Trabajo 3</h2>
          <p>Prueba 3</p>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-16 mb-4">
        Hecho con 💛 para el laboratorio DatosLab{new Date().getFullYear()}
      </footer>
    </main>
  );
};

export default Home;

