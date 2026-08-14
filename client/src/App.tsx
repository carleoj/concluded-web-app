function App() {
  const userStack: string[] = [
    "React",
    "JavaScript",
    "Node.js",
    "Express",
    "MySQL",
    "Docker"
  ]
  return (
    <div className="flex flex-col items-center">
      <div className="w-100 self-center flex flex-col items-center pt-10">
        <label className="font-crimson text-3xl mb-2" htmlFor="text">Your tech stack</label>
        <input className="py-20 px-12 sm:px-30 sm:py-27 lg:px-50 bg-gray-100 focus:bg-white rounded border border-zinc-950" type="text" placeholder="HTML/CSS, Java, C++,..." />
      </div>

      <div className="w-100 self-center items-center flex flex-col pt-10">
        <label className="font-crimson text-3xl mb-2" htmlFor="text">Job description</label>
        <input className="py-20 px-12 sm:px-30 sm:py-27 lg:px-50 bg-gray-100 focus:bg-white rounded border border-zinc-950" type="text" placeholder="Requirements: C++, ..." />
      </div>
      <div>
        <button className="mt-6 p-4 bg-green-600 text-white self-center rounded hover:bg-green-700 hover:cursor-pointer transition-all duration-100 ease-in">Analyze Fit</button>
      </div>
    </div>
  )
}

export default App
