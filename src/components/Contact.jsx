
export default function Contact(){
  return (
    <section id="contact" className="py-16 lg:py-24" style={{ backgroundColor: 'rgb(242 246 237 / var(--tw-bg-opacity, 1))' }}>
      <div className="mx-auto max-w-[980px] px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_430px]">
          <div className="flex h-full flex-col">
            <h2 className="display mt-0 text-[28px] leading-[1] font-extrabold tracking-tight text-black sm:text-[34px] lg:text-[42px]">Parlons de votre transition.</h2>

            <div className="mt-6 overflow-hidden rounded-[20px] border border-black/5 bg-white/60 shadow-[0_16px_35px_rgba(0,0,0,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80"
                alt="Transition durable"
                className="h-[210px] w-full object-cover grayscale contrast-125 brightness-90"
              />
            </div>

            <p className="mt-5 max-w-[430px] text-[15px] leading-6 text-black/70">Dites-nous où vous en êtes. On vous revient avec un diagnostic rapide et les prochaines étapes concrètes.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-2xl bg-black text-white px-4 py-3 text-sm"><div className="text-[10px] opacity-60 tracking-widest font-bold">TÉLÉPHONE</div><div className="font-bold mt-1">581 882 7458</div></div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm"><div className="text-[10px] opacity-60 tracking-widest font-bold">EMAIL</div><div className="font-bold mt-1">Djifa.atipoupou@gmail.com</div></div>
            </div>

            <div className="mt-4 rounded-2xl bg-white/70 border border-black/5 px-4 py-3 text-[12px] font-medium text-black/80">87 rue Paul-Sabatier, Gatineau J8V 2L9 — Interventions Canada & Afrique</div>
          </div>

          <form onSubmit={e=>{e.preventDefault(); alert('Merci ! Message simulé envoyé. Branchez Formspree / API ensuite.')}} className="rounded-[24px] bg-white p-5 shadow-[0_18px_34px_rgba(0,0,0,0.1)] lg:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div><label className="text-[10px] font-bold tracking-widest text-zinc-600">NOM</label><input required className="mt-2 w-full rounded-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-[#1a8a62]" placeholder="Votre nom"/></div>
              <div><label className="text-[10px] font-bold tracking-widest text-zinc-600">ORGANISATION</label><input className="mt-2 w-full rounded-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-[#1a8a62]" placeholder="PME / Ville"/></div>
            </div>
            <div className="mt-4"><label className="text-[10px] font-bold tracking-widest text-zinc-600">EMAIL</label><input required type="email" className="mt-2 w-full rounded-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-[#1a8a62]" placeholder="vous@organisation.ca"/></div>
            <div className="mt-4"><label className="text-[10px] font-bold tracking-widest text-zinc-600">BESOIN</label>
              <select className="mt-2 w-full rounded-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-[#1a8a62]">
                <option>Gestion matières résiduelles</option><option>Économie circulaire</option><option>Plan DD municipal</option><option>ESG</option><option>ISO 14001</option><option>ICI ON RECYCLE +</option><option>Événements responsables</option><option>Achats responsables</option><option>Autre</option>
              </select>
            </div>
            <div className="mt-4"><label className="text-[10px] font-bold tracking-widest text-zinc-600">MESSAGE</label><textarea rows={4} className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-[#1a8a62]" placeholder="Décrivez votre contexte, objectifs, échéance..."/></div>
            <button className="mt-6 w-full rounded-full bg-black text-white py-3.5 font-bold text-sm">Envoyer ma demande →</button>
            <div className="mt-3 text-[10px] text-zinc-500 text-center">Réponse sous 24h ouvrées. Aucun engagement.</div>
          </form>
        </div>
      </div>
    </section>
  )
}
