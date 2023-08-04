import { useContext, useEffect } from "react";
import EmptyBasketTotal from "../components/EmptyBasketTotal";
import FiiledBasketTotal from "../components/FiiledBasketTotal";
import { ShopContext } from "../context/ShopContext";

const Basket = () => {
  const { basket} = useContext(ShopContext);
  useEffect(() => {
    
  }, [basket])
  
  return <>{basket.lenght ? <FiiledBasketTotal /> : <EmptyBasketTotal />}</>;
};

export default Basket;
