export default function BrandLogo({ inverse = false }) {
  return (
    <a href="/" aria-label="Impact Durable AT" className="inline-flex items-center gap-2.5">
      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${inverse ? 'bg-white' : 'bg-[#0d233d]'}`}>
        <svg viewBox="0 0 40 40" className="h-7 w-7" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M10 25.5C10 17 16.5 10.5 29 10c-.5 12.5-7 19-15.5 19-2 0-3.5-1.5-3.5-3.5Z" stroke="#1db863" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M11.5 30.5c4.2-6.1 9.4-11.5 16.8-17" stroke={inverse ? '#0d233d' : '#ffffff'} strokeWidth="2.2" strokeLinecap="round" />
          <path d="M18.5 23.5c3.3.1 5.9 1.3 7.8 3.5" stroke="#f26d3d" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="11.5" cy="30.5" r="2" fill="#f26d3d" />
        </svg>
      </span>
      <span className={`leading-none ${inverse ? 'text-white' : 'text-[#0d233d]'}`}>
        <span className="display block whitespace-nowrap text-[14px] font-extrabold tracking-tight">
          IMPACT <span className="text-[#f26d3d]">DURABLE</span> AT
        </span>
        <span className={`mt-1.5 block text-[9px] font-bold tracking-[0.22em] ${inverse ? 'text-white/60' : 'text-zinc-500'}`}>
          CONSEIL
        </span>
      </span>
    </a>
  )
}