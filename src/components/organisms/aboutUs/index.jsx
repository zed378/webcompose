import { Fade } from "react-awesome-reveal";
import { cardData } from "@hooks/staticData";

//  components
import Why from "@components/molecules/why";

// asset
import laptop from "@assets/images/about/laptop.png";

export default function AboutUs() {
  return (
    <div
      id="aboutUs"
      className="w-full py-20 laptop:px-14 tablet:px-10 phone:px-5 flex items-start justify-between flex-wrap "
    >
      {/* About us description */}
      <div className="desktop:w-[60%] phone:w-full ">
        <Fade direction="down">
          <p className="text-zinc-400 ">02 — About Us</p>
        </Fade>

        <Fade direction="up">
          <h1 className="text-black font-medium mt-6 ultra:text-6xl pc:text-4xl desktop:text-4xl laptop:text-4xl tablet:text-4xl phone:text-3xl">
            We Strive to Innovate
          </h1>
        </Fade>

        <Fade cascade direction="down">
          <ul className="desktop:w-[67.5%] flex flex-col gap-4 mt-14 ">
            <p className="text-gray-400 desktop:text-xl font-light ">
              Founded in 2023, Web Compose is a tech agency masters in web
              development and web maintenance with popular programming
              technology.
            </p>

            <p className="text-gray-400 desktop:text-xl font-light ">
              We assist business owners in building and managing websites and
              applications so they can focus on growing their business with
              automated processes. We are ready to work with you in building web
              design, static web, web apps, and web maintenance.
            </p>
          </ul>
        </Fade>
      </div>
      {/* End of About us description */}

      {/* Why Us */}
      <div className="desktop:w-[40%] phone:w-full phone:mt-10 desktop:mt-0 ">
        <Fade direction="down">
          <p className="text-zinc-400 phone:font-medium desktop:font-normal desktop:text-base phone:text-xl ">
            Some Number About Us
          </p>
        </Fade>

        <Fade direction="up" cascade duration={500}>
          <ul className="grid grid-cols-2 gap-3 mt-6">
            {cardData.map((data, idx) => (
              <Why key={idx} item={data} />
            ))}
          </ul>
        </Fade>
      </div>
      {/* End of Why Us */}

      {/* Banner */}
      <div className="w-full rounded-3xl bg-[#5A3E92] mt-32 relative overflow-hidden ultra:h-[55rem] ultra:px-10 ultra:py-8 pc:h-[50rem] pc:px-10 pc:py-7 desktop:h-[50rem] desktop:px-9 desktop:py-6 laptop:h-[47.5rem] laptop:px-8 laptop:py-5 tablet:h-[55rem] tablet:px-7 tablet:py-8 phone:h-[55rem] phone:px-5 phone:py-7 ">
        {/* back text */}
        <h1 className="ultra:text-[15rem] pc:text-[12rem] desktop:text-[12rem] laptop:text-[8rem] tablet:text-[4rem] phone:text-[6rem] m-0 p-0 text-white/10 font-medium tablet:w-[250%] phone:w-[1000%] absolute laptop:top-[30%] tablet:bottom-[10%] phone:bottom-10 -z-0 -left-[10%] ">
          based. Data driven user focused
        </h1>
        {/* end of back text */}

        <Fade direction="left">
          <h1 className="text-white desktop:text-[4rem] laptop:text-[3.5rem] tablet:text-[3rem] phone:text-[2.5rem] ">
            AWESOME <br /> DEVELOPMENT
          </h1>
        </Fade>

        <Fade direction="down">
          <p className="laptop:hidden text-white font-extralight mt-3 ">
            Making your business outstanding is a science. We take it (a)
            seriously and (b) creatively.
          </p>
        </Fade>

        <div className="w-full laptop:flex items-center justify-between absolute bottom-20 left-0 px-10 phone:hidden">
          <Fade direction="up">
            <p className="text-white text-lg font-light ">
              Stand out and differently with others
            </p>
          </Fade>

          <Fade direction="right" cascade duration={500}>
            <ul className="flex items-center gap-2">
              <button className="bg-white py-0 px-3 rounded-md">
                Check Our Portfolio
              </button>
              <button className="bg-slate-600 py-0 px-3 rounded-md text-white ">
                Get In Touch
              </button>
            </ul>
          </Fade>
        </div>

        <div className="w-full absolute tablet:top-0 left-0 flex justify-center laptop:pt-20 tablet:pt-64 tablet:mt-0 phone:mt-20 ">
          <Fade direction="up">
            <img
              src={laptop}
              alt={laptop}
              className="ultra:w-[60rem] pc:w-[55rem] desktop:w-[52.5rem] laptop:w-[50rem] tablet:w-[35rem] phone:w-[25rem] "
            />
          </Fade>
        </div>
      </div>
      {/* End of Banner */}
    </div>
  );
}
