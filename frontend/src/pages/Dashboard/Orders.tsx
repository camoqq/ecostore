import React from "react";

const Orders: React.FC = () => {
  const dummyFoodImage =
    "https://www.sowfresh.in/cdn/shop/products/coldpressedcoconutoil_1000ML_JAR_Front_1000x1000.jpg?v=1638624667";
    const dummyProductImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEzq5DzZOZjwX04OT32mWbUU9ESAcpPAVbXCRbdh8SOP1zEOzoH0f6Ol_1u4nBLcRoV7w&usqp=CAU';

  return (
    <div className="mx-3 my-4 mr-4 overflow-y-auto h-[calc(100vh-100px)]">
      <table className="table-auto border w-full">
        <thead className="bg-slate-200">
          <tr>
            <th className="py-3 px-3 text-left">Order Id</th>
            <th className="py-3 px-3 text-left">Product</th>
            <th className="py-3 px-3 text-left">Type</th>
            <th className="py-3 px-3 text-left">Price</th>
            <th className="py-3 px-3 text-left">Qty</th>
            <th className="py-3 px-3 text-left">Order Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 px-3 text-left">#1234</td>
            <td className="py-3 px-3 text-left flex items-center">
              <img src={dummyFoodImage} alt="Product Image" className="h-14 border mr-3" />
              Coconut Oil
            </td>
            <td className="py-3 px-3 text-left">Eco Food</td>
            <td className="py-3 px-3 text-left">$300</td>
            <td className="py-3 px-3 text-left font-bold">2</td>
            <td className="py-3 px-3 text-left"> <span className="inline-block bg-green-600 text-white rounded-md px-4 text- py-1">Delivered</span> </td>
          </tr>
          <tr>
            <td className="py-3 px-3 text-left">#1234</td>
            <td className="py-3 px-3 text-left flex items-center">
              <img src={dummyProductImage} alt="Product Image" className="h-14 border mr-3" />
             Bamboo Tooth brush
            </td>
            <td className="py-3 px-3 text-left">Eco Product</td>
            <td className="py-3 px-3 text-left">$300</td>
            <td className="py-3 px-3 text-left font-bold">2</td>
            <td className="py-3 px-3 text-left"> <span className="inline-block bg-blue-600 text-white rounded-md px-4 text- py-1">Pending</span> </td>
          </tr>
          <tr>
            <td className="py-3 px-3 text-left">#1234</td>
            <td className="py-3 px-3 text-left flex items-center">
              <img src={dummyFoodImage} alt="Product Image" className="h-14 border mr-3" />
              Coconut Oil
            </td>
            <td className="py-3 px-3 text-left">Eco Food</td>
            <td className="py-3 px-3 text-left">$300</td>
            <td className="py-3 px-3 text-left font-bold">2</td>
            <td className="py-3 px-3 text-left"> <span className="inline-block bg-green-600 text-white rounded-md px-4 text- py-1">Delivered</span> </td>
          </tr>
          <tr>
            <td className="py-3 px-3 text-left">#1234</td>
            <td className="py-3 px-3 text-left flex items-center">
              <img src={dummyProductImage} alt="Product Image" className="h-14 border mr-3" />
             Bamboo Tooth brush
            </td>
            <td className="py-3 px-3 text-left">Eco Product</td>
            <td className="py-3 px-3 text-left">$300</td>
            <td className="py-3 px-3 text-left font-bold">2</td>
            <td className="py-3 px-3 text-left"> <span className="inline-block bg-red-600 text-white rounded-md px-4 text- py-1">Canceled</span> </td>
          </tr>
          <tr>
            <td className="py-3 px-3 text-left">#1234</td>
            <td className="py-3 px-3 text-left flex items-center">
              <img src={dummyFoodImage} alt="Product Image" className="h-14 border mr-3" />
              Coconut Oil
            </td>
            <td className="py-3 px-3 text-left">Eco Food</td>
            <td className="py-3 px-3 text-left">$300</td>
            <td className="py-3 px-3 text-left font-bold">2</td>
            <td className="py-3 px-3 text-left"> <span className="inline-block bg-green-600 text-white rounded-md px-4 text- py-1">Delivered</span> </td>
          </tr>
          <tr>
            <td className="py-3 px-3 text-left">#1234</td>
            <td className="py-3 px-3 text-left flex items-center">
              <img src={dummyProductImage} alt="Product Image" className="h-14 border mr-3" />
             Bamboo Tooth brush
            </td>
            <td className="py-3 px-3 text-left">Eco Product</td>
            <td className="py-3 px-3 text-left">$300</td>
            <td className="py-3 px-3 text-left font-bold">2</td>
            <td className="py-3 px-3 text-left"> <span className="inline-block bg-blue-600 text-white rounded-md px-4 text- py-1">Pending</span> </td>
          </tr>
          <tr>
            <td className="py-3 px-3 text-left">#1234</td>
            <td className="py-3 px-3 text-left flex items-center">
              <img src={dummyFoodImage} alt="Product Image" className="h-14 border mr-3" />
              Coconut Oil
            </td>
            <td className="py-3 px-3 text-left">Eco Food</td>
            <td className="py-3 px-3 text-left">$300</td>
            <td className="py-3 px-3 text-left font-bold">2</td>
            <td className="py-3 px-3 text-left"> <span className="inline-block bg-green-600 text-white rounded-md px-4 text- py-1">Delivered</span> </td>
          </tr>
          <tr>
            <td className="py-3 px-3 text-left">#1234</td>
            <td className="py-3 px-3 text-left flex items-center">
              <img src={dummyProductImage} alt="Product Image" className="h-14 border mr-3" />
             Bamboo Tooth brush
            </td>
            <td className="py-3 px-3 text-left">Eco Product</td>
            <td className="py-3 px-3 text-left">$300</td>
            <td className="py-3 px-3 text-left font-bold">2</td>
            <td className="py-3 px-3 text-left"> <span className="inline-block bg-red-600 text-white rounded-md px-4 text- py-1">Canceled</span> </td>
          </tr>
          
          
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
