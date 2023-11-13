import { Fade } from "react-awesome-reveal";

// component
import Navbar from "@components/molecules/navbar";
import { RegisterForm } from "@components/molecules/form";

// assets
import bgHero from "@assets/images/bgHero.webp";

export default function Register() {
  return (
    <div className="phone:h-screen laptop:min-h-screen w-full tablet:p-3 phone:p-1">
      <div className="w-full h-full relative overflow-hidden rounded-2xl tablet:rounded-[40px] laptop:rounded-[45px] bg-gradient-to-r from-[#9B73EC] to-[#634996] ultra:px-8 ultra:py-10 pc:px-7 pc:py-9 desktop:px-6 desktop:py-8 laptop:px-5 laptop:py-7 tablet:px-4 tablet:py-6 p-3">
        <Navbar />

        <Fade triggerOnce>
          <img
            src={bgHero}
            alt={bgHero}
            className="absolute -bottom-0 -right-14 hidden desktop:block laptop:scale-75 laptop:-bottom-24 laptop:-right-14 pc:scale-100 pc:-bottom-24 pc:-right-14 ultra:scale-110 ultra:bottom-2 ultra:-right-14 w-[700px] "
          />
        </Fade>

        <div className="w-full flex justify-between flex-wrap items-start tablet:px-2 laptop:px-4 mt-14 ">
          {/* Form */}
          <div className="desktop:w-1/3 ultra:w-[30%] phone:w-full flex ">
            <RegisterForm />
          </div>
          {/* End Of Form */}
        </div>
      </div>
    </div>
  );
}
