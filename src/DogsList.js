import React from "react";
import DogImage from "./DogImage";

export default function DogList({ dogImages }) {
  return (
    <div className="shopping-cart">
      <h3 style={{ textAlign: "center" }}>Cute Dogs 🐶</h3>
      {dogImages.map((dogImage, index) => (
        <DogImage key={index} imageUrl={dogImage} />
      ))}
    </div>
  );
}
