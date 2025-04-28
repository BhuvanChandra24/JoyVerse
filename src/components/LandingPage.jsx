import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  const handleSelection = (gender) => {
    // Store the selected gender in localStorage
    localStorage.setItem('gender', gender);

    // Navigate to the appropriate page based on gender
    if (gender === 'boy') {
      navigate('/boy');
    } else if (gender === 'girl') {
      navigate('/girl');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-yellow-200 to-blue-100">
      <h1 className="text-4xl font-bold mb-8 text-blue-900">Welcome to JoyVerse
      </h1>
      <p  className="text-2xl font-bold mb-8 text-blue-500">Select your Gender.</p>
      <div className="flex gap-10">
        <button
          onClick={() => handleSelection('boy')}
          className="px-8 py-4 bg-blue-500 text-white text-xl rounded-full hover:bg-blue-700 transition"
        >
           Boy
        </button>
        <button
          onClick={() => handleSelection('girl')}
          className="px-8 py-4 bg-pink-400 text-white text-xl rounded-full hover:bg-pink-600 transition"
        >
           Girl
        </button>
      </div>
    </div>
  );
}
