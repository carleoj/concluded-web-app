export interface AnalyzeResult {
  score: number
  matched: string[]
  missing: string[]
  detected: string[]
}

export interface TechnologySearchResponse {
  results: string[]
}
