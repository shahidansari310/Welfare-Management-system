"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Moon, Sun, Users } from "lucide-react"

// Mock AuthService
const AuthService = {
  login: (username, password, role) => {
    // Mock authentication - always returns success
    return Promise.resolve({ success: true, role, username })
  },
}

export default function LoginPage() {
  const [currentUser, setCurrentUser] = useState(null)
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
    role: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const router = useRouter()

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
    if (loginForm.username && loginForm.password && loginForm.role) {
      setIsLoading(true)
      setTimeout(async () => {
        const result = await AuthService.login(loginForm.username, loginForm.password, loginForm.role)
        if (result.success) {
          setCurrentUser({ username: loginForm.username, role: loginForm.role })
        }
        setIsLoading(false)
      }, 1500)
    }
  }

  const handleLogout = () => {
    setCurrentUser(null)
    setLoginForm({ username: "", password: "", role: "" })
  }

  if (!currentUser) {
    return (
      <div
        className={`min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 transition-all duration-500 ${darkMode ? "bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900" : ""}`}
      >
        <div
          className={`bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-2xl border-b-4 border-blue-800 transition-all duration-500 ${darkMode ? "bg-gradient-to-r from-purple-800 via-blue-800 to-indigo-800" : ""}`}
        >
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <h1 className="text-2xl md:text-3xl font-bold text-white">WelfareHub</h1>
                <p className="text-blue-100 font-semibold">User Access Portal</p>
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
          className={`bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white shadow-xl transition-all duration-500 ${darkMode ? "bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900" : ""}`}
        >
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-xl md:text-2xl font-bold">Citizen & Officer Portal</h1>
                <p className="text-blue-200 text-sm">Modern Welfare Management System</p>
              </div>
              <Link href="/">
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-purple-800 bg-transparent rounded-xl"
                >
                  Home
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)] px-6">
          <Card
            className={`w-full max-w-md transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"} shadow-2xl border-2 border-orange-200 bg-white/95 backdrop-blur-sm ${darkMode ? "bg-gradient-to-br from-purple-900/80 to-blue-900/80 border-purple-500/50" : "bg-gradient-to-br from-white/90 to-purple-50/90 border-purple-200"}`}
          >
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle
                className={`text-2xl mb-2 bg-gradient-to-r ${darkMode ? "from-purple-300 to-blue-300" : "from-purple-700 to-blue-700"} bg-clip-text text-transparent`}
              >
                User Login
              </CardTitle>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>Access your welfare services portal</p>
              <div
                className={`mt-4 p-3 ${darkMode ? "bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-500/50" : "bg-gradient-to-r from-purple-50 to-blue-50 border-purple-300"} border-l-4 rounded-r-xl`}
              >
                <p className={`text-xs ${darkMode ? "text-purple-200" : "text-purple-700"}`}>
                  Modern Student Project - Educational Purpose
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Username"
                    value={loginForm.username}
                    onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                    className={`rounded-xl border-2 transition-colors h-12 ${darkMode ? "bg-gray-800/50 border-purple-500/50 text-white placeholder:text-gray-400 focus:border-purple-400" : "border-gray-200 focus:border-purple-600"}`}
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    className={`rounded-xl border-2 transition-colors h-12 ${darkMode ? "bg-gray-800/50 border-purple-500/50 text-white placeholder:text-gray-400 focus:border-purple-400" : "border-gray-200 focus:border-purple-600"}`}
                  />
                </div>
                <div className="space-y-2">
                  <Select value={loginForm.role} onValueChange={(value) => setLoginForm({ ...loginForm, role: value })}>
                    <SelectTrigger
                      className={`rounded-xl border-2 transition-colors h-12 ${darkMode ? "bg-gray-800/50 border-purple-500/50 text-white focus:border-purple-400" : "border-gray-200 focus:border-purple-600"}`}
                    >
                      <SelectValue placeholder="Select Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Citizen">Citizen</SelectItem>
                      <SelectItem value="Officer">Officer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 text-white rounded-xl h-12 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Logging in...
                    </div>
                  ) : (
                    "Login"
                  )}
                </Button>
              </form>
              <div className="mt-6 text-center">
                <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Need admin access?{" "}
                  <Link href="/admin-login" className="text-purple-400 hover:underline font-semibold">
                    Admin Portal
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
      className={`min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 transition-all duration-500 ${darkMode ? "bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900" : ""}`}
    >
      <div
        className={`bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-2xl transition-all duration-500 ${darkMode ? "bg-gradient-to-r from-purple-800 via-blue-800 to-indigo-800" : ""}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-3">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-lg md:text-xl font-bold text-white">WelfareHub</h1>
              <p className="text-blue-100 font-semibold text-xs">Modern Welfare Platform</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white shadow-xl transition-all duration-500 ${darkMode ? "bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900" : ""}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold">Welfare Management System</h1>
            <div className="flex items-center gap-4">
              <span className={`px-4 py-2 rounded-full text-sm ${darkMode ? "bg-purple-800/50" : "bg-white/20"}`}>
                Welcome, {currentUser.username} ({currentUser.role})
              </span>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-purple-800 bg-transparent rounded-xl"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6">
        {currentUser.role === "Citizen" && <CitizenPanel darkMode={darkMode} />}
        {currentUser.role === "Officer" && <OfficerPanel darkMode={darkMode} />}
      </div>
    </div>
  )
}

function CitizenPanel({ darkMode }) {
  const [applications, setApplications] = useState([
    { id: 1, schemeName: "PM-KISAN योजना | PM-KISAN Scheme", status: "Pending" },
    { id: 2, schemeName: "आयुष्मान भारत | Ayushman Bharat", status: "Approved" },
  ])

  const [applicationForm, setApplicationForm] = useState({
    scheme: "",
    name: "",
    age: "",
    aadhaar: "",
    address: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const availableSchemes = [
    "PM-KISAN योजना | PM-KISAN Scheme",
    "आयुष्मान भारत | Ayushman Bharat",
    "प्रधानमंत्री आवास योजना | PMAY",
    "मनरेगा | MGNREGA",
  ]

  const handleSubmitApplication = async (e) => {
    e.preventDefault()
    if (
      applicationForm.scheme &&
      applicationForm.name &&
      applicationForm.age &&
      applicationForm.aadhaar &&
      applicationForm.address
    ) {
      setIsSubmitting(true)
      setTimeout(() => {
        const newApplication = {
          id: applications.length + 1,
          schemeName: applicationForm.scheme,
          status: "Pending",
        }
        setApplications([...applications, newApplication])
        setApplicationForm({ scheme: "", name: "", age: "", aadhaar: "", address: "" })
        setIsSubmitting(false)
      }, 2000)
    }
  }

  return (
    <div className="space-y-8">
      {/* Apply for Scheme */}
      <Card
        className={`shadow-xl border-2 backdrop-blur-sm ${darkMode ? "bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-500/50" : "bg-gradient-to-br from-white/90 to-purple-50/90 border-purple-200"}`}
      >
        <CardHeader
          className={`bg-gradient-to-r ${darkMode ? "from-purple-700 to-blue-700" : "from-purple-600 to-blue-600"} text-white rounded-t-lg`}
        >
          <CardTitle className="text-xl">Apply for Scheme</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmitApplication} className="space-y-6">
            <div>
              <Select
                value={applicationForm.scheme}
                onValueChange={(value) => setApplicationForm({ ...applicationForm, scheme: value })}
              >
                <SelectTrigger
                  className={`rounded-xl border-2 transition-colors h-12 ${darkMode ? "bg-gray-800/50 border-purple-500/50 text-white focus:border-purple-400" : "border-gray-200 focus:border-purple-600"}`}
                >
                  <SelectValue placeholder="Select Scheme" />
                </SelectTrigger>
                <SelectContent>
                  {availableSchemes.map((scheme) => (
                    <SelectItem key={scheme} value={scheme}>
                      {scheme}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Full Name"
                value={applicationForm.name}
                onChange={(e) => setApplicationForm({ ...applicationForm, name: e.target.value })}
                className={`rounded-xl border-2 transition-colors h-12 ${darkMode ? "bg-gray-800/50 border-purple-500/50 text-white placeholder:text-gray-400 focus:border-purple-400" : "border-gray-200 focus:border-purple-600"}`}
              />
              <Input
                placeholder="Age"
                type="number"
                value={applicationForm.age}
                onChange={(e) => setApplicationForm({ ...applicationForm, age: e.target.value })}
                className={`rounded-xl border-2 transition-colors h-12 ${darkMode ? "bg-gray-800/50 border-purple-500/50 text-white placeholder:text-gray-400 focus:border-purple-400" : "border-gray-200 focus:border-purple-600"}`}
              />
            </div>
            <Input
              placeholder="Aadhaar Number"
              value={applicationForm.aadhaar}
              onChange={(e) => setApplicationForm({ ...applicationForm, aadhaar: e.target.value })}
              className={`rounded-xl border-2 transition-colors h-12 ${darkMode ? "bg-gray-800/50 border-purple-500/50 text-white placeholder:text-gray-400 focus:border-purple-400" : "border-gray-200 focus:border-purple-600"}`}
            />
            <Input
              placeholder="Address"
              value={applicationForm.address}
              onChange={(e) => setApplicationForm({ ...applicationForm, address: e.target.value })}
              className={`rounded-xl border-2 transition-colors h-12 ${darkMode ? "bg-gray-800/50 border-purple-500/50 text-white placeholder:text-gray-400 focus:border-purple-400" : "border-gray-200 focus:border-purple-600"}`}
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 text-white rounded-xl h-12 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Submitting Application...
                </div>
              ) : (
                "Submit Application"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Check Status */}
      <Card
        className={`shadow-xl border-2 backdrop-blur-sm ${darkMode ? "bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-500/50" : "bg-gradient-to-br from-white/90 to-purple-50/90 border-purple-200"}`}
      >
        <CardHeader
          className={`bg-gradient-to-r ${darkMode ? "from-purple-700 to-blue-700" : "from-purple-600 to-blue-600"} text-white rounded-t-lg`}
        >
          <CardTitle className="text-xl">Application Status</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr
                  className={`bg-gradient-to-r ${darkMode ? "from-purple-700 to-blue-700" : "from-purple-600 to-blue-600"} text-white`}
                >
                  <th className="border border-gray-300 p-4 text-left rounded-tl-xl">Scheme Name</th>
                  <th className="border border-gray-300 p-4 text-left rounded-tr-xl">Status</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id} className="bg-white hover:bg-blue-50 transition-colors duration-200">
                    <td className="border border-gray-300 p-4">{app.schemeName}</td>
                    <td className="border border-gray-300 p-4">
                      <span
                        className={`px-3 py-2 rounded-full text-sm font-semibold ${
                          app.status === "Approved"
                            ? "bg-green-100 text-green-800"
                            : app.status === "Rejected"
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {app.status === "Approved" ? "Approved" : app.status === "Rejected" ? "Rejected" : "Pending"}
                      </span>
                    </td>
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

function OfficerPanel({ darkMode }) {
  const [applications, setApplications] = useState([
    { id: 1, citizenName: "राम कुमार | Ram Kumar", scheme: "PM-KISAN योजना | PM-KISAN Scheme", status: "Pending" },
    { id: 2, citizenName: "सीता देवी | Sita Devi", scheme: "आयुष्मान भारत | Ayushman Bharat", status: "Pending" },
    { id: 3, citizenName: "मोहन सिंह | Mohan Singh", scheme: "प्रधानमंत्री आवास योजना | PMAY", status: "Approved" },
  ])

  const [processingId, setProcessingId] = useState(null)

  const handleStatusUpdate = async (id, newStatus) => {
    setProcessingId(id)
    setTimeout(() => {
      setApplications(applications.map((app) => (app.id === id ? { ...app, status: newStatus } : app)))
      setProcessingId(null)
    }, 1500)
  }

  return (
    <Card
      className={`shadow-xl border-2 backdrop-blur-sm ${darkMode ? "bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-500/50" : "bg-gradient-to-br from-white/90 to-purple-50/90 border-purple-200"}`}
    >
      <CardHeader
        className={`bg-gradient-to-r ${darkMode ? "from-purple-700 to-blue-700" : "from-purple-600 to-blue-600"} text-white rounded-t-lg`}
      >
        <CardTitle className="text-xl">Review Applications</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr
                className={`bg-gradient-to-r ${darkMode ? "from-purple-700 to-blue-700" : "from-purple-600 to-blue-600"} text-white`}
              >
                <th className="border border-gray-300 p-4 text-left rounded-tl-xl">Citizen Name</th>
                <th className="border border-gray-300 p-4 text-left">Scheme</th>
                <th className="border border-gray-300 p-4 text-left">Status</th>
                <th className="border border-gray-300 p-4 text-left rounded-tr-xl">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} className="bg-white hover:bg-blue-50 transition-colors duration-200">
                  <td className="border border-gray-300 p-4">{app.citizenName}</td>
                  <td className="border border-gray-300 p-4">{app.scheme}</td>
                  <td className="border border-gray-300 p-4">
                    <span
                      className={`px-3 py-2 rounded-full text-sm font-semibold ${
                        app.status === "Approved"
                          ? "bg-green-100 text-green-800"
                          : app.status === "Rejected"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {app.status === "Approved" ? "Approved" : app.status === "Rejected" ? "Rejected" : "Pending"}
                    </span>
                  </td>
                  <td className="border border-gray-300 p-4">
                    {app.status === "Pending" && (
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          disabled={processingId === app.id}
                          onClick={() => handleStatusUpdate(app.id, "Approved")}
                          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg transform hover:scale-105 transition-all duration-200"
                        >
                          {processingId === app.id ? (
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          ) : (
                            "Approve"
                          )}
                        </Button>
                        <Button
                          size="sm"
                          disabled={processingId === app.id}
                          onClick={() => handleStatusUpdate(app.id, "Rejected")}
                          className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg transform hover:scale-105 transition-all duration-200"
                        >
                          {processingId === app.id ? (
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          ) : (
                            "Reject"
                          )}
                        </Button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
