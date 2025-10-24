"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Twitter, ArrowRight } from "lucide-react"

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "somyasoni0411@gmail.com",
    href: "mailto:somyasoni0411@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/SONISOMYA",
    href: "https://github.com/SONISOMYA",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/somya-soni",
    href: "https://www.linkedin.com/in/somya-soni-29100411e/",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@the_Somya_",
    href: "https://x.com/the_Somya_",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold font-manrope mb-4 text-[#1E1E1E] dark:text-slate-100">Let's Connect</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Let's build something thoughtful together — I'd love to collaborate or discuss new ideas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-4 mb-12"
        >
          {contacts.map((contact, idx) => {
            const Icon = contact.icon
            return (
              <a
                key={idx}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-[#00BFA6] dark:hover:border-teal-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Icon className="w-6 h-6 text-[#00BFA6] dark:text-teal-400 mb-3" />
                <h3 className="text-lg font-bold font-manrope text-[#1E1E1E] dark:text-slate-100 mb-1">
                  {contact.label}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 break-all">{contact.value}</p>
                <div className="flex items-center gap-2 text-[#00BFA6] dark:text-teal-400 font-medium group-hover:gap-3 transition-all">
                  Connect <ArrowRight size={16} />
                </div>
              </a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
