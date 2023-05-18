import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import logo from '/logo-w.png';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-gray-900 text-white rounded-xl mt-6">
      <div>
        <img src={logo} alt="Logo" className="h-12 mb-4" />
        <p>&copy; 2023 AlimamaCarZone. All rights reserved.</p>
        <div className="flex flex-row items-center">
          <h3 className="text-lg font-semibold mr-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
