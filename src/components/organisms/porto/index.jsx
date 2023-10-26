import { Fade } from "react-awesome-reveal";
import { portoCard, portoMobile } from "@hooks/staticData";

// components
import PortoCardMobile from "@components/molecules/porto";

// assets
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
        <a
          href="https://github.com/zed378"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 text-white w-52 rounded-lg bg-[#644A98] hover:bg-[#6f35e4] tablet:flex items-center justify-center text-sm mt-5 phone:hidden "
        >
          Check Full Portofolio <BsDot className="text-xl" />
        </a>
      </Fade>

      <Fade direction="down" cascade duration={500}>
        <ul className="w-full laptop:flex flex-wrap justify-between mt-20 phone:hidden ">
          {/* Mentari edukids */}
          <li
            className="laptop:w-[59.5%] phone:w-full bg-gray-300 rounded-t-3xl rounded-bl-3xl ultra:h-[35rem] pc:h-[32rem] desktop:h-[30rem] laptop:h-[28rem] phone:h-[30rem] relative overflow-hidden bg-cover bg-top "
            style={{ backgroundImage: `url(${portoCard[0].img})` }}
          >
            <div className="w-full h-full absolute top-0 left-0 grad -z-0 "></div>

            <div className="w-[85%] flex flex-col gap-6 absolute bottom-0 left-0 pl-12 pr-20 pb-10 ">
              <Fade direction="up" duration={2000}>
                <h1 className="text-white text-2xl ">{portoCard[0].title}</h1>
              </Fade>
              <Fade direction="up" duration={2000}>
                <p className="text-white text-sm font-extralight ">
                  {portoCard[0].desc}
                </p>
              </Fade>
            </div>

            <div className="bg-white flex items-center justify-center rounded-tl-[36px] absolute bottom-0 right-0 z-10 ultra:h-40 ultra:w-40 pc:h-32 pc:w-32 desktop:w-28 desktop:h-28 laptop:w-24 laptop:h-24 ">
              <a
                href={portoCard[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5A3E92] pc:rounded-[36px] desktop:rounded-[30px] laptop:rounded-[26px] cursor-pointer hover:bg-violet-600 ultra:w-[7.5rem] ultra:h-[7.5rem] pc:w-[6.5rem] pc:h-[6.5rem] desktop:w-[5.5rem] desktop:h-[5.5rem] laptop:w-[4.5rem] laptop:h-[4.5rem] flex items-center justify-center "
              >
                <BsArrowUpRight className="text-white text-2xl font-black " />
              </a>
            </div>
          </li>
          {/* End of Mentari edukids */}

          {/* Wedding Invitation */}
          <li
            className="laptop:w-[39.5%] laptop:mt-0 phone:mt-4 phone:w-full bg-gray-300 rounded-t-3xl rounded-bl-3xl ultra:h-[35rem] pc:h-[32rem] desktop:h-[30rem] laptop:h-[28rem] phone:h-[30rem] relative overflow-hidden bg-cover bg-top "
            style={{ backgroundImage: `url(${portoCard[1].img})` }}
          >
            <div className="w-full h-full absolute top-0 left-0 grad -z-0 "></div>

            <div className="desktop:w-[85%] laptop:w-[95%] flex flex-col gap-6 absolute bottom-0 left-0 pl-12 pr-20 pb-10 ">
              <Fade direction="up" duration={2000}>
                <h1 className="text-white text-2xl ">{portoCard[1].title}</h1>
              </Fade>
              <Fade direction="up" duration={2000}>
                <p className="text-white text-sm font-extralight ">
                  {portoCard[1].desc}
                </p>
              </Fade>
            </div>

            <div className="bg-white flex items-center justify-center rounded-tl-[36px] absolute bottom-0 right-0 z-10 ultra:h-40 ultra:w-40 pc:h-32 pc:w-32 desktop:w-28 desktop:h-28 laptop:w-24 laptop:h-24 ">
              <a
                href={portoCard[1].link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5A3E92] pc:rounded-[36px] desktop:rounded-[30px] laptop:rounded-[26px] cursor-pointer hover:bg-violet-600 ultra:w-[7.5rem] ultra:h-[7.5rem] pc:w-[6.5rem] pc:h-[6.5rem] desktop:w-[5.5rem] desktop:h-[5.5rem] laptop:w-[4.5rem] laptop:h-[4.5rem] flex items-center justify-center "
              >
                <BsArrowUpRight className="text-white text-2xl font-black " />
              </a>
            </div>
          </li>
          {/* End of Wedding Invitation */}

          {/* Travel Diary */}
          <li
            className="w-full mt-4 bg-gray-300 rounded-t-3xl rounded-bl-3xl ultra:h-[35rem] pc:h-[32rem] desktop:h-[30rem] laptop:h-[28rem] phone:h-[30rem] relative overflow-hidden bg-cover bg-top "
            style={{ backgroundImage: `url(${portoCard[2].img})` }}
          >
            <div className="w-full h-full absolute top-0 left-0 grad -z-0 "></div>

            <div className="desktop:w-[50%] laptop:w-4/5 flex flex-col gap-6 absolute bottom-0 left-0 pl-12 pr-20 pb-10 ">
              <Fade direction="up" duration={2000}>
                <h1 className="text-white text-2xl ">{portoCard[2].title}</h1>
              </Fade>
              <Fade direction="up" duration={2000}>
                <p className="text-white text-sm font-extralight ">
                  {portoCard[2].desc}
                </p>
              </Fade>
            </div>

            <div className="bg-white flex items-center justify-center rounded-tl-[36px] absolute bottom-0 right-0 z-10 ultra:h-40 ultra:w-40 pc:h-32 pc:w-32 desktop:w-28 desktop:h-28 laptop:w-24 laptop:h-24 ">
              <a
                href={portoCard[2].link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5A3E92] pc:rounded-[36px] desktop:rounded-[30px] laptop:rounded-[26px] cursor-pointer hover:bg-violet-600 ultra:w-[7.5rem] ultra:h-[7.5rem] pc:w-[6.5rem] pc:h-[6.5rem] desktop:w-[5.5rem] desktop:h-[5.5rem] laptop:w-[4.5rem] laptop:h-[4.5rem] flex items-center justify-center "
              >
                <BsArrowUpRight className="text-white text-2xl font-black " />
              </a>
            </div>
          </li>
          {/* End of Travel Diary */}
        </ul>
      </Fade>

      <div className="laptop:hidden w-full mt-20 flex flex-col gap-6">
        {portoMobile.map((item, idx) => (
          <PortoCardMobile item={item} key={idx} />
        ))}
      </div>

      <Fade direction="down">
        <div className="w-full flex justify-center mt-4">
          <a
            href="https://github.com/zed378"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 text-white rounded-lg bg-[#644A98] hover:bg-[#6f35e4] tablet:flex items-center justify-center text-sm mt-5 laptop:hidden "
          >
            Check Full Portofolio
          </a>
        </div>
      </Fade>
    </div>
  );
}
