import { useState } from "react";
import Container from "../../components/container";
import Devider from "../../components/devider";
import Field from "../../components/field";
import { AnimalType } from "./animals";

const initialData: AnimalType = {
  name: "",
  species: "",
  animalClass: "",
  diet: "",
  habitat: "",
};

const AnimalCreate = () => {
  const [inputsValue, setINputsValue] = useState<AnimalType>(initialData);
  return (
    <Container>
      <h1>Create a new animal</h1>
      <Devider />
      <div>
        <Field
          id="name"
          value=""
          label="name of an animal"
          onChange={() => {}}
        />
      </div>
    </Container>
  );
};

export default AnimalCreate;
