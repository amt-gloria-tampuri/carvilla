import Benefits from "../molecules/Benefits/Benefits"
import FormSection from "../template/FormSection/FormSection"
import HeaderHero from "../template/HeaderHero/HeaderHero"

export const FullPage = () => {
  return (
    <div>
        <div id="home">
            <HeaderHero/>
            <FormSection/>
            <Benefits/>
        </div>
    </div>
  )
}
