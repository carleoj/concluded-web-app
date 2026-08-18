import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY

    function handleScroll() {
      const currentScrollY = window.scrollY

      if (currentScrollY < 24) {
        setIsVisible(true)
      } else if (Math.abs(currentScrollY - lastScrollY) > 8) {
        setIsVisible(currentScrollY < lastScrollY)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-4 py-4 transition-transform duration-300 sm:px-6 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="flex w-full items-center justify-between rounded-2xl border border-primary/10 bg-surface/95 px-5 py-3 shadow-[0_12px_30px_rgb(32_33_36/8%)] backdrop-blur-sm"
      >
        <a
          href="#"
          className="flex items-center gap-3 text-primary no-underline"
        >
          <span className="group relative">
            <img
              src="/logo-white.png"
              alt="Concluded logo"
              className="h-8 w-8 object-contain rounded-full"
            />

            <span
              className="
        pointer-events-none absolute left-1/2 top-full z-50 mt-2
        -translate-x-1/2 whitespace-nowrap
        rounded-lg bg-white px-1 py-1
        text-[10px] text-black
        opacity-0 shadow-lg
        transition-opacity duration-200
        delay-1000
        group-hover:opacity-100
      "
            >
              Logo by Vecteezy.com
            </span>
          </span>

          <span className="text-lg font-semibold tracking-tight">
            Concluded
          </span>
        </a>

        <a
          href="#how-it-works"
          className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-black transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action"
        >
          How it works
        </a>
      </nav>
    </header>
  )
}
