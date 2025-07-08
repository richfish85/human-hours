import HeartbeatChartIcon from "../components/HeartbeatChartIcon";

export default function Home() {
  return (
    <main className="min-h-screen p-8 space-y-6">
      <h1 className="text-4xl text-brand-orange flex items-center space-x-2">
        <HeartbeatChartIcon className="w-8 h-8" />
        <span>Welcome to Human Hours</span>
      </h1>
      <p className="text-lg">
        This site updates dynamically with work-life data, stories, and better alternatives.
      </p>
      <blockquote>
        “Rest is a right, not a reward.”
      </blockquote>
      <a
        href="#"
        className="inline-block px-4 py-2 bg-brand-orange text-white rounded-md transition-transform hover:animate-breathe"
      >
        Explore Resources
      </a>
    </main>
  )
}
