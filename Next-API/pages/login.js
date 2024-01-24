import React from 'react';
import Link from 'next/link';
import Navigation from './components/Navigation';
import Nav from "./components/Nav";
import FormLogin from './components/FormLG';




const Login = () => {
  return (
    <section>
      <div>
        <Navigation></Navigation>
        <Nav></Nav>
        <FormLogin></FormLogin>
      </div>
    </section>
  );
};

export default Login;
