import React ,{useEffect , useState} from "react";
import GiftsForm from "./GiftsForm";
import Content from "../Content/Content";
import Header from "../Header/Header";

export default function Gift() {
  const [result, resultPost] = useState([]);

  console.log(result);

  useEffect(() => {
    fetch("http://localhost:5000/item/gifts")
      .then((data) => data.json())
      .then((result) => resultPost(result.items));
  }, []);

  return (
    <React.Fragment>
    <Header />

      <GiftsForm value="Gifts" />
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}
        className=" container mt-3"
      >
        {result.map((item, index) => (
          <div key={index}>
            <div style={{ width: "320px" }} className="border rounded ">
              <img
                className="rounded"
                src={item.image}
                alt="books"
                width={"100%"}
                height={"300px"}
              />
              <div className="text-dark p-3">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>{item.Year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
