import React, { useState } from "react";
import Button from "../ui/Button";

import heartBlackIcon from "../../assets/icons/heart-black.svg";
import heartRedIcon from "../../assets/icons/heart-red.svg";

interface ProductCardProps {
  productImage: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ productImage }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-[300px] border relative">
      {isFavourite ? (
        <img
          src={heartRedIcon}
          alt=""
          className="h-6 w-6 cursor-pointer absolute right-4 top-4"
          onClick={() => setIsFavourite(false)}
        />
      ) : (
        <img
          src={heartBlackIcon}
          alt=""
          className="h-6 w-6 cursor-pointer absolute right-4 top-4"
          onClick={() => setIsFavourite(true)}
        />
      )}

      <img src={productImage} alt="Product Image" className="w-full mb-4" />
      <div className="flex cont justify-between">
        <h2 className="text-lg font-semibold mb-2">Product Title</h2>
        <p className="text-gray-600 font-medium">
          $19.99 <span className="text-xs text-gray-400">(18% off)</span>
        </p>
      </div>
      <div className="flex items-center mb-2">
        <span className="text-yellow-400 mr-1">⭐</span>
        <span className="text-yellow-400 mr-1">⭐</span>
        <span className="text-yellow-400 mr-1">⭐</span>
        <span className="text-yellow-400 mr-1">⭐</span>
        <span className="text-yellow-400">⭐</span>
      </div>

      <div className="flex content-between">
        <div className="flex items-center mb-2 mr-auto">
          <label className="mr-2">
            Quantity:
          </label>
          <select
            className="border border-gray-300 rounded-md p-1"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <Button>Add to cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
