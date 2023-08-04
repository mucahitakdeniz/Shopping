import axios from "axios";
import { useContext, useEffect, useState } from "react";
import baskeAdd from "../assets/basket-add.png";
import { ShopContext } from "../context/ShopContext";

const ProductCard = ({ filt }) => {
  const { setBasket } = useContext(ShopContext);

  useEffect(() => {
    postProducts();
  }, [filt]);
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
      {products
        .filter((e) => (filt ? e.category === filt : e))
        .map((data) => (
          <div className="Cards">
            <img src={data?.image} alt="" />
            <div className="info">
              <div className="priceDiv">
                <div className="title">{data.title}</div>
                <div>{data.price} $</div>
              </div>
              <div className="basketDiv">
                <div>{data.category}</div>
                <button>
                  <img className="basketAdd" src={baskeAdd} alt="" />
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductCard;
