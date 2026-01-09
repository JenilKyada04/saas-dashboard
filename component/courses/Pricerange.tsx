"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function Pricerange() {
  const [value, setValue] = React.useState<number[]>([0, 5000]);

  const handleChange = (event: Event, newValue: number[]) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        value={value}
        onChange={handleChange}
        min={0}
        max={5000}
        valueLabelDisplay="auto"
      />

      <div className="flex justify-between text-sm text-gray-500">
        <span>$0</span>
        <span>$5000</span>
      </div>
    </Box>
  );
}
