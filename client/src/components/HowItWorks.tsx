const steps = [
  {
    number: '01',
    title: 'Select your stack',
    description:
      'Choose the technologies you already know. Your selections are saved locally in your browser.',
  },
  {
    number: '02',
    title: 'Paste the job description',
    description: 'Paste the job description you want to evaluate.',
  },
  {
    number: '03',
    title: 'See the technical match',
    description:
      'Concluded extracts recognized technologies, compares them against your stack, and shows what matches and what is missing.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-action px-6 py-14 sm:px-10 sm:py-20">
        <div className="max-w-2xl">
          <div aria-hidden="true" className="mb-7 h-2 w-20 bg-accent" />
          <h2 className="text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
            How it works
          </h2>
          <p className="mt-4 text-base leading-7 text-white/70">
            Three steps to understand your technical overlap before you apply.
          </p>
        </div>

        <div className="mt-12 grid gap-0 border-t border-white/20 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="space-y-4 border-b border-white/20 py-8 last:border-b-0 md:border-b-0 md:border-r md:border-white/20 md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
              <p className="text-sm font-semibold tracking-[0.18em] text-accent">
                {step.number}
              </p>
              <h3 className="text-2xl font-semibold tracking-tight text-white">{step.title}</h3>
              <p className="text-sm leading-6 text-white/70">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
