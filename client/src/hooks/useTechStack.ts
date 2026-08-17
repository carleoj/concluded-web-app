import { useEffect, useState } from 'react'

const STORAGE_KEY = 'techStack'

function readStoredStack(): string[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)

    if (!stored) {
      return []
    }

    const parsed = JSON.parse(stored)

    return Array.isArray(parsed)
      ? parsed.filter(
          (item): item is string => typeof item === 'string',
        )
      : []
  } catch {
    return []
  }
}

export function useTechStack() {
  const [techStack, setTechStack] = useState<string[]>(readStoredStack)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(techStack))
  }, [techStack])

  function addTechnology(name: string) {
    setTechStack((current) => {
      if (current.includes(name)) {
        return current
      }

      return [...current, name]
    })
  }

  function removeTechnology(name: string) {
    setTechStack((current) =>
      current.filter((tech) => tech !== name),
    )
  }

  function clearStack() {
    setTechStack([])
  }

  return {
    techStack,
    addTechnology,
    removeTechnology,
    clearStack,
  }
}
