"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CATEGORY_NAMES, ELECTRICAL_CATEGORY } from "@/lib/constants";
import { useStepStore } from "@/store/useStepStore";
import { useDataStore } from "@/store/useDataStore";
import { getStoredBrand } from "@/lib/store-utils";
export const Electrical = () => {
  const brands = ["shiva/jindal", "other brands"];
  const { nextStep, prevStep } = useStepStore();
  const {
    constructionData: { ground_floor_area, no_of_floors, total_build_up_area },
    addAndCalculate,
    all_prices,
  } = useDataStore();
  const [selectedWallMaterial, setSelectedWallMaterial] = useState(() =>
    getStoredBrand(
      CATEGORY_NAMES?.["ELECTRICAL-SLAB-AND-WALL-MATERIAL"],
      all_prices
    )
  );
  const [selectedWiresCables, setSelectedWiresCables] = useState(() =>
    getStoredBrand(
      CATEGORY_NAMES?.["WIRES-AND-CABLES-EWC0100-FLAT"],
      all_prices
    )
  );
  const [selectedSwitches, setSelectedSwitches] = useState(() =>
    getStoredBrand(
      CATEGORY_NAMES?.["SHEET-AND-SWITCHES-EWC0100-FLAT"],
      all_prices
    )
  );

  const calculateSlabWallMaterial = (name, per_sqft_rate) => {
    const amount = per_sqft_rate * total_build_up_area;
    addAndCalculate({
      NAME: CATEGORY_NAMES["ELECTRICAL-SLAB-AND-WALL-MATERIAL"],
      AMOUNT: amount,
      BRAND: name,
    });
    return amount;
  };
  const calculateWiresCables = (name, per_sqft_rate) => {
    const amount = per_sqft_rate * total_build_up_area;
    addAndCalculate({
      NAME: CATEGORY_NAMES["WIRES-AND-CABLES-EWC0100-FLAT"],
      AMOUNT: amount,
      BRAND: name,
    });
    return amount;
  };
  const calculateSheetsSwitches = (name, per_sqft_rate) => {
    const amount = per_sqft_rate * total_build_up_area;
    addAndCalculate({
      NAME: CATEGORY_NAMES["SHEET-AND-SWITCHES-EWC0100-FLAT"],
      AMOUNT: amount,
      BRAND: name,
    });
    return amount;
  };

  const handleSlabWall = (name) => {
    setSelectedWallMaterial(name);
    const selected = ELECTRICAL_CATEGORY.ELECTRICAL_OR_WALL_MATERIAL.find(
      (material) => material.NAME === name
    );
    if (selected) {
      calculateSlabWallMaterial(selected?.NAME, selected?.PER_SQFT_RATE);
    }
  };
  const handleWireCables = (name) => {
    setSelectedWiresCables(name);
    const selected = ELECTRICAL_CATEGORY["WIRES_AND_CABLES_EWC0100-FLAT"].find(
      (material) => material?.NAME === name
    );
    if (selected) {
      calculateWiresCables(selected?.NAME, selected?.PER_SQFT_RATE);
    }
  };
  const handleSheetsSwitches = (name) => {
    setSelectedSwitches(name);
    const selected = ELECTRICAL_CATEGORY[
      "SHEET-AND-SWITCHES_EWC0100-FLAT"
    ].find((material) => material?.NAME === name);
    if (selected) {
      calculateSheetsSwitches(selected?.NAME, selected?.PER_SQFT_RATE);
    }
  };
  return (
    <div className="w-full ">
      <div className="p-6 space-y-6">
        <Card className="bg-main">
          <CardHeader>
            <h3 className="text-lg font-medium mb-4">
              Electrical/Wall Material
            </h3>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={selectedWallMaterial}
              onValueChange={handleSlabWall}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ELECTRICAL_CATEGORY.ELECTRICAL_OR_WALL_MATERIAL.map(
                  (item, index) => (
                    <div
                      key={index}
                      className={`flex flex-col justify-center  items-center min-h-44 space-x-2 bg-white border-2 border-black relative ${
                        selectedWallMaterial === item.NAME
                          ? "border-black shadow-md"
                          : "border-gray-200"
                      }`}
                      onClick={() => handleSlabWall(item?.NAME)}
                    >
                      <img src={item?.IMAGE} />
                      <RadioGroupItem
                        value={item.NAME}
                        id={`wall-${index}`}
                        className="absolute top-3 right-2"
                      />
                      <Label
                        htmlFor={`wall-${index}`}
                        className="cursor-pointer"
                      >
                        {item.NAME} - ₹{item.PER_SQFT_RATE}/sqft
                      </Label>
                    </div>
                  )
                )}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <Card className="bg-main">
          <CardHeader>
            <h3 className="text-lg font-medium mb-4">Wires and Cables</h3>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={selectedWiresCables}
              onValueChange={handleWireCables}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ELECTRICAL_CATEGORY["WIRES_AND_CABLES_EWC0100-FLAT"].map(
                  (item, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-center min-h-44 space-x-2 bg-white border-2 flex-col relative ${
                        selectedWiresCables === item.NAME
                          ? "border-black shadow-md"
                          : "border-gray-200"
                      }`}
                      onClick={() => handleWireCables(item?.NAME)}
                    >
                      <img src={item?.IMAGE} />
                      <RadioGroupItem
                        value={item.NAME}
                        id={`wires-${index}`}
                        className="absolute top-3 right-2"
                      />
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
          </CardContent>
        </Card>

        <Card className="bg-main">
          <CardHeader>
            <h3 className="text-lg font-medium mb-4">Sheets and Switches</h3>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={selectedSwitches}
              onValueChange={handleSheetsSwitches}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ELECTRICAL_CATEGORY["SHEET-AND-SWITCHES_EWC0100-FLAT"].map(
                  (item, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-center min-h-44 space-x-2 bg-white border-2 flex-col relative ${
                        selectedSwitches === item.NAME
                          ? "border-black shadow-md"
                          : "border-gray-200"
                      }`}
                      onClick={() => handleSheetsSwitches(item?.NAME)}
                    >
                      <img src={item?.IMAGE} />
                      <RadioGroupItem
                        value={item.NAME}
                        id={`switches-${index}`}
                        className="absolute top-3 right-2"
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
          </CardContent>
        </Card>
        {/* <button
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
        </button> */}
      </div>
    </div>
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
