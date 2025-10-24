"use client"

import { motion } from "framer-motion"
import { Briefcase, Award, BookOpen } from "lucide-react"

export function Experience() {
  const items = [
    {
      icon: Briefcase,
      title: "Full Stack Application Developer Intern",
      company: "Kanpur Fertilizers and Chemicals Limited",
      period: "May 2024 – Dec 2024",
      points: [
        "Designed and deployed a cross-platform IoT app in Flutter for live compost monitoring",
        "Integrated ESP8266 Wi-Fi and soil sensors for real-time data collection",
        "Improved monitoring efficiency by 25%",
      ],
    },
    {
      icon: Award,
      title: "Competitive Programming",
      company: "LeetCode & CodeChef",
      period: "Ongoing",
      points: [
        "Solved 200+ DSA problems on LeetCode (Max Rating: 1412)",
        "Max Rating on CodeChef: 1394",
        "Preparing for GATE 2026",
      ],
    },
    {
      icon: BookOpen,
      title: "Education & Learning",
      company: "Computer Science Student",
      period: "Final Year",
      points: [
        "Completed Telusko's Master Java + Spring Boot course",
        "Built and deployed full-stack projects using Flutter and Spring Boot",
        "Practicing DSA and system design concepts",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4 text-slate-900">Experience & Achievements</h2>
          <p className="text-slate-600 text-lg">My journey so far</p>
        </motion.div>

        <div className="space-y-6">
          {items.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-all hover:shadow-lg"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-teal-600">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.company}</p>
                    <p className="text-xs text-teal-600 font-medium mt-1">{item.period}</p>
                    <ul className="mt-4 space-y-2">
                      {item.points.map((point, pidx) => (
                        <li key={pidx} className="text-sm text-slate-600 flex items-start gap-2">
                          <span className="text-teal-600 font-bold mt-0.5">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
