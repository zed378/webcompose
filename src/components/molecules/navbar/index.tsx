"use client";

import { useRouter } from "next/navigation";
import { Fade, Slide } from "react-awesome-reveal";

// components
import NavMenu from "@components/organisms/navmenu";

// Asset
import logoD from "@assets/images/logodesktop.svg";
import logoM from "@assets/images/logomobile.svg";

export default function Navbar() {
  const router = useRouter();
  const logoDSrc = typeof logoD === "string" ? logoD : (logoD as any)?.src || (logoD as any)?.default || logoD;
  const logoMSrc = typeof logoM === "string" ? logoM : (logoM as any)?.src || (logoM as any)?.default || logoM;

  return (
    <div className="w-full flex justify-between items-center">
      {/* logo */}
      <div
        onClick={() => router.push("/")}
        className="cursor-pointer flex items-center gap-3"
      >
        <Fade cascade>
          <img src={logoMSrc} alt="Logo Mobile" />
          <img src={logoDSrc} alt="Logo Desktop" className="hidden laptop:block" />
        </Fade>
      </div>
      {/* end of logo */}

      {/* nav menu */}
      <div className="flex items-center gap-3">
        <Slide direction="right">
          <button
            className="flex items-center justify-center text-black bg-white py-2 px-6 rounded-md hover:bg-purple-200"
            onClick={() => router.push("/contact")}
          >
            + Become Client
          </button>
        </Slide>

        <NavMenu />
      </div>
      {/* end of nav menu */}
    </div>
  );
}
