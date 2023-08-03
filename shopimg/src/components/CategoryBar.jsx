import axios from "axios";
import { useEffect, useState } from "react";

const CategoryBar = () => {
  const [categorys, setSetCategotys] = useState(["all"]);
  const postCategory = async () => {
    try {
      const { data } = await axios(
        "https://fakestoreapi.com/products/categories"
      );
      setSetCategotys([...categorys, ...data]);
      console.log(categorys);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    postCategory();
    console.log(categorys);
  }, []);

  return (
    <div className="categoryBar">
      {categorys.map((btn) => (
        <button>{btn.toLocaleUpperCase()}</button>
      ))}
    </div>
  );
};

export default CategoryBar;
