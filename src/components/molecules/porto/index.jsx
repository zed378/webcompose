import { Fade } from "react-awesome-reveal";

import { BsArrowUpRight } from "react-icons/bs";

export default function PortoCardMobile({ item }) {
  return (
    <div className="w-full rounded-2xl flex flex-col gap-4 ">
      <Fade direction="up">
        <div className="rounded-2xl tablet:h-[40rem] phone:h-[30rem] w-full overflow-hidden relative ">
          <img
            src={item.img}
            alt={item.img}
            srcSet={item.img}
            className="w-full "
          />

          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2 right-2 bg-[#644A98] hover:bg-[#6f35e4] rounded-2xl p-5 text-center "
          >
            <BsArrowUpRight className="text-white text-2xl font-black " />
          </a>
        </div>
      </Fade>

      <Fade direction="down">
        <h1 className="text-3xl">{item.title}</h1>
      </Fade>

      <Fade direction="up">
        <p className="text-gray-500">{item.desc}</p>
      </Fade>
    </div>
  );
}
