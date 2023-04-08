import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import ProductDetails from "../components/ProductDetails";
const Product = ({ product }) => {
  const { id, image, category, title, price } = product;
  const { addToCart } = useContext(CartContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handlePopupClose = () => {
    setSelectedProduct(null);
  };

  return (
    
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* img */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] transition duration-300 group-hover:scale-110"
              src={image}
              alt=""
            />
          </div>
        </div>

        <div className="absolute top-6 -right-11 group-hover:right-5 bg-red-700/40 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(product, id)}>
            <div>
              <BsPlus className="text-3xl text-white flex justify-center items-center w-12 h-12 bg-red-500" />
            </div>
          </button>
          <button
            onClick={() => handleProductClick(product)}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl openModalBtn"
          >
            <BsEyeFill />
          </button>
        </div>
      </div>
      {/* {category} */}
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">$ {price}</div>
      </div>
      {selectedProduct && (
        <ProductDetails product={selectedProduct} onClose={handlePopupClose} />
      )}
    </div>
  );
};

export default Product;
