import React from "react";
import { useNavigate } from "react-router-dom";

const ProductTile = ({ singleProductTile }) => {
  const navigate = useNavigate();
  function handleNavigateToDetails(getcurrentProductID) {
    console.log(getcurrentProductID);
    navigate(`/product-details/${getcurrentProductID}`);
  }
  return (
    <div className="bg-[#0EB29A] p-6 rounded-lg border border-e-teal-700 flex flex-col justify-between h-full">
      <div>
        <img
          className="w-full h-full transform transition duration-300 hover:scale-125"
          src={singleProductTile?.thumbnail}
          alt={singleProductTile?.title}
        />
      </div>
      <h3 className="overflow-hidden flex justify-between text-[#AC1754] text-2xl font-bold title-font">
        {singleProductTile?.title}{" "}
        <span className="text-[#F6F8D5]">${singleProductTile?.price}</span>
      </h3>

      <div className="mt-6 ">
        <button
          onClick={() => handleNavigateToDetails(singleProductTile?.id)}
          type="button"
          className="w-full text-white bg-gradient-to-r cursor-pointer from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductTile;
