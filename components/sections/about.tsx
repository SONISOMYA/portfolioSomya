"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold font-manrope mb-8 text-[#1E1E1E] dark:text-slate-100">About Me</h2>
            <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              <p>
                I'm a developer who believes good code is more than syntax — it's clarity, empathy, and intention. I
                enjoy exploring the backend with Java and Spring Boot, building cross-platform apps in Flutter, and
                experimenting with IoT projects.
              </p>
              <p>
                Outside tech, I'm curious about how people think and how small details make big differences. I believe
                the best software comes from understanding the human side of the problem first.
              </p>
              <p className="text-[#00BFA6] dark:text-teal-400">Let's build something meaningful together.</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              <div className="absolute inset-0 bg-[#00BFA6] rounded-2xl blur-3xl opacity-10"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
                <Image src="/images/profile.jpg" alt="Somya Soni" fill className="object-cover" priority />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
