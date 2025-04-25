import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Team = () => {
  const team = [
    {
      name: "Divyanshi Singh",
      role: "AIML and Frontend Lead",
      image: "/images/Divyanshi Singh.jpeg",
      email: "2k23.csai2313898@gmail.com",
      linkedin: "https://linkedin.com/in/divyanshi-singh-503456327"
    },
    {
      name: "Bhavya Gupta",
      role: "Presentation & Outreach Head", 
      image: "/images/Bhavya Gupta.jpeg",
      email: "2k23.csai2310329@gmail.com",
      linkedin: "https://linkedin.com/in/bhavya-gupta-203b6a308"
    },
    {
      name: "Ayushi Shukla",
      role: "UI/UX Specialist",
      image: "/images/Ayushi Shukla.jpeg", 
      email: "2k23.csai2313123@gmail.com",
      linkedin: ""
    },
    {
      name: "Divyansh Gaur",
      role: "AIML and Full Stack Architect",
      image: "/images/Divyansh Gaur.jpeg",
      email: "2k23.csai2313599@gmail.com",
      linkedin: "https://linkedin.com/in/divyansh-gaur-665978308"
    },
  ];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-agro-green-dark mb-4">
          Agricultural Innovation Team
        </h2>
        <p className="text-lg text-agro-green-medium">
          Combining AI expertise with agricultural domain knowledge
        </p>
      </div> {/* ✅ This closing tag was missing before */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <Card 
          key={index}
          className="hover:shadow-lg transition-shadow duration-300 group text-center"
        >
          <div className="relative aspect-square w-full overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-agro-green-dark mb-1">
                {member.name}
              </h3>
              <p className="text-agro-green-medium font-medium mb-4">
                {member.role}
              </p>
              
              <div className="flex justify-center gap-4">
                <a
                  href={`mailto:${member.email}`}
                  className="text-agro-green-dark hover:text-agro-green-light transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="h-6 w-6" />
                </a>
                
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-agro-green-dark hover:text-agro-green-light transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Team;
