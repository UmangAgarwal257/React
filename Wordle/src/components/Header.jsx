import {
  HelpCircle,
  Share,
  Settings,
  Sun,
  Moon,
  Keyboard,
  User,
} from "lucide-react";
import { useState } from "react";

const Header = ({ darkMode, setDarkMode, keyboardInput, setKeyboardInput }) => {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-md">
      <button className="flex items-center space-x-2 hover:text-gray-400">
        <HelpCircle className="h-6 w-6" />
        <span className="hidden sm:inline">How to Play</span>
      </button>

      <div className="flex items-center space-x-2 text-2xl font-bold">
        🟩 <span>WORDLE</span>
      </div>

      <div className="flex items-center space-x-10">
        <button className="hover:text-gray-400">
          <Share className="h-6 w-6" />
        </button>
        <div className="relative">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="hover:text-gray-400"
          >
            <Settings className="h-6 w-6" />
          </button>
          {showSettings && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg p-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center justify-between w-full p-2 hover:bg-gray-700"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                <span>Dark Mode</span>
              </button>
              <button
                onClick={() => setKeyboardInput(!keyboardInput)}
                className="flex items-center justify-between w-full p-2 hover:bg-gray-700"
              >
                <Keyboard className="h-5 w-5" />
                <span>On-Screen Keyboard</span>
              </button>
            </div>
          )}
        </div>
        <button className="hover:text-gray-400">
          <User className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
