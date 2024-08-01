import React from "react";

const Box = ({id, img, title, type }) => {
  const handleDelete = async (id) =>{
    try {
      const response = await fetch("http://localhost:5000/restaurants/" + id, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Restaurant delete successfully!");
      window.location.reload()
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="card card-compact w-72 bg-base-100 shadow-xl h-96" id="card">
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{type}</p>
        <div className="card-actions justify-end">
          <a href={`/edit${id}`} className="btn btn-outline btn-warning">Edit</a>
          <button className="btn btn-outline btn-error" onClick={()=>handleDelete(id)}>Delete</button>
        </div>
      </div>
      
    </div>
  );
};

export default Box;