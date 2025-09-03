import { useEffect, useState, useRef } from "react";
import { FaCamera } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Profile() {
  const [fullName, setFullName] = useState("Guest");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState("https://i.pravatar.cc/100");
  const fileInputRef = useRef(null);

  useEffect(() => {
    const userData = localStorage.getItem("popxUser");
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setFullName(user.fullName || "Guest");
        setEmail(user.email || "");

        const storedPic = localStorage.getItem("popxUserProfilePic");
        if (storedPic) {
          setProfilePic(storedPic);
        }
      } catch {
        setFullName("Guest");
        setEmail("");
      }
    }
  }, []);

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setProfilePic(previewUrl);

      const reader = new FileReader();
      reader.onloadend = () => {
        localStorage.setItem("popxUserProfilePic", reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="h-160 w-75 flex justify-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-80 bg-[#f7f8fa] rounded-md border border-gray-200 shadow-sm overflow-hidden"
      >
        <h2 className="text-gray-800 text-sm font-medium p-5 bg-[#ffffff]">
          Account Settings
        </h2>

        <div className="flex items-start space-x-4 px-4 py-4">
          <div className="relative">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              src={profilePic}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover cursor-pointer"
              onClick={() => fileInputRef.current.click()}
            />

            <motion.div
              whileTap={{ scale: 0.9 }}
              className="absolute -bottom-1 -right-1 bg-purple-600 p-[6px] rounded-full border-2 border-white cursor-pointer"
              onClick={() => fileInputRef.current.click()}
            >
              <FaCamera className="text-white text-[10px]" />
            </motion.div>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800">{fullName}</h3>
            <p className="text-xs text-gray-500">{email}</p>
          </div>
        </div>

        <div className="px-4 pb-2 text-[11px] text-gray-700 border-t border-gray-100">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam.
        </div>

        <div className="flex justify-center space-x-1 text-gray-400 text-sm">
          {Array(30)
            .fill()
            .map((_, i) => (
              <span key={i}>-</span>
            ))}
        </div>
      </motion.div>
    </div>
  );
}
