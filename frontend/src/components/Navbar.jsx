import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
  Twitter,
} from "lucide-react";
import Register from "../pages/Register"; // Import the Register component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [isRegisterOpen, setIsRegisterOpen] = useState(false); // State for modal

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "SRC", to: "/src" },
    { name: "Event", to: "/event" },
    { name: "Our Initiative", to: "/initiative" },
    { name: "Contribute", to: "/contribute" },
  ];

  const socialIcons = [
    { Icon: Facebook, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: Youtube, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Twitter, href: "#" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/src/assets/logo.png"
              alt="Reiwa Meta Logo"
              className="h-8 w-auto mr-2"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Nav Links */}
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => setActiveItem(item.name)}
                  className={`text-sm hover:text-yellow-500 transition-colors duration-300 ${activeItem === item.name ? "text-yellow-500" : "text-gray-700"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              {socialIcons.map(({ Icon }, index) => (
                <button
                  key={index}
                  className="text-gray-600 hover:text-yellow-500 transition-colors duration-300"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>

            {/* Register Button */}
            <button
              onClick={() => setIsRegisterOpen(true)}
              className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition-colors duration-300 text-sm"
            >
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-yellow-500 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full px-4 py-6">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => {
                  setActiveItem(item.name);
                  setIsOpen(false); // Close menu on selection
                }}
                className={`text-sm hover:text-yellow-500 transition-colors duration-300 ${activeItem === item.name ? "text-yellow-500" : "text-gray-700"
                  }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Social Icons in Mobile View */}
            <div className="flex justify-center space-x-4 mt-4">
              {socialIcons.map(({ Icon }, index) => (
                <button
                  key={index}
                  className="text-gray-600 hover:text-yellow-500 transition-colors duration-300"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>

            {/* Register Button */}
            <button
              onClick={() => {
                setIsRegisterOpen(true);
                setIsOpen(false); // Close menu when opening Register modal
              }}
              className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition-colors duration-300 text-sm w-full"
            >
              Register
            </button>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {isRegisterOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-200 opacity-95">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl max-h-screen overflow-y-auto relative">
            {/* Register Component */}
            <Register onClose={() => setIsRegisterOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
