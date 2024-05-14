import Benefits from "../molecules/Benefits/Benefits";
import FeaturedCars from "../template/FeaturedCars/FeaturedCars";
import FormSection from "../template/FormSection/FormSection";
import HeaderHero from "../template/HeaderHero/HeaderHero";
import NewestCars from "../template/NewestCars/NewestCars";

export const FullPage = () => {
  return (
    <div>
      <div id="home">
        <HeaderHero />
        <FormSection />
      </div>
      <div id="service">
        <Benefits />
      </div>
      <div id="new">
        <NewestCars />
      </div>
      <div id="featured">
      <FeaturedCars/>
      </div>
    </div>
  );
};
