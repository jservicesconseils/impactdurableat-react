
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Approach from './components/Approach'
import Africa from './components/Africa'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen bg-[#f4f1ee] text-zinc-900 overflow-x-hidden">
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Approach/>
      <Africa/>
      <Clients/>
      <Contact/>
      <Footer/>
    </div>
  )
}
