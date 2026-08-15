import { useRef, useState } from 'react'
import { analyzeJob } from './services/api'
import type { AnalyzeResult } from './types'
import { useTechStack } from './hooks/useTechStack'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStackSelector from './components/TechStackSelector'
import JobDescriptionInput from './components/JobDescriptionInput'
import AnalyzeButton from './components/AnalyzeButton'
import MatchResult from './components/MatchResult'
import HowItWorks from './components/HowItWorks'
import TechnologyExplanation from './components/TechnologyExplanation'
import Footer from './components/Footer'

function App() {
  const analyzerRef = useRef<HTMLElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)
  const { techStack, addTechnology, removeTechnology, clearStack } = useTechStack()
  const [jobDescription, setJobDescription] = useState('')
  const [result, setResult] = useState<AnalyzeResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasAnalyzed, setHasAnalyzed] = useState(false)

  const canAnalyze =
    techStack.length > 0 && jobDescription.trim().length > 0 && !isLoading

  function scrollToAnalyzer() {
    analyzerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function scrollToResults() {
    resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  async function handleAnalyze() {
    if (!canAnalyze) {
      return
    }

    setIsLoading(true)
    setError(null)
    setHasAnalyzed(true)

    try {
      const analysis = await analyzeJob(techStack, jobDescription.trim())
      setResult(analysis)
      window.requestAnimationFrame(scrollToResults)
    } catch (analyzeError) {
      console.error(analyzeError)
      setResult(null)
      setError('failed')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-primary">
      <Navbar />
      <main>
        <Hero onStartAnalyzing={scrollToAnalyzer} />

        <section
          ref={analyzerRef}
          id="analyzer"
          className="scroll-mt-28 px-4 pb-16 sm:px-6"
        >
          <div className="mx-auto max-w-6xl border-b border-primary/15 border-t-2 border-t-action px-1 py-10 sm:px-0 sm:py-14">
            <div className="space-y-10">
              <TechStackSelector
                techStack={techStack}
                onAdd={addTechnology}
                onRemove={removeTechnology}
                onClear={clearStack}
              />

              <JobDescriptionInput
                value={jobDescription}
                onChange={setJobDescription}
                onClear={() => setJobDescription('')}
              />

              <div className="space-y-3">
                <AnalyzeButton
                  disabled={!canAnalyze}
                  isLoading={isLoading}
                  onClick={handleAnalyze}
                />
                {techStack.length === 0 && (
                  <p className="text-sm text-muted">
                    Select at least one technology to enable analysis.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {(hasAnalyzed || isLoading || error) && (
          <div ref={resultsRef} className="scroll-mt-28 px-4 pb-12 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <MatchResult
                result={result}
                isLoading={isLoading}
                error={error}
                onRetry={handleAnalyze}
              />
            </div>
          </div>
        )}

        <HowItWorks />
        <TechnologyExplanation />
      </main>
      <Footer />
    </div>
  )
}

export default App
