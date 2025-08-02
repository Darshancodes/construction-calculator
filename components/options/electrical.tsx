"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ELECTRICAL_CATEGORY } from "@/lib/constants";
import { useStepStore } from "@/store/useStepStore";
export const Electrical = () => {
  const brands = ["shiva/jindal", "other brands"];
  const [selectedWallMaterial, setSelectedWallMaterial] = useState("");
  const [selectedWiresCables, setSelectedWiresCables] = useState("");
  const [selectedSwitches, setSelectedSwitches] = useState("");
  const { nextStep, prevStep } = useStepStore();

  const calculateSlabWallMaterial = () => {
    const per_sqft_rate = 20;
    const ground_floor_area = 2000;
    const total_build_up_area = 10000;
    const amount = per_sqft_rate * total_build_up_area;
    return amount;
  };
  const calculateWiresCables = () => {
    const per_sqft_rate = 70;
    const ground_floor_area = 2000;
    const total_build_up_area = 10000;
    const amount = per_sqft_rate * total_build_up_area;
    return amount;
  };
  const calculateSheetsSwitches = () => {
    const per_sqft_rate = 12;
    const ground_floor_area = 2000;
    const total_build_up_area = 10000;
    const amount = per_sqft_rate * total_build_up_area;
    return amount;
  };
  return (
    <Card className="w-full">
      <CardHeader className="bg-yellow-50">
        <CardTitle className="text-xl font-semibold text-gray-800">
          Electrical
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Electrical/Wall Material</h3>
          <RadioGroup
            value={selectedWallMaterial}
            onValueChange={setSelectedWallMaterial}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ELECTRICAL_CATEGORY.ELECTRICAL_OR_WALL_MATERIAL.map(
                (item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={item.NAME} id={`wall-${index}`} />
                    <Label htmlFor={`wall-${index}`} className="cursor-pointer">
                      {item.NAME} - ₹{item.PER_SQFT_RATE}/sqft
                    </Label>
                  </div>
                )
              )}
            </div>
          </RadioGroup>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Wires and Cables</h3>
          <RadioGroup
            value={selectedWiresCables}
            onValueChange={setSelectedWiresCables}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ELECTRICAL_CATEGORY["WIRES_AND_CABLES_EWC0100-FLAT"].map(
                (item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={item.NAME} id={`wires-${index}`} />
                    <Label
                      htmlFor={`wires-${index}`}
                      className="cursor-pointer"
                    >
                      {item.NAME} - ₹{item.PER_SQFT_RATE}/sqft
                    </Label>
                  </div>
                )
              )}
            </div>
          </RadioGroup>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Sheets and Switches</h3>
          <RadioGroup
            value={selectedSwitches}
            onValueChange={setSelectedSwitches}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ELECTRICAL_CATEGORY["SHEET-AND-SWITCHES_EWC0100-FLAT"].map(
                (item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={item.NAME}
                      id={`switches-${index}`}
                    />
                    <Label
                      htmlFor={`switches-${index}`}
                      className="cursor-pointer"
                    >
                      {item.NAME} - ₹{item.PER_SQFT_RATE}/sqft
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
  );
};

{
  /* <div>
      <div>
        Electrical slab & wall material -
        {brands?.map((brand) => (
          <h2>{brand}</h2>
        ))}
        {calculateSlabWallMaterial()}
      </div>
      <div>
        Wires & cables (EWC0100)-{" "}
        {brands?.map((brand) => (
          <h2>{brand}</h2>
        ))}
        {calculateWiresCables()}
      </div>
      <div>
        sheet & switches - anchor penta,havells,Schneider/GM
        {calculateSheetsSwitches()}
      </div>
    </div> */
}
