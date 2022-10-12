import React, { useEffect, useState } from "react";
import axios from "axios";
export default function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://demos-iconcreations.com/schlafmiestrback/api/featuredProducts"
      )
      .then((res) => {
        console.log("res featuredProducts", res.data.message.featuredProducts);
        setFeaturedProducts(res.data.message.featuredProducts);
      });
  });
  return (
    <div>
      {featuredProducts.map((featuredProduct) => {
        return <div>{featuredProduct.title_english}</div>;
      })}
      <div>FeaturedProducts</div>
    </div>
  );
}
