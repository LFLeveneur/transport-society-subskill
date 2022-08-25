import LogoTruck from '../../assets/images/logo-truck.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={LogoTruck} alt="logo truck" />
                    <span>Transport<br/>society</span>
                </div>
                <p>
                    *Les informations que nous collections via ce formulaire font l’objet d’un traitement informatique dont la finalité est de pouvoir répondre à votre demande d'information.
                    <br /><br />
                    Les destinataires des données sont les services marketing et commercial du groupe Transport society
                    Conformément à la loi du 6 janvier 1978 relative à l'infromatique, aux fichiers et aux libertés modifiée par la loi du 20 juin 2018 et au Règlement de l'Union européenne n°2016/679 relatif à la protection des personnes physiques à l'égard du traitement des données à caractère personnel et à la libre circulation des données (RGPD), vous disposez d'un droit d'accès, de rectification, de limitation, d'opposition, de portabilité, de limitation et d'effacement des informations qui vous concernent - en envoyant un courrier à dpo@transportsociety.com accompagné d'une copie d'une pièce d'identité valide.
                    <br /><br />
                    En soumettant ce formulaire, vous acceptez notre politique de confidentialité. 
                </p>
            </div>
            <div className="footer-policy">
                <ul>
                    <li><a href='#LegalNotice'> Legal notice</a></li>
                    <li><a href='#PrivacyPolicy'>Privacy policy</a></li>
                    <li><a href='#TransportSociety'>© 2022 Transport society</a></li>
                </ul>
            </div>
        </footer>
    );
}
export default Footer;