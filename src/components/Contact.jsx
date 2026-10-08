
import { useState } from 'react'

export default function Contact(){
  const [submissionState, setSubmissionState] = useState('idle')
  const statusMessages = {
    idle: 'Réponse sous 24h ouvrées. Aucun engagement.',
    sending: 'Envoi en cours…',
    success: 'Votre demande a été envoyée.',
    error: 'L’envoi a échoué. Réessayez ou écrivez-nous directement.',
  }
  const statusClass = submissionState === 'error' ? 'text-red-700' : 'text-zinc-500'

  async function handleSubmit(event){
    event.preventDefault()
    const form = event.currentTarget
    const fields = Object.fromEntries(new FormData(form).entries())
    setSubmissionState('sending')

    try {
      const response = await fetch('https://formsubmit.co/ajax/Djifa.atipoupou@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...fields,
          _subject: 'Nouvelle demande - Impact Durable AT',
          _replyto: fields.email,
        }),
      })
      const result = await response.json()

      if (!response.ok || (result.success !== 'true' && result.success !== true)) {
        throw new Error('Form submission failed')
      }

      form.reset()
      setSubmissionState('success')
    } catch {
      setSubmissionState('error')
    }
  }

  return (
    <section id="contact" className="bg-[#e9e3dd] py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-10 items-start">
          <div className="flex h-full flex-col">
            <h2 className="display mt-0 whitespace-nowrap text-[20px] sm:text-[26px] lg:text-[38px] leading-[1] font-extrabold tracking-tight text-black">Parlons de votre transition.</h2>

            <div className="mt-6 overflow-hidden rounded-[28px] border border-black/5 bg-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.06)] lg:mt-8">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Transition durable"
                className="h-[260px] w-full object-cover grayscale"
              />
            </div>

            <p className="mt-5 text-black/70 max-w-[520px] text-[17px] leading-7">Dites-nous où vous en êtes. On vous revient avec un diagnostic rapide et les prochaines étapes concrètes.</p>
            <div className="mt-8 flex gap-3">
              <div className="rounded-2xl bg-black text-white px-5 py-4 text-sm"><div className="text-[11px] opacity-60 tracking-widest font-bold">TÉLÉPHONE</div><div className="font-bold mt-1">581 882 7458</div></div>
              <div className="rounded-2xl bg-white px-5 py-4 text-sm"><div className="text-[11px] opacity-60 tracking-widest font-bold">EMAIL</div><div className="font-bold mt-1">Djifa.atipoupou@gmail.com</div></div>
            </div>
            <div className="mt-4 rounded-2xl bg-white/70 border border-black/5 px-5 py-4 text-sm font-medium">87 rue Paul-Sabatier, Gatineau J8V 2L9 — Interventions Canada & Afrique</div>
          </div>
            <form onSubmit={handleSubmit} className="rounded-[28px] border-0 bg-white p-6 lg:p-8 shadow-none lg:min-h-[450px]">
            <input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" />
            <div className="grid sm:grid-cols-2 gap-4">
              <div><label htmlFor="contact-name" className="text-[11px] font-bold tracking-widest">NOM</label><input id="contact-name" name="nom" required className="mt-2 w-full rounded-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-500" placeholder="Votre nom"/></div>
              <div><label htmlFor="contact-organization" className="text-[11px] font-bold tracking-widest">ORGANISATION</label><input id="contact-organization" name="organisation" className="mt-2 w-full rounded-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-500" placeholder="PME / Ville"/></div>
            </div>
            <div className="mt-4"><label htmlFor="contact-email" className="text-[11px] font-bold tracking-widest">EMAIL</label><input id="contact-email" name="email" required type="email" className="mt-2 w-full rounded-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-500" placeholder="vous@organisation.ca"/></div>
            <div className="mt-4"><label htmlFor="contact-need" className="text-[11px] font-bold tracking-widest">BESOIN</label>
              <select id="contact-need" name="besoin" className="mt-2 w-full rounded-full border border-black/10 px-4 py-3 text-sm outline-none">
                <option>Gestion matières résiduelles</option><option>Économie circulaire</option><option>Plan DD municipal</option><option>ESG</option><option>ISO 14001</option><option>ICI ON RECYCLE +</option><option>Événements responsables</option><option>Achats responsables</option><option>Autre</option>
              </select>
            </div>
            <div className="mt-4"><label htmlFor="contact-message" className="text-[11px] font-bold tracking-widest">MESSAGE</label><textarea id="contact-message" name="message" rows={4} className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-500" placeholder="Décrivez votre contexte, objectifs, échéance..."/></div>
            <button type="submit" disabled={submissionState === 'sending'} className="mt-6 w-full rounded-full bg-black text-white py-3.5 font-bold text-sm disabled:cursor-wait disabled:opacity-70">
              {submissionState === 'sending' ? 'Envoi en cours…' : 'Envoyer ma demande →'}
            </button>
            <p role="status" aria-live="polite" className={`mt-3 text-center text-[11px] ${statusClass}`}>
              {statusMessages[submissionState]}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
