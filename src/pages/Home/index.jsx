import React from 'react';
import { Navbar } from '../../components';
import AllEvents from '../../components/AllEvents';
import './Home.css';

const Home = () => (
  <div className="home">
    <Navbar />
    <AllEvents />
  </div>
);

export default Home;
