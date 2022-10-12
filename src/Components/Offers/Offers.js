import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Offers() {
  const [offers, setOffers] = useState([{}]);
  useEffect(() => {
    axios
      .get("https://demos-iconcreations.com/schlafmiestrback/api/offer")
      .then((res) => {
        console.log("res offerssssssssssss", res.data.message.offers);
        setOffers(res.data.message.offers);
      });
  });
  return (
    <div>
      <div>Offers</div>
    </div>
  );
}
