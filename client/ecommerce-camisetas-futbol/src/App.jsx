import './App.css';
import Copyright from './components/Copyright.jsx';
import DiscountCoupons from './components/DiscountCoupons.jsx';
import Footer from './components/Footer.jsx';
import Header from "./components/Header.jsx";
import HeroBanner from './components/HeroBanner.jsx';
import MainShirts from './components/MainShirts.jsx';

function App() {


  return (
    <>
      <Header/>
      <main>
        <HeroBanner/>
        <MainShirts/>
        <DiscountCoupons/>
      </main>
      <Footer/>
      <Copyright/>
    </>
  )
}

export default App
