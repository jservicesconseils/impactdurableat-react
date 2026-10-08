
const services=[
  {n:'01',title:'Gestion des matières résiduelles',desc:'Diagnostic, caractérisation, optimisation collecte & tri, réduction à la source, valorisation organiques, PGMR, indicateurs.',bullets:['Diagnostic & caractérisation','Optimisation tri','Valorisation & sensibilisation']},
  {n:'02',title:'Économie circulaire',desc:'Passer du linéaire au circulaire : préserver la valeur des ressources le plus longtemps possible.',bullets:['Diagnostic de circularité','Écoconception','Symbiose industrielle']},
  {n:'03',title:'Villes & municipalités durables',desc:'Intégrer le DD à la planification : plans DD, diagnostics territoriaux, mobilisation, achats responsables.',bullets:['Plans de développement durable','Mobilisation citoyenne','Événements écoresponsables']},
  {n:'04',title:'ESG',desc:'Structurer progressivement la démarche ESG : enjeux, parties prenantes, tableau de bord, reddition.',bullets:['Diagnostic ESG','Stratégie & indicateurs','Politiques & gouvernance']},
  {n:'05',title:'ISO 14001',desc:'Structurer le système de management environnemental et préparer la certification.',bullets:['Analyse écarts','Aspects & impacts','Amélioration continue']},
  {n:'06',title:'ICI ON RECYCLE +',desc:'Améliorer la performance GMR et cheminer vers la reconnaissance.',bullets:['Diagnostic','Plan d\'amélioration','Accompagnement démarche']},
  {n:'07',title:'Événements responsables',desc:'Réduire l\'empreinte des événements : zéro déchet, réemploi, approvisionnement responsable.',bullets:['Stations de tri','Anti-gaspillage','Mesure des résultats']},
  {n:'08',title:'Achats responsables',desc:'Intégrer critères enviro, sociaux, économiques dans l\'approvisionnement.',bullets:['Politique d\'achat','Critères & cycle de vie','Sensibilisation équipes']},
];

function ServiceIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M7 17L17 7M9 7H17V15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Services(){
  return (
    <section id="expertises" className="bg-[#f3f0ec] py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="display text-[40px] leading-[0.9] tracking-[-0.04em] text-[#121821] lg:text-[64px]">
            Nos<br/>expertises.
          </h2>
          <p className="max-w-[420px] text-[16px] leading-7 text-zinc-600">
            Des interventions pragmatiques, territoriales et orientées résultats. Du diagnostic à la mesure.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map(s => (
            <div key={s.n} className="min-h-[320px] rounded-[24px] border border-black/5 bg-white/80 p-6 shadow-[0_1px_0_rgba(0,0,0,0.02)] transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#0d423d] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">{s.n}</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1a8a62] text-white">
                  <ServiceIcon />
                </span>
              </div>

              <h3 className="mt-6 text-[19px] font-bold leading-6 text-[#121821]">{s.title}</h3>
              <p className="mt-3 text-[13.5px] leading-6 text-zinc-600">{s.desc}</p>

              <div className="mt-6 space-y-2">
                {s.bullets.map(b => (
                  <div key={b} className="flex items-start gap-2 text-[12px] text-zinc-700">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#7bbf59]" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
