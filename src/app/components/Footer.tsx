import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-yellow-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-yellow-300">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/story" className="hover:text-yellow-300">
                Story
              </Link>
            </li>
            <li>
              <Link href="/adoption" className="hover:text-yellow-300">
                Adoption/Donation
              </Link>
            </li>
            <li>
              <Link href="/mypets" className="hover:text-yellow-300">
                My Pets
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>

        {/* Privacy Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy-policy" className="hover:text-yellow-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-use" className="hover:text-yellow-300">
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-teal-800 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} My Pets Website. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link href="/" className="text-sm hover:text-yellow-300">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
