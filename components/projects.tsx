"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"

const projects = [
  {
    title: "HireOrbit",
    description: "Internship/Job Tracker Application",
    impact: "Improved recruitment tracking with role-based access control for 10+ testers",
    image: "bg-gradient-to-br from-blue-500/20 to-blue-600/20",
    techs: ["Spring Boot", "JWT", "MySQL", "Flutter"],
    github: "https://github.com/SONISOMYA/HIREORBIT",
  },
  {
    title: "ChatterSpring",
    description: "Real-time Chat Application",
    impact: "Deployed concurrent messaging system supporting 5+ group chats with 10+ users",
    image: "bg-gradient-to-br from-teal-500/20 to-blue-600/20",
    techs: ["WebSocket", "STOMP", "SockJS", "Thymeleaf"],
    github: "https://github.com/SONISOMYA/Chatterspring",
  },
  {
    title: "ApeAware",
    description: "AI Wildlife Monitoring Tool",
    impact: "Achieved 85% detection accuracy processing 10+ video feeds in real-time",
    image: "bg-gradient-to-br from-violet-500/20 to-purple-600/20",
    techs: ["Python", "YOLOv8", "OpenCV", "Firebase"],
    github: "https://github.com/SONISOMYA/ape-aware",
  },
]

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4 text-slate-900">Featured Projects</h2>
          <p className="text-slate-600 text-lg">Real-world solutions built with modern technologies</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-blue-300 transition-all duration-300 hover:shadow-xl"
            >
              <div className={`h-40 ${project.image} flex items-center justify-center`}>
                <h3 className="text-2xl font-bold text-slate-800">{project.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-sm font-medium text-teal-600 mb-2">{project.description}</p>
                <p className="text-sm text-slate-600 mb-4">✨ {project.impact}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  <Github size={18} /> View Code
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
