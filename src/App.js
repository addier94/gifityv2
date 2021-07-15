import { useState } from "react";
import { GifGrid } from "./components/gifgrid/GifGrid";
import { Navbar } from "./components/navbar/Navbar";
import "./index.css";

function App() {
  const [categories, setCategories] = useState(["goku"]);

  return (
    <>
      <Navbar setCategories={setCategories} />
      <div className="mt-20 px-4 xl:mx-auto max-w-screen-xl">
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </>
  );
}

export default App;
