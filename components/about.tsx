"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-6 text-slate-900">About Me</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              I'm a final-year Computer Science student who loves turning ideas into working software. I enjoy solving
              real problems — whether that's optimizing backend systems, building interactive apps, or exploring IoT.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              I believe great products come from curiosity, collaboration, and clean code. Beyond coding, I'm passionate
              about learning new technologies and sharing knowledge with others.
            </p>
            <div className="flex gap-4">
              {["Problem-Solving", "Full Stack", "IoT"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-blue-600 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-blue-600/10 to-teal-600/10 rounded-2xl overflow-hidden border border-blue-200">
                <Image src="/images/profile.jpg" alt="Somya Soni" fill className="object-cover" priority />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
