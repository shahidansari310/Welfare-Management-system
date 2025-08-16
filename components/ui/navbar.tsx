import React from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

interface NavbarProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <>
    <div
      className={`${darkMode
        ? "bg-gradient-to-r from-purple-800 via-blue-800 via-indigo-800 to-pink-800 animate-gradient-x"
        : "bg-gradient-to-r from-purple-600 via-blue-600 via-indigo-600 to-teal-600 animate-gradient-x"
      } shadow-2xl`}
      style={{
        backgroundSize: "200% 200%",
        animation: "gradient 8s ease infinite",
      }}
    >
      <div className="max-w-6xl mx-auto px-2 py-2">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h1
              className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-white via-yellow-200 via-pink-200 to-cyan-200 bg-clip-text animate-gradient-x"
              style={{ backgroundSize: "400% 400%", animation: "gradient 6s ease infinite" }}
            >
              &lt; WelfareHub /&gt;
            </h1>
            <p className="text-blue-100 font-semibold bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 bg-clip-text text-transparent">
              Modern Welfare Management Platform
            </p>
          </div>
          <Button
            onClick={toggleDarkMode}
            variant="ghost"
            size="icon"
            className="text-white hover:bg-gradient-to-r hover:from-white/20 hover:to-purple-300/20 rounded-full transition-all duration-300 border border-white/30 hover:border-white/50"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </div>
    <hr/>
    </>
  )
}

export default Navbar
