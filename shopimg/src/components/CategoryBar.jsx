import axios from "axios";
import { useEffect, useState } from "react";

const CategoryBar = ({ setFilt }) => {
  const [categorys, setSetCategotys] = useState(["all"]);
  const [selectedindex, setSelectedIndex] = useState(0);
  const postCategory = async () => {
    try {
      const { data } = await axios(
        "https://fakestoreapi.com/products/categories"
      );
      setSetCategotys(["all", ...data]);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = (i) => {
    setSelectedIndex(i);
    if (i !== 0) {
      setFilt(categorys[i]);
    } else {
      setFilt("");
    }
  };
  useEffect(() => {
    postCategory();
  }, []);

  return (
    <div className="categoryBar">
      {categorys.map((btn, i) => (
        <div key={i}>
          <button
            onClick={() => handleClick(i)}
            style={{ color: i === selectedindex ? "red" : "black" }}
          >
            <input
              type="checkbox"
              className="checkBox"
              checked={i === selectedindex ? "checked" : false}
            />
            {btn.toLocaleUpperCase()}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategoryBar;
