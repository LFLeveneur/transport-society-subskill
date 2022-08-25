import { useState } from 'react'

import {VscListSelection} from 'react-icons/vsc'

import LogoTruck from '../../assets/images/logo-truck.png'
import FlagSouthAfrica from '../../assets/images/flag-south-africa.png'

const Navigator = ({navRef}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="navigator" ref={navRef}>
            <div className="navigator-logo">
                <img src={LogoTruck} alt="logo truck" />
                <span>Transport<br/>society</span>
            </div>
            <div className="navigator-toogle" onClick={() => setIsOpen(!isOpen)}>
                <VscListSelection />
            </div>
            <nav className={isOpen ? 'navigator-nav open' : 'navigator-nav'}>
                <ul className="navigator-list">
                    <li className="navigator-item">
                        <a href="#vehicules">Our vehicules</a>
                    </li>
                    <li className="navigator-item">
                        <a href="#about">About transport society</a>
                    </li>
                    <li className="navigator-item">
                        <a href="#refrigeration-specialist">The refrigeration specialist</a>
                    </li>
                    <li className="navigator-item">
                        <a href="#service">Full service!</a>
                    </li>
                    <li className="navigator-item">
                        <a href="#agencies">Our agencies</a>
                    </li>
                    <li className="navigator-country">
                        <img src={FlagSouthAfrica} alt="flag south africa" className="navigator-flag" />
                        <select name="pick-country" className="navigator-select">
                            <option value="">South Africa</option>
                            <option value="">South Africa</option>
                            <option value="">South Africa</option>
                        </select>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Navigator;