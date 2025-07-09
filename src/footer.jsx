import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faYoutube,
  faTiktok,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './index.css'; 

export default function Footer() {
  return (
    <footer className="bg-[#0a1a33] text-center py-10 border-t border-gray-700 relative z-10">
      <h2 className="text-lg font-sfpro mb-4">
        Connect with innovation. Explore our journey and be part of the future of robotics.
      </h2>
      <p className="text- text-gray-400 max-w-2xl mx-auto mb-6">
        Whether you're passionate about cutting-edge innovation, real-world engineering challenges,
        or collaborative tech experiences ROBOTIIK offers the perfect space to explore and grow.
      </p>

      <div className="flex justify-center gap-6 text-white text-xl mb-6">
        <a href="#" className="hover:text-orange-400 transition-colors"><FontAwesomeIcon icon={faEnvelope} /></a>
        <a href="#" className="hover:text-pink-400 transition-colors"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="#" className="hover:text-black hover:opacity-40 transition-colors"><FontAwesomeIcon icon={faTiktok} /></a>
        <a href="#" className="hover:text-red-500 transition-colors"><FontAwesomeIcon icon={faYoutube} /></a>
        <a href="#" className="hover:text-blue-500 transition-colors"><FontAwesomeIcon icon={faXTwitter} /></a>
      </div>
      <div className="w-400 h-0.5 bg-white mx-auto mb-6"></div>

      <p className="text-gray-500 text-sm ">&copy; 2025 ROBOTIK </p>
    </footer>
  );
}
