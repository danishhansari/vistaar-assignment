import footerLogo from "../assets/footer-logo.png";
import instagramIcon from "../assets/instagram.png";
import mailIcon from "../assets/mail.png";
import markerIcon from "../assets/marker.png";
const Footer = () => {
  return (
    <>
      <div className="bg-[#0E0E0E] h-[249px] text-white">

        <div className="flex justify-between items-start">
          <img src={footerLogo} className="w-[268px]" alt="Logo" />

          <ul>
            <li>
              <img src={mailIcon} alt="Mail" className="inline-block" />
              <span>contact@vistaardigital.com</span>
            </li>
            <li>
              <img
                src={instagramIcon}
                alt="Instagram"
                className="inline-block"
              />
              <span>vistaardigital</span>
            </li>
          </ul>

          <div className="flex items-start gap-2">
            <img src={markerIcon} className="inline-block mt-2" alt="Marker" />
            <p className="w-[300px] leading-loose">
              Paras Business Center, Unit 602, Kasturbha Cross Rd Number 1, Near
              Kasturbha Police Station, Borivali East, Mumbai 400066, MH, India.
            </p>
          </div>

        </div>
        
        <hr />
        <p className="text-center">
          2018 &copy; Copyright Vistaar Digital. All rights Reserved. Platform
          By Vistaardigital
        </p>
      </div>
    </>
  );
};

export default Footer;
