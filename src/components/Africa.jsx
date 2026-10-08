
export default function Africa(){
  return (
    <section id="afrique" className="bg-[#F6FFF8] border-y border-brand-100 py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 rounded-full bg-black text-white text-[11px] font-bold tracking-widest">AXE INTERNATIONAL</span>
          <span className="px-3 py-1 rounded-full bg-brand-500 text-black text-[11px] font-bold tracking-widest">AFRIQUE • RENFORCEMENT CAPACITÉS • PARTENARIATS LOCAUX</span>
        </div>
        <div className="mt-6 grid items-center gap-8 lg:grid-cols-[1fr_.8fr]">
          <h2 className="display text-[36px] lg:text-[56px] leading-[0.95] font-extrabold">Une expertise au service<br/>des territoires africains.</h2>
          <img
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85"
            alt="Paysage africain, au cœur des territoires accompagnés"
            className="h-[220px] w-full rounded-[20px] object-cover sm:h-[280px]"
          />
        </div>
        <div className="mt-10 grid lg:grid-cols-3 gap-px rounded-[24px] overflow-hidden bg-[#F6FFF8]">
          {[
            {t:'Gestion des matières résiduelles',items:['Diagnostics territoriaux','Plans GMR','Optimisation collecte','Tri & valorisation','Réduction dépôts sauvages','Filières de valorisation']},
            {t:'Villes durables & Assainissement',items:['Plans DD','Stratégies env. municipales','Résilience urbaine','Mobilisation citoyenne','Gestion eaux usées & boues','Coordination projets']},
            {t:'Économie circulaire',items:['Valorisation ressources','Réemploi & recyclage','Matières organiques','Chaînes de valeur locales','Projets circulaires','Adaptation réalités locales']},
          ].map(c=>(
            <div key={c.t} className="bg-white p-7">
              <div className="font-bold text-[16px]">{c.t}</div>
              <ul className="mt-4 space-y-2">
                {c.items.map(i=><li key={i} className="text-[13.5px] text-zinc-600 flex gap-2"><span className="text-brand-600">—</span>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
