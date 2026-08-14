interface HeroProps {
  onStartAnalyzing: () => void
}

export default function Hero({ onStartAnalyzing }: HeroProps) {
  return (
    <section className="px-4 pb-8 pt-6 sm:px-6 sm:pb-14 sm:pt-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-action px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
        <span aria-hidden="true" className="hero-mark pointer-events-none absolute -right-4 -top-16 select-none text-[15rem] font-semibold leading-none tracking-[-0.12em] text-accent/10 sm:text-[22rem]">
          C
        </span>
        <div className="relative">
          <div aria-hidden="true" className="mb-7 h-2 w-20 bg-accent" />
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
          Know your technical fit
            <span className="block text-accent">before you apply.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
          Compare the technologies you already know with the technologies detected
          in a job description. Understand your technical overlap before you
          invest time in an application.
          </p>
          <button
            type="button"
            onClick={onStartAnalyzing}
            className="mt-9 rounded-full bg-accent hover:cursor-pointer px-7 py-3.5 text-sm font-semibold text-primary transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Start analyzing
          </button>
        </div>
      </div>
    </section>
  )
}
