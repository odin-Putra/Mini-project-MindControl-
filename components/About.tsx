import React from 'react';
import { Mail, Phone, Github, Linkedin, User } from 'lucide-react';

interface TeamMember {
  name: string;
  btId: string;
  role: string;
  email: string;
  phone?: string;
}

// Placeholder data - easy to update
const teamMembers: TeamMember[] = [
  {
    name: "Harshal Dafe",
    btId: "BT250602CS",
    role: "UI/UX Designer",
    email: "#",
    phone: "+91 xxxxxxxxxx"
  },
  {
    name: "Vedant Khade",
    btId: "BT250611CS",
    role: "Backend Engineer",
    email: "#",
    phone: "+91 xxxxxxxxxx"
  },
  {
    name: "Sujal Tabhane",
    btId: "BT240060AI",
    role: "Developer",
    email: "#",
    phone: "+91 xxxxxxxxxx"
  },
  {
    name: "Harshal Chauhan",
    btId: "BT000000CS",
    role: "Research Analyst",
    email: "#",
    phone: "+91 xxxxxxxxxx"
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative z-10 bg-slate-50/50">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Project Intro Header */}
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-lavender-50 via-white to-sage-50 p-10 md:p-16 text-center shadow-sm border border-white/50">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sage-200 via-lavender-200 to-sky-200" />
          
          <span className="inline-block py-1 px-3 rounded-full bg-white border border-slate-100 text-xs font-semibold tracking-widest text-slate-400 uppercase mb-6">
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
                className="group glass-panel p-6 rounded-3xl flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-slate-200/50"
              >
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-slate-100 to-slate-200 flex items-center justify-center mb-6 group-hover:from-lavender-100 group-hover:to-sky-100 transition-colors duration-500">
                  <User size={32} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
                </div>

                <h4 className="font-serif text-xl text-slate-800 font-medium mb-1">
                  {member.name}
                </h4>
                <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded-md mb-3">
                  {member.btId}
                </span>
                <p className="text-sm text-sage-600 font-medium mb-6">
                  {member.role}
                </p>

                {/* Contact Links */}
                <div className="mt-auto flex gap-4 w-full justify-center pt-6 border-t border-slate-100/50">
                  <a 
                    href={`mailto:${member.email}`} 
                    className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-all duration-300"
                    title="Email"
                  >
                    <Mail size={16} />
                  </a>
                  {member.phone && (
                    <a 
                      href={`tel:${member.phone.replace(/\s/g, '')}`} 
                      className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-all duration-300"
                      title="Call"
                    >
                      <Phone size={16} />
                    </a>
                  )}
                  <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-all duration-300">
                    <Linkedin size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};