import React from "react";

export default function Categorie({ categories, filterMenu }) {
  return (
    <div className="flex flex-wrap justify-between md:w-1/2 mx-auto my-4 w-11/12">
      {categories.map((category, index) => {
        return (
          <div className="md:h-8 md:w-32 h-6 w-24 my-1" key={index}>
            <button
              onClick={() => {
                filterMenu(category);
              }}
              className="h-full w-full border-2 border-yellow-500 rounded text-yellow-900 font-bold font-mono bg-yellow-400 hover:bg-yellow-100"
            >
              {category}
            </button>
          </div>
        );
      })}
    </div>
  );
}
