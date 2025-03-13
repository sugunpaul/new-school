
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-preschool-light-blue py-24 overflow-hidden">
      <div className="section-container relative">
        {/* Decorative Elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-preschool-blue rounded-full opacity-10"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-preschool-blue rounded-full opacity-10"></div>
        
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-preschool-light-blue text-preschool-blue text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contact Us Today
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you! Schedule a visit or get more information about our programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
            <div className="p-6">
              <div className="w-14 h-14 bg-preschool-light-coral rounded-full flex items-center justify-center mb-6 mx-auto">
                <Phone className="w-6 h-6 text-preschool-coral" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Call Us</h3>
              <p className="text-gray-500 text-center mb-6">
                We're available to answer your questions Monday through Friday
              </p>
              <a 
                href="tel:8333840661" 
                className="block text-center py-3 px-6 bg-preschool-coral text-white rounded-lg hover:bg-preschool-coral/90 transition-colors duration-300"
              >
                833-384-0661
              </a>
            </div>
          </div>
          
          {/* Email Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
            <div className="p-6">
              <div className="w-14 h-14 bg-preschool-light-blue rounded-full flex items-center justify-center mb-6 mx-auto">
                <Mail className="w-6 h-6 text-preschool-blue" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Email Us</h3>
              <p className="text-gray-500 text-center mb-6">
                Send us a message and we'll get back to you within 24 hours
              </p>
              <a 
                href="mailto:info@firststeppreschool.com" 
                className="block text-center py-3 px-6 bg-preschool-blue text-white rounded-lg hover:bg-preschool-blue/90 transition-colors duration-300"
              >
                info@firststeppreschool.com
              </a>
            </div>
          </div>
          
          {/* Visit Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
            <div className="p-6">
              <div className="w-14 h-14 bg-preschool-light-green rounded-full flex items-center justify-center mb-6 mx-auto">
                <MapPin className="w-6 h-6 text-preschool-green" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Visit Us</h3>
              <p className="text-gray-500 text-center mb-6">
                Schedule a tour to see our facilities and meet our staff
              </p>
              <button 
                className="block w-full text-center py-3 px-6 bg-preschool-green text-white rounded-lg hover:bg-preschool-green/90 transition-colors duration-300"
              >
                Schedule a Tour
              </button>
            </div>
          </div>
        </div>
        
        {/* Hours and Map */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-6">Hours of Operation</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-preschool-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Regular Program</h4>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 3:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-preschool-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Extended Care</h4>
                    <p className="text-gray-600">Monday - Friday: 7:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-6">Location</h3>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-preschool-coral flex-shrink-0 mt-0.5" />
                  <address className="not-italic text-gray-600">
                    123 Learning Lane<br />
                    Anytown, ST 12345<br />
                    United States
                  </address>
                </div>
              </div>
              
              <div className="mt-10">
                <a 
                  href="tel:8333840661" 
                  className="inline-flex items-center justify-center rounded-full bg-preschool-coral text-white px-6 py-3 font-medium transition-all duration-300 hover:bg-preschool-coral/90"
                >
                  <Phone size={18} className="mr-2" />
                  <span>Call Us: 833-384-0661</span>
                </a>
              </div>
            </div>
            
            <div className="bg-gray-200 h-72 md:h-auto">
              {/* This would typically be a Google Map embed, but for simplicity showing a placeholder */}
              <div className="h-full flex items-center justify-center bg-preschool-light-blue">
                <div className="text-center">
                  <MapPin size={48} className="text-preschool-blue mx-auto mb-4" />
                  <p className="text-preschool-blue font-medium">Map Placeholder</p>
                  <p className="text-sm text-gray-600 mt-2">123 Learning Lane, Anytown</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
