'use client';

import { 
  Clapperboard, 
  FileText, 
  Users, 
  FileBadge2, 
  Presentation, 
  Film 
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Clapperboard className="w-12 h-12 text-blue-400" />,
      title: "Film Production",
      description: "Producing high-quality movies for global audiences.",
    },
    {
      icon: <FileText className="w-12 h-12 text-pink-400" />,
      title: "Content Development",
      description: "Scriptwriting, storyboarding, and concept development.",
    },
    {
      icon: <Users className="w-12 h-12 text-green-400" />,
      title: "Talent Management",
      description: "Scouting, training, and managing actors and crew.",
    },
    {
      icon: <FileBadge2 className="w-12 h-12 text-yellow-400" />,
      title: "Content Licensing",
      description: "Licensing JP Films content to streaming platforms and TV networks.",
    },
    {
      icon: <Presentation className="w-12 h-12 text-purple-400" />,
      title: "Film Training & Workshops",
      description: "Conducting workshops and training sessions.",
    },
    {
      icon: <Film className="w-12 h-12 text-red-400" />,
      title: "Film Festivals",
      description: "Organizing and participating in film festivals.",
    },
  ];

  return (
    <section className="px-6 py-12 bg-[#121313] m-6 rounded-lg text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-[#1e293b] p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
