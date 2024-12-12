import { useState } from "react";

interface AnimalProp {
  Heading: String;
  Animal: String[];
  onSelectedAnimal : (animal:String) => void;
}

function AnimalComponent({ Animal, Heading, onSelectedAnimal }: AnimalProp) {
  const [selectedAnimal, setSelectedAnimal] = useState(Number);

  const handleClick = (index: any, Animal:String) => {
    setSelectedAnimal(index);
    onSelectedAnimal(Animal);
  };

  return (
    <>
      <h1>{Heading}</h1>
      <ul className="list-group">
        {Animal.length !== 0 &&
          Animal.map((Animal, index) => (
            <li
              key={index}
              className={
                selectedAnimal === index
                  ? "list-group-item bg-warning"
                  : "list-group-item"
              }
              onClick={() => {
                handleClick(index, Animal)
              }}
            >
              {Animal}
            </li>
          ))}
      </ul>
    </>
  );
}

export default AnimalComponent;
