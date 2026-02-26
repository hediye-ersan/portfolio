export default function Profile() {
  return (
    <section id="profile" className="max-w-4xl mx-auto py-20 px-4">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold">
          JC
        </div>
        <div>
          <h2 className="text-3xl font-bold">Hediye Ersan</h2>
          <p className="mt-2 text-gray-600">Frontend Developer — I build accessible, performant UIs.</p>
        </div>
      </div>
    </section>
  )
}
