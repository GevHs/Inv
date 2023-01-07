import React, { useEffect, useState } from "react";
import GameForm from "./GameForm";
import Modal from "../Modal/Modal";
import Content from "../Content/Content";
import Header from "../Header/Header";

export default function Game() {
  const [result, resultPost] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/item/games")
      .then((data) => data.json())
      .then((result) => resultPost(result.items));
  }, []);

  const [value , setValue] = useState('')
  const filteredCountres = result.filter(post => {
    return post.title.toLowerCase().includes(value.toLowerCase())
 })

  return (
    <React.Fragment>
      <Header  setValue={setValue} />
      <GameForm value="Game" />
      <div style={{display: 'flex', flexWrap: 'wrap' , gap: '5px'}} className=" container mt-3">
      {filteredCountres.map( (item, index) =>   <div key={index}>
      <div  style={{width: '320px'}} className="border rounded ">
        <img
          className="rounded"
          src={item.image}
          alt="books"
          width={"100%"}
          height={"300px"}
        />
        <div className="text-dark p-3">
          <h2 >{item.title}</h2>
          <p>
       
            {item.description}
          </p>
          <p >{item.Year}</p>
        </div>
      </div>
    </div>)}    
    </div>
    
    </React.Fragment>
  );
}
