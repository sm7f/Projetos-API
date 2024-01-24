import React from 'react';
import Link from 'next/link';
import Navigation from './components/Navigation';
import Nav from "./components/Nav";
import SideBar from './components/SideBar';



const Dashboard = () => {
  return (
    <section>
      <div>
        <Navigation></Navigation>
        <Nav></Nav>
        <SideBar></SideBar>
      </div>
    </section>
  );
};

export default Dashboard;
