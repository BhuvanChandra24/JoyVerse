import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const gender = localStorage.getItem("gender") || "girl";

  const bgColor =
    gender === "boy"
      ? "bg-gradient-to-b from-blue-100 via-white to-blue-100"
      : "bg-gradient-to-b from-pink-100 via-white to-pink-100";
  const textColor = gender === "boy" ? "text-blue-600" : "text-pink-600";
  const buttonBgColor = gender === "boy" ? "bg-blue-400" : "bg-pink-400";
  const buttonHoverColor =
    gender === "boy" ? "hover:bg-blue-500" : "hover:bg-pink-500";
  const linkTextColor = gender === "boy" ? "text-blue-600" : "text-pink-600";
  const linkHoverColor =
    gender === "boy"
      ? "hover:bg-blue-400 hover:text-white"
      : "hover:bg-pink-400 hover:text-white";
  const footerBgColor = gender === "boy" ? "bg-blue-200" : "bg-pink-200";
  const ftextColor = gender === "boy" ? "text-blue-800" : "text-pink-800";

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Welcome to JoyVerse, ${username}!`);
  };

  return (
    <>
      {/* Navigation */}
      <nav
        className={`bg-gradient-to-r ${
          gender === "boy"
            ? "from-blue-300 via-blue-200 to-blue-100"
            : "from-pink-300 via-pink-200 to-pink-100"
        } shadow-lg border-b-4 px-6 py-4`}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 flex-wrap">
          <div className="text-3xl font-extrabold text-white drop-shadow-lg tracking-wide">
            Joy<span className={textColor}>Verse</span>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/"
              className={`bg-white ${linkTextColor} border-2 ${
                gender === "boy" ? "border-blue-400" : "border-pink-400"
              } font-bold px-4 py-2 rounded-full shadow-md ${linkHoverColor} transition transform hover:scale-105`}
            >
              Home
            </Link>
            <Link
              to="/About"
              className={`bg-white ${linkTextColor} border-2 ${
                gender === "boy" ? "border-blue-400" : "border-pink-400"
              } font-bold px-4 py-2 rounded-full shadow-md ${linkHoverColor} transition transform hover:scale-105`}
            >
              About
            </Link>
            <Link
              to="/Games"
              className={`bg-white ${linkTextColor} border-2 ${
                gender === "boy" ? "border-blue-400" : "border-pink-400"
              } font-bold px-4 py-2 rounded-full shadow-md ${linkHoverColor} transition transform hover:scale-105`}
            >
              Games
            </Link>
            <Link
              to="/Contact"
              className={`bg-white ${linkTextColor} border-2 ${
                gender === "boy" ? "border-blue-400" : "border-pink-400"
              } font-bold px-4 py-2 rounded-full shadow-md ${linkHoverColor} transition transform hover:scale-105`}
            >
              Contact
            </Link>
            <Link
              to="/Login"
              className="bg-yellow-400 border-2 border-yellow-500 text-brown-800 font-bold px-4 py-2 rounded-full shadow-md hover:bg-yellow-500 hover:text-white transition transform hover:scale-105"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Login Section */}
      <div className={`min-h-screen ${bgColor} flex items-center justify-center px-4 py-12`}>
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className={`bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full text-center border-4 ${
      gender === "boy" ? "border-blue-300" : "border-pink-300"
    }`}
  >
    <h1 className={`text-4xl font-bold ${textColor} mb-6`}>🎈 JoyVerse Login 🎈</h1>
    <form onSubmit={handleLogin} className="space-y-4">
      <div
        className={`flex items-center rounded-xl px-4 py-2 ${
          gender === "boy" ? "bg-blue-100" : "bg-pink-100"
        }`}
      >
        <FaUserAlt className={`${textColor} text-xl mr-2`} />
        <input
          type="text"
          placeholder="Your Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={`bg-transparent w-full outline-none text-lg text-gray-700 ${
            gender === "boy" ? "placeholder-blue-300" : "placeholder-pink-300"
          }`}
          required
        />
      </div>

      <div
        className={`flex items-center rounded-xl px-4 py-2 ${
          gender === "boy" ? "bg-blue-100" : "bg-pink-100"
        }`}
      >
        <FaLock className={`${textColor} text-xl mr-2`} />
        <input
          type="password"
          placeholder="Secret Code"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`bg-transparent w-full outline-none text-lg text-gray-700 ${
            gender === "boy" ? "placeholder-blue-300" : "placeholder-pink-300"
          }`}
          required
        />
      </div>

      <button
        type="submit"
        className={`text-white font-bold py-2 px-6 rounded-full text-lg shadow-md ${buttonBgColor} ${buttonHoverColor} transition transform hover:scale-110`}
      >
        🚀 Let's Go!
      </button>
    </form>

    <div className="mt-4">
      <p className="text-sm">Have an account?</p>
      <Link to="/SignUp">
        <span className={`${textColor} font-bold hover:underline`}>Sign Up</span>
      </Link>
    </div>
  </motion.div>
</div>


      <footer className={`${footerBgColor} ${ftextColor} py-8 px-4 mt-2`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <div>
            <h3 className="text-2xl font-extrabold mb-2">JoyVerse</h3>
            <p>Celebrating the colorful minds of young explorers!</p>
          </div>
          <div className="flex gap-6">
            <a href="/About" className="hover:underline hover:text-pink-600">
              About
            </a>
            <a href="/Games" className="hover:underline hover:text-pink-600">
              Games
            </a>
            <a href="/Contact" className="hover:underline hover:text-pink-600">
              Contact
            </a>
          </div>
          <div>© {new Date().getFullYear()} JoyVerse. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
};

export default LoginPage;
