export default function MyProjects() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-semibold">My Projects</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded">Project A — description</div>
          <div className="p-4 border rounded">Project B — description</div>
        </div>
      </div>
    </section>
  )
}
