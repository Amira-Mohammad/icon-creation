import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Messages() {
  const [presidentMessage, setPresidentMessage] = useState({
    id: 1,
    english_description: "",
    arabic_description: "",
    image: "",
    created_at: "",
    updated_at: "",
    deleted_at: null,
  });
  useEffect(() => {
    axios
      .get(
        "https://demos-iconcreations.com/schlafmiestrback/api/presidentMessage"
      )
      .then((res) => {
        console.log(
          "res presidentMessage",
          res.data.message.president_message[0]
        );
        setPresidentMessage(res.data.message.president_message[0]);
      });
  });

  return (
    <div>
      <div>{presidentMessage.arabic_description}</div>
    </div>
  );
}
