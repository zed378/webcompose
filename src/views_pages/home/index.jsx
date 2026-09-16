import Hero from "@components/organisms/hero";
import Carousel from "@components/organisms/carousel";
import ServiceHome from "@components/organisms/serviceHome";
import AboutUs from "@components/organisms/aboutUs";
import Porto from "@components/organisms/porto";
import Testimony from "@components/organisms/testimony";
import Footer from "@components/organisms/footer";

function Home() {
  return (
    <div className="overflow-x-hidden bg-white ">
      <Hero />
      <Carousel />
      <ServiceHome />
      <AboutUs />
      <Porto />
      <Testimony />
      <Footer />
    </div>
  );
}

export default Home;
