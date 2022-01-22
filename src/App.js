import React, { useState, useEffect } from "react";
import { getHero } from "./utils/api";

export default function App() {
  const [heroName, setHeroName] = useState("");
  const { name } = getHero("albedo");
  useEffect(() => {
    setHeroName(name);
  }, [name]);
  return <div>{heroName}</div>;
}
