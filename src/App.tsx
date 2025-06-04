import React from 'react';
import Navbar from './componentes/Navbar';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;

