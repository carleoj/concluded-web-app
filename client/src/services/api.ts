import type { AnalyzeResult, TechnologySearchResponse } from '../types'
import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export async function analyzeJob(
  techStack: string[],
  jobDescription: string,
): Promise<AnalyzeResult> {
  const { data } = await api.post<AnalyzeResult>('/analyze', {
    techStack,
    jobDescription,
  })

  return data
}

export async function searchTechnologies(
  query: string,
  signal?: AbortSignal,
): Promise<string[]> {
  const { data } = await api.get<TechnologySearchResponse>(
    '/technologies',
    {
      params: { search: query },
      signal,
    },
  )

  return data.results
}

export async function analyzeResume(
  text: string,
): Promise<string[]> {
  const { data } = await api.post<{ technologies: string[] }>(
    '/resume/analyze',
    { text },
  )

  return data.technologies
}