import ImgMultiTruck from '../../assets/images/milti-truck.png'
import FormRadio from '../FormRadio/FormRadio';
import FormInput from '../FormInput/FormInput'

const Contact = () => {
    return (
        <section className='contact'>
        <div className="contact-content-left">
          <h2>Contact us</h2>
          <img src={ImgMultiTruck} alt="" />
          <span>For more information, please don’t hesitate to get in touch with William :</span>
          <p>William Racinne – Country Director</p>
          <p>Telephone: <a href="tel:+27 72 134 1225">++27 72 134 1225</a></p>
          <p>Email : <a href="mailto:wracinne@transportsociety.co.za">wracinne@transportsociety.co.za</a></p>
          <p>Twitter : <a href="https://twitter.com/WilliamRacinne">@WilliamRacinne</a></p>
        </div>
        <div className="contact-content-right">
          <FormRadio title={'profile'} option1={'Consumer'} option2={'Professionnal'}/>
          <FormRadio title={'title'} option1={'M'} option2={'Mrs'}/>
          <FormInput title={'Forename'}/>
          <FormInput title={'Company name'}/>
          <FormInput title={'Surmame'}/>
          <FormInput title={'Job title'}/>
          <FormInput title={'Email adress'} id={'form-mail'}/>
          <FormInput title={'Telephone'}/>
          <div className="form-select">
            <span>Country</span>
            <select name="form-contry" id="">
              <option value="">Select country</option>
              <option value="">Afghanistan</option>
            </select>
          </div>
          <div className="form-message">
            <span>Message</span>
            <textarea name="form-message" placeholder="Your message"></textarea>
          </div>
          <label className='condition'>
            <input type="checkbox" />
            <p>Check this box if, in addition to responding to your request for information, you wish to receive other communications from us*.</p>
          </label>
          <button style={{backgroundColor: '#00A732', color: '#fff'}}>Send</button>
        </div>
      </section>
    )
}
export default Contact;