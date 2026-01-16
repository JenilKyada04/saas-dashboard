"use client";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useQueryState } from "nuqs";

export default function Pricerange() {
  const [price, setPrice] = useQueryState("price", {
    defaultValue: "0-5000",
  });

  const [min, max] = price.split("-").map(Number);

  const handleChange = (_: Event, newValue: number[]) => {
    setPrice(`${newValue[0]}-${newValue[1]}`);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        value={[min, max]}
        onChange={handleChange}
        min={0}
        max={5000}
        valueLabelDisplay="auto"
      />

      <div className="flex justify-between text-sm text-gray-500">
        <span>${min}</span>
        <span>${max}</span>
      </div>
    </Box>
  );
}
