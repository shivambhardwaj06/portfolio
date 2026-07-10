import React from "react";
import { motion } from "framer-motion";
import myimage from "../assets/myimage.jpg";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-8 py-20">

        {/* Left Side */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 font-semibold">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold">
            Shivam
            <span className="text-blue-500"> Bhardwaj</span>
          </h1>

          <h2 className="text-2xl text-zinc-300">
           Data Science  • Machine Learning  • Generative AI
          </h2>

          <p className="max-w-lg text-zinc-400 leading-8">
            Passionate about building AI-powered applications,
            scalable web platforms, and solving real-world
            problems through technology.
          </p>

          <div className="flex gap-5">
            <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
              View Projects
            </button>

            <button className="px-6 py-3 rounded-xl border border-zinc-600 hover:border-blue-500 transition">
              Resume
            </button>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={myimage}
            alt="Shivam Bhardwaj"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="
w-72 h-72
md:w-96 md:h-96
rounded-full
object-cover
shadow-[0_0_40px_rgba(255,255,255,0.35)]
"
          />
        </motion.div>

      </div>
    </div>
  );
}