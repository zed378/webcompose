import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";

// components
import NavMenu from "@components/organisms/navmenu";

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
        <Fade cascade>
          <img src={logoM} alt={logoM} />
          <img src={logoD} alt={logoD} className="hidden laptop:block" />
        </Fade>
      </div>
      {/* end of logo */}

      {/* nav menu */}
      <div className="flex items-center gap-3">
        <Slide direction="right">
          <button
            className="flex items-center justify-center text-black bg-white py-2 px-6 rounded-md hover:bg-purple-200"
            onClick={() => nav("/contact")}
          >
            + Become Client
          </button>
        </Slide>

        {/* <NavMenu /> */}
        <NavMenu />
      </div>
      {/* end of nav menu */}
    </div>
  );
}
