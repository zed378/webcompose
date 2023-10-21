import coding from "@assets/images/coding.jpg";
import dashboard from "@assets/images/dashboard.png";
import laptop from "@assets/images/laptop.jpg";

export default function ServiceHome() {
  return (
    <div className="w-full py-20 laptop:px-14 tablet:px-10 phone:px-5 ">
      <p className="text-zinc-400 ">01 — Our Services</p>
      <h1 className="ultra:w-2/3 pc:w-[65%] desktop:w-[70%] laptop:w-full text-zinc-400 ultra:text-6xl pc:text-4xl desktop:text-4xl laptop:text-4xl tablet:text-4xl phone:text-3xl mt-10">
        As a tight-knit team of experts, we create memorable and emotional
        websites, digital experiences, and native apps.
      </h1>

      <div className="w-full grid desktop:grid-cols-3 laptop:grid-cols-2 gap-4 mt-20 ">
        <div
          className="min-h-[20rem] rounded-xl overflow-hidden relative h-[36rem] tablet:px-10 phone:px-5 tablet:py-12 phone:py-7 bg-cover "
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
        </div>

        <div
          className="min-h-[20rem] rounded-xl overflow-hidden relative h-[36rem] tablet:px-10 phone:px-5 tablet:py-12 phone:py-7 bg-cover "
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
        </div>

        <div
          className="min-h-[20rem] rounded-xl overflow-hidden relative h-[36rem] tablet:px-10 phone:px-5 tablet:py-12 phone:py-7 bg-cover "
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
        </div>
      </div>
    </div>
  );
}
