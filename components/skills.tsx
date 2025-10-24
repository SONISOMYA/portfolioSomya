"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    category: "Languages",
    skills: ["Java", "C++", "Python", "Dart", "Swift", "SQL"],
    color: "from-blue-500 to-blue-600",
  },
  {
    category: "Backend & Web",
    skills: ["Spring Boot", "Spring Security", "RESTful APIs", "JWT", "WebSocket", "HTML/CSS"],
    color: "from-teal-500 to-teal-600",
  },
  {
    category: "Mobile & App",
    skills: ["Flutter", "SwiftUI", "FlutterFlow"],
    color: "from-violet-500 to-purple-600",
  },
  {
    category: "Tools & Infrastructure",
    skills: ["Git", "Docker", "Firebase", "MySQL", "Postman", "Maven"],
    color: "from-slate-500 to-slate-600",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4 text-slate-900">Tech Stack</h2>
          <p className="text-slate-600 text-lg">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-all hover:shadow-lg"
            >
              <h3 className={`text-lg font-bold bg-gradient-to-r ${cat.color} bg-clip-text text-transparent mb-4`}>
                {cat.category}
              </h3>
              <div className="space-y-2">
                {cat.skills.map((skill) => (
                  <p key={skill} className="text-slate-600 text-sm">
                    ✓ {skill}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
