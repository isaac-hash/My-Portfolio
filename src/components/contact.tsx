import PrimaryButton from "./ui/primaryButton"
import Section from "./ui/section"

import {  Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react"



// ————————————————————————————————
// Contact
// ————————————————————————————————
const Contact = () => (
  <Section id="contact" title="Let’s Work Together" kicker="Contact">
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="rounded-3xl border border-gray-200 p-6 dark:border-gray-800 lg:col-span-2">
        <h3 className="mb-3 text-lg font-semibold">Contact Info</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center gap-3"><Mail className="h-4 w-4" /> zikkychukwudulue@gmail.com</li>
          <li className="flex items-center gap-3"><Phone className="h-4 w-4" /> +234 (815) 609 5945</li>
          <li className="flex items-center gap-3"><MapPin className="h-4 w-4" /> Enugu, Nigeria</li>
        </ul>
        <div className="mt-5 flex gap-3">
          <a href="https://github.com/isaac-hash" aria-label="GitHub" className="rounded-xl border px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800"><Github className="h-4 w-4" /></a>
          <a href="#" aria-label="LinkedIn" className="rounded-xl border px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800"><Linkedin className="h-4 w-4" /></a>
          <a href="#" aria-label="Instagram" className="rounded-xl border px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800"><Instagram className="h-4 w-4" /></a>
        </div>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="rounded-3xl border border-gray-200 p-6 dark:border-gray-800 lg:col-span-3">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm text-gray-600 dark:text-gray-300">Name</label>
            <input required className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring-2 dark:border-gray-700 dark:bg-gray-900" />
          </div>
          <div>
            <label className="mb-1 block text-sm text-gray-600 dark:text-gray-300">Email</label>
            <input type="email" required className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring-2 dark:border-gray-700 dark:bg-gray-900" />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm text-gray-600 dark:text-gray-300">Subject</label>
            <input className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring-2 dark:border-gray-700 dark:bg-gray-900" />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm text-gray-600 dark:text-gray-300">Message</label>
            <textarea rows={5} className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring-2 dark:border-gray-700 dark:bg-gray-900" />
          </div>
        </div>
        <div className="mt-4">
          <PrimaryButton>
            <Mail className="h-4 w-4" /> Send Message
          </PrimaryButton>
        </div>
      </form>
    </div>
  </Section>
)

export default Contact;