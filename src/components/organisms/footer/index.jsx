import logoFooter from "@assets/images/logoFooter.svg";
import {
  BsInstagram,
  BsFacebook,
  BsLinkedin,
  BsGithub,
  BsWhatsapp,
} from "react-icons/bs";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bg-[#644A98] ultra:px-24 ultra:pt-44 ultra:pb-16 pc:px-20 pc:pt-40 pc:pb-14 desktop:px-20 desktop:pt-40 desktop:pb-14 laptop:px-16 laptop:pt-36 laptop:pb-14 tablet:px-20 tablet:pt-36 tablet:pb-14 phone:px-10 phone:pt-36 phone:pb-14 text-white flex flex-col gap-4 relative ">
      <div className="w-screen absolute top-0 left-0 bg-white h-24 rounded-b-3xl "></div>

      <div className="ultra:w-[25%] pc:w-[30%] ">
        <img src={logoFooter} alt={logoFooter} />

        <p className="text-white font-light mt-10 pc:w-[80%] ">
          Feel free to reach our if you want to collaborate with us, or simply
          have a chat.
          <br />
          <br />
          Don’t like the forms? Drop us a line via email
        </p>

        <a
          href="mailto:eva@webcompose.id"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold"
        >
          eva@webcompose.id
        </a>

        <div className="flex items-center gap-8 mt-10 mb-12 ">
          <p className="cursor-pointer text-white font-medium">Home</p>
          <p className="cursor-pointer text-white font-medium">Our Services</p>
          <p className="cursor-pointer text-white font-medium">Contact</p>
          <p className="cursor-pointer text-white font-medium">Privacy</p>
        </div>
      </div>

      <hr />

      <div className="flex laptop:items-center laptop:justify-between phone:flex-col-reverse phone:gap-4 phone:pt-4 laptop:pt-10 ">
        <p className="text-white font-light ">
          © {year} Web Compose. All rights reserved.
        </p>

        <div className="flex items-center gap-5 text-white text-2xl ">
          <BsInstagram /> <BsFacebook /> <BsLinkedin /> <BsGithub />{" "}
          <BsWhatsapp />
        </div>
      </div>
    </div>
  );
}
