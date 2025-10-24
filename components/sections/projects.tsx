"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"

const projects = [
  {
    title: "HireOrbit",
    description: "Internship/Job Tracker Application",
    impact: "Automated recruitment tracking with role-based access — tested by 10+ peers.",
    techs: ["Spring Boot", "JWT", "MySQL", "Flutter"],
    github: "https://github.com/SONISOMYA/HIREORBIT",
    gradient: "from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20",
  },
  {
    title: "ChatterSpring",
    description: "Real-time Chat Application",
    impact: "Concurrent messaging system supporting 5+ group chats with WebSocket reliability.",
    techs: ["WebSocket", "STOMP", "SockJS", "Thymeleaf"],
    github: "https://github.com/SONISOMYA/Chatterspring",
    gradient: "from-teal-500/10 to-green-500/10 dark:from-teal-500/20 dark:to-green-500/20",
  },
  {
    title: "ApeAware",
    description: "AI Wildlife Monitoring Tool",
    impact: "Achieved 85% detection accuracy processing 10+ video feeds in real-time.",
    techs: ["Python", "YOLOv8", "OpenCV", "Firebase"],
    github: "https://github.com/SONISOMYA/ape-aware",
    gradient: "from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20",
  },
]

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold font-manrope mb-4 text-[#1E1E1E] dark:text-slate-100">Projects & Work</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">Systems built with purpose, designed with care.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`group bg-gradient-to-br ${project.gradient} rounded-xl border border-slate-200 dark:border-slate-800 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <h3 className="text-2xl font-bold font-manrope mb-2 text-[#1E1E1E] dark:text-slate-100">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-[#00BFA6] dark:text-teal-400 mb-3">{project.description}</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">✨ {project.impact}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs rounded-full font-medium border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#00BFA6] dark:text-teal-400 hover:gap-3 transition-all font-medium"
              >
                <Github size={18} /> View Code
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
