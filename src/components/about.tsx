import Section from "./ui/section"
import { Code2, PenTool, Smartphone, MonitorSmartphone} from "lucide-react"

// ————————————————————————————————
// About
// ————————————————————————————————
const About = () => (
  <Section id="about" title="About Me" kicker="Who I Am">
    <div className="grid gap-10 md:grid-cols-2 md:items-center">
      <div>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          I'm a multidisciplinary developer & designer with 3+ years crafting delightful web apps and brands. I blend solid engineering with visual polish and interaction design to ship products people love.
        </p>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-2xl border border-gray-200 p-4 dark:border-gray-800">
            <p className="text-gray-500">From</p>
            <p className="font-medium">Anambra, Nigeria</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-4 dark:border-gray-800">
            <p className="text-gray-500">Experience</p>
            <p className="font-medium">3+ Years</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-4 dark:border-gray-800">
            <p className="text-gray-500">Freelance</p>
            <p className="font-medium">Available</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-4 dark:border-gray-800">
            <p className="text-gray-500">Email</p>
            <p className="font-medium">zikkychukwudulue@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: "Web Dev", icon: Code2 },
          { label: "App Dev", icon: 
            Smartphone
           },
          { label: "UI/UX", icon: MonitorSmartphone },
          { label: "Graphics", icon: PenTool },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-gray-200 p-4 dark:border-gray-800">
            <item.icon className="h-5 w-5" />
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </Section>
)

export default About;   