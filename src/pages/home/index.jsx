import Hero from "@components/organisms/hero";
import Carousel from "@components/organisms/carousel";

function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Carousel />
    </div>
  );
}

export default Home;
