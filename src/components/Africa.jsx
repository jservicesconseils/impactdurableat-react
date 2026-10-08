
export default function Africa(){
  return (
    <section id="afrique" className="bg-[#e7efe9] py-16 lg:py-20">
      <div className="mx-auto max-w-[980px] px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3">
          <span className="px-3 py-1 rounded-full bg-[#0d423d] text-white text-[10px] font-bold tracking-[0.18em] uppercase">Axe international</span>
          <span className="px-3 py-1 rounded-full bg-[#1a8a62] text-white text-[10px] font-bold tracking-[0.18em] uppercase">Afrique • Renforcement capacités • Partenariats locaux</span>
        </div>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1fr_260px]">
          <h2 className="display text-[34px] font-extrabold leading-[0.95] tracking-[-0.05em] text-[#101b1a] lg:text-[54px]">
            Une expertise au service<br/>des territoires africains.
          </h2>
          <div className="overflow-hidden rounded-[20px] border border-black/5 bg-[#f5f0ea] shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
            <img
              src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85"
              alt="Paysage africain, au cœur des territoires accompagnés"
              className="h-[190px] w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {[
            {t:'Gestion des matières résiduelles',items:['Diagnostics territoriaux','Plans GMR','Optimisation collecte','Tri & valorisation','Réduction dépôts sauvages','Filières de valorisation']},
            {t:'Villes durables & Assainissement',items:['Plans DD','Stratégies env. municipales','Résilience urbaine','Mobilisation citoyenne','Gestion eaux usées & boues','Coordination projets']},
            {t:'Économie circulaire',items:['Valorisation ressources','Réemploi & recyclage','Matières organiques','Chaînes de valeur locales','Projets circulaires','Adaptation réalités locales']},
          ].map(c=>(
            <div key={c.t} className="rounded-[18px] border border-black/5 bg-white/80 p-5 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
              <div className="font-bold text-[15px] text-[#101b1a]">{c.t}</div>
              <ul className="mt-4 space-y-2">
                {c.items.map(i=><li key={i} className="flex gap-2 text-[12.5px] leading-5 text-zinc-600"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#1a8a62]" />{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
