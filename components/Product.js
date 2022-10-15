import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const MIN_RATING = 1;
const MAX_RATING = 5;

function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  return (
    <div className="flex flex-col relative m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400 my-3">
        {category}
      </p>

      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4>{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">${price}</div>

      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
}

export default Product;
