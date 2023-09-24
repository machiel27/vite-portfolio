import React from "react";
//import { Link } from "react-router-dom";
import meImage from "./me.jpg";
import whatnowImage from "./whatnow.png";
import somniumImage from "./somnium.png";
import rpsImage from "./rock-paper-scissors.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="bg-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold hover:animate-bounce">
            Machiel
          </div>
          <div className="flex items-center">
            {/* <Link to="/under-construction" className="mx-4">
              Projects
            </Link>
            <Link to="/under-construction" className="mx-4">
              Blog
            </Link>
            <Link to="/under-construction" className="mx-4">
              Contact
            </Link> */}
            <a
              href="https://github.com/machiel27"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 transform transition-transform duration-300 hover:scale-125"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/machiel-van-der-walt-550343242"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 transform transition-transform duration-300 hover:scale-125"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-sky-700 text-white text-center py-20 animate-breathing">
        <h1 className="text-5xl mb-4">Hello, I'm Machiel</h1>
        <p className="text-xl">A software developer from Earth.</p>
      </header>

      {/* About Me */}
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <div className="flex items-center space-x-10">
          <img
            src={meImage}
            alt="Me"
            className="w-1/4 rounded-full shadow-lg hover:grayscale"
          />
          <div className="w-2/3 text-lg">
            <p>
              I'm a full-stack web developer with a focus on building
              applications for the insurance industry. My journey in the tech
              world is all about using software to make our world a better place
              – that's what keeps me going.
            </p>
            <p>
              When I'm not coding, you'll catch me lost in a good book or
              exploring virtual worlds through video games. Music is like a fuel
              for my creative side, and it keeps me going in my day-to-day
              tasks. And when it comes to sports, I'm a big fan of cricket,
              football, and the adrenaline-pumping world of Formula 1 racing.
            </p>
            <p>
              I'd love for you to come along on my journey as I blend my
              passions and skills, working on solutions one line of code at a
              time.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-gray-200 p-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Single Project */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <a
                href="https://whatnow-three.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={whatnowImage}
                  alt="whatnow"
                  className="mb-4 rounded-lg transition-transform duration-500 ease-in-out transform hover:rotate-12"
                />
              </a>
              <h3 className="text-xl font-bold mb-4">
                Product Ordering System
              </h3>
              <p>
                A basic CRUD application built with MSSQL Server, ASP.NET Core,
                React JS and Bootstrap.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <a
                href="https://machiel27.github.io/landing-page/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={somniumImage}
                  alt="somnium"
                  className="mb-4 rounded-lg transition-transform duration-500 ease-in-out transform hover:rotate-12"
                />
              </a>
              <h3 className="text-xl font-bold mb-4">Flexbox Landing Page</h3>
              <p>
                A simple, static Landing Page for a fictional company. Used to
                practice Flexbox design.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <a
                href="https://machiel27.github.io/rock-paper-scissors/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={rpsImage}
                  alt="rock-paper-scissors"
                  className="mb-4 rounded-lg transition-transform duration-500 ease-in-out transform hover:rotate-12"
                />
              </a>
              <h3 className="text-xl font-bold mb-4">Rock, Paper, Scissors</h3>
              <p>A Vanilla JavaScript game I created for the Odin Project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white p-6 mt-10">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Machiel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
