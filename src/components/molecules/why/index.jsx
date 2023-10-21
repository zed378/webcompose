export default function Why({ item }) {
  return (
    <div className="bg-violet-100/50 ultra:min-h-[15rem] pc:min-h-[17.5rem] desktop:min-h-[18rem] laptop:min-h-[15rem] tablet:min-h-[15rem] phone:min-h-[17.5rem] rounded-3xl relative overflow-hidden pc:p-5 desktop:p-4 laptop:p-5 tablet:p-5 phone:p-4 flex flex-col gap-4 ">
      <h1 className="ultra:text-4xl pc:text-3xl desktop:text-2xl tablet:text-4xl phone:text-2xl font-bold ">
        {item.title}
      </h1>

      <p className="text-gray-400 font-light ultra:w-[60%] pc:w-[75%] desktop:w-[80%] laptop:w-full tablet:w-[80%] ">
        {item.desc}
      </p>

      <img
        src={item.img}
        alt={item.img}
        className="absolute -z-0 ultra:-bottom-[3rem] ultra:-right-[3.5rem] ultra:w-52 pc:-bottom-[3rem] pc:-right-[3.5rem] pc:w-48  desktop:-bottom-[3rem] desktop:-right-[3rem] desktop:w-44 laptop:-bottom-[3.5rem] laptop:-right-[3.5rem] laptop:w-60 tablet:-bottom-[3rem] tablet:-right-[3rem] tablet:w-44 phone:-bottom-[3rem] phone:-right-[3rem] phone:w-40 "
      />
    </div>
  );
}
