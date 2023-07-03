import { AnimalType } from "./animals";
import imganimalclass from "../../assets/images/imganimal-class.png";
import imgdiet from "../../assets/images/imgdiet.png";
import imghabitat from "../../assets/images/imghabitat.png";
import Button from "../../components/button";
import { useNavigate } from "react-router";
import Trash from "../../assets/icons/trash";

type AnimalCardProps = {
  animal: AnimalType;
  onDelete: (id: string) => void;
};

const AnimalCard = ({ animal, onDelete }: AnimalCardProps) => {
  const { name, animalClass, diet, species, habitat, id } = animal;
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__header__img__wrapper">
          <img
            className="card__header__img"
            width={"100%"}
            src={`https://source.unsplash.com/random/500x500/?${animal.name.replace(
              " ",
              "-"
            )}`}
            alt="Image of an animal"
          />
        </div>
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
      <div className="card__btn">
        <Trash />
      </div>
      <Button text="Delete" color="red" onClick={() => onDelete(id)} />
      <Button
        text="Edit"
        color="blue"
        onClick={() => navigate(`/animals/${id}`)}
      />
    </div>
  );
};

export default AnimalCard;
