import React from 'react';

const BotonArriba: React.FC = () => (
  <button
    onClick={(e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }}
    className="fixed bottom-4 right-4 bg-transparent border border-white text-white hover:bg-primary hover:text-black transition-all backdrop-blur-lg p-2 rounded-lg"
    aria-label="Volver al inicio"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-6 w-6 fill-current"
    >
      <path stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-7 7m7-7l7 7" />
    </svg>
  </button>
);

export default BotonArriba;