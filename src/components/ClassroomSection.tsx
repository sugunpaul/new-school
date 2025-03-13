
import React from "react";

const ClassroomSection = () => {
  return (
    <section id="about" className="bg-gradient-to-r from-preschool-blue/10 to-preschool-coral/10 py-24 overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-preschool-yellow rounded-full opacity-30"></div>
              <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-preschool-coral rounded-full opacity-30"></div>
              
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Bright preschool classroom with toys and activities" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -right-4 -bottom-4 bg-white rounded-xl p-5 shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="font-bold text-3xl text-preschool-blue">12:1</div>
                    <div className="text-xs text-gray-500">Child to Teacher Ratio</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-3xl text-preschool-coral">15+</div>
                    <div className="text-xs text-gray-500">Activity Centers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-preschool-light-green text-preschool-green text-sm font-medium">
              Our Classrooms
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Where Imagination and Learning Meet
            </h2>
            
            <p className="text-lg text-gray-600">
              Our thoughtfully designed classrooms create an environment where children feel safe, inspired, and eager to learn. Each space is organized into learning centers that promote different aspects of development.
            </p>
            
            <div className="space-y-4">
              {[
                {
                  title: "Engaging Environment",
                  description: "Bright, colorful spaces designed to stimulate curiosity and creativity.",
                  color: "bg-preschool-light-blue",
                  textColor: "text-preschool-blue"
                },
                {
                  title: "Age-Appropriate Activities",
                  description: "Materials and activities tailored to each age group's developmental needs.",
                  color: "bg-preschool-light-coral",
                  textColor: "text-preschool-coral"
                },
                {
                  title: "Safe and Secure",
                  description: "Safety protocols and secure facilities to give parents peace of mind.",
                  color: "bg-preschool-light-yellow",
                  textColor: "text-preschool-yellow"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-md"
                >
                  <div className={`p-3 rounded-lg ${item.color}`}>
                    <svg className={`w-6 h-6 ${item.textColor}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassroomSection;
