import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://demos-iconcreations.com/schlafmiestrback/api/products")
      .then((res) => {
        console.log("res", res.data.message.products);
        setProducts(res.data.message.products);
      });
  });
  return (
    <div>
      {products.map((product) => {
        return <div>{product.title_english}</div>;
      })}
      <div>product1</div>
      <div>product2</div>
    </div>
  );
}
