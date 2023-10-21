import Hero from "@components/organisms/hero";
import Carousel from "@components/organisms/carousel";
import ServiceHome from "@components/organisms/serviceHome";
import AboutUs from "@components/organisms/aboutUs";
import Porto from "@components/organisms/porto";
import Footer from "@components/organisms/footer";

function Home() {
  return (
    <div className="overflow-x-hidden bg-white ">
      <Hero />
      <Carousel />
      <ServiceHome />
      <AboutUs />
      <Porto />
      <Footer />
    </div>
  );
}

export default Home;
