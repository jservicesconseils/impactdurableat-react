
export default function Approach(){
  return (
    <section id="approche" className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8 lg:py-28">
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <div className="rounded-[30px] bg-white p-5 shadow-[0_10px_25px_rgba(15,23,42,0.04)] ring-1 ring-black/5">
          <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-600">Notre approche — 5 étapes</div>

          {[
            ['01','DIAGNOSTIQUER','Comprendre situation, besoins, contraintes, opportunités.'],
            ['02','PRIORISER','Identifier les enjeux qui auront le plus d\'impact.'],
            ['03','PLANIFIER','Définir stratégie, objectifs et plan réaliste.'],
            ['04','ACCOMPAGNER','Soutenir la mise en œuvre des solutions.'],
            ['05','MESURER','Suivre résultats, ajuster, amélioration continue.'],
          ].map(([n,k,d]) => (
            <div key={n} className="flex gap-4 border-t border-black/5 py-4 first:border-t-0 first:pt-0">
              <div className="display text-[28px] font-extrabold leading-none text-[#121821]">{n}</div>
              <div className="flex-1">
                <div className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-zinc-700">{k}</div>
                <div className="mt-1 text-[13px] leading-6 text-zinc-600">{d}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:pl-8">
          <h2 className="display text-[40px] leading-[0.95] tracking-[-0.04em] text-[#121821] lg:text-[60px]">
            Pragmatique.<br/>Territoriale.<br/>Orientée résultats.
          </h2>

          <p className="mt-6 max-w-[520px] text-[17px] leading-7 text-zinc-600">
            Nous ne proposons pas de solutions standardisées. Chaque mandat est adapté aux capacités,
            ressources et priorités de l’organisation.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[22px] border border-black/5 bg-[#f8f4f1] p-5">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-600">Positionnement</div>
              <div className="mt-3 text-[13px] leading-6 text-zinc-700">
                Nom: Impact Durable AT<br/>
                Secteur: Conseil environnement & DD<br/>
                Marchés: Canada & Afrique<br/>
                Clients: PME, villes, municipalités
              </div>
            </div>

            <div className="rounded-[22px] bg-[#111827] p-5 text-white shadow-[0_10px_25px_rgba(17,24,39,0.18)]">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">Différenciation</div>
              <div className="mt-3 text-[13px] leading-6 text-white/80">
                Approche pragmatique, territoriale et orientée résultats. Diagnostic → stratégie → accompagnement → mesure.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
