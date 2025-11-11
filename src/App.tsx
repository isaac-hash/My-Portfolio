import './App.css'
import Header from './components/header'
import Hero from './components/hero'
import About from './components/about'
import Services from './components/services'
import Portfolio from './components/portfolio'
import Resume from './components/resume'
import Testimonials from './components/testimonials'
import Blog from './components/blog'
import Contact from './components/contact'
import Footer from './components/footer'
import BackToTop from './components/BackToTop'


function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Resume />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
