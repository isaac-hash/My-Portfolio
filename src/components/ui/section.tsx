import type { ReactNode } from "react"
import Container from "./container"
import { Sparkles } from "lucide-react"

interface SectionProps {
  id: string
  title: string
  kicker?: string
  children: ReactNode
}



const Section = ({ id, title, kicker, children }: SectionProps) => (
  <section id={id} className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
    <Container>
      <div className="mb-10">
        {kicker && (
          <p className="mb-2 inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium tracking-wide text-gray-600 dark:bg-gray-800/60 dark:text-gray-300">
            <Sparkles className="mr-1 h-3.5 w-3.5" /> {kicker}
          </p>
        )}
        <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">{title}</h2>
      </div>
      {children}
    </Container>
  </section>
)

export default Section