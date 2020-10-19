import React from "react";
import Categorie from "./Categorie";
import Menu from "./Menu";
import data from "./data";

export default function App() {
  const categoriesAll = ["all", ...new Set(data.map((item) => item.category))];

  const [menu, setMenu] = React.useState(data);
  const [categories, setCategories] = React.useState(categoriesAll);

  const filterMenu = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    } else {
      setMenu(data.filter((item) => item.category === category));
    }
  };

  return (
    <div>
      <h1 className="text-center text-4xl text-yellow-800 font-mono my-8">
        Our Menu
      </h1>
      <Categorie categories={categories} filterMenu={filterMenu} />
      <Menu data={menu} />
    </div>
  );
}
