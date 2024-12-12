import { useState } from "react";

function ListGroup() {
  const cities: string[] = [
    "Colombo",
    "Kandy",
    "Galle",
    "Jaffna",
    "Nuwara Eliya",
  ];

  const [selectedCity, setSelectedCity] = useState(Number);

  const handleClick = (index : any) => {
    setSelectedCity(index);

  }

  return (
    <>
      <ul className="list-group">

        {cities.length !== 0 && cities.map((city, index)=>(
          <li key={index} className={selectedCity === index?'list-group-item active':'list-group-item'} onClick={()=>{handleClick(index)}}>{city}</li>
        ))}

        {/* <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </>
  );
}

export default ListGroup;