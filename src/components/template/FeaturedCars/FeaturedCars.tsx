import NewestHead from "../../atoms/NewestHead/NewestHead";
import FeaturedCarCard from "../../molecules/FeaturedCarCard/FeaturedCarCard";
import styles from './FeaturedCars.module.css'
const FeaturedCars = () => {
  const data = [
    {
      imagesrc: "/src/assets/fc1.png",
      name: "BMW 6-Series Gran Coupe",
      price: "$89,395",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
      model: "2017",
      mi: "3100",
      hp: "240",
      type: "automatic",
    },
    {
      imagesrc: "/src/assets/fc2.png",
      name: "Chevrolet Camaro WMV20",
      price: "$66,395",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
      model: "2017",
      mi: "3100",
      hp: "240",
      type: "automatic",
    },
    {
      imagesrc: "/src/assets/fc3.png",
      name: "Lamborghini V520",
      price: "$125,250",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
      model: "2017",
      mi: "3100",
      hp: "240",
      type: "automatic",
    },
    {
      imagesrc: "/src/assets/fc3.png",
      name: "Audi A3 Sedan",
      price: "$99,250",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
      model: "2017",
      mi: "3100",
      hp: "240",
      type: "automatic",
    },
    {
      imagesrc: "/src/assets/fc1.png",
      name: "BMW 6-Series Gran Coupe",
      price: "$89,395",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
      model: "2017",
      mi: "3100",
      hp: "240",
      type: "automatic",
    },
    {
      imagesrc: "/src/assets/fc2.png",
      name: "Chevrolet Camaro WMV20",
      price: "$66,395",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
      model: "2017",
      mi: "3100",
      hp: "240",
      type: "automatic",
    },
    {
      imagesrc: "/src/assets/fc3.png",
      name: "Lamborghini V520",
      price: "$125,250",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
      model: "2017",
      mi: "3100",
      hp: "240",
      type: "automatic",
    },
    {
      imagesrc: "/src/assets/fc3.png",
      name: "Audi A3 Sedan",
      price: "$99,250",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
      model: "2017",
      mi: "3100",
      hp: "240",
      type: "automatic",
    },
  ];

  return (
    <div>
      <NewestHead
        paragraph="Checkout the Featured Cars"
        header="Featured Cars"
      />

      <div className={styles.gridContainer}>
        {data.map((car) => (
          <FeaturedCarCard
            imageSource={car.imagesrc}
            name={car.name}
            price={car.price}
            description={car.description}
            model={car.model}
            mi={car.mi}
            hp={car.hp}
            type={car.type}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCars;
