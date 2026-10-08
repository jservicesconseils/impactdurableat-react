
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
    <section id="clients" className="bg-[#e9e3dd] px-6 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-0">
        {audiences.map(({ label, heading, needs }, index) => {
          return (
            <article key={label} className={`${index === 1 ? 'border-t border-black/15 pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0' : 'lg:pr-12'}`}>
              <div className="border-b border-black/15 pb-6">
                <div className="text-[11px] font-bold tracking-[0.16em] text-brand-700">{label}</div>
                <h3 className="display mt-3 max-w-[420px] text-[32px] font-bold leading-[1.05] text-[#121821] sm:text-[38px]">{heading}</h3>
                <p className="mt-3 text-[14px] font-semibold text-zinc-600">Vous souhaitez :</p>
              </div>
              <ul className="mt-2">
                {needs.map((need) => (
                  <li key={need} className="flex items-start gap-3 border-b border-black/10 py-3 text-[14px] leading-5 text-zinc-700 last:border-b-0">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500 text-[11px] font-bold text-black" aria-hidden="true">✓</span>
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
