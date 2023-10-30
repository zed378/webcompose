import { Fade } from "react-awesome-reveal";

// asset
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
    <div className="bg-[#644A98] ultra:px-24 ultra:pb-16 pc:px-20 pc:pb-14 desktop:px-20 desktop:pt-36 desktop:pb-14 laptop:px-16 laptop:pt-44 laptop:pb-14 tablet:px-20 tablet:pt-36 tablet:pb-14 phone:px-10 phone:pt-36 phone:pb-14 text-white flex flex-col gap-4 relative ">
      <div className="w-screen absolute top-0 left-0 bg-white h-5 rounded-b-full "></div>

      <div className="ultra:w-[25%] pc:w-[30%] ">
        <Fade direction="down">
          <img src={logoFooter} alt={logoFooter} />
        </Fade>

        <Fade direction="left">
          <p className="text-white font-light mt-10 pc:w-[80%] ">
            Feel free to reach our if you want to collaborate with us, or simply
            have a chat.
            <br />
            <br />
            Don’t like the forms? Drop us a line via email
          </p>
        </Fade>

        <Fade direction="up">
          <a
            href="mailto:eva@webcompose.id"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            eva@webcompose.id
          </a>
        </Fade>

        <Fade direction="right" duration={500} cascade>
          <ul className="flex items-center gap-8 mt-10 mb-12 ">
            <li className="cursor-pointer text-white font-medium">Home</li>
            <li className="cursor-pointer text-white font-medium">
              Our Services
            </li>
            <li className="cursor-pointer text-white font-medium">Contact</li>
            <li className="cursor-pointer text-white font-medium">Privacy</li>
          </ul>
        </Fade>
      </div>

      <Fade direction="up">
        <hr />
      </Fade>

      <div className="flex laptop:flex-row laptop:items-center laptop:justify-between phone:flex-col-reverse phone:gap-4 phone:pt-4 laptop:pt-10 ">
        <Fade direction="down">
          <p className="text-white font-light ">
            © {year} Web Compose. All rights reserved.
          </p>
        </Fade>

        <Fade direction="down" cascade duration={300}>
          <ul className="flex items-center gap-5 text-white text-2xl ">
            <BsInstagram /> <BsFacebook /> <BsLinkedin /> <BsGithub />{" "}
            <BsWhatsapp />
          </ul>
        </Fade>
      </div>
    </div>
  );
}
