import "./InfiniteMarquee.css"

const items = ["UI/UX Design", "Web Design", "Backend", "Frontend", "Full Stack", "Java", "Spring Boot", "React", "Redux", "TypeScript", "OOP"]

export default function InfiniteMarquee() {
  return (
    <div className="bg-orange border-y">
      <div className="relative overflow-hidden" style={{ height: "146px" }}>
        {/* Beyaz şerit */}
        

        {/* Kaydırılan metin */}
        <div className="absolute bg-white flex items-center  rotate-[-1.5deg]">
          <div className="marquee flex items-center gap-2 text-4xl font-bold text-gray-700">
            <MarqueeTrack repeat={3} />
          </div>
        </div>
      </div>
    </div>
  )
}

function MarqueeTrack({ ariaHidden = false, repeat = 2 }: { ariaHidden?: boolean; repeat?: number }) {
  return (
    <>
      {Array.from({ length: repeat }).map((_, r) => (
        <div
          key={`track-${r}`}
          className="flex min-w-max items-center gap-4 px-6 text-4xl font-bold text-gray-700"
          aria-hidden={ariaHidden}
        >
          {items.map((item, idx) => (
            <span key={`${item}-${idx}-${r}`} className="flex items-center gap-4">
              <span>{item}</span>
              <span className="text-4xl text-orange">✦</span>
            </span>
          ))}
        </div>
      ))}
    </>
  )
}
