import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserPlus } from "react-icons/fa";

const SignUp = () => {
  const gender = localStorage.getItem("gender") || "girl";

  const [childName, setChildName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [email, setEmail] = useState("");

  const [registered, setRegistered] = useState(false);
  const [generatedUsername, setGeneratedUsername] = useState("");
  const [generatedPassword, setGeneratedPassword] = useState("");

  const bgColor =
    gender === "boy"
      ? "bg-gradient-to-b from-blue-100 via-white to-blue-100"
      : "bg-gradient-to-b from-pink-100 via-white to-pink-100";
  const textColor = gender === "boy" ? "text-blue-600" : "text-pink-600";
  const buttonBgColor = gender === "boy" ? "bg-blue-400" : "bg-pink-400";
  const buttonHoverColor =
    gender === "boy" ? "hover:bg-blue-500" : "hover:bg-pink-500";
  const footerBgColor = gender === "boy" ? "bg-blue-200" : "bg-pink-200";
  const ftextColor = gender === "boy" ? "text-blue-800" : "text-pink-800";

  const handleRegister = (e) => {
    e.preventDefault();
    const user = childName.toLowerCase().replace(/\s/g, "") + Math.floor(Math.random() * 100);
    const pass = Math.random().toString(36).substring(2, 8);

    setGeneratedUsername(user);
    setGeneratedPassword(pass);
    setRegistered(true);
  };

  return (
    <>
      <div className={`min-h-screen ${bgColor} flex items-center justify-center px-4 py-12`}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center border-4 border-yellow-300"
        >
          <h1 className={`text-4xl font-bold ${textColor} mb-6`}>🧸 Join JoyVerse!</h1>

          {!registered ? (
            <form onSubmit={handleRegister} className="space-y-4 text-left">
        

              <div className="flex flex-col">
                <label className={`font-semibold ${textColor}`}>First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-yellow-100 rounded-xl px-4 py-2 outline-none text-gray-700"
                  placeholder="Optional"
                />
              </div>

              <div className="flex flex-col">
                <label className={`font-semibold ${textColor}`}>Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="bg-yellow-100 rounded-xl px-4 py-2 outline-none text-gray-700"
                  placeholder="Optional"
                />
              </div>

              <div className="flex flex-col">
                <label className={`font-semibold ${textColor}`}>Date of Birth</label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="bg-yellow-100 rounded-xl px-4 py-2 outline-none text-gray-700"
                />
              </div>

              <div className="flex flex-col">
                <label className={`font-semibold ${textColor}`}>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-yellow-100 rounded-xl px-4 py-2 outline-none text-gray-700"
                  placeholder="Optional"
                />
              </div>

              <button
                type="submit"
                className={`w-full ${buttonBgColor} ${buttonHoverColor} text-white font-bold py-2 px-6 rounded-full shadow-md transition transform hover:scale-110 mt-4`}
              >
                <FaUserPlus className="inline-block mr-2" />
                Create Account
              </button>
            </form>
          ) : (
            <div className="text-center">
              <h2 className="text-xl font-bold text-green-600 mb-4">🎉 Registration Successful!</h2>
              <p className="text-md font-medium text-gray-700">Here are your login details:</p>
              <div className="bg-gray-100 rounded-lg p-4 mt-3 text-left">
                <p><strong>👤 Username:</strong> {generatedUsername}</p>
                <p><strong>🔐 Password:</strong> {generatedPassword}</p>
              </div>
              <Link to="/login">
                <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full shadow-md transition transform hover:scale-105">
                  Go to Login 🚀
                </button>
              </Link>
            </div>
          )}

          <p className="mt-6 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className={`${textColor} font-bold hover:underline`}>
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>

      <footer className={`${footerBgColor} ${ftextColor} py-8 px-4`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <div>
            <h3 className="text-2xl font-extrabold mb-2">JoyVerse</h3>
            <p>Celebrating the colorful minds of young explorers!</p>
          </div>
          <div className="flex gap-6">
            <a href="/About" className="hover:underline">About</a>
            <a href="/Games" className="hover:underline">Games</a>
            <a href="/Contact" className="hover:underline">Contact</a>
          </div>
          <div>© {new Date().getFullYear()} JoyVerse. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
};

export default SignUp;
