import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeContent() {
  return (
    <div className="content  mt-3 d-flex">
        <div className="border rounded me-2 col-3">
        <Link to='Books'>  
          <img
            className="rounded"
            src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg"
            alt="books"
            width={"100%"}
            height={"100%"}
          />
          <div className=" text-dark p-3">Books</div>
          </Link> 
        </div>
  
        <div className="border rounded   me-2  col-3">
        <Link to='Games'>  
          <img
            className="rounded"
            src="https://cdn2.unrealengine.com/Unreal+Engine%2Findustry%2Fgames%2FNews_UEWeb_Games_blog_share_img3-1200x630-1fbacc68fcbff51163d2ecf620015252ad841aee.jpg"
            alt="books"
            width={"100%"}
            height={"100%"}
          />
          <div className="text-dark p-3">Games</div>
          </Link> 
        </div>

        <div className="border rounded   me-2  col-3">
        <Link to='Gifts'>  
          <img
            className="rounded"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1tFdDW3YiengEObVdQ82-sC9CDulTAPV4ew&usqp=CAU"
            alt="books"
            width={"100%"}
            height={"100%"}
          />
          <div className="text-dark p-3">Gifts</div>
          </Link> 
        </div>

        <div className="border rounded   me-2  col-3">
        <Link to='Gifts'> 
            <img
            className="rounded"
            src="https://www.structuralguide.com/wp-content/uploads/2022/01/Construction-Materials.jpg"
            alt="books"
            width={"100%"}
            height={"100%"}
            />
            <div className="text-dark p-3">Materials</div>
        </Link> 
      </div>
      </div>
  )
}
