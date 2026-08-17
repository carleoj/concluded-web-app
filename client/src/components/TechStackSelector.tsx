import TechBubble from './TechBubble'
import TechSearch from './TechSearch'
import ResumeUpload from './ResumeUpload'

interface TechStackSelectorProps {
  techStack: string[]
  onAdd: (technology: string) => void
  onRemove: (technology: string) => void
  onClear: () => void
  onResumeTextExtracted: (text: string) => void
  isResumeProcessing: boolean
}

export default function TechStackSelector({
  techStack,
  onAdd,
  onRemove,
  onClear,
  onResumeTextExtracted,
  isResumeProcessing
}: TechStackSelectorProps) {
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs p-4 font-semibold text-primary">
            {1}
          </span>
          <h2 className="pt-4 text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
            Your technology stack
          </h2>
        </div>

        {techStack.length > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="rounded-full bg-action px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:cursor-pointer hover:bg-accent hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action"
          >
            Clear stack
          </button>
        )}
      </div>

      {isResumeProcessing ? (
        <div
          aria-live="polite"
          aria-label="Analyzing resume technologies"
          className="flex flex-wrap gap-2"
        >
          {techStack.map((technology) => (
            <TechBubble
              key={technology}
              label={technology}
              onRemove={() => onRemove(technology)}
            />
          ))}

          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={`skeleton-${index}`}
              className="h-9 animate-pulse rounded-full bg-black/50"
              style={{
                width: `${80 + index * 15}px`,
              }}
            />
          ))}
        </div>
      ) : techStack.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {techStack.map((technology) => (
            <TechBubble
              key={technology}
              label={technology}
              onRemove={() => onRemove(technology)}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-primary/25 bg-background px-5 py-6">
          <p className="text-base font-semibold text-primary">Start with your tech stack</p>
          <p className="mt-1 text-sm text-secondary">
            Search and select the technologies and skills you know.
          </p>
        </div>
      )}


      <div className="flex items-end gap-3">
        <div className="flex-1">
          <TechSearch
            selectedTechnologies={techStack}
            onSelect={onAdd}
          />
        </div>

        <ResumeUpload
          onTextExtracted={onResumeTextExtracted}
        />
      </div>
    </div>
  )
}
