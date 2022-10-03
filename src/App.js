import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Administrators from './Components/Administrators/Administrators';
import Clients from './Components/Clients/Clients';
import Collaborators from './Components/Collaborators/Collaborators';
import User from './Components/User/User';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Administrators" element={<Administrators />} />
          <Route path="/Clients" element={<Clients />} />
          <Route path="/Collaborators" element={<Collaborators />} />
          <Route path="/User" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
