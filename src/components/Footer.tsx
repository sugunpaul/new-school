import React from "react";
import { Facebook, Instagram, Twitter, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-full bg-preschool-blue/20 p-1 flex items-center justify-center">
                <svg
                  className="w-8 h-8 fill-preschool-blue"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                    opacity="0.4"
                  />
                  <path d="M12,6a1,1,0,0,0-1,1v5a1,1,0,0,0,.5.87l4,2.5a1,1,0,0,0,1.37-.37,1,1,0,0,0-.37-1.37L13,11.94V7A1,1,0,0,0,12,6Z" />
                </svg>
              </div>
              <div className="ml-3">
                <h2 className="font-display font-bold text-xl tracking-tight text-white">
                  FirstStep{" "}
                  <span className="text-preschool-coral">Pre School</span>
                </h2>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Nurturing young minds and fostering a love of learning in a safe,
              supportive environment.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Programs", "Curriculum", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Programs</h3>
            <ul className="space-y-3">
              {[
                "Toddlers (18-24 months)",
                "Early Preschool (2-3 years)",
                "Preschool (3-4 years)",
                "Pre-Kindergarten (4-5 years)",
                "After School Care",
              ].map((item) => (
                <li key={item} className="text-gray-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone
                  size={18}
                  className="text-preschool-coral mr-3 mt-1 flex-shrink-0"
                />
                <div>
                  <p className="text-white font-medium">Phone Number</p>
                  <a
                    href="tel:94933866446"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    94933866446
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail
                  size={18}
                  className="text-preschool-coral mr-3 mt-1 flex-shrink-0"
                />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a
                    href="mailto:info@firststeppreschool.com"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    info@firststeppreschool.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-preschool-coral mr-3 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div>
                  <p className="text-white font-medium">Address</p>
                  <address className="not-italic text-gray-400">
                    123 Learning Lane
                    <br />
                    Anytown, ST 12345
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} FirstStep Pre School. All rights
              reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
