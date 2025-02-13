import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <img src="/src/assets/logo.png"
            alt="Reiwametta Foundation"
            className='w-44 h-full' />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* USEFUL Section */}
          <div>
            <h2 className="font-bold mb-4">USEFUL</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300">Overall Best Web Hosts</a></li>
              <li><a href="#" className="hover:text-blue-300">Who Is Hosting?</a></li>
              <li><a href="#" className="hover:text-blue-300">Write Review</a></li>
              <li><a href="#" className="hover:text-blue-300">Claim Web Hosting</a></li>
            </ul>
          </div>

          {/* ABOUT Section */}
          <div>
            <h2 className="font-bold mb-4">ABOUT</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300">About Us</a></li>
              <li><a href="#" className="hover:text-blue-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-300">SRC</a></li>
              <li><a href="#" className="hover:text-blue-300">Events</a></li>
              <li><a href="#" className="hover:text-blue-300">Our Initiatives</a></li>
            </ul>
          </div>

          {/* LEGAL Section */}
          <div>
            <h2 className="font-bold mb-4">LEGAL</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-300">Terms of Use</a></li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h2 className="font-bold mb-4">SUBSCRIBE NOW</h2>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="E-Mail Adress"
                className="w-full p-2 rounded bg-white text-gray-800"
              />
              <button className="bg-blue-500 text-white px-6 py-2 rounded w-full hover:bg-blue-600">
                Send
              </button>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-blue-300">
                  <Facebook size={24} />
                </a>
                <a href="#" className="hover:text-blue-300">
                  <Twitter size={24} />
                </a>
                <a href="#" className="hover:text-blue-300">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;