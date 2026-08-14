export interface AnalyzeResult {
  score: number
  matched: string[]
  inferred: string[]
  missing: string[]
  detected: string[]
}

export interface TechnologySearchResponse {
  results: string[]
}