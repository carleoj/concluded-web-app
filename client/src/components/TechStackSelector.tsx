import TechBubble from './TechBubble'
import TechSearch from './TechSearch'

interface TechStackSelectorProps {
  techStack: string[]
  onAdd: (technology: string) => void
  onRemove: (technology: string) => void
  onClear: () => void
}

export default function TechStackSelector({
  techStack,
  onAdd,
  onRemove,
  onClear,
}: TechStackSelectorProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-primary sm:text-2xl">
            Your technology stack
          </h2>
          <p className="mt-1 text-sm text-secondary">
            Search and select the technologies you already know.
          </p>
        </div>

        {techStack.length > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="text-sm font-medium text-secondary underline-offset-4 transition-colors duration-200 hover:text-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action"
          >
            Clear stack
          </button>
        )}
      </div>

      {techStack.length > 0 ? (
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
        <div className="rounded-2xl border border-dashed border-border bg-background px-4 py-5">
          <p className="text-sm font-medium text-primary">Start with your tech stack</p>
          <p className="mt-1 text-sm text-secondary">
            Search and select the technologies you know.
          </p>
        </div>
      )}

      <TechSearch selectedTechnologies={techStack} onSelect={onAdd} />
    </div>
  )
}
