export default function Home() {
  const projects = [
    {
      title: "Lodge",
      subtitle: "Workout Planner",
      description:
        "Opinionated planner that helps schedule fitness activities realistically.",
      status: "live",
      cta: "Open",
      href: "https://lodge.arneshbatlaw.com",
      bg: "bg-green-50",
    },
    {
      title: "2026 Bingo",
      subtitle: "Annual planning tool",
      description:
        "Track 2026 goals in a fun, social way.",
      status: "live",
      cta: "Open",
      href: "https://bingo.arneshbatlaw.com",
      bg: "bg-amber-50",
    },
    {
      title: "Budget Planner",
      subtitle: "Spending forecaster",
      description:
        "Track and organize upcoming spending.",
      status: "live",
      cta: "Open",
      href: "https://budget.arneshbatlaw.com",
      bg: "bg-blue-50",
    },
    {
      title: "What's next",
      subtitle: "In progress",
      description:
        "Placeholder for whatever's next.",
      status: "placeholder",
      cta: "–",
      href: "#",
      bg: "bg-slate-50",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="flex items-center justify-center gap-4">
          <img
            src="/arnesh.jpg"
            alt="Arnesh Batlaw"
            className="h-12 w-12 rounded-full object-cover ring-1 ring-slate-300 bg-white"
          />
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Arnesh Batlaw
          </h1>
        </div>
        <p className="mt-4 text-lg text-slate-600">
          Experiments in productivity and AI.
        </p>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`rounded-2xl p-6 border border-slate-200 ${project.bg}`}
            >
              <div className="flex flex-col h-full">
                <div>
                  <h2 className="text-xl font-semibold">
                    {project.title}
                  </h2>
                </div>

                <p className="mt-4 text-slate-700 flex-grow">
                  {project.description}
                </p>

                <div className="mt-6">
                  {project.status === "live" && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full px-4 py-2 text-sm font-medium border border-slate-900 hover:bg-slate-900 hover:text-white transition"
                    >
                      {project.cta}
                    </a>
                  )}

                  {project.status === "coming-soon" && (
                    <span className="inline-block rounded-full px-4 py-2 text-sm text-slate-500 border border-slate-300">
                      {project.cta}
                    </span>
                  )}

                  {project.status === "placeholder" && (
                    <span className="inline-block text-sm text-slate-400 italic">
                      {project.cta}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-slate-500 pb-12">
        Built by Arnesh · NYC ·{" "}
        <a
          href="https://www.linkedin.com/in/arnesh-batlaw"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-900 transition"
        >
          LinkedIn
        </a>{" "}
        ·{" "}
        <a
          href="https://github.com/abatlaw"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-900 transition"
        >
          GitHub
        </a>{" "}
          ·{" "}
          <a
            href="https://www.instagram.com/arneshb"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition"
          >
            Instagram
          </a>
      </footer>

    </main>
  );
}
