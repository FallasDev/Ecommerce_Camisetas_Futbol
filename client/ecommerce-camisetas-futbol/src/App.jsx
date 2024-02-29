import './App.css';
import ContextApp from './ContextApp.jsx';
import Copyright from './components/Copyright.jsx';
import DiscountCoupons from './components/DiscountCoupons.jsx';
import Footer from './components/Footer.jsx';
import Header from "./components/Header.jsx";
import HeroBanner from './components/HeroBanner.jsx';
import MainShirts from './components/MainShirts.jsx';

function App() {


  return (
    <>
      <ContextApp>
        <Header/>
        <main>
          <HeroBanner/>
          <MainShirts/>
          <DiscountCoupons/>
        </main>
        <Footer/>
        <Copyright/>
      </ContextApp>
    </>
  )
}

export default App
