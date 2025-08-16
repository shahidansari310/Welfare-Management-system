"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import Navbar from "@/components/ui/navbar"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setDarkMode(true)
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    localStorage.setItem("theme", !darkMode ? "dark" : "light")
  }

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-purple-900 via-blue-900 to-indigo-900 animate-gradient-x"
          : "bg-gradient-to-br from-blue-50 via-purple-50 via-pink-50 to-orange-50 animate-gradient-x"
      }`}
      style={{
        backgroundSize: "400% 400%",
        animation: "gradient 15s ease infinite",
      }}
    >

      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Hero Banner */}
      <div
        className={`${
          darkMode
            ? "bg-gradient-to-r from-indigo-900 via-purple-900 via-pink-900 to-red-900 animate-gradient-x"
            : "bg-gradient-to-r from-purple-600 via-blue-600 via-indigo-600 to-teal-600 animate-gradient-x"
        } text-white shadow-xl`}
        style={{
          backgroundSize: "400% 400%",
          animation: "gradient 12s ease infinite",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1
              className="text-4xl md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-white via-yellow-200 via-pink-200 via-cyan-200 to-green-200 bg-clip-text text-transparent animate-gradient-x"
              style={{ backgroundSize: "400% 400%", animation: "gradient 8s ease infinite" }}
            >
              Welfare Management
            </h1>
            <p className="text-xl text-center text-blue-100 mb-4 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 bg-clip-text text-transparent">
              Innovation • Efficiency • Transparency
            </p>
            <div className="text-center">
              <p className="text-sm text-purple-200 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 bg-clip-text text-transparent">
                A Modern Digital Platform for Welfare Services
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r ${
              darkMode
                ? "from-purple-400 via-pink-400 via-blue-400 via-cyan-400 to-green-400 animate-gradient-x"
                : "from-purple-600 via-blue-600 via-indigo-600 via-teal-600 to-green-600 animate-gradient-x"
            } bg-clip-text text-transparent`}
            style={{ backgroundSize: "400% 400%", animation: "gradient 10s ease infinite" }}
          >
            Welcome to Modern Welfare Services
          </h2>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Access welfare schemes and benefits through our comprehensive digital platform. Track applications and
            manage services with modern tools designed for citizens, officers, and administrators.
          </p>
          <div
            className={`mt-6 p-6 ${
              darkMode
                ? "bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-pink-900/50"
                : "bg-gradient-to-r from-purple-50/80 via-blue-50/80 to-pink-50/80"
            } border-l-4 border-gradient-to-b from-purple-400 via-blue-400 to-pink-400 rounded-xl backdrop-blur-sm shadow-lg`}
            style={{
              borderImage: "linear-gradient(45deg, #8b5cf6, #3b82f6, #ec4899) 1",
              borderImageSlice: 1,
            }}
          >
            <p
              className={`text-sm italic ${darkMode ? "text-purple-200" : "text-purple-200"} bg-gradient-to-r ${darkMode ? "from-purple-200 via-blue-200 to-pink-200" : "from-purple-800 via-blue-800 to-pink-800"} bg-clip-text`}
            >
              "A modern student project showcasing digital welfare management solutions"
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "For Citizens",
              description: "Apply for various welfare schemes and benefits. Track your applications in real-time.",
              icon: "👥",
              delay: "delay-500",
              schemes: ["Benefits", "Healthcare", "Housing"],
              gradient: darkMode
                ? "from-purple-800/80 via-blue-800/80 to-indigo-800/80"
                : "from-purple-100/90 via-blue-100/90 to-indigo-100/90",
              borderGradient: "from-purple-500 via-blue-500 to-indigo-500",
            },
            {
              title: "For Officers",
              description: "Review applications, approve benefits, manage transfers, and serve citizens efficiently.",
              icon: "👨‍💼",
              delay: "delay-700",
              schemes: ["Applications", "Approvals", "Management"],
              gradient: darkMode
                ? "from-blue-800/80 via-indigo-800/80 to-teal-800/80"
                : "from-blue-100/90 via-indigo-100/90 to-teal-100/90",
              borderGradient: "from-blue-500 via-indigo-500 to-teal-500",
            },
            {
              title: "For Administrators",
              description:
                "Manage all welfare schemes, view analytics, monitor implementation, and ensure transparency.",
              icon: "⚙️",
              delay: "delay-900",
              schemes: ["Analytics", "Monitoring", "Reports"],
              gradient: darkMode
                ? "from-indigo-800/80 via-pink-800/80 to-red-800/80"
                : "from-indigo-100/90 via-pink-100/90 to-red-100/90",
              borderGradient: "from-indigo-500 via-pink-500 to-red-500",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className={`transform transition-all duration-1000 ${feature.delay} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} 
                hover:scale-105 hover:shadow-2xl shadow-xl bg-gradient-to-br ${feature.gradient} 
                backdrop-blur-sm border-2 hover:border-transparent transition-all duration-300 relative overflow-hidden group`}
              style={{
                background: darkMode
                  ? `linear-gradient(135deg, rgba(147, 51, 234, 0.8), rgba(59, 130, 246, 0.8), rgba(99, 102, 241, 0.8))`
                  : `linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1))`,
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.borderGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-gradient-x`}
                style={{ backgroundSize: "400% 400%", animation: "gradient 6s ease infinite" }}
              ></div>
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="text-5xl mb-4 filter drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle
                  className={`text-lg font-bold bg-gradient-to-r ${
                    darkMode
                      ? "from-purple-300 via-blue-300 to-indigo-300 animate-gradient-x"
                      : "from-purple-700 via-blue-700 to-indigo-700 animate-gradient-x"
                  } bg-clip-text text-transparent`}
                  style={{ backgroundSize: "400% 400%", animation: "gradient 8s ease infinite" }}
                >
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{feature.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {feature.schemes.map((scheme, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105 ${
                        darkMode
                          ? "bg-gradient-to-r from-purple-700/50 via-blue-700/50 to-indigo-700/50 text-purple-200 border border-purple-500/50 hover:border-purple-400/70"
                          : "bg-gradient-to-r from-purple-200/80 via-blue-200/80 to-indigo-200/80 text-purple-800 border border-purple-300 hover:border-purple-400"
                      }`}
                    >
                      {scheme}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`text-center transform transition-all duration-1000 delay-1100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h3
            className={`text-2xl font-bold mb-8 bg-gradient-to-r ${
              darkMode
                ? "from-purple-400 via-pink-400 via-blue-400 to-cyan-400 animate-gradient-x"
                : "from-purple-600 via-pink-600 via-blue-600 to-cyan-600 animate-gradient-x"
            } bg-clip-text text-transparent`}
            style={{ backgroundSize: "400% 400%", animation: "gradient 10s ease infinite" }}
          >
            Choose Your Access Portal
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/login">
              <Button
                className="bg-gradient-to-r from-purple-600 via-blue-600 via-indigo-600 to-teal-600 hover:from-purple-700 hover:via-blue-700 hover:via-indigo-700 hover:to-teal-700 text-white px-10 py-5 text-lg rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 hover:shadow-purple-500/25 border border-purple-400/50 animate-gradient-x relative overflow-hidden group"
                style={{ backgroundSize: "400% 400%", animation: "gradient 8s ease infinite" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700"></div>
                <span className="bg-gradient-to-r from-white via-yellow-100 to-cyan-100 bg-clip-text text-transparent font-bold relative z-10">
                  Citizen & Officer Login
                </span>
              </Button>
            </Link>
            <Link href="/admin-login">
              <Button
                className="bg-gradient-to-r from-pink-600 via-purple-600 via-indigo-600 to-blue-600 hover:from-pink-700 hover:via-purple-700 hover:via-indigo-700 hover:to-blue-700 text-white px-10 py-5 text-lg rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 hover:shadow-pink-500/25 border border-pink-400/50 animate-gradient-x relative overflow-hidden group"
                style={{ backgroundSize: "400% 400%", animation: "gradient 8s ease infinite" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700"></div>
                <span className="bg-gradient-to-r from-white via-pink-100 to-purple-100 bg-clip-text text-transparent font-bold relative z-10">
                  Admin Portal
                </span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Available Welfare Schemes */}
        <div
          className={`mt-20 transform transition-all duration-1000 delay-1200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div
            className={`${
              darkMode
                ? "bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-500/30"
                : "bg-gradient-to-r from-purple-50/80 to-blue-50/80 border-purple-200"
            } rounded-3xl p-8 shadow-2xl border backdrop-blur-xl`}
          >
            <h3
              className={`text-2xl font-bold text-center mb-8 bg-gradient-to-r ${
                darkMode ? "from-purple-400 to-blue-400" : "from-purple-600 to-indigo-600"
              } bg-clip-text text-transparent`}
            >
              Available Welfare Schemes
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Agriculture Support", icon: "🌾", desc: "Farmer Benefits" },
                { name: "Health Insurance", icon: "🏥", desc: "Medical Coverage" },
                { name: "Employment", icon: "🔨", desc: "Job Guarantee" },
                { name: "Housing", icon: "🏠", desc: "Home Schemes" },
              ].map((scheme, index) => (
                <div
                  key={index}
                  className={`text-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                    darkMode
                      ? "bg-gradient-to-br from-purple-800/50 via-blue-800/50 to-indigo-800/50 border border-purple-500/30"
                      : "bg-gradient-to-br from-white/80 via-purple-50/80 to-blue-50/80 border border-purple-200"
                  } backdrop-blur-sm`}
                >
                  <div className="text-4xl mb-3 filter drop-shadow-lg">{scheme.icon}</div>
                  <div className={`font-bold text-sm mb-1 ${darkMode ? "text-purple-300" : "text-purple-700"}`}>
                    {scheme.name}
                  </div>
                  <div className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{scheme.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Platform Statistics */}
        <div
          className={`mt-20 transform transition-all duration-1000 delay-1300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div
            className={`${
              darkMode
                ? "bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border-indigo-500/30"
                : "bg-gradient-to-r from-indigo-50/80 to-purple-50/80 border-indigo-200"
            } rounded-3xl p-8 shadow-2xl border backdrop-blur-xl`}
          >
            <h3
              className={`text-2xl font-bold text-center mb-8 bg-gradient-to-r ${
                darkMode ? "from-indigo-400 to-pink-400" : "from-indigo-600 to-pink-600"
              } bg-clip-text text-transparent`}
            >
              Platform Statistics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Active Schemes", value: "25+" },
                { label: "Applications Processed", value: "10,000+" },
                { label: "Citizens Served", value: "5,000+" },
                { label: "Success Rate", value: "95%" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`text-4xl font-bold mb-2 bg-gradient-to-r ${
                      darkMode ? "from-indigo-400 to-pink-400" : "from-indigo-600 to-pink-600"
                    } bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>
                  <div className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className={`${
          darkMode
            ? "bg-gradient-to-r from-purple-900 via-indigo-900 via-blue-900 to-teal-900 animate-gradient-x"
            : "bg-gradient-to-r from-purple-800 via-indigo-800 via-blue-800 to-teal-800 animate-gradient-x"
        } text-white py-12 mt-16`}
        style={{
          backgroundSize: "400% 400%",
          animation: "gradient 18s ease infinite",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p
              className="text-xl font-bold mb-2 bg-gradient-to-r from-white via-yellow-200 via-cyan-200 to-green-200 bg-clip-text text-transparent animate-gradient-x"
              style={{ backgroundSize: "400% 400%", animation: "gradient 8s ease infinite" }}
            >
              WelfareHub
            </p>
            <p className="text-sm mb-4">&copy; 2024 Modern Welfare Management Platform. All rights reserved.</p>
            <p className="text-xs text-purple-200 bg-gradient-to-r from-purple-200 via-blue-200 to-teal-200 bg-clip-text text-transparent">
              Developed as a Student Project | Modern Digital Welfare Solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
