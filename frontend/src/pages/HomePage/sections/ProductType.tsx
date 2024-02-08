import React from "react";
import Button from "../../../components/ui/Button";
import ProductCard from "../../../components/cards/ProductCard";


interface ProductTypeProps {
  name: string;
  description: string;
  productType: string;
}

const ProductType: React.FC<ProductTypeProps> = ({
  name,
  description,
  productType,
}) => {
  const dummyFoodImage = 'https://www.sowfresh.in/cdn/shop/products/coldpressedcoconutoil_1000ML_JAR_Front_1000x1000.jpg?v=1638624667';
  const dummyProductImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEzq5DzZOZjwX04OT32mWbUU9ESAcpPAVbXCRbdh8SOP1zEOzoH0f6Ol_1u4nBLcRoV7w&usqp=CAU';
  return (
    <>
      <div className="md:flex md:justify-between px-5">
        <div>
          <h2 className="font-medium text-xl">{name}</h2>
          <p>{description}</p>
        </div>
        <Button buttonType="primary">View All</Button>
      </div>
      <div className="flex p-5 flex-wrap gap-6">
        {productType === "Eco Food" ? <ProductCard productImage={dummyFoodImage} /> : <ProductCard productImage={dummyProductImage} />}
        {productType === "Eco Food" ? <ProductCard productImage={dummyFoodImage} /> : <ProductCard productImage={dummyProductImage} />}
        {productType === "Eco Food" ? <ProductCard productImage={dummyFoodImage} /> : <ProductCard productImage={dummyProductImage} />}
        {productType === "Eco Food" ? <ProductCard productImage={dummyFoodImage} /> : <ProductCard productImage={dummyProductImage} />}
      </div>
    </>
  );
};

export default ProductType;
