import { useState } from "react"
import CategoryBar from "../components/CategoryBar"
import ProductCard from "../components/ProductCard"

const Home = () => {
  const [filt, setFilt] = useState("all")
  return (
    <div>
      <CategoryBar setFilt={setFilt} />
      <ProductCard filt={filt} />
    </div>
  )
}

export default Home