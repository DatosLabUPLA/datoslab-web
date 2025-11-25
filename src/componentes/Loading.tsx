import React from 'react';

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = "Cargando..." }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[var(--customOrange)] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-500 font-medium">{message}</p>
      </div>
    </div>
  );
};

export default Loading;
