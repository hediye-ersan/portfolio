import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const links = ["Home", "About", "Service", "Resume", "Project", "Contact"];

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1298px] h-[80px] bg-black rounded-full p-[10px] flex items-center justify-between">

        {/* LEFT */}
        <div className="flex gap-4 items-center">
          {links.slice(0, 3).map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-10 py-5 text-xl transition-all duration-300
              ${active === item
                  ? "bg-orange text-white rounded-full"
                  : "text-white"
                }
            `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* CENTER LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-[46px] h-[46px] bg-orange rounded-full flex items-center justify-center text-white font-semibold text-2xl">
            JC
          </div>
          <span className="text-2xl text-white font-semibold">
            Hediye
          </span>
        </div>

        {/* RIGHT */}
        <div className="flex gap-4 items-center">
          {links.slice(3).map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-10 py-5 text-xl transition-all duration-300
              ${active === item
                  ? "bg-orange text-white rounded-full"
                  : "text-white"
                }
            `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;