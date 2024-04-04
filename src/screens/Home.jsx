import * as React from "react";

import Navbar from '../components/navbar';
import About from '../components/about'
import Menu from '../components/menu'
import Footer from '../components/footer'

const Home = () => {
    return (
        <div className="flex flex-col bg-black overflow-y-hidden">
          <Navbar/>
          <About/>
          <Menu/>
          <Footer/>
        </div>
    );
}

export default Home;
