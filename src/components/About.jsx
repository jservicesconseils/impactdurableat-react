
const logoPills = [
  { label: 'ISO 14001', tone: 'bg-[#f7efe8] text-[#1d2d3b] border-[#e6d7c9]' },
  { label: 'ICI ON RECYCLE +', tone: 'bg-[#eaf7ef] text-[#163c2d] border-[#cfead9]' },
  { label: 'ÉVÉNEMENTS ZÉRO DÉCHET', tone: 'bg-[#eef3fb] text-[#1c3048] border-[#d6e0f0]' },
  { label: 'ACHATS RESPONSABLES', tone: 'bg-[#fff3e8] text-[#4f2c1d] border-[#f1d4b3]' },
  { label: 'VILLES DURABLES', tone: 'bg-[#f2f6ed] text-[#25462d] border-[#d9e4d3]' },
];

const valuePoints = [
  ['Compréhensible', 'Traduire les enjeux complexes en solutions accessibles.'],
  ['Actionnable', 'Transformer les stratégies en plans d\'action concrets.'],
  ['Adapté', 'Tenir compte de la réalité, ressources et priorités.'],
  ['Mesurable', 'Objectifs et indicateurs pour suivre les progrès.'],
  ['Créateur de valeur', 'Bénéfices environnementaux, économiques et sociaux.'],
  ['Collaboratif', 'Impliquer les équipes et partenaires pour ancrer le changement.'],
];

function CheckIcon(){
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M5 12.5L9.2 16.7L19 6.9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function About(){
  return (
    <section id="about" className="bg-[#e9e3dd] px-6 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-6 flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-[0.18em]">
          {logoPills.map((item) => (
            <span key={item.label} className={`rounded-full border px-3 py-1.5 shadow-sm ${item.tone}`}>
              {item.label}
            </span>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="self-start">
            <h2 className="display text-[42px] font-[700] leading-[0.88] tracking-[-0.05em] text-[#121821] lg:text-[66px]">
              Transformer<br/>l'obligation<br/>en levier.
            </h2>

            <div className="mt-8 rounded-[24px] bg-[#f1ede9] p-6 shadow-[inset_0_0_0_1px_rgba(17,24,39,0.06)] lg:min-h-[420px]">
              <div className="overflow-hidden rounded-[18px] border border-black/5 bg-white/60">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                  alt="Mission Impact Durable AT"
                  className="h-[180px] w-full object-cover"
                />
              </div>

              <div className="mt-5 text-[11px] font-bold tracking-[0.18em] text-zinc-600 uppercase">Mission</div>
              <p className="mt-3 text-[15px] leading-6 text-zinc-700">
                Accompagner organisations et collectivités vers des modèles plus durables, responsables et circulaires. Rendre le durable accessible, concret, mesurable.
              </p>

              <div className="mt-5 text-[11px] font-bold tracking-[0.18em] text-zinc-600 uppercase">Vision</div>
              <p className="mt-3 text-[15px] leading-6 text-zinc-700">
                Faire émerger des entreprises responsables et des villes résilientes, efficaces dans l’utilisation des ressources.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <p className="max-w-[560px] text-[18px] leading-8 text-zinc-800 lg:text-[20px]">
              Pour de nombreuses PME et collectivités, le défi n’est pas seulement de vouloir agir,
              mais de savoir par où commencer, quelles priorités établir, comment structurer une démarche
              avec des ressources limitées.
            </p>

            <p className="mt-5 max-w-[560px] text-[15px] leading-7 text-zinc-600">
              C’est précisément là qu’intervient Impact Durable AT. Nous apportons l’expertise, les méthodes et
              l’accompagnement pour passer : <span className="font-semibold text-[#121821]">de l’enjeu → au diagnostic → à la stratégie → au plan d’action → aux résultats.</span>
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {valuePoints.map(([title, desc], index) => (
                <div key={title} className="rounded-[18px] border border-black/5 bg-white/80 p-4 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1a8a62] text-white shadow-sm">
                      <CheckIcon />
                    </span>
                    <div className="text-[16px] font-bold text-[#121821]">{title}</div>
                  </div>
                  <p className="mt-3 text-[13px] leading-5 text-zinc-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
