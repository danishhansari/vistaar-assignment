import footerLogo from "../assets/footer-logo.png";
import instagramIcon from "../assets/instagram.png";
import mailIcon from "../assets/mail.png";
import markerIcon from "../assets/marker.png";
const Footer = () => {
  return (
    <>
      <div className="bg-[#0E0E0E] h-[209px] text-white mx-auto">
        <div className="flex justify-between items-start w-full px-16 mx-auto">
          <img src={footerLogo} className="w-[250px]" alt="Logo" />

          <ul className="mt-12">
            <li>
              <img src={mailIcon} alt="Mail" className="inline-block mr-2" />
              <span className="leading-relaxed">
                contact@vistaardigital.com
              </span>
            </li>
            <li>
              <img
                src={instagramIcon}
                alt="Instagram"
                className="inline-block mr-2"
              />
              <span className="leading-relaxed tracking-wider">vistaardigital</span>
            </li>
          </ul>

          <div className="flex items-start gap-2 mt-12">
            <img src={markerIcon} className="inline-block mt-2" alt="Marker" />
            <p className="w-[300px] leading-relaxed">
              Paras Business Center, Unit 602, Kasturbha Cross Rd Number 1, Near
              Kasturbha Police Station, Borivali East, Mumbai 400066, MH, India.
            </p>
          </div>
        </div>
      </div>

      <hr />
      <div className="bg-[#0E0E0E] text-white py-[20px]">
        <p className="text-center">
          2018 &copy; Copyright Vistaar Digital. All rights Reserved. Platform
          By Vistaardigital
        </p>
      </div>
    </>
  );
};

export default Footer;
