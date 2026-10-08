
import { useState } from 'react'
import BrandLogo from './BrandLogo'

export default function Header(){
  const [open,setOpen]=useState(false)
  return (
    <header className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-sm border-b border-black/5">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 h-[72px] flex items-center justify-between">
        <BrandLogo />
        <nav className="hidden lg:flex items-center gap-8 text-[13.5px] font-medium tracking-wide text-[#132e49]">
          {['Expertises','Approche','Afrique','Clients','Contact'].map(i=>(
            <a key={i} href={`#${i.toLowerCase()}`} className="hover:text-[#1a8a62] transition">{i}</a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href="#contact" className="px-5 py-2.5 rounded-full bg-[#0d423d] text-white text-sm font-semibold">Parlons-en</a>
        </div>
        <button onClick={()=>setOpen(!open)} className="lg:hidden w-10 h-10 rounded-full bg-[#0d423d] text-white">≡</button>
      </div>
      {open && (
        <div className="lg:hidden px-6 pb-6 pt-2 bg-white border-t">
          {['Expertises','Approche','Afrique','Clients','Contact'].map(i=>(
            <a key={i} onClick={()=>setOpen(false)} href={`#${i.toLowerCase()}`} className="block py-3 font-medium text-[#0d233d]">{i}</a>
          ))}
        </div>
      )}
    </header>
  )
}
