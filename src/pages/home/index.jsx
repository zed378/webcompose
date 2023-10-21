import Hero from "@components/organisms/hero";
import Carousel from "@components/organisms/carousel";
import ServiceHome from "@components/organisms/serviceHome";
import Footer from "@components/organisms/footer";

function Home() {
  return (
    <div className="overflow-x-hidden bg-white ">
      <Hero />
      <Carousel />
      <ServiceHome />
      <Footer />
    </div>
  );
}

export default Home;
