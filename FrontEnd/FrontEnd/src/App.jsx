import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");


  const handleemail = (eve) => {
    setEmail(eve.target.value)
  }

  const handlepass = (eve) => {
    setPass(eve.target.value)
  }

  function check() {
    setError("");

    if (email === "") {
      setError("Please enter email");
      return;
    }

    if (pass === "") {
      setError("Please enter password");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    if (pass.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }


    var logindetails = axios.post("https://nexaflow-backend-fhek.onrender.com/login", { "emailid": email, "password": pass })
    logindetails.then(function (data) {
      if (data.data === true) {
        navigate("/dashboard");
      }

      else {
        setError("Invalid email or password");
      }
    })

      .catch(function (error) {
        setError("Unable to connect to server");
      });

  }


  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">

      <div className="w-full max-w-md">

        {/* Brand */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            NexaFlow
          </h1>

          <p className="text-slate-400 mt-2">
            Welcome back to your workspace
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">

          <h2 className="text-2xl font-bold text-slate-900">
            Welcome Back!
          </h2>

          <p className="text-slate-500 mt-1 mb-6">
            Sign in to continue
          </p>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              onChange={handleemail}
              name="emailid"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg
              outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              onChange={handlepass}
              name="password"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg
              outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Remember */}
          <div className="flex items-center justify-between mb-6">

            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input type="checkbox" />
              Remember me
            </label>

            <button className="text-sm text-indigo-600 hover:underline">
              Forgot password?
            </button>

          </div>

          {error && (
            <p className="text-red-500 text-sm mb-4">
              {error}
            </p>
          )}
          {/* Login Button */}
          <button
            className="w-full bg-indigo-600 text-white py-3 rounded-lg
            font-semibold hover:bg-indigo-700 transition"
            onClick={check}
          >
            Login
          </button>

          {/* Signup */}
          <p className="text-center text-sm text-slate-500 mt-6">
            Don't have an account?
            <span className="text-indigo-600 font-medium ml-1 cursor-pointer">
              Create Account
            </span>
          </p>

        </div>
      </div>

    </div>

  )
};


export default Login;