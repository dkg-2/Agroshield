import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Team = () => {
  const team = [
    {
      name: "Divyanshi Singh",
      role: "AIML and Frontend Lead",
      image: "https://drive.google.com/uc?export=download&id=1WB2-434X7V0Sa5aEVlUVGP-IpstZSqaP",
      email: "2k23.csai2313898@gmail.com",
      linkedin: "https://linkedin.com/in/divyanshi-singh-503456327"
    },
    {
      name: "Bhavya Gupta",
      role: "UI/UX and Presentaion Head", 
      image: "https://drive.google.com/uc?export=download&id=17-Rn-TbJzx-JBPzxi6PBec1HWuaJ36Hq",
      email: "2k23.csai2310329@gmail.com",
      linkedin: "https://linkedin.com/in/bhavya-gupta-203b6a308"
    },
    {
      name: "Ayushi Shukla",
      role: "UI/UX Specialist",
      image: "https://drive.google.com/uc?export=download&id=1-ZwPQ9UdweO-SzjRZB11vERy9lFhlhP4", 
      email: "2k23.csai2313123@gmail.com",
      linkedin: "https://www.linkedin.com/in/ayushi-shukla-041375317"
    },
    {
      name: "Divyansh Gaur",
      role: "AIML and Full Stack Architect",
      image: "https://drive.google.com/uc?export=download&id=1spftNAUxYjKpaDC7PkXQisGCxLQ1YYcm",
      email: "2k23.csai2313599@gmail.com",
      linkedin: "https://linkedin.com/in/divyansh-gaur-665978308"
    },
  ];

  return (
    <section className="py-16">
      <div className="content-overlay container mx-auto px-4 py-8 rounded-xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">
            Agricultural Innovation Team
          </h2>
          <p className="text-lg text-emerald-800">
            Combining AI expertise with agricultural domain knowledge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card 
              key={index}
              className="hover:border-agro-green-medium/40 bg-white/5 backdrop-blur-sm border-2 border-agro-green-medium/20 transition-all duration-300 group text-center"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-t-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
                
              <div className="p-6">
                <h3 className="text-xl font-bold text-emerald-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-agro-green-medium font-medium mb-4">
                  {member.role}
                </p>
                
                <div className="flex justify-center gap-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-emerald-800 hover:text-agro-green-medium transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-6 w-6" />
                  </a>
                  
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-800 hover:text-agro-green-medium transition-colors"
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
      </div>
    </section>
  );
};

export default Team;