interface JobDescriptionInputProps {
  value: string
  onChange: (value: string) => void
  onClear: () => void
}

export default function JobDescriptionInput({
  value,
  onChange,
  onClear,
}: JobDescriptionInputProps) {
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <label
          htmlFor="job-description"
          className="text-xl font-semibold tracking-tight text-primary sm:text-2xl"
        >
          Job description
        </label>
        <button
          type="button"
          onClick={onClear}
          disabled={!value}
          className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white hover:cursor-pointer transition-colors duration-200 hover:bg-accent hover:text-black disabled:cursor-not-allowed disabled:bg-border disabled:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action"
        >
          Clear description
        </button>
      </div>

      <textarea
        id="job-description"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Paste the full job description here..."
        rows={7}
        className="mt-4 min-h-44 w-full resize-y rounded-[18px] border border-primary/15 bg-background px-5 py-4 text-base leading-7 text-primary placeholder:text-muted transition-colors focus:border-action focus:bg-surface focus:outline-none focus:ring-4 focus:ring-accent/50"
      />
    </div>
  )
}
