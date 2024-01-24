import React from 'react';
import Link from 'next/link';
import Navigation from './components/Navigation';
import Nav from "./components/Nav";
import FormSigin from './components/FormSG';



const Sigin = () => {
  return (
    <section>
      <div>
        <Nav>
            <Navigation></Navigation>
            <FormSigin></FormSigin>
        </Nav>
      </div>
    </section>
  );
};

export default Sigin;
