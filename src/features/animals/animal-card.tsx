import { AnimalType } from "./animals";
import imganimalclass from "../../assets/icons/images/imganimal-class.png";
import imgdiet from "../../assets/icons/images/imgdiet.png";
import imghabitat from "../../assets/icons/images/imghabitat.png";
import Button from "../../components/button";

type AnimalCardProps = {
  animal: AnimalType;
};

const AnimalCard = ({ animal }: AnimalCardProps) => {
  const { name, animalClass, diet, species, habitat, id } = animal;

  return (
    <div className="card">
      <div className="card__header">
        <img
          className="card__header__img"
          width={"100%"}
          src={`https://source.unsplash.com/random/500x500/?${animal.name.replace(
            " ",
            "-"
          )}`}
          alt="Image of an animal"
        />
        <div>
          <div className="card__title">{name}</div>
          <div className="card__subtitle">{species}</div>
        </div>
      </div>
      <div className="card__row">
        <img src={imganimalclass} alt="icon of animal class" />
        <span>{animalClass}</span>
      </div>
      <div className="card__row">
        <img src={imgdiet} alt="icon of animal diet" />
        <span>{diet}</span>
      </div>
      <div className="card__row">
        <img src={imghabitat} alt="icon of animal habitat" />
        <span>{habitat}</span>
      </div>
      <Button text="Delete" color="red" onClick={() => onDelete(id)} />
    </div>
  );
};

export default AnimalCard;
