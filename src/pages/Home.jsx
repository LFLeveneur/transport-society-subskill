import {useState, useRef, useEffect} from 'react';

import Navigator from '../components/Navigator/Navigator';
import Maps from '../components/Maps/Maps';

import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner/Banner';
import OurVehicules from '../components/OurVehicules/OurVehicules';
import About from '../components/About/About';
import RefrigerationSpecialist from '../components/RefrigerationSpecialist/RefrigerationSpecialist';
import FullService from '../components/FullService/FullService';
import Contact from '../components/Contact/Contact';

function Home() {
  const navRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  
  useEffect(() => {
    setHeaderHeight(navRef.current.offsetHeight);
  } , [navRef]);

  return (
    <div className='home'>
      <Navigator navRef={navRef} />
      <Banner headerHeight={headerHeight} />
      <OurVehicules />
      <About />
      <RefrigerationSpecialist />
      <FullService />
      <Contact />
      <Maps />
      <Footer />
    </div>
  );
}
export default Home;