import ImgManInTruck from '../../assets/images/man-in-truck.png';

const About = () => {
    return (
        <section className='about'>
        <div className='about-content'>
          <h2>Working together to ensure health & safety and Food safety by simplifying the cold chain every day.</h2>
          <h3>Transport society,<br/>world leader in refrigeration for hire</h3>
          <p>Transport society is a family business, founded in France in 1907. Through our knowledge and expertise, we have grown to become the market leader in the cold storage sector. We have an extensive fleet of hire vehicles at our disposal, across a large network of branches, covering 22 countries in Europe, Middle-East, Africa and in the USA. Through this coverage, Transport society serves over 15,000 customers, with a continued focus on providing high quality and excellent service.</p>
          <div className='about-number'>
            <h3>Transport society in numbers</h3>
            <ul>
              <li>
                <span>+62,000</span>
                <p>refrigerated vehicles</p>
              </li>
              <li>
                <span>+15 000</span>
                <p>customers</p>
              </li>
              <li>
                <span>+4,500</span>
                <p>employees</p>
              </li>
              <li>
                <span>+300</span>
                <p>sites worldwide</p>
              </li>
              <li>
                <span>€849 M</span>
                <p>turnover in 2021</p>
              </li>
              <li>
                <span>500+</span>
                <p>refrigeration specialists</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='about-img'>
          <img src={ImgManInTruck} alt="Man in truck" />
        </div>
      </section>
    );
}
export default About;