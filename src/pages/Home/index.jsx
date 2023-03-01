import React from 'react';
import { Footer, Navbar } from '../../components';
import AllEvents from '../../components/AllEvents';
import './Home.css';

const Home = () => (
  <div className="home">
    <Navbar />
    <AllEvents />
    <Footer />
  </div>
);

export default Home;
