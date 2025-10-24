"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Twitter, ArrowRight } from "lucide-react"

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "somyasoni0411@gmail.com",
    href: "mailto:somyasoni0411@gmail.com",
    color: "from-blue-600 to-teal-600",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/SONISOMYA",
    href: "https://github.com/SONISOMYA",
    color: "from-slate-600 to-slate-700",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/somya-soni",
    href: "https://www.linkedin.com/in/somya-soni-29100411e/",
    color: "from-blue-700 to-blue-600",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@the_Somya_",
    href: "https://x.com/the_Somya_",
    color: "from-sky-500 to-blue-600",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4 text-slate-900">Let's Connect</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            I'd love to collaborate or discuss new ideas. Reach out through any of these channels!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {contacts.map((contact, idx) => {
            const Icon = contact.icon
            return (
              <a
                key={idx}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-all hover:shadow-lg"
              >
                <div
                  className={`inline-flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br ${contact.color} mb-4`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{contact.label}</h3>
                <p className="text-sm text-slate-600 mb-4 break-all">{contact.value}</p>
                <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                  Connect <ArrowRight size={16} />
                </div>
              </a>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl p-8"
        >
          <p className="text-lg font-medium">Ready to build something amazing together?</p>
          <p className="text-blue-100 mt-2">Let's start a conversation</p>
        </motion.div>
      </div>
    </section>
  )
}
