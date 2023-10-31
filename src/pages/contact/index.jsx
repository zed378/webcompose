import { Fade } from "react-awesome-reveal";

// component
import Navbar from "@components/molecules/navbar";
import Footer from "@components/organisms/footer";
import ContactForm from "@components/molecules/form";

// assets
import bgContact from "@assets/images/bgContact.webp";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

export default function ContactUs() {
  return (
    <>
      <div className="min-h-screen w-full tablet:p-3 phone:p-1">
        <div className="w-full min-h-screen relative laptop:overflow-hidden rounded-2xl tablet:rounded-[40px] laptop:rounded-[45px] bg-gradient-to-r from-[#9B73EC] to-[#634996] ultra:px-8 ultra:py-10 pc:px-7 pc:py-9 desktop:px-6 desktop:py-8 laptop:px-5 laptop:py-7 tablet:px-4 tablet:py-6 p-3">
          <Navbar />

          <Fade triggerOnce>
            <img
              src={bgContact}
              alt={bgContact}
              className="absolute -bottom-24 -left-14 hidden desktop:block laptop:scale-75 laptop:-bottom-24 laptop:-left-14 pc:scale-100 pc:-bottom-24 pc:-left-14 ultra:scale-110 ultra:-bottom-24 ultra:-left-14 w-[700px] "
            />
          </Fade>

          <Fade direction="up">
            <h1 className="text-white font-light mt-16 mb-10 ultra:text-6xl pc:text-4xl desktop:text-4xl laptop:text-4xl tablet:text-4xl phone:text-3xl ">
              CONTACT US
            </h1>
          </Fade>

          <div className="w-full flex justify-between flex-wrap items-start ">
            {/* Contact Info */}
            <div className="desktop:w-1/2 phone:w-full flex laptop:items-start gap-20 phone:flex-col laptop:flex-row ">
              <Fade direction="up" cascade duration={500}>
                <ul className="text-white flex flex-col gap-5 ">
                  <CiMail className="text-3xl " />
                  <h1 className="text-white ">Email</h1>

                  <p className="text-white font-thin ">
                    Our friendly team is here to help.
                  </p>
                  <a href="mailto:contact@webcompose.id">
                    contact@webcompose.id
                  </a>
                </ul>
              </Fade>

              <Fade direction="up" cascade duration={500}>
                <ul className=" text-white flex flex-col gap-5 ">
                  <BsTelephone className="text-3xl " />
                  <h1 className="text-white ">Phone</h1>
                  <p className="text-white font-thin ">
                    Mon-Fri from 8am to 5pm.
                  </p>
                  <a href="tel:+6283832736223">+62 838 3273 6223</a>
                </ul>
              </Fade>
            </div>
            {/* End Of Contact Info */}

            {/* Form */}
            <div className="desktop:w-1/2 phone:w-full flex desktop:justify-end ultra:pr-32 ">
              <ContactForm />
            </div>
            {/* End Of Form */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
