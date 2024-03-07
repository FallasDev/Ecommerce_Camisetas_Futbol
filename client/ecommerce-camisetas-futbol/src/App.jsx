import { useContext } from 'react';
import './App.css';
import ContextApp, { context } from './ContextApp.jsx';
import Copyright from './components/Copyright.jsx';
import DiscountCoupons from './components/DiscountCoupons.jsx';
import Footer from './components/Footer.jsx';
import Header from "./components/Header.jsx";
import HeroBanner from './components/HeroBanner.jsx';
import MainShirts from './components/MainShirts.jsx';

function App() {

  const { isBuyCar } = useContext(context);

  return (
    <>
        <Header/>
        <main className={isBuyCar ? "buy-car-open" : undefined}>
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
