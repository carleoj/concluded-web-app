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
    <section className="px-4 pb-20 pt-12 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-[28px] border border-border bg-surface px-6 py-12 sm:px-10 sm:py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            How the technology matching works
          </h2>
          <div className="mt-6 space-y-4 text-base leading-7 text-secondary">
            <p>
              Concluded does not ask an AI model to guess whether you&apos;re
              qualified. It uses the MIND Tech Skills Ontology as a structured
              technology knowledge base.
            </p>
            <p>
              The job description is checked against known technology names and
              their synonyms, such as React, React.js, and ReactJS. These names
              are normalized to a canonical technology before the comparison is
              performed.
            </p>
            <p>
              Your selected stack is then compared against the technologies
              detected in the job description. The score is deterministic,
              transparent, and based only on explicit technology overlap.
            </p>
          </div>
        </div>

        <div className="mt-10 max-w-md rounded-2xl border border-border bg-background px-5 py-6">
          {flowSteps.map((step, index) => (
            <div key={step}>
              <p className="py-2 text-sm font-medium text-primary">{step}</p>
              {index < flowSteps.length - 1 && (
                <p aria-hidden="true" className="py-1 text-center text-muted">
                  ↓
                </p>
              )}
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted">
          Technology recognition powered by the MIND Tech Skills Ontology.
        </p>
      </div>
    </section>
  )
}
