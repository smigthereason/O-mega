import { Link } from 'react-router-dom';
import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import Logo from '../Assets/logo-no-background.png';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
// import { FaRegCopyright } from "react-icons/fa";


const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer className="text-white bg-gray-700 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 xl:gap-10 2xl:px-12 wrapper">
        <div className="footer-col-1 flex items-start">
          <Link
            to="/"
            className="text-xl md:text-lg font-semibold text-rose-400 hover:text-white duration-300"
          >
            <img src={Logo} alt="Logo" className="h-12 md:h-10 w-auto" />
          </Link>
        </div>
        <div className="footer-col-2 flex flex-col items-start">
          <p className="follow-text uppercase tracking-wider text-gray-900">
            Social Links
          </p>
          <div className="social-icons flex gap-4 p-3 justify-center">
            <FaFacebookSquare className="text-rose-100 h-8 w-8" />
            <FaInstagram className="text-rose-100 h-8 w-8" />
            <FaPinterest className="text-rose-100 h-8 w-8" />
            <FaXTwitter className="text-rose-100 h-8 w-8" />
          </div>
        </div>
        <div className="footer-col-3 flex flex-col items-start">
          <p className="uppercase font-medium text-rose-500 tracking-wider">
            Useful Links
          </p>
          <div className="nav-link mt-3 gap-4 flex flex-col">
            <Link to="/" className="footer-nav-links">
              Home
            </Link>
            <Link to="/products" className="footer-nav-links">
              Products
            </Link>
            <Link to="/feedback" className="footer-nav-links">
              Feedback
            </Link>
            <Link to="/contact" className="footer-nav-links">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="footer-col-4 flex flex-col items-start gap-3">
          <p className="uppercase tracking-wider text-gray-900">
            Need more information?
          </p>
          <button className="footer-btn bg-rose-400 py-3 px-5 rounded-full uppercase text-sm font-medium hover:text-rose-300 hover:bg-rose-50 duration-300">
            + New Message
          </button>
          <p className="font-medium text-base">contact@o-mega.com</p>
        </div>
      </div>

      <p className="copyright border-t border-gray-500/40 pt-6 text-gray-900 text-center uppercase wrapper">
        &copy; {new Date().getFullYear()} OMEGA.
      </p>
    </footer>
  );
};

export default Footer;
