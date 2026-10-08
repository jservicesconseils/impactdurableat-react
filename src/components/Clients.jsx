
export default function Clients(){
  const audiences = [
    {
      label: 'PME',
      heading: 'PME',
      needs: ['Réduire coûts et déchets','Améliorer efficacité environnementale','Structurer démarche ESG','Développer pratiques d\'affaires responsables','Intégrer économie circulaire','Améliorer image & crédibilité','Répondre attentes clients & partenaires','Préparer certifications / reconnaissances'],
    },
    {
      label: 'COLLECTIVITÉS',
      heading: 'Villes et municipalités',
      needs: ['Améliorer gestion matières résiduelles','Élaborer plan de développement durable','Développer projets d\'économie circulaire','Mobiliser les citoyens','Organiser événements responsables','Améliorer pratiques d\'achat','Structurer stratégies environnementales','Mesurer progrès & renforcer capacité'],
    },
  ];

  return (
    <section id="clients" className="bg-[#eef3ec] py-16 lg:py-20">
      <div className="mx-auto max-w-[980px] px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        {audiences.map(({ label, heading, needs }, index) => {
          return (
            <article key={label} className={`${index === 1 ? 'border-t border-black/15 pt-10 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0' : ''}`}>
              <div className="border-b border-black/15 pb-5">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0d423d]">{label}</div>
                <h3 className="display mt-3 max-w-[420px] text-[30px] font-bold leading-[1.05] text-[#101b1a] sm:text-[38px]">{heading}</h3>
                <p className="mt-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-zinc-600">Vous souhaitez :</p>
              </div>
              <ul className="mt-2">
                {needs.map((need) => (
                  <li key={need} className="flex items-start gap-3 border-b border-black/10 py-3 text-[14px] leading-5 text-zinc-700 last:border-b-0">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1a8a62] text-[11px] font-bold text-white" aria-hidden="true">✓</span>
                    <span className="max-w-[440px]">{need}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
        </div>
      </div>
    </section>
  )
}
