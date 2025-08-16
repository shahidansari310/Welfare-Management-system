"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Moon, Sun, Shield } from "lucide-react"

// Mock Admin AuthService
const AdminAuthService = {
  login: (username, password) => {
    // Mock admin authentication - always returns success
    return Promise.resolve({ success: true, role: "Admin", username })
  },
}

export default function AdminLoginPage() {
  const [currentUser, setCurrentUser] = useState(null)
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setDarkMode(true)
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    localStorage.setItem("theme", !darkMode ? "dark" : "light")
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    if (loginForm.username && loginForm.password) {
      setIsLoading(true)
      setTimeout(async () => {
        const result = await AdminAuthService.login(loginForm.username, loginForm.password)
        if (result.success) {
          setCurrentUser({ username: loginForm.username, role: "Admin" })
        }
        setIsLoading(false)
      }, 2000)
    }
  }

  const handleLogout = () => {
    setCurrentUser(null)
    setLoginForm({ username: "", password: "" })
  }

  if (!currentUser) {
    return (
      <div
        className={`min-h-screen transition-all duration-500 ${darkMode
          ? "bg-gradient-to-br from-gray-900 via-purple-900 via-blue-900 to-indigo-900 animate-gradient-x"
          : "bg-gradient-to-br from-blue-50 via-purple-50 via-pink-50 to-orange-50 animate-gradient-x"}`}
      >
        <div
          className={` transition-all duration-500 ${darkMode
            ? "bg-gradient-to-r from-purple-800 via-blue-800 via-indigo-800 to-pink-800 animate-gradient-x"
            : "bg-gradient-to-r from-purple-600 via-blue-600 via-indigo-600 to-teal-600 animate-gradient-x"}`}
        >
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <h1 className="text-2xl md:text-3xl font-bold text-white">WelfareHub</h1>
                <p className="text-pink-100 font-semibold">Administrator Portal</p>
              </div>
              <Button
                onClick={toggleDarkMode}
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 rounded-full"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        <div
          className={`bg-gradient-to-r from-orange-600 to-orange-800 text-white shadow-xl transition-all duration-500 ${darkMode ? "bg-gradient-to-r from-orange-900 via-pink-900 to-purple-900" : "bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600"}`}
        >
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-xl md:text-2xl font-bold">Administrator Portal</h1>
                <p className="text-orange-200 text-sm">System Management & Analytics</p>
              </div>
              <Link href="/">
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-pink-800 bg-transparent rounded-xl"
                >
                  Home
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Admin Login Form */}
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)] px-6">
          <Card
            className={`w-full max-w-md transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"} shadow-2xl border-2 ${darkMode ? "bg-gradient-to-br from-pink-900/80 to-purple-900/80 border-pink-500/50" : "bg-gradient-to-br from-white/90 to-pink-50/90 border-pink-200"} backdrop-blur-xl`}
          >
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500">
                  <Shield className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle
                className={`text-2xl mb-2 bg-gradient-to-r ${darkMode ? "from-pink-300 to-purple-300" : "from-pink-700 to-purple-700"} bg-clip-text text-transparent`}
              >
                Administrator Access
              </CardTitle>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Secure admin portal for system management
              </p>
              <div
                className={`mt-4 p-3 ${darkMode ? "bg-gradient-to-r from-pink-900/50 to-purple-900/50 border-pink-500/50" : "bg-gradient-to-r from-pink-50 to-purple-50 border-pink-300"} border-l-4 rounded-r-xl`}
              >
                <p className={`text-xs ${darkMode ? "text-pink-200" : "text-pink-700"}`}>
                  Modern Student Project - Educational Purpose
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Admin Username"
                    value={loginForm.username}
                    onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                    className={`rounded-xl border-2 transition-colors h-12 ${darkMode ? "bg-gray-800/50 border-pink-500/50 text-white placeholder:text-gray-400 focus:border-pink-400" : "border-gray-200 focus:border-pink-600"}`}
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Admin Password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    className={`rounded-xl border-2 transition-colors h-12 ${darkMode ? "bg-gray-800/50 border-pink-500/50 text-white placeholder:text-gray-400 focus:border-pink-400" : "border-gray-200 focus:border-pink-600"}`}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 hover:from-orange-700 hover:via-pink-700 hover:to-purple-700 text-white rounded-xl h-12 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Authenticating...
                    </div>
                  ) : (
                    "Access Admin Portal"
                  )}
                </Button>
              </form>
              <div className="mt-6 text-center">
                <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Regular user?{" "}
                  <Link href="/login" className="text-pink-400 hover:underline font-semibold">
                    User Login
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`min-h-screen  transition-all duration-500 ${darkMode
            ? "bg-gradient-to-r from-purple-800 via-blue-800 via-indigo-800 to-pink-800 animate-gradient-x"
            : "bg-gradient-to-r from-purple-600 via-blue-600 via-indigo-600 to-teal-600 animate-gradient-x"}`}
    >
      <div
        className={`transition-all duration-500 ${darkMode ? "bg-gradient-to-r from-pink-800 via-purple-800 to-orange-800" : "bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600"}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-3">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-lg md:text-xl font-bold text-white">WelfareHub</h1>
              <p className="text-pink-100 font-semibold text-xs">Admin Management Portal</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`bg-gradient-to-r from-orange-600 to-orange-800 text-white shadow-xl transition-all duration-500 ${darkMode ? "bg-gradient-to-r from-orange-900 via-pink-900 to-purple-900" : "bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600"}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold">Admin Portal - Welfare Management</h1>
            <div className="flex items-center gap-4">
              <span className={`px-4 py-2 rounded-full text-sm ${darkMode ? "bg-pink-800/50" : "bg-white/20"}`}>
                Welcome, {currentUser.username} (Administrator)
              </span>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-pink-800 bg-transparent rounded-xl"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6">
        <AdminPanel darkMode={darkMode} />
      </div>
    </div>
  )
}

function AdminPanel({ darkMode }) {
  const [schemes, setSchemes] = useState([
    {
      id: 1,
      name: "PM-KISAN योजना | PM-KISAN Scheme",
      description: "किसानों के लिए वित्तीय सहायता | Financial aid for farmers",
      eligibility: "छोटे और सीमांत किसान | Small and marginal farmers",
      applications: 15,
    },
    {
      id: 2,
      name: "आयुष्मान भारत | Ayushman Bharat",
      description: "स्वास्थ्य बीमा योजना | Health insurance scheme",
      eligibility: "गरीब और कमजोर परिवार | Poor and vulnerable families",
      applications: 8,
    },
    {
      id: 3,
      name: "प्रधानमंत्री आवास योजना | PMAY",
      description: "आवास सब्सिडी योजना | Housing subsidy scheme",
      eligibility: "पहली बार घर खरीदार | First-time home buyers",
      applications: 12,
    },
  ])

  const [schemeForm, setSchemeForm] = useState({
    name: "",
    description: "",
    eligibility: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleAddScheme = async (e) => {
    e.preventDefault()
    if (schemeForm.name && schemeForm.description && schemeForm.eligibility) {
      setIsSubmitting(true)
      setTimeout(() => {
        const newScheme = {
          id: schemes.length + 1,
          name: schemeForm.name,
          description: schemeForm.description,
          eligibility: schemeForm.eligibility,
          applications: 0,
        }
        setSchemes([...schemes, newScheme])
        setSchemeForm({ name: "", description: "", eligibility: "" })
        setIsSubmitting(false)
      }, 2000)
    }
  }

  return (
    <div className="space-y-8">
      {/* Add Scheme */}
      <Card
        className={`shadow-xl border-2 backdrop-blur-sm ${darkMode ? "bg-gradient-to-br from-pink-900/50 to-purple-900/50 border-pink-500/50" : "bg-gradient-to-br from-white/90 to-pink-50/90 border-pink-200"}`}
      >
        <CardHeader
          className={`${darkMode ? "bg-gradient-to-r from-pink-700 to-purple-700" : "bg-gradient-to-r from-pink-600 to-purple-600"} text-white rounded-t-lg`}
        >
          <CardTitle className="text-xl">Add New Scheme</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleAddScheme} className="space-y-6">
            <Input
              placeholder="Scheme Name"
              value={schemeForm.name}
              onChange={(e) => setSchemeForm({ ...schemeForm, name: e.target.value })}
              className={`rounded-xl border-2 transition-colors h-12 ${darkMode ? "bg-gray-800/50 border-pink-500/50 text-white placeholder:text-gray-400 focus:border-pink-400" : "border-gray-200 focus:border-pink-600"}`}
            />
            <Input
              placeholder="Description"
              value={schemeForm.description}
              onChange={(e) => setSchemeForm({ ...schemeForm, description: e.target.value })}
              className={`rounded-xl border-2 transition-colors h-12 ${darkMode ? "bg-gray-800/50 border-pink-500/50 text-white placeholder:text-gray-400 focus:border-pink-400" : "border-gray-200 focus:border-pink-600"}`}
            />
            <Input
              placeholder="Eligibility Criteria"
              value={schemeForm.eligibility}
              onChange={(e) => setSchemeForm({ ...schemeForm, eligibility: e.target.value })}
              className={`rounded-xl border-2 transition-colors h-12 ${darkMode ? "bg-gray-800/50 border-pink-500/50 text-white placeholder:text-gray-400 focus:border-pink-400" : "border-gray-200 focus:border-pink-600"}`}
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 hover:from-pink-700 hover:via-purple-700 hover:to-orange-700 text-white rounded-xl h-12 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Adding Scheme...
                </div>
              ) : (
                "Add Scheme"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* View Applications */}
      <Card
        className={`shadow-xl border-2 backdrop-blur-sm ${darkMode ? "bg-gradient-to-br from-pink-900/50 to-purple-900/50 border-pink-500/50" : "bg-gradient-to-br from-white/90 to-pink-50/90 border-pink-200"}`}
      >
        <CardHeader
          className={`${darkMode ? "bg-gradient-to-r from-pink-700 to-purple-700" : "bg-gradient-to-r from-pink-600 to-purple-600"} text-white rounded-t-lg`}
        >
          <CardTitle className="text-xl">Total Applications by Scheme</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr
                  className={`${darkMode ? "bg-gradient-to-r from-pink-700 to-purple-700" : "bg-gradient-to-r from-pink-600 to-purple-600"} text-white`}
                >
                  <th className="border border-gray-300 p-4 text-left rounded-tl-xl">Scheme Name</th>
                  <th className="border border-gray-300 p-4 text-left rounded-tr-xl">Application Count</th>
                </tr>
              </thead>
              <tbody>
                {schemes.map((scheme) => (
                  <tr key={scheme.id} className="bg-white hover:bg-orange-50 transition-colors duration-200">
                    <td className="border border-gray-300 p-4">{scheme.name}</td>
                    <td className="border border-gray-300 p-4 font-semibold text-orange-600">{scheme.applications}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
