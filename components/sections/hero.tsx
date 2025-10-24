"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
        className="max-w-3xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <span className="text-4xl">🌿</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold font-manrope mb-6 leading-tight text-[#1E1E1E] dark:text-slate-100"
        >
          Hi, I'm Somya Soni — I build simple, scalable, and human-centered software.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 mb-4 font-medium"
        >
          Full Stack Developer | Java | Spring Boot | Flutter | IoT
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-slate-500 dark:text-slate-500 max-w-2xl mx-auto mb-12"
        >
          I love turning ideas into systems that work beautifully — clean, fast, and purposeful.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-[#00BFA6] text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            View My Work <ArrowRight size={18} />
          </a>
          <a
            href="https://drive.google.com/file/d/15r8hWEe1Z9Uppjr-OThSaS6QzKWSkWsH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-slate-300 dark:border-slate-700 text-[#1E1E1E] dark:text-slate-100 rounded-lg font-medium hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-300 flex items-center gap-2"
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
          <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-700 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-slate-400 rounded-full"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
