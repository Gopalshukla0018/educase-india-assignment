import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "", // "Yes" or "No"
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleAgencyChange(e) {
    setFormData(prev => ({
      ...prev,
      agency: e.target.value,
    }));
  }

  function validateForm() {
    const { fullName, phone, email, password, agency } = formData;
    if (!fullName || !phone || !email || !password || !agency) return false;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) {
      alert("Please fill all required fields with valid information.");
      return;
    }

    localStorage.setItem("popxUser", JSON.stringify(formData));
    alert("Account created successfully!");
    navigate("/login");
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-160 w-75 flex justify-center bg-gray-50"
    >
      <motion.form
        onSubmit={handleSubmit}
        className="w-full p-4 mt-4 rounded-lg flex flex-col justify-between h-full"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-[20px] font-bold text-gray-900">
            Create your <br /> PopX account
          </h2>

          {/* Full Name */}
          <div className="relative mt-5">
            <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-[14px] text-[#6C25FF]">
             Full Name<span className="text-red-500">*</span>
            </label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-[14px] text-gray-600 focus:outline-none focus:ring-2"
              required
            />
          </div>

          {/* Phone */}
          <div className="relative mt-4">
            <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-[14px] text-[#6C25FF]">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Enter phone number"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-[14px] text-gray-600 focus:outline-none focus:ring-2"
              required
            />
          </div>

          {/* Email */}
          <div className="relative mt-4">
            <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-[14px] text-[#6C25FF]">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter email address"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-[14px] text-gray-600 focus:outline-none focus:ring-2"
              required
            />
          </div>

          {/* Password */}
          <div className="relative mt-4">
            <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-[14px] text-[#6C25FF]">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-[14px] text-gray-600 focus:outline-none focus:ring-2"
              required
            />
          </div>

          {/* Company */}
          <div className="relative mt-4">
            <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-[14px] text-[#6C25FF]">
              Company Name 
            </label>
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              type="text"
              placeholder="Enter company name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-[14px] text-gray-600 focus:outline-none focus:ring-2"
            />
          </div>

          {/* Agency Radio */}
          <p className="text-sm font-medium text-gray-800 mt-2">Are you an agency?</p>
          <div className="flex items-center space-x-6">
            <label className="flex items-center text-sm text-gray-700">
              <input
                type="radio"
                name="agency"
                value="Yes"
                checked={formData.agency === "Yes"}
                onChange={handleAgencyChange}
                className="mr-2 accent-[#6C25FF]"
                required
              />
              Yes
            </label>
            <label className="flex items-center text-sm text-gray-700">
              <input
                type="radio"
                name="agency"
                value="No"
                checked={formData.agency === "No"}
                onChange={handleAgencyChange}
                className="mr-2 accent-[#6C25FF]"
                required
              />
              No
            </label>
          </div>
        </motion.div>

        {/* Submit Button with animation */}
        <motion.div
          className="mb-2"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <motion.button
            type="submit"
            disabled={!validateForm()}
            whileHover={validateForm() ? { scale: 1.03 } : {}}
            whileTap={validateForm() ? { scale: 0.95 } : {}}
            className={`w-full text-white font-semibold py-2 rounded-sm transition duration-150 ease-in-out ${
              validateForm()
                ? "bg-[#6C25FF] hover:bg-purple-700"
                : "bg-[#CBCBCB] cursor-not-allowed"
            }`}
          >
            Create Account
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
}
