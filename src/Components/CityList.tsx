import React, { useEffect, useState } from 'react'



const CityList = ({category} : { category: string}) => {

    const [cities, setCities] = useState<string []>([]);

    useEffect(()=>{
        console.log("Fetching cities in ", category);
        setCities(["Colombo", "Kandy", "Jaffna"]);
    }, [category]);

  return (
    <div>
      City List
    </div>
  )
}

export default CityList
