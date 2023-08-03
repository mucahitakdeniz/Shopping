import axios from "axios";
import { useEffect, useState } from "react";

const CategoryBar = () => {
  const [categorys, setSetCategotys] = useState(["all"]);
  const [selectedindex, setSelectedIndex] = useState("");
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
  const handleClick = (i) => {
    console.log(categorys[i]);
    setSelectedIndex(i)
  };
  useEffect(() => {
    postCategory();
    console.log(categorys);
  }, []);

  return (
    <div className="categoryBar">
      {categorys.map((btn, i) => (
        <button
          key={i}
          onClick={() => handleClick(i)}
          style={{  color: i === selectedindex ? "red" : "black" }}
        >
          {btn.toLocaleUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
