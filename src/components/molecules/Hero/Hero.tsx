import Button from '../../atoms/Button/Button'
import sytles from './Hero.module.css'
const Hero = () => {
  return (
<div className={sytles.hero} >
        <h2>GET YOUR DESIRED CAR IN RESONABLE PRICE</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
       <Button>Contact us</Button>
    </div>
  )
}

export default Hero