import axios from "axios";
import { useEffect, useState } from "react";

const ProductCard = ({ filt }) => {
  useEffect(() => {
    postProducts();
  }, []);
  const [products, setProducts] = useState([]);

  const postProducts = async () => {
    try {
      const { data } = await axios(`https://fakestoreapi.com/products`);
      setProducts(data);
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(filt);
  return (
    <div className="container">
      {products.map((data) => (
        <div className="Cards">
          <img src={data?.image} alt="" />
          <div className="priceDiv">
            <p>{data.title}</p>
            <p>{data.price}</p>
          </div>
          <div className="basketDiv">
            <p>{data.category}</p> <button>SEPETE EKLE</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
