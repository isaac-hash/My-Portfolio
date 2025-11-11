import Container from "./ui/container";



// ————————————————————————————————
// Footer
// ————————————————————————————————
const Footer = () => (
  <footer className="border-t border-gray-200 py-10 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-300">
    <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
      <p>© {new Date().getFullYear()} Created by zeec the designer.</p>
      <div className="flex flex-wrap items-center gap-5">
        <a href="#home" onClick={(e)=>{e.preventDefault(); document.getElementById("home")?.scrollIntoView({behavior:"smooth"})}} className="hover:text-gray-900 dark:hover:text-white">Home</a>
        <a href="#about" onClick={(e)=>{e.preventDefault(); document.getElementById("about")?.scrollIntoView({behavior:"smooth"})}} className="hover:text-gray-900 dark:hover:text-white">About</a>
        <a href="#portfolio" onClick={(e)=>{e.preventDefault(); document.getElementById("portfolio")?.scrollIntoView({behavior:"smooth"})}} className="hover:text-gray-900 dark:hover:text-white">Portfolio</a>
        <a href="#contact" onClick={(e)=>{e.preventDefault(); document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}} className="hover:text-gray-900 dark:hover:text-white">Contact</a>
      </div>
    </Container>
  </footer>
)

export default Footer;  