export default function BrandLogo({ inverse = false }) {
  return (
    <a href="/" aria-label="Impact Durable AT" className="inline-flex items-center">
      <img
        src="/media/impact-durable-at-logo-transparent.png"
        alt="Logo Impact Durable AT"
        className={`block h-auto ${inverse ? 'w-[250px] brightness-0 invert' : 'w-[180px] sm:w-[220px]'}`}
      />
    </a>
  )
}