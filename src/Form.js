import React, { useState } from "react";

export default function Form({ fetchDogImages }) {
  const [numDogs, setNumDogs] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchDogImages(numDogs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Number of cute dogs is infinite!</h3>
      <div className="mb-3">
        <label>Insert number of cute dogs</label>
        <input
          type="text"
          className="form-control"
          value={numDogs}
          onChange={(e) => setNumDogs(e.target.value)}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          WOOF!
        </button>
      </div>
    </form>
  );
}
