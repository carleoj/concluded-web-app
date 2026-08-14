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
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || isLoading}
      className="w-full hover:cursor-pointer hover:text-black hover:bg-accent rounded-full border-action bg-action px-7 py-4 text-base font-semibold text-white shadow-[0_10px_20px_rgb(32_33_36/16%)] transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_14px_26px_rgb(32_33_36/22%)] disabled:cursor-not-allowed disabled:border-border disabled:bg-border disabled:text-muted disabled:shadow-none sm:w-auto sm:min-w-72 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action"
    >
      {isLoading ? 'Analyzing...' : 'Analyze my technical match'}
    </button>
  )
}
