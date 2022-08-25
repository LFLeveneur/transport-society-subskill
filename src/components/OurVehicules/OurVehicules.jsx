import CardTruck from '../CardTruck/CardTruck';
import ImgUDTrucksCronerPKE250H30 from '../../assets/images/our-vehicules/ud-trucks-croner-pke250-h30.png';
import ImgIsuzuFTR850 from '../../assets/images/our-vehicules/isuzu-ftr-850.png';
import ImgIsuzuNQR500 from '../../assets/images/our-vehicules/isuzu-nqr-500.png';
import ImgToyotaDyna from '../../assets/images/our-vehicules/toyota-dyna.png';
import ImgFiatDobloFourgom from '../../assets/images/our-vehicules/fiat-doblo-fourgon.png';

const OurVehicules = () => {
    return (
        <section className='our-vehicules'>
        <h2>Our current range of vehicules</h2>
        <div className='our-vehicules-content'>
          <CardTruck img={ImgUDTrucksCronerPKE250H30} text={'UD Trucks Croner PKE250 H30'}/>
          <CardTruck img={ImgIsuzuFTR850} text={'Isuzu FTR 850'}/>
          <CardTruck img={ImgIsuzuNQR500} text={'Isuzu NQR 500'}/>
          <CardTruck img={ImgToyotaDyna} text={'Toyota Dyna'}/>
          <CardTruck img={ImgFiatDobloFourgom} text={'Fiat Doblo fourgon'}/>
        </div>
      </section>
    );
}
export default OurVehicules;