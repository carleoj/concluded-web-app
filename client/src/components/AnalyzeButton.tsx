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
      className="w-full rounded-full bg-action px-6 py-4 text-base font-medium text-white transition-colors duration-200 hover:bg-primary disabled:cursor-not-allowed disabled:bg-border disabled:text-muted sm:w-auto sm:min-w-64 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action"
    >
      {isLoading ? 'Analyzing...' : 'Analyze my technical match'}
    </button>
  )
}
