import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MissionVission() {
  const [missionVision, setMissionVision] = useState([
    {
      id: 1,
      type: "mission",
      arabic_description:
        "Schlaf Meister mattresses provide exceptionally uplifted sleep solutions tailor made to perfectly suit individual sleep need and to embrace the body for a deep relaxing sleep relieving the daily tiresome of the hectic life and ensuring that utmost wellness is obtained. Schlaf Meister offers great value of unprecedented high-quality Latex, memory foam and high resilience mattresses. We treat every client with the highest dedication and responsibility through credible and reliable after selling services",
      english_description:
        "Schlaf Meister mattresses provide exceptionally uplifted sleep solutions tailor made to perfectly suit individual sleep need and to embrace the body for a deep relaxing sleep relieving the daily tiresome of the hectic life and ensuring that utmost wellness is obtained. Schlaf Meister offers great value of unprecedented high-quality Latex, memory foam and high resilience mattresses. We treat every client with the highest dedication and responsibility through credible and reliable after selling services",
      photo_path: "/assets/mission/missionVision.png",
      icon: "/assets/mission/mission.png",
      created_at: "2022-08-23T11:55:16.000000Z",
      updated_at: "2022-08-23T11:55:16.000000Z",
      deleted_at: null,
    },
    {
      id: 1,
      type: "mission",
      arabic_description:
        "Schlaf Meister mattresses provide exceptionally uplifted sleep solutions tailor made to perfectly suit individual sleep need and to embrace the body for a deep relaxing sleep relieving the daily tiresome of the hectic life and ensuring that utmost wellness is obtained. Schlaf Meister offers great value of unprecedented high-quality Latex, memory foam and high resilience mattresses. We treat every client with the highest dedication and responsibility through credible and reliable after selling services",
      english_description:
        "Schlaf Meister mattresses provide exceptionally uplifted sleep solutions tailor made to perfectly suit individual sleep need and to embrace the body for a deep relaxing sleep relieving the daily tiresome of the hectic life and ensuring that utmost wellness is obtained. Schlaf Meister offers great value of unprecedented high-quality Latex, memory foam and high resilience mattresses. We treat every client with the highest dedication and responsibility through credible and reliable after selling services",
      photo_path: "/assets/mission/missionVision.png",
      icon: "/assets/mission/mission.png",
      created_at: "2022-08-23T11:55:16.000000Z",
      updated_at: "2022-08-23T11:55:16.000000Z",
      deleted_at: null,
    },
  ]);
  useEffect(() => {
    axios
      .get("https://demos-iconcreations.com/schlafmiestrback/api/missionVision")
      .then((res) => {
        console.log("res", res.data.message.mission_vision);
        setMissionVision(res.data.message.mission_vision);
      });
  }, []);
  return (
    <div>
      <div>MissionVission</div>
    </div>
  );
}
