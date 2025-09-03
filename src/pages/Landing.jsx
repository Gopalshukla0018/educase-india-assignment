import { Link } from "react-router-dom";
import Button from "../components/Button";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-160 w-75 flex flex-col p-4 justify-end bg-gray-50"
    >
      <div className="flex-1"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="w-full max-w-sm space-y-4 h-50 md:max-w-md"
      >
        {/* Welcome Text */}
        <div className="text-left">
          <motion.h1
            className="text-xl mb-2 font-bold text-[#000000d3] leading-tight font-['Plus_Jakarta_Sans',_sans-serif]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            Welcome to PopX
          </motion.h1>

          <motion.p
            className="text-gray-400 font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </motion.p>
        </div>

        {/* Buttons */}
        <div className="w-full space-y-2">
          <Link to="/signup" className="block w-full">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button className="w-full bg-[#6C25FF] text-white rounded-sm text-base font-semibold hover:shadow-xl hover:bg-purple-700 transition duration-150 ease-in-out">
                Create Account
              </Button>
            </motion.div>
          </Link>

          <Link to="/login" className="block w-full">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button className="w-full bg-[#CEBAFB] rounded-md text-base text-[#000000b6] font-semibold hover:shadow-md hover:bg-purple-300 transition duration-150 ease-in-out">
                Already Registered? Login
              </Button>
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
