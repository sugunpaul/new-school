import React from "react";
import { Palette, Music, BookOpen, Users, Atom, Trees } from "lucide-react";

const ActivitiesSection = () => {
  const activities = [
    {
      title: "Arts & Crafts",
      description: "Creative expression through painting, drawing, and crafting projectsqq.",
      icon: <Palette className="w-10 h-10 text-preschool-coral" />,
      color: "bg-preschool-light-coral"
    },
    {
      title: "Music & Movement",
      description: "Singing, dancing, and playing with rhythm instruments to develop coordination.",
      icon: <Music className="w-10 h-10 text-preschool-blue" />,
      color: "bg-preschool-light-blue"
    },
    {
      title: "Story Time",
      description: "Interactive reading sessions that foster language development and imagination.",
      icon: <BookOpen className="w-10 h-10 text-preschool-purple" />,
      color: "bg-preschool-light-purple"
    },
    {
      title: "Social Play",
      description: "Group activities that help children learn cooperation and communication skills.",
      icon: <Users className="w-10 h-10 text-preschool-green" />,
      color: "bg-preschool-light-green"
    },
    {
      title: "Science Exploration",
      description: "Hands-on experiments and nature study to encourage curiosity and discovery.",
      icon: <Atom className="w-10 h-10 text-preschool-teal" />,
      color: "bg-preschool-light-teal"
    },
    {
      title: "Outdoor Activities",
      description: "Nature walks, gardening, and playground time for physical development and fresh air.",
      icon: <Trees className="w-10 h-10 text-preschool-yellow" />,
      color: "bg-preschool-light-yellow"
    }
  ];

  return (
    <section id="activities" className="bg-white py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-preschool-light-yellow text-preschool-yellow text-sm font-medium mb-4">
            Learning Through Play
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Children's Activities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our curriculum includes a variety of engaging activities designed to support holistic development and spark joy in learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <div className={`p-6 ${activity.color} flex justify-center`}>
                {activity.icon}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
