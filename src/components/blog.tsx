import Section from "./ui/section"


// ————————————————————————————————
// Blog
// ————————————————————————————————
const posts = [
  {
    title: "Designing for Delight",
    excerpt: "Micro‑interactions that make users smile without slowing them down.",
    img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Accessible by Default",
    excerpt: "Why a11y isn’t optional—and practical steps to ship it.",
    img: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Motion as Meaning",
    excerpt: "Using animation to communicate hierarchy and intent.",
    img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop",
  },
]

const Blog = () => (
  <Section id="blog" title="From the Journal" kicker="Blog">
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((p) => (
        <a key={p.title} href="#" onClick={(e)=>e.preventDefault()} className="group rounded-3xl border border-gray-200 shadow-sm transition hover:shadow-md dark:border-gray-800">
          <div className="overflow-hidden rounded-t-3xl">
            <img src={p.img} alt={p.title} className="h-44 w-full object-cover transition duration-300 group-hover:scale-105" />
          </div>
          <div className="p-5">
            <h3 className="mb-1 font-semibold group-hover:text-indigo-600">{p.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{p.excerpt}</p>
          </div>
        </a>
      ))}
    </div>
  </Section>
)

export default Blog;