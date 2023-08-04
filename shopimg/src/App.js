import AppRouter from "./router/AppRouter";
import { ShopContext } from "./context/ShopContext";
import { useState } from "react";

function App() {
  const [basket, setBasket] = useState([]);
  return (
    <>
      <ShopContext.Provider value={{ basket, setBasket }}>
        <AppRouter />
      </ShopContext.Provider>
    </>
  );
}

export default App;
