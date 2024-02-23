//import { Link } from "react-router-dom";
import meImage from "./assets/me.jpg";
import whatnowImage from "./assets/whatnow.png";
import somniumImage from "./assets/somnium.png";
import visorImage from "./assets/visor.png";
import boredImage from "./assets/bored.png";
import rpsImage from "./assets/rock-paper-scissors.png";

import { motion } from "framer-motion";
import Navbar from "./Navbar";

function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <header className="bg-sky-700 text-white text-center py-20">
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
              I'm passionate about creating software that is both functional and
              beautiful. I enjoy learning new technologies and I'm always
              looking for ways to improve my skills.
            </p>
            <p>
              I'm proud to be a member of the <a className="underline text-slate-700" href="https://lowdefy.com/">Lowdefy</a> team.
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
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                <a
                  href="https://whatnow-three.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={whatnowImage}
                    alt="whatnow"
                    className="mb-4 rounded-lg"
                  />
                </a>
              </motion.div>
              <h3 className="text-xl font-bold mb-4">
                Product Ordering System
              </h3>
              <p>
                Please note this project is no longer being maintained. A basic
                CRUD application built with MSSQL Server, ASP.NET Core, React JS
                and Bootstrap.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                <a
                  href="https://machiel27.github.io/landing-page/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={somniumImage}
                    alt="somnium"
                    className="mb-4 rounded-lg"
                  />
                </a>
              </motion.div>
              <h3 className="text-xl font-bold mb-4">Flexbox Landing Page</h3>
              <p>
                A simple, static Landing Page for a fictional company. Used to
                practice Flexbox design.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                <a
                  href="https://machiel27.github.io/rock-paper-scissors/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={rpsImage}
                    alt="rock-paper-scissors"
                    className="mb-4 rounded-lg"
                  />
                </a>
              </motion.div>
              <h3 className="text-xl font-bold mb-4">Rock, Paper, Scissors</h3>
              <p>A Vanilla JavaScript game I created for the Odin Project.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                <a
                  href="https://github.com/machiel27/visor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={visorImage}
                    alt="visor"
                    className="mb-4 rounded-lg"
                  />
                </a>
              </motion.div>
              <h3 className="text-xl font-bold mb-4">Visor</h3>
              <p>
                A Dashboard for viewing F1 stats. Built with Angular, Apache
                ECharts, .NET API, and MSSQL Database.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                <a
                  href="https://lowdefy-bored.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={boredImage}
                    alt="boredom-fighter"
                    className="mb-4 rounded-lg"
                  />
                </a>
              </motion.div>
              <h3 className="text-xl font-bold mb-4">Boredom-Fighter</h3>
              <p>
                An application that generates ideas and adds them to a to-do
                list. Built with Lowdefy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Animation Test */}
      {/* <div className="bg-white p-6 m-10">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <a
            href="https://lowdefy-bored.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={boredImage}
              alt="boredom-fighter"
              className="mb-4 rounded-lg transition-transform duration-500 ease-in-out transform hover:rotate-12"
            />
          </a>
          <h3 className="text-xl font-bold mb-4">Boredom-Fighter</h3>
          <p>
            An application that generates ideas and adds them to a to-do list.
            Built with Lowdefy
          </p>
        </motion.div>
      </div> */}

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
