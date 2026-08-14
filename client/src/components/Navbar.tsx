export default function Navbar() {
  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-border bg-surface/95 px-5 py-3 shadow-sm backdrop-blur-sm"
      >
        <a href="#" className="flex items-center gap-3 text-primary no-underline">
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-sm font-semibold text-primary"
          >
            C
          </span>
          <span className="text-lg font-semibold tracking-tight">Concluded</span>
        </a>

        <a
          href="#how-it-works"
          className="text-sm font-medium text-secondary transition-colors duration-200 hover:text-primary"
        >
          How it works
        </a>
      </nav>
    </header>
  )
}
