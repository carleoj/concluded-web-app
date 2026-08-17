interface AnalyzeButtonProps {
  disabled: boolean
  isLoading: boolean
  onClick: () => void
}

export default function AnalyzeButton({
  disabled,
  isLoading,
  onClick,
}: AnalyzeButtonProps) {
  return (
    <div className="flex gap-4">
      <span aria-hidden="true" className="flex h-7 w-7 mt-3 shrink-0 items-center justify-center rounded-full bg-accent text-xs p-4 font-semibold text-primary">
        {3}
      </span>
      <button
        type="button"
        onClick={onClick}
        disabled={disabled || isLoading}
        className="w-full rounded-full border border-accent bg-accent px-7 py-4 text-base font-semibold text-primary shadow-[0_10px_30px_rgb(231_242_61/18%)] transition-all duration-200 hover:cursor-pointer hover:-translate-y-0.5 hover:border-white hover:bg-white hover:shadow-[0_14px_32px_rgb(231_242_61/24%)] disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-white/10 disabled:text-white/35 disabled:shadow-none sm:w-auto sm:min-w-72 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {isLoading ? 'Analyzing...' : 'Analyze my technical match'}
      </button>
    </div>
  )
}
