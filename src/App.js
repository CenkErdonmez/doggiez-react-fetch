import { useState } from "react";
import DogList from "./DogsList";
import Form from "./Form";
import "./styles.css";

export default function App() {
  const [dogImages, setDogImages] = useState([]);

  const fetchDogImages = async (numDogs) => {
    try {
      let url = "https://dog.ceo/api/breeds/image/random/";
      if (numDogs) {
        url += numDogs;
      } else {
        url += "3"; // Default to fetching 3 dog images
      }

      const response = await fetch(url);
      const data = await response.json();
      setDogImages(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      <Form fetchDogImages={fetchDogImages} />
      <DogList dogImages={dogImages} />
    </div>
  );
}
