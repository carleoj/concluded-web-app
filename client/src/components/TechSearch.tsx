import { useEffect, useId, useRef, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { searchTechnologies } from '../services/api'

interface TechSearchProps {
  selectedTechnologies: string[]
  onSelect: (technology: string) => void
}

export default function TechSearch({
  selectedTechnologies,
  onSelect,
}: TechSearchProps) {
  const listboxId = useId()
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedQuery(query.trim())
    }, 250)

    return () => window.clearTimeout(timeoutId)
  }, [query])

  const {
    data: matches = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['technologies', debouncedQuery],
    queryFn: ({ signal }) =>
      searchTechnologies(debouncedQuery, signal),
    enabled: debouncedQuery.length > 0,
    staleTime: 60_000,
  })

  const results = matches.filter(
    (name) => !selectedTechnologies.includes(name),
  )

  useEffect(() => {
    setActiveIndex(results.length > 0 ? 0 : -1)
  }, [results.length])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  function selectTechnology(name: string) {
    onSelect(name)
    setQuery('')
    setDebouncedQuery('')
    setIsOpen(false)
    setActiveIndex(-1)
    inputRef.current?.focus()
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>,
  ) {
    if (!isOpen || results.length === 0) {
      if (event.key === 'ArrowDown' && results.length > 0) {
        setIsOpen(true)
        setActiveIndex(0)
      }

      return
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()

      setActiveIndex((current) =>
        current < results.length - 1 ? current + 1 : 0,
      )
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()

      setActiveIndex((current) =>
        current > 0 ? current - 1 : results.length - 1,
      )
    }

    if (event.key === 'Enter' && activeIndex >= 0) {
      event.preventDefault()
      selectTechnology(results[activeIndex])
    }

    if (event.key === 'Escape') {
      setIsOpen(false)
      setActiveIndex(-1)
    }
  }

  return (
    <div ref={containerRef} className="relative">
      <label htmlFor="tech-search" className="sr-only">
        Search technologies
      </label>

      <input
        ref={inputRef}
        id="tech-search"
        type="search"
        role="combobox"
        aria-expanded={isOpen && results.length > 0}
        aria-controls={listboxId}
        aria-autocomplete="list"
        aria-activedescendant={
          activeIndex >= 0
            ? `${listboxId}-option-${activeIndex}`
            : undefined
        }
        value={query}
        onChange={(event) => {
          setQuery(event.target.value)
          setIsOpen(true)
        }}
        onFocus={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder="Search technologies, e.g., React, GraphQL, Java..."
        autoComplete="off"
        className="w-full rounded-2xl border border-primary/15 bg-background px-5 py-3.5 text-base text-primary placeholder:text-muted transition-colors focus:border-action focus:bg-surface focus:outline-none focus:ring-4 focus:ring-accent/50"
      />

      {isOpen && query.trim() && (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-primary/15 bg-surface shadow-[0_16px_32px_rgb(32_33_36/12%)]">
          {isLoading ? (
            <p className="px-4 py-3 text-sm text-muted">
              Searching...
            </p>
          ) : isError ? (
            <p className="px-4 py-3 text-sm text-muted">
              Failed to search technologies.
            </p>
          ) : results.length > 0 ? (
            <ul
              id={listboxId}
              role="listbox"
              className="max-h-60 overflow-y-auto py-1"
            >
              {results.map((name, index) => (
                <li key={name} role="presentation">
                  <button
                    id={`${listboxId}-option-${index}`}
                    type="button"
                    role="option"
                    aria-selected={index === activeIndex}
                    onMouseDown={(event) =>
                      event.preventDefault()
                    }
                    onClick={() => selectTechnology(name)}
                    className={`block w-full px-4 py-3 text-left text-sm font-medium transition-colors duration-150 ${index === activeIndex
                        ? 'bg-action text-white'
                        : 'text-primary hover:bg-primary/10'
                      }`}
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-3 text-sm text-muted">
              No technologies found.
            </p>
          )}
        </div>
      )}
    </div>
  )
} 