"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CATEGORY_NAMES, DOOR_CATEGORY } from "@/lib/constants";
import { useStepStore } from "@/store/useStepStore";
import { useDataStore } from "@/store/useDataStore";
export const Door = () => {
  const [selectedShutter, setSelectedShutter] = useState<number>();
  const [selectedFrame, setSelectedFrame] = useState("");
  const [selectedMainDoor, setSelectedMainDoor] = useState("");
  const { nextStep, prevStep } = useStepStore();
  const {
    constructionData: { ground_floor_area, no_of_floors, total_build_up_area },
    addAndCalculate,
  } = useDataStore();
  const calculateDoorShutter = (per_sqft_rate) => {
    let name = `${per_sqft_rate}/ft`;
    const amount = total_build_up_area * per_sqft_rate;
    addAndCalculate({
      NAME: CATEGORY_NAMES["DOOR-SHUTTER"],
      AMOUNT: amount,
      BRAND: name,
    });
    return amount;
  };
  const calculateFrameSingleRebate = (name, per_sqft_rate) => {
    const amount = total_build_up_area * per_sqft_rate;
    addAndCalculate({
      NAME: CATEGORY_NAMES["DOOR-FRAME-SINGLE-REBATE-ELS0100"],
      AMOUNT: amount,
      BRAND: name,
    });
    return amount;
  };
  const calculateMainDoor = (name, amount) => {
    const unitDoorPrice = ["15000/door", "20000/door", "30000/door"];

    addAndCalculate({
      NAME: CATEGORY_NAMES["MAIN-DOOR"],
      AMOUNT: amount,
      BRAND: name,
    });
  };
  const handleShutter = (sqft_rate) => {
    setSelectedShutter(sqft_rate);
    const selected = DOOR_CATEGORY.DOOR_SHUTTER.find(
      (shutter) => shutter.PER_SQFT_RATE === sqft_rate
    );
    if (selected) {
      calculateDoorShutter(selected?.PER_SQFT_RATE);
    }
  };
  const handleFrameSingleRebate = (name) => {
    setSelectedFrame(name);
    const selected = DOOR_CATEGORY.DOOR_FRAME_SINGLE_REBATE_ELS0100.find(
      (door) => door.NAME == name
    );
    if (selected) {
      calculateFrameSingleRebate(selected?.NAME, selected?.PER_SQFT_RATE);
    }
  };
  const handleMainDoor = (name) => {
    setSelectedMainDoor(name);
    const selected = DOOR_CATEGORY.MAIN_DOOR.find((door) => door.NAME === name);
    if (selected) {
      calculateMainDoor(selected?.NAME, selected?.PER_RATE_UNIT);
    }
  };
  return (
    <Card className="w-full bg-main">
      <CardHeader className="">
        <CardTitle className="text-xl font-semibold text-gray-800">
          Doors
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Door Shutter</h3>
          <RadioGroup
            value={selectedShutter?.toString()}
            onValueChange={handleShutter}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {DOOR_CATEGORY.DOOR_SHUTTER.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white min-h-44 flex flex-col justify-center items-center relative rounded-lg border-2 p-4 cursor-pointer transition-all ${
                    selectedShutter === item.PER_SQFT_RATE
                      ? "border-black"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handleShutter(item.PER_SQFT_RATE)}
                >
                  <RadioGroupItem
                    value={`option-${index}`}
                    id={`shutter-${index}`}
                    className="absolute top-1 right-1"
                  />
                  <Label
                    htmlFor={`shutter-${index}`}
                    className="cursor-pointer"
                  >
                    ₹{item.PER_SQFT_RATE}/sqft
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">
            Door Frame (Single Rebate)
          </h3>
          <RadioGroup
            value={selectedFrame}
            onValueChange={handleFrameSingleRebate}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {DOOR_CATEGORY.DOOR_FRAME_SINGLE_REBATE_ELS0100.map(
                (item, index) => (
                  <div
                    key={index}
                    className={`bg-white relative flex flex-col justify-center items-center rounded-lg border-2 p-4 cursor-pointer transition-all ${
                      selectedFrame === item.NAME
                        ? "border-black"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => handleFrameSingleRebate(item.NAME)}
                  >
                    <RadioGroupItem
                      value={item.NAME}
                      id={`frame-${index}`}
                      className="absolute top-1 right-1"
                    />
                    <img src={item?.IMAGE} />
                    <Label
                      htmlFor={`frame-${index}`}
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
          <h3 className="text-lg font-medium mb-4">Main Door</h3>
          <RadioGroup value={selectedMainDoor} onValueChange={handleMainDoor}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {DOOR_CATEGORY.MAIN_DOOR.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white relative min-h-44 flex flex-col justify-center items-center rounded-lg border-2 p-4 cursor-pointer transition-all ${
                    selectedMainDoor === item.NAME
                      ? "border-black"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handleMainDoor(item.NAME)}
                >
                  <RadioGroupItem
                    value={item.NAME}
                    id={`main-${index}`}
                    className="absolute top-1 right-1"
                  />

                  <Label htmlFor={`main-${index}`} className="cursor-pointer">
                    {item.NAME}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
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
      </CardContent>
    </Card>
  );
};
