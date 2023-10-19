import { Fade, Slide } from "react-awesome-reveal";

// component
import Navbar from "@components/molecules/navbar";

// asset
import bgHero from "@assets/images/bgHero.png";
import laptop from "@assets/images/laptop.jpg";
import play from "@assets/images/play.png";
import { BsArrowDown, BsStarFill, BsFillPlayCircleFill } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="tablet:min-h-screen laptop:h-screen w-full tablet:p-3 phone:p-1">
      <div className="w-full h-full relative laptop:overflow-hidden rounded-2xl tablet:rounded-[40px] laptop:rounded-[45px] bg-gradient-to-r from-[#9B73EC] to-[#634996] ultra:px-8 ultra:py-10 pc:px-7 pc:py-9 desktop:px-6 desktop:py-8 laptop:px-5 laptop:py-7 tablet:px-4 tablet:py-6 p-3">
        <Navbar />

        <Fade>
          <img
            src={bgHero}
            alt={bgHero}
            className="absolute bottom-0 -right-40 hidden laptop:block laptop:scale-75 laptop:-bottom-32 laptop:-right-56 pc:scale-100 pc:-bottom-8 pc:-right-40 ultra:scale-105 ultra:bottom-10 ultra:-right-32"
          />
        </Fade>

        {/* banner text */}
        <div className=" laptop:absolute pc:bottom-[7rem] desktop:bottom-[5rem] laptop:bottom-[4rem] tablet:bottom-[3.5rem] phone:mt-[8rem] laptop:left-12 tablet:left-0 ultra:w-[55%] pc:w-[55%] desktop:w-[55%] laptop:w-[60%] w-full laptop:p-0 tablet:px-7 box-border">
          <div className="w-full flex items-center gap-4">
            <Slide direction="left">
              <h1 className="ultra:text-[8rem] pc:text-[6rem] desktop:text-[5.5rem] laptop:text-[5rem] tablet:text-[4.25rem] phone:text-[2.5rem] font-light text-white">
                WE CREATE
              </h1>
            </Slide>

            <Slide direction="up">
              <div className="rounded-full bg-white desktop:w-20 desktop:h-20 laptop:w-16 laptop:h-16 tablet:w-14 tablet:h-14 tablet:flex tablet:justify-center tablet:items-center animate-bounce phone:hidden">
                <BsArrowDown className="desktop:text-2xl laptop:text-xl text-black" />
              </div>
            </Slide>
          </div>

          <Slide direction="left">
            <h1 className="ultra:text-[8rem] pc:text-[6rem] desktop:text-[5.5rem] laptop:text-[5rem] tablet:text-[4.25rem] phone:text-[2.5rem] text-white font-bold tablet:ml-10 phone:ml-5 ">
              DEVELOPMENT
            </h1>
          </Slide>

          <div className="w-full mt-20">
            <Fade>
              <hr className="tablet:block hidden" />
            </Fade>

            <div className="relative flex items-end justify-center flex-col gap-1 h-20 tablet:hidden">
              <div className="rounded-full border border-white w-20 h-20 -ml-3 animate-pulse flex items-center justify-center tablet:hidden absolute z-10 left-[2px]">
                <Fade>
                  <div className="rounded-full bg-white w-16 h-16 flex items-center justify-center">
                    <BsArrowDown className="desktop:text-2xl laptop:text-xl" />
                  </div>
                </Fade>
              </div>

              <Slide direction="down">
                <p className="text-white">Scroll</p>
              </Slide>
              <Slide direction="right" className="cust-width">
                <hr className="text-white w-full" />
              </Slide>
              <Slide direction="up">
                <p className="text-white">Down</p>
              </Slide>
            </div>

            <div className="flex items-center ultra:gap-7 pc:gap-5 desktop:gap-4 laptop:gap-3 tablet:gap-4 phone:gap-3 mt-7">
              <div className="rounded-full ultra:w-[15rem] pc:w-[12rem] desktop:w-[11rem] laptop:w-[10rem] tablet:w-[11rem] flex justify-center items-center bg-white pc:py-2 pc:px-3 desktop:py-1 desktop:px-2 phone:px-3 phone:py-2 tablet:gap-5 phone:gap-4">
                <div className="flex items-center gap-1">
                  <BsStarFill className="text-yellow-500 ultra:w-5 ultra:h-5 tablet:w-4 tablet:h-4 phone:w-3 phone:h-3" />
                  <BsStarFill className="text-yellow-500 ultra:w-5 ultra:h-5 tablet:w-4 tablet:h-4 phone:w-3 phone:h-3" />
                  <BsStarFill className="text-yellow-500 ultra:w-5 ultra:h-5 tablet:w-4 tablet:h-4 phone:w-3 phone:h-3" />
                  <BsStarFill className="text-yellow-500 ultra:w-5 ultra:h-5 tablet:w-4 tablet:h-4 phone:w-3 phone:h-3" />
                  <BsStarFill className="text-yellow-500 ultra:w-5 ultra:h-5 tablet:w-4 tablet:h-4 phone:w-3 phone:h-3" />
                </div>
                <p className="m-0 p-0 tablet:text-xl phone:text-xs font-bold">
                  4.9
                </p>
              </div>
              <p className="text-white ultra:text-xl pc:text-xl desktop:text-lg">
                Our Customers love to work with us
              </p>
            </div>
          </div>
        </div>
        {/* end of banner text */}

        {/* laptop image */}

        <div className="laptop:w-auto h-auto laptop:absolute ultra:bottom-[3rem] ultra:right-[3rem] pc:bottom-[2rem] pc:right-[2rem] desktop:bottom-[1.75rem] desktop:right-[1.75rem] laptop:bottom-[1.5rem] laptop:right-[1.5rem] phone:w-[90%] tablet:mt-4">
          <Slide direction="down">
            <div className="relative laptop:h-[6.25rem] laptop:w-[6.25rem] phone:w-[5rem] phone:h-[5rem] flex items-center justify-center laptop:top-12 laptop:left-[-2rem] tablet:top-[12rem] tablet:left-[90%] phone:top-[12rem] phone:left-[87.5%] ">
              <img
                src={play}
                alt={play}
                className="laptop:w-[6.25rem] laptop:h-[6.25rem] phone:w-[5rem] phone:h-[5rem] absolute top-0 left-0 spinning"
              />

              <BsFillPlayCircleFill className="text-white laptop:w-[5rem] laptop:h-[5rem] phone:w-[4rem] phone:h-[4rem] " />
            </div>
          </Slide>

          <div className="overflow-hidden rounded-3xl flex items-center justify-center ultra:h-[20rem] ultra:w-[35rem] pc:h-[17.5rem] pc:w-[30rem] desktop:h-[15rem] desktop:w-[25rem] laptop:h-[12.5rem] laptop:w-[20rem] tablet:h-[17.5rem] tablet:w-full phone:w-full phone:h-[17.5rem] ">
            <img src={laptop} alt={laptop} className="w-full h-auto" />
          </div>
        </div>
        {/* end of laptop image */}
      </div>
    </div>
  );
}
