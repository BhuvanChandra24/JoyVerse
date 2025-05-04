import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Important: you need this for motion to work
import image from '../assets/carousel-1.jpg'; // Adjust file extension as needed

export default function Boy() {
  return (
    <>
      {/* Boy Navigation with Blue Theme */}
      <nav className="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 shadow-lg border-b-4 px-6 py-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 flex-wrap">
          {/* Logo */}
          <div className="text-3xl font-extrabold text-white drop-shadow-lg tracking-wide">
            Joy<span className="text-blue-600">Verse</span>
          </div>

           {/* Navigation Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/" className="bg-white text-blue-600 border-2 border-blue-400 font-bold px-4 py-2 rounded-full shadow-md hover:bg-blue-400 hover:text-white transition transform hover:scale-105">
              Home
            </Link>
            <Link to="/About" className="bg-white text-blue-600 border-2 border-blue-400 font-bold px-4 py-2 rounded-full shadow-md hover:bg-blue-400 hover:text-white transition transform hover:scale-105">
              About
            </Link>
            <Link to="/Games" className="bg-white text-blue-600 border-2 border-blue-400 font-bold px-4 py-2 rounded-full shadow-md hover:bg-blue-400 hover:text-white transition transform hover:scale-105">
              Games
            </Link>
            <Link to="/Contact" className="bg-white text-blue-600 border-2 border-blue-400 font-bold px-4 py-2 rounded-full shadow-md hover:bg-blue-400 hover:text-white transition transform hover:scale-105">
              Contact
            </Link>
            <Link to="/Login" className="bg-yellow-400 border-2 border-yellow-500 text-brown-800 font-bold px-4 py-2 rounded-full shadow-md hover:bg-yellow-500 hover:text-white transition transform hover:scale-105">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Second Row: Dyslexia Buttons */}
      <div className="bg-blue-20 py-4 px-6 flex flex-wrap justify-center gap-4">
        <Link to="/AboutDyslexia" className="bg-white text-blue-600 border-2 border-blue-400 font-bold px-5 py-2 rounded-full shadow hover:bg-blue-300 hover:text-white transition transform hover:scale-110">
          About Dyslexia
        </Link>
        <Link to="/Symptoms" className="bg-white text-blue-600 border-2 border-blue-400 font-bold px-5 py-2 rounded-full shadow hover:bg-blue-300 hover:text-white transition transform hover:scale-110">
          Symptoms
        </Link>
        <Link to="/Recovery" className="bg-white text-blue-600 border-2 border-blue-400 font-bold px-5 py-2 rounded-full shadow hover:bg-blue-300 hover:text-white transition transform hover:scale-110">
          How to Recover
        </Link>
        <Link to="/Consequences" className="bg-white text-blue-600 border-2 border-blue-400 font-bold px-5 py-2 rounded-full shadow hover:bg-blue-300 hover:text-white transition transform hover:scale-110">
          Consequences
        </Link>
        <Link to="/Tips" className="bg-white text-blue-600 border-2 border-blue-400 font-bold px-5 py-2 rounded-full shadow hover:bg-blue-300 hover:text-white transition transform hover:scale-110">
          Tips for Parents
        </Link>
      </div>

      {/* Hero Section with Background Image and Text on Top */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[500px] flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-100 bg-opacity-30"></div>

        {/* Text Content */}
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-600 mb-6 drop-shadow-lg">
            Welcome to <span className="text-white">JoyVerse</span>!
          </h1>

          <p className="text-lg md:text-xl text-white font-semibold mb-8">
            A magical world of fun, learning, and support for young explorers — especially colorful dyslexic superheroes!
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/Game" className="bg-blue-400 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-blue-500 hover:scale-105 transform transition">
              🎮 Play & Learn
            </Link>
            <Link to="/AboutDyslexia" className="bg-orange-200 text-brown-800 font-bold px-6 py-3 rounded-full shadow-lg hover:bg-orange-400 hover:scale-105 transform transition">
              🧠 What is Dyslexia?
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className="relative min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 flex flex-col items-center justify-center text-center px-6 py-10">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-blue-500 mb-6"
        >
          About JoyVerse 🎉
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg text-blue-500 max-w-3xl leading-relaxed"
        >
          In today's exciting world, technology can create magical learning adventures for kids! ✨
          <br /><br />
          <span className="font-bold text-blue-500">JoyVerse</span> is a smart and happy platform made specially for dyslexic children.
          It uses super-clever AI (transformers) to watch your happy faces while you play educational games and figures out how you’re feeling! 🎮😊
          <br /><br />
          Based on your emotions, JoyVerse can change the games to be easier, harder, more colorful, or even add fun rewards!
          All this happens under the loving guidance of therapists to make sure learning stays joyful and safe. 🧸💙
          <br /><br />
          Get ready to play, smile, and grow with JoyVerse — where every child's emotions light up the way to learning! 🌟🚀
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10"
        >
          <Link to="/Games" className="bg-blue-400 text-white text-lg font-bold px-6 py-3 rounded-full shadow-lg hover:bg-blue-500 transition transform hover:scale-110">
            Let's Play!
          </Link>
        </motion.div>

        {/* Cute floating emojis */}
        <div className="absolute top-20 left-10 animate-bounce text-4xl">
          🎈
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse text-4xl">
          ☁️
        </div>
        <div className="absolute top-40 right-40 animate-spin-slow text-4xl">
          🌟
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-200 text-blue-800 py-8 px-4 mt-2">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          {/* Left side */}
          <div>
            <h3 className="text-2xl font-extrabold mb-2">JoyVerse 🌟</h3>
            <p className="text-blue-700">
              Celebrating the colorful minds of young explorers!
            </p>
          </div>

          {/* Middle */}
          <div className="flex gap-6">
            <a href="/About" className="hover:underline hover:text-blue-600">About</a>
            <a href="/Games" className="hover:underline hover:text-blue-600">Games</a>
            <a href="/Contact" className="hover:underline hover:text-blue-600">Contact</a>
          </div>

          {/* Right side */}
          <div className="text-blue-600">
            © {new Date().getFullYear()} JoyVerse. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
