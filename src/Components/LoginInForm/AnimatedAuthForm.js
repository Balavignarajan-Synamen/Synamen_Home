"use client"

import { useState, useEffect } from "react"

export default function AnimatedAuthForm() {
  const [isSignIn, setIsSignIn] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const toggleForm = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsSignIn(!isSignIn)
      setIsAnimating(false)
    }, 200)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    console.log(isSignIn ? "Sign In" : "Sign Up", "form submitted")
  }

  // Eye Icon Component
  const EyeIcon = () => (
    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  )

  // Eye Off Icon Component
  const EyeOffIcon = () => (
    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
      />
    </svg>
  )

  // Mail Icon Component
  const MailIcon = () => (
    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  )

  // Lock Icon Component
  const LockIcon = () => (
    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  )

  // User Icon Component
  const UserIcon = () => (
    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  )

  // Arrow Right Icon Component
  const ArrowRightIcon = () => (
    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )

  // Loading Spinner Component
  const LoadingSpinner = () => (
    <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-yellow-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Scrollable Container */}
      <div className="relative z-10 max-h-full overflow-y-auto">
        <div className="flex items-center justify-center max-h-full p-4 sm:p-6 lg:p-8">
          <div
            className={`w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-2xl 2xl:max-w-3xl transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Header with toggle buttons */}
            <div className="text-center mb-6 sm:mb-8 lg:mb-10">
              <div
                className={`transition-all duration-700 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-3 sm:mb-4">
                  Welcome {isSignIn ? "Back" : ""}
                </h1>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-purple-200">
                  {isSignIn ? "Sign in to your account" : "Create your new account"}
                </p>
              </div>
            </div>

            {/* Toggle Buttons */}
            <div
              className={`transition-all duration-700 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              <div className="flex bg-white/10 backdrop-blur-sm rounded-xl p-1 mb-6 sm:mb-8 border border-white/20">
                <button
                  onClick={() => !isSignIn && toggleForm()}
                  className={`flex-1 py-3 sm:py-4 lg:py-5 px-4 sm:px-6 rounded-lg text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 ${
                    isSignIn
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105"
                      : "text-purple-200 hover:text-white hover:bg-white/5"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => isSignIn && toggleForm()}
                  className={`flex-1 py-3 sm:py-4 lg:py-5 px-4 sm:px-6 rounded-lg text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 ${
                    !isSignIn
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105"
                      : "text-purple-200 hover:text-white hover:bg-white/5"
                  }`}
                >
                  Sign Up
                </button>
              </div>
            </div>

            {/* Form Card */}
            <div
              className={`transition-all duration-700 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isAnimating ? "opacity-0 transform scale-95" : "opacity-100 transform scale-100"
                  }`}
                >
                  <form
                    onSubmit={handleSubmit}
                    className="p-6 sm:p-8 lg:p-10 xl:p-12 space-y-5 sm:space-y-6 lg:space-y-8"
                  >
                    {/* Name field - only for sign up */}
                    <div
                      className={`transition-all duration-500 ease-in-out ${
                        !isSignIn ? "opacity-100 max-h-32 sm:max-h-36 lg:max-h-40" : "opacity-0 max-h-0 overflow-hidden"
                      }`}
                    >
                      <label
                        htmlFor="name"
                        className="block text-sm sm:text-base lg:text-lg font-medium text-purple-200 mb-2 sm:mb-3"
                      >
                        Full Name
                      </label>
                      <div className="relative group">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-300 group-focus-within:text-pink-400 transition-colors duration-300">
                          <UserIcon />
                        </div>
                        <input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          className="w-full pl-12 sm:pl-14 pr-4 py-3 sm:py-4 lg:py-5 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all duration-300 text-white placeholder-purple-300 text-sm sm:text-base lg:text-lg backdrop-blur-sm hover:bg-white/10 group"
                          required={!isSignIn}
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>

                    {/* Email field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm sm:text-base lg:text-lg font-medium text-purple-200 mb-2 sm:mb-3"
                      >
                        Email Address
                      </label>
                      <div className="relative group">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-300 group-focus-within:text-pink-400 transition-colors duration-300">
                          <MailIcon />
                        </div>
                        <input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="w-full pl-12 sm:pl-14 pr-4 py-3 sm:py-4 lg:py-5 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all duration-300 text-white placeholder-purple-300 text-sm sm:text-base lg:text-lg backdrop-blur-sm hover:bg-white/10"
                          required
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>

                    {/* Password field */}
                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm sm:text-base lg:text-lg font-medium text-purple-200 mb-2 sm:mb-3"
                      >
                        Password
                      </label>
                      <div className="relative group">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-300 group-focus-within:text-pink-400 transition-colors duration-300">
                          <LockIcon />
                        </div>
                        <input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="w-full pl-12 sm:pl-14 pr-12 sm:pr-14 py-3 sm:py-4 lg:py-5 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all duration-300 text-white placeholder-purple-300 text-sm sm:text-base lg:text-lg backdrop-blur-sm hover:bg-white/10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-300 hover:text-pink-400 transition-all duration-300 hover:scale-110"
                        >
                          {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                        </button>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>

                    {/* Confirm Password field - only for sign up */}
                    <div
                      className={`transition-all duration-500 ease-in-out ${
                        !isSignIn ? "opacity-100 max-h-32 sm:max-h-36 lg:max-h-40" : "opacity-0 max-h-0 overflow-hidden"
                      }`}
                    >
                      <label
                        htmlFor="confirmPassword"
                        className="block text-sm sm:text-base lg:text-lg font-medium text-purple-200 mb-2 sm:mb-3"
                      >
                        Confirm Password
                      </label>
                      <div className="relative group">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-300 group-focus-within:text-pink-400 transition-colors duration-300">
                          <LockIcon />
                        </div>
                        <input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          className="w-full pl-12 sm:pl-14 pr-12 sm:pr-14 py-3 sm:py-4 lg:py-5 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all duration-300 text-white placeholder-purple-300 text-sm sm:text-base lg:text-lg backdrop-blur-sm hover:bg-white/10"
                          required={!isSignIn}
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-300 hover:text-pink-400 transition-all duration-300 hover:scale-110"
                        >
                          {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                        </button>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>

                    {/* Forgot Password - only for sign in */}
                    {isSignIn && (
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="text-sm sm:text-base lg:text-lg text-purple-300 hover:text-pink-400 transition-all duration-300 font-medium hover:underline"
                        >
                          Forgot password?
                        </button>
                      </div>
                    )}

                    {/* Terms and conditions - only for sign up */}
                    {!isSignIn && (
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <input
                          type="checkbox"
                          id="terms"
                          className="mt-1 h-4 w-4 sm:h-5 sm:w-5 text-pink-600 bg-white/10 border-white/20 rounded focus:ring-pink-500 focus:ring-2 flex-shrink-0"
                          required
                        />
                        <label
                          htmlFor="terms"
                          className="text-sm sm:text-base lg:text-lg text-purple-200 leading-relaxed"
                        >
                          I agree to the{" "}
                          <button
                            type="button"
                            className="text-pink-400 hover:text-pink-300 underline transition-colors duration-300"
                          >
                            Terms of Service
                          </button>{" "}
                          and{" "}
                          <button
                            type="button"
                            className="text-pink-400 hover:text-pink-300 underline transition-colors duration-300"
                          >
                            Privacy Policy
                          </button>
                        </label>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] group text-sm sm:text-base lg:text-lg xl:text-xl flex items-center justify-center shadow-lg hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none text-amber-400 mx-[23px] my-[35px] px-[22px] opacity-[0.36]"
                    >
                      {isSubmitting ? (
                        <>
                          <LoadingSpinner />
                          <span className="ml-2">Processing...</span>
                        </>
                      ) : (
                        <>
                          {isSignIn ? "Sign In" : "Create Account"}
                          <div className="ml-2 transition-transform group-hover:translate-x-1">
                            <ArrowRightIcon />
                          </div>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Social Login */}
            <div
              className={`mt-6 sm:mt-8 lg:mt-10 transition-all duration-700 delay-900 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20" />
                </div>
                <div className="relative flex justify-center text-sm sm:text-base lg:text-lg">
                  <span className="px-4 sm:px-6 bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 text-purple-200">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                <button
                  type="button"
                  className="w-full py-3 sm:py-4 lg:py-5 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-[1.02] text-sm sm:text-base lg:text-lg flex items-center justify-center group"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 mr-2 sm:mr-3 group-hover:scale-110 transition-transform duration-300"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="hidden sm:inline">Google</span>
                  <span className="sm:hidden">G</span>
                </button>
                <button
                  type="button"
                  className="w-full py-3 sm:py-4 lg:py-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-[1.02] text-sm lg:text-lg flex items-center justify-center group text-slate-50 font-mono font-extrabold sm:text-3xl tracking-normal mx-[19px]"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 mr-2 sm:mr-3 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="hidden sm:inline">Facebook</span>
                  <span className="sm:hidden">F</span>
                </button>
              </div>
            </div>

            {/* Footer */}
            <div
              className={`mt-8 sm:mt-10 lg:mt-12 text-center transition-all duration-700 delay-1100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              <p className="text-sm sm:text-base lg:text-lg text-purple-200">
                {isSignIn ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={toggleForm}
                  className="text-pink-400 hover:text-pink-300 font-medium transition-all duration-300 underline hover:no-underline"
                >
                  {isSignIn ? "Sign up here" : "Sign in here"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}
