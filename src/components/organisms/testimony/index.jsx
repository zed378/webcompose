import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { testimonyCard } from "@hooks/staticData";

import TestimonialCard from "@components/molecules/testimony";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function Testimony() {
  const [id, setId] = useState(1);

  const increment = () => {
    id < 3 && setId(id + 1);
    id === 3 && setId(1);
  };

  const decrement = () => {
    id > 1 && setId(id - 1);
    id === 1 && setId(3);
  };

  useEffect(() => {
    const interval = setInterval(increment, 7000);

    return () => clearInterval(interval);
  }, [id]);

  return (
    <div
      id="testimony"
      className="w-full laptop:py-20 laptop:px-14 tablet:px-10 phone:px-5 "
    >
      <Fade direction="down">
        <p className="text-zinc-400 ">04 — What Our Clients Say</p>
      </Fade>

      <div className="w-full flex justify-between flex-wrap items-start mt-6 ">
        <div className="laptop:w-[35%] phone:hidden laptop:block ">
          <Fade direction="up">
            <h1 className="text-zinc-500 ultra:text-xl ">
              Our clients consist of all
              <br />
              corners of the world
            </h1>
          </Fade>
        </div>

        <div className="laptop:w-[65%] phone:w-full flex flex-col laptop:pl-[2rem] ">
          {testimonyCard.map((item, idx) => (
            <TestimonialCard
              key={idx}
              item={item}
              id={id}
              incre={increment}
              decre={decrement}
            />
          ))}

          <div className="phone:hidden laptop:flex items-center gap-6 mt-10 text-2xl ">
            <BsArrowLeft
              className={`${
                id === 1 ? "text-zinc-400" : "text-zinc-600"
              } cursor-pointer`}
              onClick={decrement}
            />
            <BsArrowRight
              className="text-zinc-600 cursor-pointer"
              onClick={increment}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
