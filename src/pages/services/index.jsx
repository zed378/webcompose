import { Fade } from "react-awesome-reveal";

// component
import Navbar from "@components/molecules/navbar";
import Footer from "@components/organisms/footer";

// asset
import coding from "@assets/images/coding.webp";
import dashboard from "@assets/images/dashboard.webp";
import laptop from "@assets/images/laptop.webp";

export default function Services() {
  return (
    <>
      <div className="h-auto w-full tablet:p-3 phone:p-1">
        <div className="w-full min-h-full relative rounded-2xl tablet:rounded-[40px] laptop:rounded-[45px] bg-gradient-to-r from-[#9B73EC] to-[#634996] ultra:px-8 ultra:py-10 pc:px-7 pc:py-9 desktop:px-6 desktop:py-8 laptop:px-5 laptop:py-7 tablet:px-4 tablet:py-6 p-3">
          <Navbar />

          <Fade direction="up">
            <h1 className="text-white font-light mt-16 ultra:text-6xl pc:text-4xl desktop:text-4xl laptop:text-4xl tablet:text-4xl phone:text-3xl">
              OUR SERVICES
            </h1>
          </Fade>

          <Fade direction="up" duration={500} cascade>
            <ul className="w-full grid desktop:grid-cols-3 laptop:grid-cols-2 gap-4 mt-4 mb-16 ">
              <li
                className="min-h-[20rem] rounded-xl overflow-hidden relative h-[32rem] tablet:px-10 phone:px-5 tablet:py-12 phone:py-7 bg-cover "
                style={{ backgroundImage: `url(${coding})` }}
              >
                <div className="vignette"></div>

                <div className="relative z-20 flex flex-col justify-between h-full ">
                  <h1 className="text-white ultra:text-6xl pc:text-4xl desktop:text-3xl laptop:text-2xl tablet:text-4xl phone:text-3xl ">
                    WEB
                    <br />
                    MAINTAINANCE
                  </h1>

                  <div className="flex flex-col gap-6 ">
                    <hr className="text-white font-bold  " />

                    <div className="flex gap-3 flex-wrap ">
                      <div className="rounded-full py-[2px] px-4 bg-white/30 text-xs text-white ">
                        Fixing Bug
                      </div>
                      <div className="rounded-full py-[2px] px-4 bg-white/30 text-xs text-white ">
                        Upgrade
                      </div>
                      <div className="rounded-full py-[2px] px-4 bg-white/30 text-xs text-white ">
                        Migrate
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li
                className="min-h-[20rem] rounded-xl overflow-hidden relative h-[32rem] tablet:px-10 phone:px-5 tablet:py-12 phone:py-7 bg-cover "
                style={{ backgroundImage: `url(${laptop})` }}
              >
                <div className="vignette"></div>

                <div className="relative z-20 flex flex-col justify-between h-full ">
                  <h1 className="text-white ultra:text-6xl pc:text-4xl desktop:text-3xl laptop:text-2xl tablet:text-4xl phone:text-3xl ">
                    WEB DESIGN
                  </h1>

                  <div className="flex flex-col gap-6 ">
                    <hr className="text-white font-bold  " />

                    <div className="flex gap-3 flex-wrap ">
                      <div className="rounded-full py-[2px] px-4 bg-white/30 text-xs text-white ">
                        Figma
                      </div>
                      <div className="rounded-full py-[2px] px-4 bg-white/30 text-xs text-white ">
                        Adobe Illustrator
                      </div>
                      <div className="rounded-full py-[2px] px-4 bg-white/30 text-xs text-white ">
                        Corel Draw
                      </div>
                      <div className="rounded-full py-[2px] px-4 bg-white/30 text-xs text-white ">
                        Adobe Photohop
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li
                className="min-h-[20rem] rounded-xl overflow-hidden relative h-[32rem] tablet:px-10 phone:px-5 tablet:py-12 phone:py-7 bg-cover "
                style={{ backgroundImage: `url(${dashboard})` }}
              >
                <div className="vignette"></div>

                <div className="relative z-20 flex flex-col justify-between h-full ">
                  <h1 className="text-white ultra:text-6xl pc:text-4xl desktop:text-3xl laptop:text-2xl tablet:text-4xl phone:text-3xl ">
                    STATIC WEB
                    <br />
                    OR WEB APP
                  </h1>

                  <div className="flex flex-col gap-6 ">
                    <hr className="text-white font-bold  " />

                    <div className="flex gap-3 flex-wrap ">
                      <div className="rounded-full py-[2px] px-4 bg-white/30 text-xs text-white ">
                        HTML
                      </div>
                      <div className="rounded-full py-[2px] px-4 bg-white/30 text-xs text-white ">
                        CSS
                      </div>
                      <div className="rounded-full py-[2px] px-4 bg-white/30 text-xs text-white ">
                        JavaScript
                      </div>
                      <div className="rounded-full py-[2px] px-4 bg-white/30 text-xs text-white ">
                        ReactJS
                      </div>
                      <div className="rounded-full py-[2px] px-4 bg-white/30 text-xs text-white ">
                        NextJS
                      </div>
                      <div className="rounded-full py-[2px] px-4 bg-white/30 text-xs text-white ">
                        ExpressJS
                      </div>{" "}
                      <div className="rounded-full py-[2px] px-4 bg-white/30 text-xs text-white ">
                        NodeJS
                      </div>
                      <div className="rounded-full py-[2px] px-4 bg-white/30 text-xs text-white ">
                        MySQL
                      </div>
                      <div className="rounded-full py-[2px] px-4 bg-white/30 text-xs text-white ">
                        MongoDB
                      </div>
                      <div className="rounded-full py-[2px] px-4 bg-white/30 text-xs text-white ">
                        Personal Web Profile
                      </div>
                      <div className="rounded-full py-[2px] px-4 bg-white/30 text-xs text-white ">
                        Company Profile
                      </div>
                      <div className="rounded-full py-[2px] px-4 bg-white/30 text-xs text-white ">
                        Simple CRUD
                      </div>
                      <div className="rounded-full py-[2px] px-4 bg-white/30 text-xs text-white ">
                        Complex App
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </Fade>
        </div>
      </div>

      <Footer />
    </>
  );
}
