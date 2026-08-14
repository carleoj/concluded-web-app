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
      <div className="mx-auto max-w-6xl rounded-[28px] border border-border bg-surface px-6 py-12 sm:px-10 sm:py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            How it works
          </h2>
          <p className="mt-3 text-base leading-7 text-secondary">
            Three steps to understand your technical overlap before you apply.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="space-y-4">
              <p className="text-sm font-semibold tracking-[0.18em] text-muted">
                {step.number}
              </p>
              <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
              <p className="text-sm leading-6 text-secondary">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
