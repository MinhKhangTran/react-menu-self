import React from "react";

export default function Menu({ data }) {
  return (
    <article className="lg:grid lg:grid-cols-2 gap-x-6 gap-y-4 md:w-11/12 mx-auto">
      {data.map((menuItem) => {
        const { id, title, price, img, desc } = menuItem;
        return (
          <div className="lg:grid lg:grid-cols-2 md:gap-x-8" key={id}>
            <div className="h-48 w-64 mx-auto md:mx-0">
              <img
                className="h-full w-full object-cover rounded-lg border-yellow-400 border-4"
                src={img}
                alt={title}
              />
            </div>
            <div className="md:px-2 px-12 pt-2 pb-4">
              <div className="flex justify-between">
                <h1 className="text-yellow-600 font-mono font-bold capitalize">
                  {title}
                </h1>
                <p className="text-yellow-600 font-mono font-bold">{price} €</p>
              </div>
              <div className="">
                <p className="leading-7">{desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </article>
  );
}
