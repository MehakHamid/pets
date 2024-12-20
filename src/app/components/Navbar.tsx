"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-teal-500 to-green-500 px-4 py-3 shadow-md">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <div className="text-white text-2xl font-bold">
            <Link href="/">My Pets Website</Link>
          </div>

          {/* Menu Icon for Mobile */}
          <div
            className="text-white text-2xl md:hidden cursor-pointer"
            onClick={toggleSidebar}
          >
            ☰
          </div>

          {/* Links for Desktop */}
          <div className="hidden md:flex md:items-center md:gap-6 text-white font-medium">
            <Link href="/" className="hover:text-yellow-300">
              Home
            </Link>
            <Link href="/blog" className="hover:text-yellow-300">
              Blog
            </Link>
            <Link href="/story" className="hover:text-yellow-300">
              Story
            </Link>
            <Link href="/adoption" className="hover:text-yellow-300">
              Adoption/Donation
            </Link>
            <Link href="/mypets" className="hover:text-yellow-300">
              My Pets
            </Link>
            <Link href="/about" className="hover:text-yellow-300">
              About
            </Link>
            <Link href="/contact" className="hover:text-yellow-300">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-teal-600 text-white z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center px-4 py-3 bg-teal-700 shadow-md">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            className="text-white text-2xl"
            onClick={toggleSidebar}
          >
            &times;
          </button>
        </div>
        <ul className="flex flex-col gap-4 px-4 py-6">
          <li>
            <Link
              href="/"
              className="block text-lg hover:text-yellow-300"
              onClick={toggleSidebar}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="block text-lg hover:text-yellow-300"
              onClick={toggleSidebar}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/story"
              className="block text-lg hover:text-yellow-300"
              onClick={toggleSidebar}
            >
              Story
            </Link>
          </li>
          <li>
            <Link
              href="/adoption"
              className="block text-lg hover:text-yellow-300"
              onClick={toggleSidebar}
            >
              Adoption/Donation
            </Link>
          </li>
          <li>
            <Link
              href="/mypets"
              className="block text-lg hover:text-yellow-300"
              onClick={toggleSidebar}
            >
              My Pets
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block text-lg hover:text-yellow-300"
              onClick={toggleSidebar}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block text-lg hover:text-yellow-300"
              onClick={toggleSidebar}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex gap-4 justify-center mt-auto pb-6">
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

      {/* Backdrop when Sidebar is Open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Navbar;
