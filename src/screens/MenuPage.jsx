import Navbar2 from '../components/navbar2'
import Menu from '../components/menu'
import Footer from '../components/footer'

const MenuPage = () =>{
  return (
    <div className="flex flex-col bg-white">
      <Navbar2/>
      <Menu/>
      <Footer/>
    </div>
  );
}

export default MenuPage