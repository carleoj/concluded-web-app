import { useRef, useState } from 'react'
import { analyzeJob, analyzeResume } from './services/api'
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
  const {
    techStack,
    addTechnology,
    removeTechnology,
    clearStack,
  } = useTechStack()
  const [jobDescription, setJobDescription] = useState('')
  const [result, setResult] = useState<AnalyzeResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasAnalyzed, setHasAnalyzed] = useState(false)
  const [isResumeProcessing, setIsResumeProcessing] = useState(false)

  const canAnalyze =
    techStack.length > 0 && jobDescription.trim().length > 0 && !isLoading

  function scrollToAnalyzer() {
    analyzerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function scrollToResults() {
    resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  async function handleResumeTextExtracted(text: string) {
    if (!text.trim()) {
      return
    }

    setIsResumeProcessing(true)

    try {
      const technologies = await analyzeResume(text)

      technologies.forEach(addTechnology)
    } catch (resumeError) {
      console.error('Resume analysis failed:', resumeError)
    } finally {
      setIsResumeProcessing(false)
    }
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
        <HowItWorks />

        <section
          ref={analyzerRef}
          id="analyzer"
          className="analyzer-workspace relative isolate scroll-mt-28 overflow-hidden px-4 py-16 sm:px-6 sm:py-20"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_20%,rgb(231_242_61_/_0.16),transparent_25rem),radial-gradient(circle_at_88%_72%,rgb(231_242_61_/_0.11),transparent_28rem)]" />
          <div className="relative mx-auto max-w-6xl">
            <div className="space-y-10">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
                <TechStackSelector
                  techStack={techStack}
                  onAdd={addTechnology}
                  onRemove={removeTechnology}
                  onClear={clearStack}
                  onResumeTextExtracted={handleResumeTextExtracted}
                  isResumeProcessing={isResumeProcessing}
                />

                <JobDescriptionInput
                  value={jobDescription}
                  onChange={setJobDescription}
                  onClear={() => setJobDescription('')}
                />
              </div>

              <div className="space-y-3">
                <AnalyzeButton
                  disabled={!canAnalyze}
                  isLoading={isLoading}
                  onClick={handleAnalyze}
                />
                {techStack.length === 0 && (
                  <p className="text-sm text-white/60">
                    Select at least one technology to enable analysis.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {(hasAnalyzed || isLoading || error) && (
          <div ref={resultsRef} className="scroll-mt-28 px-4 pb-5 sm:px-6 sm:pb-5 sm:pt-10 pt-5">
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

        <TechnologyExplanation />
      </main>
      <Footer />
    </div>
  )
}

export default App
