"use client"
import Image from "next/image"
import { CustomCursor } from "@/components/custom-cursor"
import { AnimatedSection } from "@/components/animated-section"
import { Navbar } from "@/components/navbar"
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Briefcase, Award, User, Twitter } from "lucide-react"

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white overflow-x-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        <div className="relative z-10">
          {/* Hero Section */}
          <AnimatedSection className="min-h-screen flex items-center justify-center px-4" id="home">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent leading-tight">
                    Somya Soni
                  </h1>
                  <div className="text-xl lg:text-2xl text-indigo-300 font-mono">
                    <span className="text-indigo-400">{"<"}</span>
                    Full Stack Developer / SpringBoot / Flutter / IoT
                    <span className="text-indigo-400">{" />"}</span>
                  </div>
                </div>

                <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                  I craft modern, scalable applications with clean code and intuitive user experiences. Passionate about
                  building smart solutions that make a real impact through
                  <span className="text-indigo-400 font-semibold"> Spring Boot</span>,
                  <span className="text-purple-400 font-semibold"> Flutter</span>, and
                  <span className="text-violet-400 font-semibold"> IoT</span> technologies.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25"
                  >
                    <span className="flex items-center gap-2">
                      Let's Connect
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                  <a
                    href="https://drive.google.com/file/d/15r8hWEe1Z9Uppjr-OThSaS6QzKWSkWsH/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-8 py-4 border border-indigo-400/30 rounded-xl font-semibold transition-all duration-300 hover:bg-indigo-500/10 hover:border-indigo-400/50 hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      View Resume
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                </div>

                <div className="flex gap-6 pt-4">
                  <a
                    href="https://github.com/SONISOMYA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/20"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/somya-soni-29100411e/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/20"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://x.com/the_Somya_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/20"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:somyasoni0411@gmail.com"
                    className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/20"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-indigo-400/30 to-purple-400/30 backdrop-blur-sm shadow-2xl shadow-indigo-500/20">
                    <Image src="/images/profile.jpg" alt="Somya Soni" fill className="object-cover" priority />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-6 h-6 text-indigo-400" />
            </div>
          </AnimatedSection>

          {/* About Section */}
          <AnimatedSection className="py-20 px-4" id="about">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-400/20 rounded-full text-indigo-300 text-sm font-medium backdrop-blur-sm">
                <User className="w-4 h-4" />
                About Me
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
                Passionate Developer
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                I'm a passionate Full Stack Developer with expertise in Spring Boot, Flutter, and IoT solutions. I focus
                on creating efficient, scalable applications that solve real-world problems. With a strong foundation in
                computer science and hands-on experience in various technologies, I strive to deliver high-quality
                software solutions that make a meaningful impact.
              </p>
            </div>
          </AnimatedSection>

          {/* Experience Section */}
          <AnimatedSection className="py-20 px-4" id="experience">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-400/20 rounded-full text-indigo-300 text-sm font-medium backdrop-blur-sm">
                  <Briefcase className="w-4 h-4" />
                  Experience
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
                  Work Experience
                </h2>
              </div>

              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 to-transparent"></div>

                <div className="relative pl-20 pb-12">
                  <div className="absolute left-6 w-4 h-4 bg-indigo-500 rounded-full border-4 border-slate-950"></div>
                  <div className="bg-white/5 backdrop-blur-sm border border-indigo-400/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-indigo-300">Full Stack Application Developer Intern</h3>
                      <span className="text-purple-400 font-medium">May 2024 – Dec 2024</span>
                    </div>
                    <h4 className="text-xl text-white mb-2">Kanpur Fertilizers and Chemicals Limited — VendCompost</h4>
                    <div className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm mb-4">
                      Hybrid
                    </div>
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                        Designed and deployed a cross-platform IoT app in Flutter for live compost monitoring used by
                        20+ on-site staff.
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                        Integrated ESP8266 Wi-Fi and soil sensors to collect data every 10 seconds, improving monitoring
                        efficiency by 25%.
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                        Reduced manual checks by automating real-time dashboards for temperature and humidity tracking.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Projects Section */}
          <AnimatedSection className="py-20 px-4" id="projects">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-400/20 rounded-full text-indigo-300 text-sm font-medium backdrop-blur-sm">
                  <Code className="w-4 h-4" />
                  Projects
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
                  Featured Projects
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project 1 */}
                <div className="group bg-white/5 backdrop-blur-sm border border-indigo-400/20 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20">
                  <div className="h-48 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-transparent"></div>
                    <h3 className="text-3xl font-bold text-white z-10">HireOrbit</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <p className="text-indigo-300 font-medium">Internship/Job Tracker Application</p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Developed an internship/job tracker with Spring Security and JWT for secure role-based access;
                      tested by 10+ peers. Implemented 10+ RESTful CRUD APIs and documented endpoints with Swagger.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Spring Boot", "JWT", "MySQL", "Flutter"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href="https://github.com/SONISOMYA/HIREORBIT"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="group bg-white/5 backdrop-blur-sm border border-indigo-400/20 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="h-48 bg-gradient-to-br from-purple-600/20 to-violet-600/20 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent"></div>
                    <h3 className="text-3xl font-bold text-white z-10">ChatterSpring</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <p className="text-purple-300 font-medium">Real-time Chat Application</p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Engineered a real-time chat app with STOMP over WebSockets and SockJS fallback; tested by 10+
                      users in group chats. Deployed 5+ chat rooms with concurrency-safe messaging.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["WebSocket", "STOMP", "SockJS", "Thymeleaf"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href="https://github.com/SONISOMYA/Chatterspring"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="group bg-white/5 backdrop-blur-sm border border-indigo-400/20 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20">
                  <div className="h-48 bg-gradient-to-br from-violet-600/20 to-pink-600/20 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent"></div>
                    <h3 className="text-3xl font-bold text-white z-10">ApeAware</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <p className="text-violet-300 font-medium">AI Wildlife Monitoring Tool</p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Created an AI wildlife monitoring tool using YOLOv8 and OpenCV, achieving 85% detection accuracy.
                      Processed 10+ video feeds and sent real-time alerts via Firebase Cloud Messaging.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "YOLOv8", "OpenCV", "Firebase"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href="https://github.com/SONISOMYA/ape-aware"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Skills Section */}
          <AnimatedSection className="py-20 px-4" id="skills">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-400/20 rounded-full text-indigo-300 text-sm font-medium backdrop-blur-sm">
                  <Code className="w-4 h-4" />
                  Skills
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
                  Tech Stack
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white/5 backdrop-blur-sm border border-indigo-400/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
                  <h3 className="text-xl font-bold text-indigo-300 mb-4">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {["C++", "Java", "C", "Python", "Dart", "Swift"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm hover:bg-indigo-500/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-indigo-400/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                  <h3 className="text-xl font-bold text-purple-300 mb-4">Web & Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "HTML",
                      "CSS",
                      "Bootstrap",
                      "PHP",
                      "Spring Boot",
                      "Spring Security",
                      "RestAPIs",
                      "JWT",
                      "WebSocket",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm hover:bg-purple-500/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-indigo-400/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10">
                  <h3 className="text-xl font-bold text-violet-300 mb-4">App Development</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Flutter", "FlutterFlow", "SwiftUI"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full text-sm hover:bg-violet-500/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-indigo-400/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
                  <h3 className="text-xl font-bold text-indigo-300 mb-4">Tools & Database</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Firebase", "SQL", "Git", "GitHub", "Maven", "Postman", "JUnit", "Figma", "Canva"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm hover:bg-indigo-500/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Achievements Section */}
          <AnimatedSection className="py-20 px-4" id="achievements">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-400/20 rounded-full text-indigo-300 text-sm font-medium backdrop-blur-sm">
                  <Award className="w-4 h-4" />
                  Achievements
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
                  Accomplishments
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-sm border border-indigo-400/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
                  <h3 className="text-2xl font-bold text-indigo-300 mb-6">Competitive Programming</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300">LeetCode: Solved 200+ DSA problems; Max Rating: 1412</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300">CodeChef: Max Rating: 1394</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-indigo-400/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                  <h3 className="text-2xl font-bold text-purple-300 mb-6">Leadership</h3>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-300">
                      Student Coordinator, Enkindle JUIT: Led a Robotic Arm Workshop for 200+ students; boosted club
                      project output by 15%.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white/5 backdrop-blur-sm border border-indigo-400/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10">
                <h3 className="text-2xl font-bold text-violet-300 mb-6">Certifications</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h4 className="font-semibold text-white mb-2">Supervised ML: Regression and Classification</h4>
                    <p className="text-indigo-300 text-sm">Stanford, Coursera, 2025</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-white mb-2">Programming Fundamentals in Swift</h4>
                    <p className="text-purple-300 text-sm">Meta, Coursera, 2024</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-white mb-2">Scaling with Google Cloud Operations</h4>
                    <p className="text-violet-300 text-sm">Google Cloud, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Section */}
          <AnimatedSection className="py-16 sm:py-20 px-4" id="contact">
            <div className="max-w-5xl mx-auto text-center">
              <div className="space-y-6 sm:space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-400/20 rounded-full text-indigo-300 text-sm font-medium backdrop-blur-sm">
                  <Mail className="w-4 h-4" />
                  Contact
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
                  Let's Connect
                </h2>
                <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto px-4 sm:px-0">
                  Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 px-2 sm:px-0">
                  <a
                    href="mailto:somyasoni0411@gmail.com"
                    className="group bg-white/5 backdrop-blur-sm border border-indigo-400/20 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20 min-h-[120px] flex flex-col justify-center"
                  >
                    <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-400 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Email</h3>
                    <p className="text-indigo-300 text-xs leading-tight break-words hyphens-auto">
                      somyasoni0411@gmail.com
                    </p>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/somya-soni-29100411e/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/5 backdrop-blur-sm border border-indigo-400/20 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 min-h-[120px] flex flex-col justify-center"
                  >
                    <Linkedin className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">LinkedIn</h3>
                    <p className="text-purple-300 text-xs">/in/somya-soni</p>
                  </a>

                  <a
                    href="https://x.com/the_Somya_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/5 backdrop-blur-sm border border-indigo-400/20 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/20 min-h-[120px] flex flex-col justify-center"
                  >
                    <Twitter className="w-8 h-8 sm:w-10 sm:h-10 text-violet-400 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Twitter</h3>
                    <p className="text-violet-300 text-xs">@the_Somya_</p>
                  </a>

                  <a
                    href="https://github.com/SONISOMYA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/5 backdrop-blur-sm border border-indigo-400/20 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20 min-h-[120px] flex flex-col justify-center"
                  >
                    <Github className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-400 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">GitHub</h3>
                    <p className="text-indigo-300 text-xs">/SONISOMYA</p>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Footer */}
          <footer className="py-12 px-4 border-t border-indigo-400/20">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-slate-400">
                © {new Date().getFullYear()} <span className="text-indigo-400 font-semibold">Somya Soni</span>. Crafted
                with <span className="text-red-400">♥</span> and lots of coffee.
              </p>
            </div>
          </footer>
        </div>
      </main>
    </>
  )
}
