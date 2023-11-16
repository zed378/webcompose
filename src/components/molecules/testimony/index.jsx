import { Fade } from "react-awesome-reveal";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function TestimonialCard({ item, id, incre, decre }) {
  return (
    <div className={`${id !== item.id ? "hidden" : "flex"} flex-col gap-6 `}>
      <div className="flex items-center ultra:gap-6 desktop:gap-5 laptop:gap-4 phone:gap-3 relative ">
        <Fade direction="left">
          <img
            src={item.img}
            alt={item.img}
            srcSet={item.img}
            className="ultra:w-28 desktop:w-24 laptop:w-20 phone:w-16"
          />
        </Fade>

        <div className="w-full">
          <Fade direction="up">
            <h1 className="desktop:text-3xl laptop:text-2xl tablet:text-2xl font-medium">
              {item.name}
            </h1>
          </Fade>
          <Fade direction="up">
            <p className="desktop:text-sm phone:text-xs text-zinc-500 ">
              {item.title}
            </p>
          </Fade>
        </div>

        <div className="phone:flex laptop:hidden items-center gap-5 mt-10 text-xl absolute -top-9 right-0 ">
          <BsArrowLeft
            className={`${
              item.id === 1 ? "text-zinc-400" : "text-zinc-600"
            } cursor-pointer`}
            onClick={decre}
          />
          <BsArrowRight
            className="text-zinc-600 cursor-pointer"
            onClick={incre}
          />
        </div>
      </div>

      <Fade direction="up">
        <hr className="text-gray-700 " />
      </Fade>

      <Fade direction="up">
        <h1 className="desktop:text-4xl laptop:text-3xl phone:text-2xl font-medium ">
          {item.desc}
        </h1>
      </Fade>
    </div>
  );
}
