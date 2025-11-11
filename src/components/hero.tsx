

import { motion } from "framer-motion";
import type { MouseEvent } from "react";
import { ArrowUpRight, Mail, Github, Linkedin, Instagram, Sparkles, Download,  Youtube, Twitter } from "lucide-react"
import Container from "./ui/container"
import PrimaryButton from "./ui/primaryButton"
import GhostButton from "./ui/ghostButton"


// ————————————————————————————————
// Hero
// ————————————————————————————————
const handleLinkClick = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId?: string) => {
  e.preventDefault();
  if (targetId) {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  }
};

const socialLinks = [
  { href: "https://github.com/isaac-hash", label: "GitHub", icon: Github },
  { href: "#", label: "LinkedIn", icon: Linkedin },
  { href: "#", label: "Instagram", icon: Instagram },
  { href: "#", label: "Twitter", icon: Twitter },
];

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950">
      <Container>
        <div className="grid gap-10 py-20 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-3 inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-600 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:ring-gray-800">
              <Sparkles className="mr-1 h-3.5 w-3.5" /> Hello, I'm
            </p>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Isaac <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Chukwudulue</span>
            </h1>
            <p className="mb-8 max-w-2xl text-gray-600 dark:text-gray-300">
              Creative and detail-oriented Fullstack Developer with a proven track record of building responsive, user-friendly web applications.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <PrimaryButton href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>
                <Mail className="h-4 w-4" /> Hire Me
              </PrimaryButton>
              <GhostButton href="#portfolio" onClick={(e) => handleLinkClick(e, "portfolio")}>
                <ArrowUpRight className="h-4 w-4" /> View Work
              </GhostButton>
              <GhostButton href="https://flowcv.com/resume/48nm4k7b668b" onClick={handleLinkClick}>
                <ArrowUpRight className="h-4 w-4" /> View CV
              </GhostButton>
            </div>
            <div className="mt-8 flex items-center gap-5 text-gray-500">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a key={label} href={href} aria-label={label} className="transition hover:text-gray-900 dark:hover:text-white">
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
              <img
                className="h-full w-full object-cover"
                src="https://img.freepik.com/free-photo/male-developer-entering-binary-data-terminal-panel_482257-75385.jpg"
                alt="Portrait"
              />
            </div>
            <div className="absolute -right-8 -top-8 hidden h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-500/30 to-fuchsia-500/20 blur-2xl md:block" />
            <div className="absolute -bottom-10 -left-8 hidden h-40 w-40 rounded-full bg-gradient-to-tr from-violet-500/30 to-sky-500/20 blur-2xl md:block" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Hero;