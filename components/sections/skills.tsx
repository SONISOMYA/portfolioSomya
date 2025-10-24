"use client"

import { motion } from "framer-motion"
import { Code2, Zap, Database, Wrench } from "lucide-react"

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "Python", "C++", "Dart", "Swift", "SQL"],
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Frameworks & Backend",
    icon: Zap,
    skills: ["Spring Boot", "Spring Security", "RESTful APIs", "JWT", "WebSocket"],
    color: "text-[#00BFA6] dark:text-teal-400",
  },
  {
    title: "Databases & Storage",
    icon: Database,
    skills: ["MySQL", "MongoDB", "Firebase", "SQL"],
    color: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "Docker", "Maven", "Postman", "Figma"],
    color: "text-orange-600 dark:text-orange-400",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold font-manrope mb-4 text-[#1E1E1E] dark:text-slate-100">Skills & Tools</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Technologies I use to build and scale applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, idx) => {
            const Icon = group.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-[#00BFA6] dark:hover:border-teal-400 transition-all duration-300"
              >
                <Icon className={`mb-4 w-6 h-6 ${group.color}`} />
                <h3 className="text-lg font-bold font-manrope mb-4 text-[#1E1E1E] dark:text-slate-100">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#00BFA6] dark:bg-teal-400 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
