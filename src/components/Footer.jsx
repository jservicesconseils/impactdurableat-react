import BrandLogo from './BrandLogo'

export default function Footer(){
  return (
    <footer className="bg-[#0d423d] text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[500px]">
            <BrandLogo inverse />
            <p className="mt-6 text-[14px] leading-6 text-white/75">
              Des solutions durables pour des organisations plus responsables et des collectivités plus résilientes. Canada & Afrique.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:min-w-[420px] lg:max-w-[520px] lg:grid-cols-2">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">Contact</div>
              <div className="mt-3 space-y-2 text-[14px] leading-6 text-white/80">
                <div>87 rue Paul-Sabatier</div>
                <div>Gatineau J8V 2L9</div>
                <div>581 882 7458</div>
                <div>Djifa.atipoupou@gmail.com</div>
              </div>
            </div>

            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">Expertises</div>
              <div className="mt-3 space-y-2 text-[14px] leading-6 text-white/80">
                <div>GMR</div>
                <div>Économie circulaire</div>
                <div>ESG</div>
                <div>Villes durables</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5 text-[12px] text-white/60">
          © {new Date().getFullYear()} Impact Durable AT. Expertiser aujourd’hui, agir pour demain.
        </div>
      </div>
    </footer>
  )
}
