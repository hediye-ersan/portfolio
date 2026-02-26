export default function MyServices() {
  return (
    <section id="services" className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-semibold">My Services</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded">UI Development</div>
          <div className="p-4 border rounded">Performance</div>
          <div className="p-4 border rounded">Accessibility</div>
        </div>
      </div>
    </section>
  )
}
