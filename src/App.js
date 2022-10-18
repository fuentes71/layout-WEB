import React from 'react';
import './App.css';
import RoutesApp from './Routes/RoutesApp';
import { AuthProvider } from './Components/contexts/auth';
function App() {
  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  );
}

export default App;
