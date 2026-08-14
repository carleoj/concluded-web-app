interface JobDescriptionInputProps {
  value: string
  onChange: (value: string) => void
}

export default function JobDescriptionInput({
  value,
  onChange,
}: JobDescriptionInputProps) {
  return (
    <div className="space-y-3">
      <div>
        <label
          htmlFor="job-description"
          className="text-xl font-semibold text-primary sm:text-2xl"
        >
          Job description
        </label>
        <p className="mt-1 text-sm text-secondary">
          Paste the full job description you want to evaluate.
        </p>
      </div>

      <textarea
        id="job-description"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Paste the full job description here..."
        rows={10}
        className="min-h-56 w-full resize-y rounded-[18px] border border-border bg-surface px-4 py-4 text-base leading-7 text-primary placeholder:text-muted focus:border-primary/20 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/60"
      />
    </div>
  )
}
