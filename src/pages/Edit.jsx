import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const Edit = () => {
  const [restaurant, setRestaurant] = useState({
    title: "",
    type: "",
    img: "",
  });
  useEffect(() =>{
    fetch("http://localhost:5000/restaurants/"+id)
    .then((res)=>{
        return res.json();
    })
    .then((response) => {
        setRestaurant(response);
    })
    .catch((err) =>{
        console.log(err.message);
    });
  },[id])
  const handleChange =(e)=>{
   const {name, value} =e.target;
   setRestaurant({ ...restaurant,[name]:value}); 
  }
  const handSubmit =async () =>{
    try{
        //TODO
        if (response.ok) {
            //TODO
        }
    } catch (error){
        console.log(error);
    }
  }

  return <div>Edit</div>;
};

export default Edit