interface TechBubbleProps {
  label: string
  onRemove?: () => void
  variant?: 'selected' | 'matched' | 'inferred' | 'missing' | 'detected'
}

const variantClasses = {
  selected: 'border-border bg-accent/35 text-primary',
  matched: 'border-success/20 bg-success/8 text-primary',
  inferred: 'border-accent/40 bg-accent/15 text-primary',
  missing: 'border-border bg-background text-secondary',
  detected: 'border-border bg-surface text-secondary',
}

export default function TechBubble({
  label,
  onRemove,
  variant = 'selected',
}: TechBubbleProps) {
  if (onRemove) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium ${variantClasses[variant]}`}
      >
        {label}

        <button
          type="button"
          onClick={onRemove}
          aria-label={`Remove ${label}`}
          className="hover:cursor-pointer rounded-full px-1 text-secondary transition-colors duration-200 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-action"
        >
          ×
        </button>
      </span>
    )
  }

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-medium ${variantClasses[variant]}`}
    >
      {label}
    </span>
  )
}