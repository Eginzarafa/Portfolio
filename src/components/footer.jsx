import React from "react";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <div id="footer" className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Section 1: About */}
          <div>
            <h4 className="font-bold text-xl mb-3">About Me</h4>
            <p className="text-sm">
              I am a passionate web developer specializing in building dynamic
              and responsive web applications using modern technologies like
              React, Laravel, and Tailwind CSS.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-3">Quick Links</h4>
            <ul className="text-sm">
              <li>
                <a href="#home" className="hover:underline">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#profile" className="hover:underline">
                  Skill
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:underline">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-3">Follow Me</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/Eginzarafa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary"
              >
                <BsGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/egin-yulanda"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://instagram.com/eginzarafa_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary"
              >
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm mt-6 border-t border-white/20 pt-4">
          <p>
            © {new Date().getFullYear()} Egin Tia Yulanda. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
