"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className="text-teal-600 font-medium text-sm sm:text-base mb-6 tracking-wide">
          👋 Welcome to my portfolio
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins mb-6 leading-tight"
        >
          Hi, I'm Somya Soni — <br />
          <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            I build scalable, human-centered software.
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-600 mb-4 font-medium">
          Full Stack Developer | Java | Spring Boot | Flutter | IoT
        </motion.p>

        <motion.p variants={itemVariants} className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto mb-12">
          Passionate about creating clean, efficient solutions that make a difference.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <a
            href="#projects"
            className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2"
          >
            View Projects <ArrowRight size={18} />
          </a>
          <a
            href="https://drive.google.com/file/d/15r8hWEe1Z9Uppjr-OThSaS6QzKWSkWsH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all flex items-center gap-2"
          >
            <Download size={18} /> Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="flex justify-center"
        >
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-slate-300 rounded-full animate-bounce"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
