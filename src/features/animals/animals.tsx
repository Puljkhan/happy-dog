import { useEffect, useState } from "react";
import Container from "../../components/container";
import AnimalCard from "./animal-card";
import Devider from "../../components/devider";

export type AnimalType = {
  animalClass: string;
  diet: string;
  habitat: string;
  name: string;
  species: string;
};

const rpp = 8;

const Animals = () => {
  const [animals, setAnimals] = useState<AnimalType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  const getAnimals = () => {
    fetch(`http://localhost:3000/animals?_page=${page}&_limit=${rpp}`)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {});
        console.log(data);
        setAnimals(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <Container>
      <h1>Animals</h1>
      <Devider />
      <div className="grid grid--primary">
        {animals.map((animal) => {
          return <AnimalCard animal={animal} />;
        })}
      </div>
    </Container>
  );
};

export default Animals;
