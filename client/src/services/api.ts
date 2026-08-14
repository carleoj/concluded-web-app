import type { AnalyzeResult, TechnologySearchResponse } from '../types'

const API_BASE = '/api'

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error('Request failed')
  }

  return response.json() as Promise<T>
}

export async function analyzeJob(
  techStack: string[],
  jobDescription: string,
): Promise<AnalyzeResult> {
  const response = await fetch(`${API_BASE}/analyze`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      techStack,
      jobDescription,
    }),
  })

  return handleResponse<AnalyzeResult>(response)
}

export async function searchTechnologies(
  query: string,
): Promise<string[]> {
  const params = new URLSearchParams({ search: query })
  const response = await fetch(`${API_BASE}/technologies?${params}`)

  const data = await handleResponse<TechnologySearchResponse>(response)
  return data.results
}
