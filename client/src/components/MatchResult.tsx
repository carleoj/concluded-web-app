import { useState } from 'react'
import type { AnalyzeResult } from '../types'
import TechBubble from './TechBubble'

interface MatchResultProps {
  result: AnalyzeResult | null
  isLoading: boolean
  error: string | null
  onRetry: () => void
}

function TechnologyGroup({
  title,
  technologies,
  variant,
  emptyMessage,
}: {
  title: string
  technologies: string[]
  variant: 'matched' | 'missing' | 'detected'
  emptyMessage?: string
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-secondary">
        {title}
      </h3>
      {technologies.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <TechBubble key={technology} label={technology} variant={variant} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted">{emptyMessage ?? 'None'}</p>
      )}
    </div>
  )
}

export default function MatchResult({
  result,
  isLoading,
  error,
  onRetry,
}: MatchResultProps) {
  const [showDetected, setShowDetected] = useState(false)

  if (isLoading) {
    return (
      <section
        aria-live="polite"
        className="rounded-[28px] border border-border bg-surface px-6 py-10 sm:px-8"
      >
        <p className="text-base font-medium text-primary">
          Analyzing your technical match...
        </p>
        <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-background">
          <div className="h-full w-1/3 animate-pulse rounded-full bg-accent" />
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section
        aria-live="polite"
        className="rounded-[28px] border border-error/20 bg-surface px-6 py-10 sm:px-8"
      >
        <h2 className="text-xl font-semibold text-primary">Something went wrong</h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-secondary">
          We couldn&apos;t analyze this job description. Please try again.
        </p>
        <button
          type="button"
          onClick={onRetry}
          className="mt-6 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-primary transition-colors duration-200 hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action"
        >
          Try again
        </button>
      </section>
    )
  }

  if (!result) {
    return null
  }

  if (result.detected.length === 0) {
    return (
      <section
        aria-live="polite"
        className="rounded-[28px] border border-border bg-surface px-6 py-10 sm:px-8"
      >
        <h2 className="text-xl font-semibold text-primary">
          No recognized technologies found
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-secondary">
          Try providing a more complete job description with explicit technology
          names.
        </p>
      </section>
    )
  }

  const matchedCount = result.matched.length
  const detectedCount = result.detected.length
  const roundedScore = Math.round(result.score)

  return (
    <section
      aria-live="polite"
      className="rounded-[28px] border border-border bg-surface px-6 py-10 sm:px-8"
    >
      <div className="border-b border-border pb-8">
        <p className="text-5xl font-semibold tracking-tight text-primary sm:text-6xl">
          {roundedScore}%
        </p>
        <p className="mt-2 text-lg font-medium text-primary">Technical Match</p>
        <p className="mt-2 text-sm text-secondary">
          {matchedCount} of {detectedCount} detected technologies matched
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <TechnologyGroup
          title="Matched"
          technologies={result.matched}
          variant="matched"
          emptyMessage="No matched technologies."
        />
        <TechnologyGroup
          title="Missing"
          technologies={result.missing}
          variant="missing"
          emptyMessage="No missing technologies."
        />
      </div>

      <div className="mt-8">
        <button
          type="button"
          onClick={() => setShowDetected((current) => !current)}
          aria-expanded={showDetected}
          className="text-sm font-medium text-secondary underline-offset-4 transition-colors duration-200 hover:text-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action"
        >
          {showDetected ? 'Hide detected technologies' : 'Show detected technologies'}
        </button>

        {showDetected && (
          <div className="mt-4">
            <TechnologyGroup
              title="Detected from this job description"
              technologies={result.detected}
              variant="detected"
            />
          </div>
        )}
      </div>

      <div className="mt-8 rounded-2xl bg-background px-5 py-5">
        <h3 className="text-sm font-semibold text-primary">
          How is this score calculated?
        </h3>
        <p className="mt-2 text-sm leading-6 text-secondary">
          Concluded detected {detectedCount} technologies in the job description.
          You matched {matchedCount} of them.
        </p>
        <p className="mt-2 text-sm leading-6 text-secondary">
          {matchedCount} ÷ {detectedCount} × 100 = {roundedScore}%
        </p>
        <p className="mt-4 text-sm leading-6 text-muted">
          This is a technical-stack match, not a prediction of hiring outcomes or
          overall job qualification.
        </p>
      </div>
    </section>
  )
}
