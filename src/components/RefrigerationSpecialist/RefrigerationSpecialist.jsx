import ImgRefrigerationSspecialist from '../../assets/images/refrigeration-specialist.png';


const RefrigerationSpecialist = () => {
    return (
        <section className='refrigeration-specialist'>
        <h3>Transport society</h3>
        <h1>The refrigeration specialist</h1>
        <div className="refrigeration-specialist-content">
          <div className='rsc-top'>
            <ul className='rsc-left'>
              <li>
                <span>Refrigerated body manufacturer</span>
                <p>Transport society is the only rental company whose business focuses exclusively on cold storage.</p>
              </li>
              <li>
                <span>Refrigerated body manufacturer</span>
                <p>Transport society hires out more than 5,500 new refrigerated vehicles every year.</p>
              </li>
            </ul>
            <img src={ImgRefrigerationSspecialist} alt="" />
            <ul className='rsc-right'>
              <li>
                <span>+500 fridge specialist</span>
                <p>Trained to offer you the best in class service.</p>
              </li>
              <li>
                <span>Cemafroid accredited</span>
                <p>(ATP certifications) Largest test centers network.</p>
              </li>
            </ul>
          </div>
          <div className='rsc-bottom'>
            <span>Refrigerated body manufacturer</span>
            <p>2 manufacturing facilities for the design and manufacture of our refrigerated bodies. Transport society is also an R&D department and a test laboratory to provide tailor-made solutions to the specific needs of our customers and to design the refrigerated véhicles of tomorrow.</p>
          </div>
        </div>
      </section>
    );
}
export default RefrigerationSpecialist;