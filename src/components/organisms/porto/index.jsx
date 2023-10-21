import { Fade } from "react-awesome-reveal";

// assets
import mentari from "@assets/images/porto/mentari.png";
import dayat from "@assets/images/porto/dayat.png";
import { BsDot, BsArrowUpRight } from "react-icons/bs";

export default function Porto() {
  return (
    <div
      id="aboutUs"
      className="w-full py-20 laptop:px-14 tablet:px-10 phone:px-5 "
    >
      <Fade direction="down">
        <p className="text-zinc-400 ">03 — Our Portofolio</p>
      </Fade>

      <Fade direction="up">
        <h1 className="text-gray-500 mt-6 text-2xl hidden tablet:block ">
          Our development encourages
          <br /> productivity and boosts
          <br /> revenue.
        </h1>
      </Fade>

      <Fade direction="up">
        <h1 className="text-gray-500 mt-6 text-lg font-light tablet:hidden ">
          Our development encourages productivity and boosts revenue.
        </h1>
      </Fade>

      <Fade direction="left">
        <button className="px-5 py-3 text-white rounded-lg bg-[#644A98] hover:bg-[#6f35e4] tablet:flex items-center text-sm mt-5 phone:hidden ">
          Check Full Portofolio <BsDot className="text-xl" />
        </button>
      </Fade>

      <Fade direction="down" cascade duration={500}>
        <ul className="w-full flex flex-wrap justify-between mt-20 ">
          <li
            className="w-[59.5%] bg-gray-300 rounded-t-3xl rounded-bl-3xl h-[35rem] relative overflow-hidden bg-cover bg-center "
            style={{ backgroundImage: `url(${mentari})` }}
          >
            <div className="w-full h-full absolute top-0 left-0 grad -z-0 "></div>

            <div className="w-[80%] flex flex-col gap-6 absolute bottom-0 left-0 pl-12 pr-20 pb-10 ">
              <Fade direction="up" duration={2000}>
                <h1 className="text-white text-2xl ">Mentari Edukids</h1>
              </Fade>
              <Fade direction="up" duration={2000}>
                <p className="text-white text-sm font-extralight ">
                  Mentari Edukids is a tutoring institution that uses the
                  Montessori teaching method as its curriculum. This project is
                  a simple landing page that explains the programs and packages
                  offered by this tutoring place and at the end of the page
                  there will be a call to action that leads to the WhatsApp
                  application for further communication.
                </p>
              </Fade>
            </div>

            <div className="bg-white flex items-center justify-center rounded-tl-[36px] absolute bottom-0 right-0 z-10 h-40 w-40 ">
              <a
                href="https://mentariedukids.my.id"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5A3E92] rounded-[36px] cursor-pointer hover:bg-violet-600 w-[7.5rem] h-[7.5rem] flex items-center justify-center "
              >
                <BsArrowUpRight className="text-white text-2xl font-black " />
              </a>
            </div>
          </li>

          <li
            className="w-[39.5%] bg-gray-300 rounded-t-3xl rounded-bl-3xl h-[35rem] relative overflow-hidden bg-cover bg-center "
            style={{ backgroundImage: `url(${dayat})` }}
          >
            <div className="w-full h-full absolute top-0 left-0 grad -z-0 "></div>

            <div className="w-[80%] flex flex-col gap-6 absolute bottom-0 left-0 pl-12 pr-20 pb-10 ">
              <Fade direction="up" duration={2000}>
                <h1 className="text-white text-2xl ">
                  Digital Wedding Invitation
                </h1>
              </Fade>
              <Fade direction="up" duration={2000}>
                <p className="text-white text-sm font-extralight ">
                  A digitalized wedding invitation project to make it easier to
                  send invitations and reduce paper. This project has parameters
                  that can be filled in dynamically so that each invited guest
                  has a private invitation.
                </p>
              </Fade>
            </div>

            <div className="bg-white flex items-center justify-center rounded-tl-[36px] absolute bottom-0 right-0 z-10 h-40 w-40 ">
              <a
                href="https://www.dayatlubena.my.id/?to=Zawawi+dan+Eva"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5A3E92] rounded-[36px] cursor-pointer hover:bg-violet-600 w-[7.5rem] h-[7.5rem] flex items-center justify-center "
              >
                <BsArrowUpRight className="text-white text-2xl font-black " />
              </a>
            </div>
          </li>

          <li
            className="w-full mt-4 bg-gray-300 rounded-t-3xl rounded-bl-3xl h-[35rem] relative overflow-hidden bg-cover bg-center "
            style={{ backgroundImage: `url(${mentari})` }}
          >
            <div className="w-full h-full absolute top-0 left-0 grad -z-0 "></div>

            <div className="w-[50%] flex flex-col gap-6 absolute bottom-0 left-0 pl-12 pr-20 pb-10 ">
              <Fade direction="up" duration={2000}>
                <h1 className="text-white text-2xl ">Mentari Edukids</h1>
              </Fade>
              <Fade direction="up" duration={2000}>
                <p className="text-white text-sm font-extralight ">
                  Mentari Edukids is a tutoring institution that uses the
                  Montessori teaching method as its curriculum. This project is
                  a simple landing page that explains the programs and packages
                  offered by this tutoring place and at the end of the page
                  there will be a call to action that leads to the WhatsApp
                  application for further communication.
                </p>
              </Fade>
            </div>

            <div className="bg-white flex items-center justify-center rounded-tl-[36px] absolute bottom-0 right-0 z-10 h-40 w-40 ">
              <a
                href="https://mentariedukids.my.id"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5A3E92] rounded-[36px] cursor-pointer hover:bg-violet-600 w-[7.5rem] h-[7.5rem] flex items-center justify-center "
              >
                <BsArrowUpRight className="text-white text-2xl font-black " />
              </a>
            </div>
          </li>
        </ul>
      </Fade>
    </div>
  );
}
