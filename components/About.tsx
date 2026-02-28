import React from 'react';
import { Mail, Phone, Github, Linkedin, User } from 'lucide-react';

interface TeamMember {
  name: string;
  btId: string;
  role: string;
  email: string;
  phone?: string;
  image?: string; // Optional image path
}

// Placeholder data with image placeholders
const teamMembers: TeamMember[] = [
  {
    name: "Harshal Dafe",
    btId: "BT250602CS",
    role: "Lead Developer",
    email: "student1@college.edu",
    phone: "+91 98765 43210",
    image: "https://res.cloudinary.com/dmr7jcc2z/image/upload/v1771920763/20260106_150538_f6t76e.jpg" // Example unsplash image
  },
  {
    name: "Vedant Khade",
    btId: "BT250611CS",
    role: "Backend Engineer",
    email: "vedantkhade216@gmail.com",
    phone: "+91 7757048814 ",
    image: "https://res.cloudinary.com/dmr7jcc2z/image/upload/v1771920674/WhatsApp_Image_2026-02-24_at_13.33.16_lu0ige.jpg" // Example unsplash image
  },
  {
    name: "Sujal Tabhane",
    btId: "BT22CSE003",
    role: "UI/UX Designer",
    email: "student3@college.edu",
    phone: "+91 98765 43212",
    image: "https://i.pinimg.com/1200x/bb/00/fb/bb00fbabd0a58d0bc918cb8bd5664837.jpg" // Example unsplash image
  },
  {
    name: "Harshal Chauhan",
    btId: "BT22CSE004",
    role: "Research Analyst",
    email: "student4@college.edu",
    phone: "+91 98765 43213",
    image: "https://i.pinimg.com/1200x/bb/00/fb/bb00fbabd0a58d0bc918cb8bd5664837.jpg" // Example unsplash image
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative z-10 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-6xl mx-auto space-y-16 relative">
        
        {/* Project Intro Header */}
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-lavender-50 via-white to-sage-50 p-10 md:p-16 text-center shadow-lg border border-white/50 transition-all duration-300 hover:shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sage-200 via-lavender-200 to-sky-200" />
          
          <span className="inline-block py-1 px-3 rounded-full bg-white border border-slate-100 text-xs font-semibold tracking-widest text-slate-400 uppercase mb-6 transition-transform duration-300 hover:scale-105">
            Academic Project
          </span>
          
          <h2 className="font-serif text-3xl md:text-5xl text-slate-800 leading-tight mb-4">
            Intro to Mini Project
          </h2>
          <p className="font-serif text-xl md:text-2xl text-slate-500 italic">
            Computer Science and Engineering <br/> (BTech 4th Sem)
          </p>
        </div>

        {/* Team Grid */}
        <div>
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl text-slate-800 mb-4">Meet the Team</h3>
            <p className="text-slate-500 font-light">The minds behind MindControl</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-slate-100"
              >
                {/* Square Image Section - Full Size */}
                <div className="w-full aspect-square mb-6 overflow-hidden rounded-xl shadow-md transition-all duration-300 group-hover:shadow-xl">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                      <User size={48} className="text-slate-400" />
                    </div>
                  )}
                </div>

                <h4 className="font-serif text-xl text-slate-800 font-medium mb-1">
                  {member.name}
                </h4>
                <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded-md mb-3 transition-all duration-300 group-hover:bg-sage-100 group-hover:text-sage-600">
                  {member.btId}
                </span>
                <p className="text-sm text-sage-600 font-medium mb-6">
                  {member.role}
                </p>

                {/* Contact Links */}
                <div className="mt-auto flex gap-4 w-full justify-center pt-6 border-t border-slate-100">
                  <a 
                    href={`mailto:${member.email}`} 
                    className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-all duration-300 hover:scale-110"
                    title="Email"
                  >
                    <Mail size={16} />
                  </a>
                  {member.phone && (
                    <a 
                      href={`tel:${member.phone.replace(/\s/g, '')}`} 
                      className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-all duration-300 hover:scale-110"
                      title="Call"
                    >
                      <Phone size={16} />
                    </a>
                  )}
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-all duration-300 hover:scale-110"
                    title="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};