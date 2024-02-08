import React from "react";
import filterIcon from "../../../assets/icons/filter.svg";

const FilterProducts: React.FC = () => {
  // Add your component logic here

  return (
    <div className="relative">
      <div className="absolute inset-y-0 right-0 flex items-center">
        <label className="flex items-center gap-1">
          <img src={filterIcon} alt=""  className="h-6 w-6"/>
          Filter
        </label>
        <select
          className="ml-8 h-full rounded-md border bg-transparent py-0 pl-2 pr-7 text-gray-500 cursor-pointer sm:text-sm"
        >
          <option>Type</option>
          <option>Product</option>
          <option>Availability</option>
        </select>
      </div>
    </div>
  );
};

export default FilterProducts;
