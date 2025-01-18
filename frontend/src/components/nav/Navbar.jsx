// Navbar.jsx
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import BookingContext from "../../BookingContext";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isLogin, setLogin } = useContext(BookingContext); // State to track user login status

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the mobile menu when clicking away from it
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Function to handle scrolling and change the navbar background color
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add scroll event listener when component mounts
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 py-[10px] w-full z-50 transition-colors ${
        isScrolled ? "bg-gray-800" : "bg-gray-900"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-white text-xl font-bold">
          <img src={logo} className="w-[100px] h-[50px]" alt="" />
        </Link>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden lg:flex lg:items-center lg:w-auto">
          <div className="text-xl lg:flex-grow">
            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-[48px] cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-[48px] cursor-pointer"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-[48px] cursor-pointer"
            >
              Contact
            </Link>
            <Link
              to="/services"
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-[48px] cursor-pointer"
            >
              Our Services
            </Link>
          </div>

          {/* User Icon or Login Button */}
          <div>
            {/* Check if user is logged in */}
            {isLogin ? (
              <Link to="/profile" className="text-white">
                <FaUser />
              </Link>
            ) : (
              <Link to="/login" className="text-white text-xl cursor-pointer">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="lg:hidden absolute top-0 left-0 w-full h-full bg-gray-800 opacity-90"
          onClick={closeMenu}
        ></div>
      )}
      <div
        className={`lg:hidden fixed top-0 left-0 w-56 h-full bg-gray-800 z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center px-4 py-6">
          <Link to="/" className="text-white text-xl font-bold">
            Your Logo
          </Link>
          <button onClick={toggleMenu} className="text-white">
            <FaTimes />
          </button>
        </div>
        <div className="text-white text-sm">
          <Link to="/" className="block py-2">
            Home
          </Link>
          <Link to="/about" className="block py-2">
            About
          </Link>
          <Link to="/contact" className="block py-2">
            Contact
          </Link>
          <Link to="/services" className="block py-2">
            Our Services
          </Link>
          <div>
            {/* Check if user is logged in */}
            {isLogin ? (
              <Link to="/profile" className="text-white">
                <FaUser />
              </Link>
            ) : (
              <Link to="/login" className="text-white text-xl cursor-pointer">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
