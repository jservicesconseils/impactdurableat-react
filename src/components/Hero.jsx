
import { useEffect, useState } from 'react';

const slides = [
  {
    title: 'Conseil stratégique environnemental',
    label: 'Canada • Afrique',
    image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Accompagnement PME & municipalités',
    label: 'Impact durable',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Solutions concrètes pour l’action',
    label: 'Économie circulaire',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function Hero(){
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[activeSlide];

  return (
    <section className="relative pt-[72px] bg-[#0d423d] text-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-10 lg:gap-16 pt-10 lg:pt-16 pb-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold tracking-widest uppercase text-white/90">
              <span className="w-2 h-2 rounded-full bg-[#7bbf59] animate-pulse"/> CANADA • AFRIQUE • PME & VILLES
            </div>
            <h1 className="hero-title mt-6 text-[38px] font-bold leading-[0.95] tracking-[-0.02em] text-white lg:text-[68px]">
              <span className="block">Expertiser</span>
              <span className="block">aujourd'hui,</span>
              <span className="block text-[#7bbf59]">Agir pour</span>
              <span className="block text-[#7bbf59]">demain.</span>
            </h1>
            <p className="mt-6 max-w-[560px] text-[17px] leading-7 text-zinc-300">
              Impact Durable AT transforme vos enjeux environnementaux en solutions durables, concrètes et créatrices de valeur. Conseil stratégique en GMR, économie circulaire, ESG et performance municipale.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="px-7 py-3.5 rounded-full bg-[#1a8a62] text-white font-semibold text-[15px] shadow-[0_18px_40px_rgba(26,138,98,0.35)] hover:bg-[#136d54] transition">Planifier un échange →</a>
              <a href="#expertises" className="px-7 py-3.5 rounded-full border border-white/15 font-semibold text-[15px] bg-[#7bbf59] hover:bg-[#5ca84d] text-white transition">Voir nos expertises</a>
            </div>
            <div className="mt-10 grid grid-cols-3 max-w-[520px] border-t border-white/10 pt-6">
              <div><div className="display text-[28px] font-extrabold text-white">8</div><div className="text-[11px] uppercase tracking-widest font-bold text-zinc-400">Expertises<br/>métiers</div></div>
              <div><div className="display text-[28px] font-extrabold text-white">2</div><div className="text-[11px] uppercase tracking-widest font-bold text-zinc-400">Continents<br/>d'intervention</div></div>
              <div><div className="display text-[28px] font-extrabold text-white">5</div><div className="text-[11px] uppercase tracking-widest font-bold text-zinc-400">Étapes<br/>d'accompagnement</div></div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#091d33] shadow-[0_30px_80px_rgba(4,12,24,0.6)]">
              <div className="relative h-[620px] w-full overflow-hidden">
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="h-full w-full object-cover transition duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061620]/90 via-[#061620]/25 to-[#061620]/5" />

                <div className="absolute inset-x-0 bottom-0 z-10 p-5 lg:p-6">
                  <div className="mb-3 inline-flex rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/95 shadow-lg backdrop-blur-sm">
                    {currentSlide.label}
                  </div>
                  <h3 className="display max-w-[360px] text-[32px] leading-[1.05] text-white drop-shadow-[0_5px_18px_rgba(0,0,0,0.7)] lg:text-[38px]">
                    {currentSlide.title === 'Accompagnement PME & municipalités' ? (
                      <>Accompagnement PME <span style={{ fontFamily: 'Inter, sans-serif' }}>&amp;</span> municipalités</>
                    ) : currentSlide.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-[#0d423d]/90 px-4 py-3">
                {slides.map((slide, index) => (
                  <button
                    key={slide.label}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    className={`h-2 flex-1 rounded-full transition ${
                      index === activeSlide ? 'bg-[#7bbf59]' : 'bg-white/20'
                    }`}
                    aria-label={`Afficher le slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="border-y border-black/5 bg-zinc-50/60 overflow-hidden">
        <div className="flex gap-12 py-3 marquee whitespace-nowrap">
          {Array(2).fill(['GESTION MATIÈRES RÉSIDUELLES','ÉCONOMIE CIRCULAIRE','ESG','ISO 14001','ICI ON RECYCLE +','ÉVÉNEMENTS ZÉRO DÉCHET','ACHATS RESPONSABLES','VILLES DURABLES']).flat().map((t,i)=>(
            <span key={i} className="text-[11px] font-bold tracking-[0.18em]">{t} •</span>
          ))}
        </div>
      </div>
    </section>
  )
}
