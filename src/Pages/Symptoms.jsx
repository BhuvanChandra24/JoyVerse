import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Symptoms = () => {
  const gender = localStorage.getItem('gender') || 'girl';

  const bgColor = gender === 'boy' ? 'bg-gradient-to-b from-blue-100 via-white to-blue-100' : 'bg-gradient-to-b from-pink-100 via-white to-pink-100';
  const textColor = gender === 'boy' ? 'text-blue-600' : 'text-pink-600';
  const buttonBgColor = gender === 'boy' ? 'bg-blue-400' : 'bg-pink-400';
  const buttonHoverColor = gender === 'boy' ? 'hover:bg-blue-500' : 'hover:bg-pink-500';
  const linkTextColor = gender === 'boy' ? 'text-blue-600' : 'text-pink-600';
  const linkHoverColor = gender === 'boy' ? 'hover:bg-blue-400 hover:text-white' : 'hover:bg-pink-400 hover:text-white';
  const footerBgColor = gender === 'boy' ? 'bg-blue-200' : 'bg-pink-200';
  const ftextColor = gender === 'boy' ? 'text-blue-800' : 'text-pink-800';

  return (
    <>
      {/* Navigation */}
      <nav className={`bg-gradient-to-r ${gender === 'boy' ? 'from-blue-300 via-blue-200 to-blue-100' : 'from-pink-300 via-pink-200 to-pink-100'} shadow-lg border-b-4 px-6 py-4`}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 flex-wrap">
          <div className="text-3xl font-extrabold text-white drop-shadow-lg tracking-wide">
            Joy<span className={textColor}>Verse</span>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/" className={`bg-white ${linkTextColor} border-2 ${gender === 'boy' ? 'border-blue-400' : 'border-pink-400'} font-bold px-4 py-2 rounded-full shadow-md ${linkHoverColor} transition transform hover:scale-105`}>
              Home
            </Link>
            <Link to="/About" className={`bg-white ${linkTextColor} border-2 ${gender === 'boy' ? 'border-blue-400' : 'border-pink-400'} font-bold px-4 py-2 rounded-full shadow-md ${linkHoverColor} transition transform hover:scale-105`}>
              About
            </Link>
            <Link to="/Games" className={`bg-white ${linkTextColor} border-2 ${gender === 'boy' ? 'border-blue-400' : 'border-pink-400'} font-bold px-4 py-2 rounded-full shadow-md ${linkHoverColor} transition transform hover:scale-105`}>
              Games
            </Link>
            <Link to="/Contact" className={`bg-white ${linkTextColor} border-2 ${gender === 'boy' ? 'border-blue-400' : 'border-pink-400'} font-bold px-4 py-2 rounded-full shadow-md ${linkHoverColor} transition transform hover:scale-105`}>
              Contact
            </Link>
            <Link to="/Login" className="bg-yellow-400 border-2 border-yellow-500 text-brown-800 font-bold px-4 py-2 rounded-full shadow-md hover:bg-yellow-500 hover:text-white transition transform hover:scale-105">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Symptoms of Dyslexia Section */}
      <div className={`relative min-h-screen ${bgColor} flex flex-col items-center justify-center text-center px-6 py-10`}>
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`text-5xl font-extrabold ${textColor} mb-6`}
        >
          Signs of Dyslexia 🧩
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg max-w-3xl leading-relaxed"
        >
          Every brain is different — and that’s wonderful! 💖 But sometimes, a child may show signs of dyslexia, which means they learn to read and write a little differently.
          <br /><br />
          Some common signs include:
          <ul className="list-disc list-inside text-left mt-4">
            <li>Mixing up letters or sounds when reading (like saying "b" for "d") 🔤</li>
            <li>Struggling to sound out new words or remember how to spell them 📘</li>
            <li>Takes longer to read or avoid reading out loud ⏳</li>
            <li>Trouble remembering names of letters, colors, or directions like left and right ➡️⬅️</li>
            <li>Feeling frustrated or tired during reading or writing tasks 😓</li>
          </ul>
          <br />
          But here’s the magic — with love, support, and fun learning tools, kids with dyslexia can become confident readers and creative thinkers! 🌟📚
          <br /><br />
          <span className={`font-bold ${gender === 'boy' ? 'text-blue-500' : 'text-pink-500'}`}>JoyVerse</span> is here to make learning joyful for every child, one happy game at a time! 🎉🎮
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10"
        >
          <Link to="/Games" className={`text-white text-lg font-bold px-6 py-3 rounded-full shadow-lg ${buttonBgColor} ${buttonHoverColor} transition transform hover:scale-110`}>
            Explore Games
          </Link>
        </motion.div>

        {/* Cute floating emojis */}
        <div className="absolute top-20 left-10 animate-bounce text-4xl">🎈</div>
        <div className="absolute bottom-20 right-10 animate-pulse text-4xl">☁️</div>
        <div className="absolute top-40 right-40 animate-spin-slow text-4xl">🌟</div>
      </div>

      <footer className={`${footerBgColor} ${ftextColor} py-8 px-4 mt-2`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <div>
            <h3 className="text-2xl font-extrabold mb-2">JoyVerse</h3>
            <p className={`${ftextColor}`}>
              Celebrating the colorful minds of young explorers!
            </p>
          </div>
          <div className="flex gap-6">
            <a href="/About" className="hover:underline hover:text-pink-600">About</a>
            <a href="/Games" className="hover:underline hover:text-pink-600">Games</a>
            <a href="/Contact" className="hover:underline hover:text-pink-600">Contact</a>
          </div>
          <div className={`${ftextColor}`}>
            © {new Date().getFullYear()} JoyVerse. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Symptoms;
