import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Asset
import logoD from "@assets/images/logodesktop.svg";
import logoM from "@assets/images/logomobile.svg";

export default function Navbar() {
  const nav = useNavigate();
  const [opacity, setOpacity] = useState("0.4");
  const [modal, setModal] = useState(false);

  return (
    <div className="w-full flex justify-between items-center">
      {/* logo */}
      <div
        onClick={() => nav("/")}
        className="cursor-pointer flex items-center gap-3"
      >
        <img src={logoM} alt={logoM} />
        <img src={logoD} alt={logoD} className="hidden laptop:block" />
      </div>
      {/* end of logo */}

      {/* nav menu */}
      <div className="flex items-center gap-3">
        <button
          className="flex items-center justify-center bg-white py-2 px-6 rounded-md hover:bg-purple-200"
          onClick={() => nav("/contact")}
        >
          + Become Client
        </button>

        <svg
          width="48"
          height="49"
          viewBox="0 0 48 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
          onMouseEnter={() => setOpacity("0.6")}
          onMouseLeave={() => setOpacity("0.4")}
        >
          <rect
            y="0.5"
            width="48"
            height="48"
            rx="24"
            fill="white"
            fillOpacity={opacity}
          />
          <rect x="23" y="17.5" width="10" height="2" rx="1" fill="white" />
          <rect x="15" y="23.5" width="18" height="2" rx="1" fill="white" />
          <rect x="15" y="29.5" width="10" height="2" rx="1" fill="white" />
        </svg>
      </div>
      {/* end of nav menu */}
    </div>
  );
}
