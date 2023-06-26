import { AnimalType } from "./animals";
import imgHabitat from "../../assets/icons/images/imghabitat.png";
import imgDiet from "../../assets/icons/images/imgdiet.png";
import imgAnimalClass from "../../assets/icons/images/imganimal-class.png";

type AnimalCardProps = {
  animal: AnimalType;
};

const AnimalCard = ({ animal }: AnimalCardProps) => {
  const { name, animalClass, diet, species, habitat } = animal;
  return (
    <div className="card">
      <img
        className="card__header__img"
        width={"100%"}
        src={`https://source.unsplash.com/random/500x500/?${animal.name.replace(
          " ",
          "-"
        )}`}
        alt="animal"
      />
      <div>
        <div className="card__title">{name}</div>
        <div className="card__subtitle">{species}</div>
      </div>
      <div className="card__row">
        <img src={imgAnimalClass} alt="" />
        <span>{animalClass}</span>
      </div>
      <div className="card__row">
        <img src={imgDiet} alt="" />
        <span>{diet}</span>
      </div>
      <div className="card__row">
        <img src={imgHabitat} alt="habitat" />
        <span>{habitat}</span>
      </div>
    </div>
  );
};

export default AnimalCard;
