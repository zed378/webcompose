import ScrollCarousel from "scroll-carousel-react";

import html from "@assets/images/stack/html.svg";
import css from "@assets/images/stack/css.svg";
import tailwind from "@assets/images/stack/tailwind.svg";
import bootstrap from "@assets/images/stack/bootstrap.svg";
import js from "@assets/images/stack/js.svg";
import nodejs from "@assets/images/stack/nodejs.svg";
import reactjs from "@assets/images/stack/reactjs.svg";
import nextjs from "@assets/images/stack/nextjs.svg";
import figma from "@assets/images/stack/figma.svg";
import redux from "@assets/images/stack/redux.svg";
import expressjs from "@assets/images/stack/expressjs.svg";
import mariadb from "@assets/images/stack/mariadb.svg";
import mongo from "@assets/images/stack/mongo.svg";
import mysql from "@assets/images/stack/mysql.svg";
import sql from "@assets/images/stack/sql.svg";
import oracle from "@assets/images/stack/oracle.svg";
import docker from "@assets/images/stack/docker.svg";
import helm from "@assets/images/stack/helm.svg";
import kube from "@assets/images/stack/kube.svg";
import terra from "@assets/images/stack/terra.svg";
import yaml from "@assets/images/stack/yaml.svg";

export default function Carousel() {
  const images = [
    html,
    css,
    tailwind,
    bootstrap,
    js,
    nodejs,
    reactjs,
    nextjs,
    figma,
    redux,
    expressjs,
    mariadb,
    mongo,
    mysql,
    sql,
    oracle,
    docker,
    helm,
    kube,
    terra,
    yaml,
  ];

  return (
    <ScrollCarousel
      autoplay
      autoplaySpeed={3}
      speed={3}
      elementType="div"
      className="py-3 overflow-hidden"
    >
      {images.map((item) => (
        <div
          key={item}
          className="bg-white border border-slate-300 rounded flex items-center justify-center grayscale hover:grayscale-0 ultra:h-52 ultra:w-72 pc:h-44 pc:w-64 desktop:h-40 desktop:w-56 laptop:h-36 laptop:w-48 tablet:h-32 tablet:w-44 phone:h-28 phone:w-40"
        >
          <img
            src={item}
            alt={item}
            className="ultra:w-32 pc:w-28 desktop:w-24 laptop:w-20 tablet:w-16 phone:w-14 h-auto"
          />
        </div>
      ))}
    </ScrollCarousel>
  );
}
