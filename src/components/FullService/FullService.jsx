import ImgMenWithTablet from '../../assets/images/men-with-tablet.png'

const FullService = () => {
    return (
        <section className='full-service'>
        <div className="full-service-img">
          <img src={ImgMenWithTablet} alt=""/>
        </div>
        <div className="full-service-content">
          <h2>Full service !</h2>
          <ul>
            <li>
              <span>24/7 support</span>
              <p>Round-the-clock assistance, every day, 365 days a year. Provision of a replacement refrigerated vehicle in the event of a breakdown.</p>
            </li>
            <li>
              <span>Maintenance</span>
              <p>We carry out legally required tests and preventive maintenance on the vehicles and their equipments.</p>
            </li>
            <li>
              <span>Spare parts</span>
              <p>Provision of tyres, fluids and lubricants.</p>
            </li>
            <li>
              <span>Repairs</span>
              <p>Repairs to the bodywork and paintwork, as well as all mechanical repairs.</p>
            </li>
            <li>
              <span>Administrative support</span>
              <p>We take care of all administrative procedures: license renewal, test certificates, legal paperwork.</p>
            </li>
            <li>
              <span>Customisation</span>
              <p>Your vehicle can be customized with your own livery.</p>
            </li>
          </ul>
          <button>Download our brochure</button>
        </div>
      </section>
    );
}
export default FullService;