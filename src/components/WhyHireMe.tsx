import { useLanguage } from "../contexts/LanguageContext";

export default function WhyHireMe() {
  const { currentLang } = useLanguage();
  return (
    <section id="why" className="pt-[50px] px-24 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="group relative flex-[1.05] w-full max-w-[680px] min-w-[420px] overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            {[1.04, 1.16].map((scale, i, arr) => (
              <img
                key={scale}
                src="/assets/circles.svg"
                alt="circles"
                className="ring-layer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: `${scale * 100}%`,
                  animationDelay: `${i * 0.12}s`,
                }}
              />
            ))}
          </div>

          {/* removed colored backdrop behind the photo */}
          <img
            src="/assets/hireme-photo.png"
            alt="Hire me"
            className="relative z-20 w-full h-auto mx-auto object-contain drop-shadow-2xl"
          />
        </div>

        <div className="flex-[0.9] w-full max-w-[540px] text-center lg:text-left">
          <h2
            className="text-4xl lg:text-5xl font-bold text-gray-700"
            dangerouslySetInnerHTML={{ __html: currentLang.whyHireMe.title }}
          ></h2>

          <p className="mt-4 text-lg text-gray-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
            {currentLang.whyHireMe.description}
          </p>


          <div className="mt-12 grid grid-cols-6 grid-rows-2 gap-4 justify-items-center w-full max-w-[560px] mx-auto lg:mx-0">
            {[
              { file: "js-logo 1.svg", top: "8%", left: "6%", delay: 0 },
              { file: "react-logo 1.svg", top: "8%", left: "44%", delay: 0.4 },
              { file: "redux-logo 1.svg", top: "8%", left: "63%", delay: 0.6 },
              { file: "Group 15.svg", top: "58%", left: "57%", delay: 1.6 },
              { file: "Group 16.svg", top: "58%", left: "74%", delay: 1.8 },
              { file: "Intellij-logo 1.svg", top: "58%", left: "23%", delay: 1.2 },
              { file: "icons8-tailwindcss.svg", delay: -0.1 },
              { file: "node-logo 1.svg", top: "8%", left: "25%", delay: 0.2 },
              { file: "vscode-logo 1.svg", top: "8%", left: "82%", delay: 0.8 },
              { file: "postman-logo 1.svg", top: "58%", left: "6%", delay: 1.0 },
              { file: "figma-logo 1.svg", top: "58%", left: "40%", delay: 1.4 },
              { file: "Group 17.svg", top: "58%", left: "88%", delay: 2.0 },
            ].map((item, idx) => {
              const row = idx < 6 ? 1 : 2;
              // center the top row by shifting columns (6 items)
              const colTop = [1, 2, 3, 4, 5, 6][idx];
              const colBottom = [1, 2, 3, 4, 5, 6][idx - 6];
              const col = row === 1 ? colTop : colBottom;
              const isTailwind = item.file === "icons8-tailwindcss.svg";
              return (
                <div
                  key={item.file}
                  className={`flex items-center justify-center ${
                    isTailwind
                      ? "w-[80px] h-[80px] rounded-full bg-white shadow-md border border-slate-100"
                      : ""
                  }`}
                  style={{
                    animation: `float 7s ease-in-out infinite`,
                    animationDelay: `${item.delay}s`,
                    gridColumnStart: col,
                    gridRowStart: row,
                  }}
                >
                  <img
                    src={`/assets/${item.file}`}
                    alt={item.file}
                    className="object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .ring-layer {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.9);
        }
        .group:hover .ring-layer {
          animation: ring-pop 1s ease-out forwards;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px) translateX(4px); }
          100% { transform: translateY(0px); }
        }
        @keyframes ring-pop {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
          55% { opacity: 0.75; transform: translate(-50%, -50%) scale(1.03); }
          100% { opacity: 0.55; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </section>
  )
}

