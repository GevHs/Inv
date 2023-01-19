import React, { useEffect, useState } from "react";
import Form from "../Form/Form";
import Content from "../Content/Content";
import BooksForm from "./BooksForm";
import Header from "../Header/Header";
export default function Book() {
  const [posts , setPosts] = useState([])

  useEffect(() => {
    fetch("http://localhost:4444/posts")
    .then(response =>response.json())
    .then(result => setPosts(result))
  },[]);



  console.log(posts)



 const [value , setValue] = useState('')
 
 const filteredCountres = posts.filter(post => {
     return post.title.toLowerCase().includes(value.toLowerCase())
  })


  return (
    <React.Fragment>
    <Header setValue={setValue}/>
    <div>
      <BooksForm value="Books" />
    <div style={{display: 'flex', flexWrap: 'wrap' , gap: '5px'}} className=" container mt-3">
      {filteredCountres.map( (item, index) =>   <div key={index}>
      <div  style={{width: '320px' ,}} className="border rounded ">
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
          <p>{item.Year}</p>
        </div>
      </div>
    </div>)}    
    </div>
    </div>
    </React.Fragment>
  );
}
