import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    const savedUser = JSON.parse(localStorage.getItem("popxUser"));

    if (!savedUser) {
      setError("No user found. Please sign up first.");
      return;
    }

    if (email !== savedUser.email || password !== savedUser.password) {
      setError("Email or password is incorrect");
      return;
    }

    // Successful login
    navigate("/profile");
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
        className="w-full p-4 mt-3 rounded-lg"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.h2
          className="text-[20px] font-bold text-gray-900"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Sign in to your <br /> PopX account
        </motion.h2>

        <motion.p
          className="text-sm text-gray-400 mt-2 font-semibold"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
        </motion.p>

        {error && (
          <motion.p
            className="text-red-500 text-sm mt-3 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {error}
          </motion.p>
        )}

        <motion.div
          className="relative mt-5"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-[14px] text-[#6C25FF]">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-[14px] text-gray-600 focus:outline-none focus:ring-2"
          />
        </motion.div>

        <motion.div
          className="relative mt-4"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-[14px] text-[#6C25FF]">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-[14px] text-gray-600 focus:outline-none focus:ring-2"
          />
        </motion.div>

        <motion.div
          className="mt-3"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              type="submit"
              className="w-full bg-[#6C25FF] text-white font-semibold py-2 rounded-sm hover:bg-purple-700 transition duration-150 ease-in-out"
            >
              Login
            </Button>
          </motion.div>
        </motion.div>
      </motion.form>
    </motion.div>
  );
}
