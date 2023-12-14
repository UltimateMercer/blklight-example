"use client"
import { useState, useEffect } from "react";
import BlackWhite from "@/components/filters/black-white";
import BlueRedGolden from "@/components/filters/blue-red-golden";
import Burn from "@/components/filters/burn";
import Cyberpunk2023 from "@/components/filters/cyberpunk-2023";
import Cyberpunk2050 from "@/components/filters/cyberpunk-2050";
import Cyberpunk2020 from "@/components/filters/cyberpunk-2020";
import Cyberpunk2066 from "@/components/filters/cyberpunk-2066";
import Cyberpunk2077 from "@/components/filters/cyberpunk-2077";
import DarkRed from "@/components/filters/dark-red";
import Dunastone from "@/components/filters/dunastone";
import IceCream from "@/components/filters/ice-cream";
import IceCreamPlus from "@/components/filters/ice-cream-plus";
import LinearBurn from "@/components/filters/linear-burn";
import NeonLights from "@/components/filters/neon-lights";
import PinkBlue from "@/components/filters/pink-blue";
import PurpleRedOrange from "@/components/filters/purple-red-orange";
// import Tester from "@/components/filters/Tester";

const ColorFilters = () => {
  const [mounted, setMounted] = useState(false);

  const style = {
    display: "block",
    width: "auto !important",
    height: "0 !important",
  };

  useEffect(() => setMounted(true), []);

  return (
    <>
      {mounted && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="!block !w-auto !h-0"
          style={style}
        >
          <BlackWhite />
          <BlueRedGolden />
          <Burn />
          <Cyberpunk2023 />
          <Cyberpunk2066 />
          <Cyberpunk2020 />
          <Cyberpunk2050 />
          <Cyberpunk2077 />
          <DarkRed />
          <Dunastone />
          <IceCream />
          <IceCreamPlus />
          <LinearBurn />
          <NeonLights />
          <PinkBlue />
          <PurpleRedOrange />
          {/* <Tester /> */}
        </svg>
      )}
    </>
  );
};

export default ColorFilters;
