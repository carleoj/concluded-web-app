const flowSteps = [
  'Job Description',
  'Technology Detection',
  'Synonym Normalization',
  'Canonical Technologies',
  'Compare With Your Stack',
  'Technical Match',
]

export default function TechnologyExplanation() {
  return (
    <section className="px-4 pb-20 pt-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-12 border-t-2 border-action py-14 sm:grid-cols-[1.15fr_0.85fr] sm:gap-16 sm:py-20">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-semibold tracking-[-0.035em] text-primary sm:text-5xl">
            How the technology matching works
          </h2>
          <div className="mt-6 space-y-4 text-base leading-7 text-secondary">
            <p>Concluded does not ask an AI model to guess whether you&apos;re qualified. It uses the MIND Tech Skills Ontology as a structured technology knowledge base.</p>
            <p>The job description is checked against known technology names and their synonyms, such as React, React.js, and ReactJS. These names are normalized to a canonical technology before the comparison is performed.</p>
            <p>Your selected stack is then compared against the technologies detected in the job description. The score is deterministic, transparent, and based only on explicit technology overlap.</p>
          </div>
        </div>

        <div className="self-start border-y border-primary/15">
          {flowSteps.map((step, index) => (
            <div key={step} className="flex items-center gap-4 border-b border-primary/15 py-4 last:border-b-0">
              <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-primary">
                {index + 1}
              </span>
              <p className="text-sm font-semibold text-primary">{step}</p>
            </div>
          ))}
          <p className="border-t border-primary/15 py-5 text-sm text-muted">Technology recognition powered by the MIND Tech Skills Ontology.</p>
        </div>
      </div>
    </section>
  )
}
