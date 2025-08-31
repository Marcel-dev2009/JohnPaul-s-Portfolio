'use client';
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { ArrowBigUpIcon } from "lucide-react";
import { IoLogoTiktok } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">🎬 JP Films</h2>
          <p className="mt-3 text-sm leading-relaxed">
            Bringing stories to life through film production, training, and festivals.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://instagram.com/Johnpaulnwanganga1" className="hover:text-pink-500"><FaInstagram/></a>
            <a href="https://facebook.com/JP-Nwanganga" className="hover:text-sky-400"><FaFacebookF/></a>
            <a href="https://www.tiktok.com/@JP-Nwanganga" className="hover:dark:text-black hover:text-black"><IoLogoTiktok/></a>
            <a href="tel:+2347065483866" className="hover:text-blue-600"><FaPhoneAlt/></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#service" className="hover:text-white">Our Services</a></li>
            <li><a href="#project" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Get in Touch</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><MapPin size={16}/> Enugu, Nigeria</li>
            <li className="flex items-center gap-2"><Phone size={16}/>+23470654838668</li>
            <li className="flex items-center gap-2"><Mail size={16}/> info@jpfilms.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 flex justify-between px-3">
        <p className="text-center py-4 text-sm">
          © {new Date().getFullYear()} JP Films. All rights reserved.
        </p>
              <Button asChild className="animate-bounce mr-10 mt-4 w-10 transform translate-x-9">
              <a href="#"><ArrowBigUpIcon/></a>
              </Button>
      </div>

    </footer>
  );
}

