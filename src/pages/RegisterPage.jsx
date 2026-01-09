import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Building2,
  BookOpen,
  ChevronDown,
  UserPlus,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { Googleicon } from "../assets/images";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register, googleLogin } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    college: "",
    department: "",
    semester: "",
    agree: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((p) => ({
      ...p,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit clicked");

    const validate = () => {
      const e = {};

      if (!formData.name.trim()) e.name = "Name is required";
      if (!formData.email.trim()) e.email = "Email is required";
      if (!formData.password || formData.password.length < 6)
        e.password = "Password must be at least 6 characters";
      if (formData.password !== formData.confirmPassword)
        e.confirmPassword = "Passwords do not match";
      if (!formData.college.trim()) e.college = "College is required";
      if (!formData.department.trim()) e.department = "Department is required";
      if (!formData.semester) e.semester = "Semester is required";
      if (!formData.agree) e.agree = "You must accept terms";

      setErrors(e);
      return Object.keys(e).length === 0;
    };

    setIsSubmitting(true);

    try {
      console.log("Calling register", formData);
      await register(formData);
      console.log("Register success");
      navigate("/");
    } catch (err) {
      console.error(err);
      setErrors({ general: err.message || "Registration failed" });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1220]  px-4">
      <div className="w-full m-10 max-w-2xl bg-linear-to-b from-[#1b2636] to-[#121b2a] rounded-xl shadow-xl p-8 border border-white/10">
        {/* SECTION: PERSONAL INFO */}
        <h2 className="text-white font-semibold mb-6">Personal Information</h2>
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <label className="text-sm text-white mb-1 block">
            Full Name <span className="text-red-400">*</span>
          </label>
          <div className="relative mb-4">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#2b3648] text-white placeholder-gray-400 pl-11 pr-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Email */}
          <label className="text-sm text-white mb-1 block">
            Email Address <span className="text-red-400">*</span>
          </label>
          <div className="relative mb-6">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#2b3648] text-white placeholder-gray-400 pl-11 pr-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Passwords */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Password */}
            <div>
              <label className="text-sm text-white mb-1 block">
                Password <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-[#2b3648] text-white pl-11 pr-11 py-3 rounded-lg border border-white/10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm text-white mb-1 block">
                Confirm Password <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full bg-[#2b3648] text-white pl-11 pr-11 py-3 rounded-lg border border-white/10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showConfirmPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>
          </div>

          {/* SECTION: ACADEMIC INFO */}
          <h2 className="text-white font-semibold mb-6 border-t border-white/10 pt-6">
            Academic Information
          </h2>

          {/* College */}
          <label className="text-sm text-white mb-1 block">
            College/University <span className="text-red-400">*</span>
          </label>
          <div className="relative mb-4">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              name="college"
              placeholder="e.g., MIT College of Engineering"
              value={formData.college}
              onChange={handleChange}
              className="w-full bg-[#2b3648] text-white pl-11 pr-4 py-3 rounded-lg border border-white/10"
            />
          </div>

          {/* Department + Semester */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="relative">
              <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                name="department"
                placeholder="e.g., Computer Science"
                value={formData.department}
                onChange={handleChange}
                className="w-full bg-[#2b3648] text-white pl-11 pr-4 py-3 rounded-lg border border-white/10"
              />
            </div>

            <div className="relative">
              <select
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                className="w-full bg-[#2b3648] text-white px-4 py-3 rounded-lg border border-white/10 appearance-none"
              >
                <option value="">Select Semester</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                  <option key={s} value={s}>
                    Semester {s}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Terms */}
          <label className="flex items-center gap-2 text-sm text-gray-300 mb-6">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="accent-blue-600"
            />
            I agree to the{" "}
            <span className="text-blue-400 cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-blue-400 cursor-pointer">Privacy Policy</span>
          </label>

          {/* Buttons */}
          <button
            type="Submit"
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg mb-4"
          >
            <UserPlus className="w-5 h-5" />
            Create Account
          </button>
        </form>
        <button
          type="button"
          onClick={async () => {
            await googleLogin();
            navigate("/");
          }}
          className="w-full flex items-center justify-center gap-3 bg-white text-black py-3 rounded-lg"
        >
          <Googleicon />
          Sign up with Google
        </button>

        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
