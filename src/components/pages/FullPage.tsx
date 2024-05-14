import Benefits from "../molecules/Benefits/Benefits";
import Brands from "../template/Brands/Brands";
import Contacts from "../template/Contacts/Contacts";
import FeaturedCars from "../template/FeaturedCars/FeaturedCars";
import FormSection from "../template/FormSection/FormSection";
import HeaderHero from "../template/HeaderHero/HeaderHero";
import NewestCars from "../template/NewestCars/NewestCars";
import WhatClientsSay from "../template/WhatClientsSay/WhatClientsSay";

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
      <div><WhatClientsSay/></div>
      <div id="brands">
        <Brands/>
      </div>
      <div id="contacts">
        <Contacts/>
      </div>
    </div>
  );
};
