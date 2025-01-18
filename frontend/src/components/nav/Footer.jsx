import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex justify-between items-center px-8">
        <p className="text-sm">&copy; 2024 GearGrid</p>
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-white text-xl hover:text-gray-400" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-white text-xl hover:text-gray-400" />
          </a>
        </div>
        <p className="text-sm">Powered by Usman</p>
      </div>
    </footer>
  );
};

export default Footer;
