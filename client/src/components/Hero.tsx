interface HeroProps {
  onStartAnalyzing: () => void
}

export default function Hero({ onStartAnalyzing }: HeroProps) {
  return (
    <section className="px-4 pb-8 pt-6 sm:px-6 sm:pb-12 sm:pt-8">
      <div className="mx-auto max-w-6xl rounded-[28px] bg-hero px-6 py-14 sm:px-10 sm:py-20">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
          Technical stack matcher
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-primary sm:text-5xl lg:text-6xl">
          Know your technical fit
          <span className="block">before you apply.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-secondary sm:text-lg">
          Compare the technologies you already know with the technologies detected
          in a job description. Understand your technical overlap before you
          invest time in an application.
        </p>
        <button
          type="button"
          onClick={onStartAnalyzing}
          className="mt-8 rounded-full bg-action px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action"
        >
          Start analyzing
        </button>
      </div>
    </section>
  )
}
