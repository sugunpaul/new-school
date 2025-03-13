
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Parent of Emily, Age 4",
    content: "FirstStep has been a blessing for our family. My daughter has thrived in their nurturing environment. The teachers are attentive and truly care about each child's development.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
  },
  {
    id: 2,
    name: "Michael Williams",
    role: "Parent of Ethan, Age 3",
    content: "The progress my son has made at FirstStep is remarkable. He's become more confident, social, and excited about learning. The curriculum is perfectly balanced between fun and educational.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 3,
    name: "Jennifer Rodriguez",
    role: "Parent of Sofia, Age 4",
    content: "The staff at FirstStep go above and beyond for the children. My daughter wakes up excited to go to school every day! I appreciate the regular updates we receive about her progress.",
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="programs" className="bg-white py-24 overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-preschool-light-purple text-preschool-purple text-sm font-medium mb-4">
            Happy Parents
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Families Say About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We take pride in creating a preschool environment that children love and parents trust.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Decorative elements */}
          <div className="absolute -left-16 top-1/3 w-32 h-32 bg-preschool-light-teal rounded-full opacity-50 blur-xl"></div>
          <div className="absolute -right-16 top-1/3 w-32 h-32 bg-preschool-light-coral rounded-full opacity-50 blur-xl"></div>
          
          {/* Testimonial card */}
          <div className="relative z-10 bg-white rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-500">
            <div className="absolute top-6 left-6">
              <Quote className="w-12 h-12 text-preschool-blue opacity-20" />
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="md:w-1/4 flex justify-center">
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-preschool-yellow rounded-full p-2">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="md:w-3/4">
                <div className="mb-6">
                  <p className="text-lg md:text-xl text-gray-700 italic">
                    "{testimonials[activeIndex].content}"
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-500">{testimonials[activeIndex].role}</p>
                </div>
                
                <div className="flex items-center space-x-1 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-10 h-1.5 rounded-full transition-all duration-300 ${
                        index === activeIndex ? 'bg-preschool-blue' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="absolute -bottom-5 right-10 flex space-x-3">
              <button
                onClick={handlePrevious}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-preschool-blue transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-preschool-blue shadow-md flex items-center justify-center text-white hover:bg-preschool-blue/90 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-24">
          <h3 className="text-center text-lg font-medium text-gray-600 mb-10">Trusted by families across the community</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "10+ Years", description: "of Experience" },
              { label: "500+", description: "Graduates" },
              { label: "98%", description: "Parent Satisfaction" },
              { label: "4:1", description: "Staff Retention Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-bold text-2xl md:text-3xl text-preschool-blue mb-2">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
