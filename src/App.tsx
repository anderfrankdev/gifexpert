import { useState } from "react";
import addCategory from "./events/addCategory";
import { GifGrid } from "./components/GifGrid";
import "./App.css";

function App() {
  const categoryState = useState([]);
  const [categories] = categoryState;

  return (
    <>
      <h1>GifExpertApp</h1>

      <input
        type="text"
        className="input"
        onKeyUp={addCategory(categoryState)}
        placeholder="Type a topic"
      />

      <button onClick={addCategory(categoryState)} className="button">
        Agregar
      </button>

      <GifGrid categories={categories} />
    </>
  );
}

export default App;
