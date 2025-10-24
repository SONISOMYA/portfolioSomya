"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-12 px-4 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <p className="text-slate-600 dark:text-slate-400 text-sm">Built with ❤️ and caffeine by Somya Soni.</p>
        <p className="text-slate-500 dark:text-slate-500 text-xs mt-2">
          Crafted with Next.js, Framer Motion, and Tailwind CSS.
        </p>
      </motion.div>
    </footer>
  )
}
