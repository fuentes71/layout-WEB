import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Administrators from '../Components/Administrators/Administrators';
import Clients from '../Components/Clients/Clients';
import Collaborators from '../Components/Collaborators/Collaborators';
import Header from '../Components/Header';
import Home from '../Components/Home';
import Signin from '../Components/User/Signin/Signin';
import User from '../Components/User/User/User';
import UseAuth from '../Components/Hooks/UseAuth';
import Signup from '../Components/User/Signup/Signup';
const Private = ({ Item }) => {
  const { signed } = UseAuth();
  return signed > 0 ? <Item /> : <Signin />;
};
const RoutesApp = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />

          <Route exact path="/" element={<Private Item={Home} />} />
          <Route
            path="/Administrators"
            element={<Private Item={Administrators} />}
          />
          <Route path="/Clients" element={<Private Item={Clients} />} />
          <Route
            path="/Collaborators"
            element={<Private Item={Collaborators} />}
          />
          <Route path="/User" element={<Private Item={User} />} />
          {/* <Route path="*" element={<Signin />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesApp;
