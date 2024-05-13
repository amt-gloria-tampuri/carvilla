import Benefits from "../molecules/Benefits/Benefits"
import FormSection from "../template/FormSection/FormSection"
import HeaderHero from "../template/HeaderHero/HeaderHero"
import NewestCars from "../template/NewestCars/NewestCars"

export const FullPage = () => {
  return (
    <div>
        <div id="home">
            <HeaderHero/>
            <FormSection/>
            <Benefits/>
            <NewestCars/>
        </div>
    </div>
  )
}
