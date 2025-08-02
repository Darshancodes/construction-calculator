"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { FLOORING_CATEGORY } from "@/lib/constants";
import { useStepStore } from "@/store/useStepStore";
import { useDataStore } from "@/store/useDataStore";
export const Flooring = () => {
  const [selectedVitrified, setSelectedVitrified] = useState("");
  const [selectedCeramic, setSelectedCeramic] = useState("");
  const [selectedGranite, setSelectedGranite] = useState("");
  const [selectedRoughStone, setSelectedRoughStone] = useState("");
  const { nextStep, prevStep } = useStepStore();
  const {
    constructionData: { ground_floor_area, no_of_floors, total_build_up_area },
    addAndCalculate,
  } = useDataStore();

  const calculateVetrifiedTile = (name, per_sqft_rate) => {
    // const per_sqft_rate = 50;
    // const total_build_up_area = 10000;
    const amount = per_sqft_rate * total_build_up_area;
    addAndCalculate({ NAME: "FLOORING", AMOUNT: amount, BRAND: name });
    return amount;
  };
  const calculateCeremicWallTile = (name, per_sqft_rate, standard_quantity) => {
    // const per_sqft_rate = 50;
    // const total_build_up_area = 10000;
    // const standard_quantity = 0.4;
    const total_quantity = total_build_up_area * standard_quantity;
    const amount = per_sqft_rate * total_quantity;
    addAndCalculate({ NAME: "FLOORING", AMOUNT: amount, BRAND: name });
    return amount;
  };
  const calculateGranite = (name, per_sqft_rate, standard_quantity) => {
    // const per_sqft_rate = 75;
    // const total_build_up_area = 10000;
    // const standard_quantity = 0.2;
    const total_quantity = total_build_up_area * standard_quantity;
    const amount = per_sqft_rate * total_quantity;
    addAndCalculate({ NAME: "FLOORING", AMOUNT: amount, BRAND: name });
    return amount;
  };
  const calculateRoughStone = (name, per_sqft_rate, standard_quantity) => {
    // const per_sqft_rate = 40;
    // const total_build_up_area = 10000;
    // const standard_quantity = 1.25;
    const total_quantity = total_build_up_area * standard_quantity;
    const amount = per_sqft_rate * total_quantity;
    addAndCalculate({ NAME: "FLOORING", AMOUNT: amount, BRAND: name });
    return amount;
  };
  const handleVetrifiedTile = (name) => {
    setSelectedVitrified(name);
    const selected = FLOORING_CATEGORY.VETRIFIED_TILES.find(
      (tile) => tile?.NAME === name
    );
    if (selected) {
      calculateVetrifiedTile(selected?.NAME, selected?.PER_SQFT_RATE);
    }
  };
  const handleCeremicWall = (name) => {
    setSelectedCeramic(name);
    const selected = FLOORING_CATEGORY.CERAMIC_WALL_TILE_TOILET_KITCHEN.find(
      (tile) => tile.NAME === name
    );
    if (selected) {
      calculateCeremicWallTile(
        selected?.NAME,
        selected?.PER_SQFT_RATE,
        selected?.STANDARD_QUANTITY
      );
    }
  };
  const handleRoughStone = (name) => {
    setSelectedRoughStone(name);
    const selected = FLOORING_CATEGORY.ROUGH_STONE_TERRACE_PARKINGAREA.find(
      (tile) => tile.NAME === name
    );
    if (selected) {
      calculateRoughStone(
        selected?.NAME,
        selected?.PER_SQFT_RATE,
        selected?.STANDARD_QUANTITY
      );
    }
  };
  const handleGranite = (name) => {
    setSelectedGranite(name);
    const selected =
      FLOORING_CATEGORY.GRANITE_DOORFRAME_WINDOWFRAME_KITCHENTOP_STAIRCASE.find(
        (tile) => tile.NAME === name
      );
    if (selected) {
      calculateGranite(
        selected?.NAME,
        selected?.PER_SQFT_RATE,
        selected?.STANDARD_QUANTITY
      );
    }
  };
  return (
    <div>
      <Card className="w-full">
        <CardHeader className="bg-yellow-50">
          <CardTitle className="text-xl font-semibold text-gray-800">
            Flooring
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Vitrified Tiles</h3>
            <RadioGroup
              value={selectedVitrified}
              onValueChange={handleVetrifiedTile}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {FLOORING_CATEGORY.VETRIFIED_TILES.map((item, index) => (
                  <div key={index} className="relative">
                    <RadioGroupItem
                      value={item.NAME}
                      id={`vitrified-${index}`}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={`vitrified-${index}`}
                      className="flex flex-col items-center justify-center p-4 bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 peer-checked:border-blue-500 peer-checked:bg-blue-50"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-400 rounded mb-3"></div>
                      <span className="text-sm font-medium">{item.NAME}</span>
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">
              Ceramic Wall Tiles (Toilet/Kitchen)
            </h3>
            <RadioGroup
              value={selectedCeramic}
              onValueChange={handleCeremicWall}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {FLOORING_CATEGORY.CERAMIC_WALL_TILE_TOILET_KITCHEN.map(
                  (item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={item.NAME}
                        id={`ceramic-${index}`}
                      />
                      <Label
                        htmlFor={`ceramic-${index}`}
                        className="cursor-pointer"
                      >
                        {item.NAME}
                      </Label>
                    </div>
                  )
                )}
              </div>
            </RadioGroup>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">
              Granite (Door/Window Frame, Kitchen Top, Staircase)
            </h3>
            <RadioGroup value={selectedGranite} onValueChange={handleGranite}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {FLOORING_CATEGORY.GRANITE_DOORFRAME_WINDOWFRAME_KITCHENTOP_STAIRCASE.map(
                  (item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={item.NAME}
                        id={`granite-${index}`}
                      />
                      <Label
                        htmlFor={`granite-${index}`}
                        className="cursor-pointer"
                      >
                        {item.NAME}
                      </Label>
                    </div>
                  )
                )}
              </div>
            </RadioGroup>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">
              Rough Stone (Terrace/Parking Area)
            </h3>
            <RadioGroup
              value={selectedRoughStone}
              onValueChange={handleRoughStone}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {FLOORING_CATEGORY.ROUGH_STONE_TERRACE_PARKINGAREA.map(
                  (item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={item.NAME} id={`stone-${index}`} />
                      <Label
                        htmlFor={`stone-${index}`}
                        className="cursor-pointer"
                      >
                        {item.NAME}
                      </Label>
                    </div>
                  )
                )}
              </div>
            </RadioGroup>
          </div>
          <button
            className="mt-6 w-44 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
            onClick={nextStep}
          >
            nextStep
          </button>
          <button
            className="w-44 mt-6  bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
            onClick={prevStep}
          >
            prevStep
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

// flooring vetrified tile-{calculateVetrifiedTile()}
// ceramic title-{calculateCeremicWallTile()}
// calculate granite - {calculateGranite()}
// rough stone - {calculateRoughStone()}
