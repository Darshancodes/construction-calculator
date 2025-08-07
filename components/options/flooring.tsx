"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CATEGORY_NAMES, FLOORING_CATEGORY } from "@/lib/constants";
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

  const calculateVetrifiedTile = (name: string, per_sqft_rate: number) => {
    const amount = per_sqft_rate * total_build_up_area;
    addAndCalculate({
      NAME: CATEGORY_NAMES["VETRIFIED-TILES"],
      AMOUNT: amount,
      BRAND: name,
    });
    return amount;
  };
  const calculateCeremicWallTile = (
    name: string,
    per_sqft_rate: number,
    standard_quantity: number
  ) => {
    const total_quantity = total_build_up_area * standard_quantity;
    const amount = per_sqft_rate * total_quantity;
    addAndCalculate({
      NAME: CATEGORY_NAMES["CERAMIC-WALL-TILE-TOILED-AND-KITCHEN"],
      AMOUNT: amount,
      BRAND: name,
    });
    return amount;
  };
  const calculateGranite = (
    name: string,
    per_sqft_rate: number,
    standard_quantity: number
  ) => {
    const total_quantity = total_build_up_area * standard_quantity;
    const amount = per_sqft_rate * total_quantity;
    addAndCalculate({
      NAME: CATEGORY_NAMES[
        "GRANITE-DOOR_FRAME-WINDOW_FRAME-KITCHEN_TOP-STAIRCASE"
      ],
      AMOUNT: amount,
      BRAND: name,
    });
    return amount;
  };
  const calculateRoughStone = (
    name: string,
    per_sqft_rate: number,
    standard_quantity: number
  ) => {
    const total_quantity = total_build_up_area * standard_quantity;
    const amount = per_sqft_rate * total_quantity;
    addAndCalculate({
      NAME: CATEGORY_NAMES["ROUGH-STONE-TERRACE-AND-PARKING-AREA"],
      AMOUNT: amount,
      BRAND: name,
    });
    return amount;
  };
  const handleVetrifiedTile = (name: string) => {
    setSelectedVitrified(name);
    const selected = FLOORING_CATEGORY.VETRIFIED_TILES.find(
      (tile) => tile?.NAME === name
    );
    if (selected) {
      calculateVetrifiedTile(selected?.NAME, selected?.PER_SQFT_RATE);
    }
  };
  const handleCeremicWall = (name: string) => {
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
  const handleRoughStone = (name: string) => {
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
  const handleGranite = (name: string) => {
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
    <>
      {/* Main Content */}
      <div className="space-y-6 bg-main">
        {/* Vitrified Tiles */}
        <FlooringSection
          title="Vitrified tiles"
          image={FLOORING_CATEGORY.VETRIFIED_IMAGE}
          items={FLOORING_CATEGORY.VETRIFIED_TILES}
          selectedValue={selectedVitrified}
          onSelect={handleVetrifiedTile}
        />

        {/* Ceramic Wall Tile */}
        <FlooringSection
          title="Ceramic wall tile"
          image={FLOORING_CATEGORY.CERAMIC_WALL_TILE_IMAGE}
          items={FLOORING_CATEGORY.CERAMIC_WALL_TILE_TOILET_KITCHEN}
          selectedValue={selectedCeramic}
          onSelect={handleCeremicWall}
        />

        {/* Granite */}
        <FlooringSection
          title="Granite"
          image={FLOORING_CATEGORY.GRANITE_DOORFRAME_IMAGE}
          items={
            FLOORING_CATEGORY.GRANITE_DOORFRAME_WINDOWFRAME_KITCHENTOP_STAIRCASE
          }
          selectedValue={selectedGranite}
          onSelect={handleGranite}
        />

        {/* Rough Stone */}
        <FlooringSection
          title="Rough stone"
          image={FLOORING_CATEGORY.ROUGH_STONE_IMAGE}
          items={FLOORING_CATEGORY.ROUGH_STONE_TERRACE_PARKINGAREA}
          selectedValue={selectedRoughStone}
          onSelect={handleRoughStone}
        />
      </div>
    </>
  );
};

const FlooringSection = ({
  title,
  image,
  items,
  selectedValue,
  onSelect,
  bgColor = "bg-yellow-50",
}) => (
  <div className={`${bgColor} rounded-lg p-3 md:p-6`}>
    <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-6">
      {/* Image and Title Section */}
      <div className="flex items-center gap-3 lg:flex-col md:w-56 lg:items-center lg:flex-shrink-0">
        <div className="text-sm font-medium text-gray-700 lg:mb-2 lg:text-center">
          {title}
        </div>
        <img
          src={image}
          alt={title}
          className="w-16 h-16 hidden md:block md:w-20 md:h-20 object-cover rounded flex-shrink-0"
        />
      </div>

      {/* Options Section */}
      <div className="flex-1 w-full">
        <RadioGroup value={selectedValue} onValueChange={onSelect}>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
            {items.map((item, index) => (
              <div key={index} className="relative">
                <div
                  className={`bg-white rounded-lg border-2 p-4 cursor-pointer transition-all hover:shadow-md ${
                    selectedValue === item.NAME
                      ? "border-blue-500 shadow-lg"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => onSelect(item.NAME)}
                >
                  <RadioGroupItem
                    value={item.NAME}
                    id={`${title.toLowerCase()}-${index}`}
                    className="absolute top-3 right-3"
                  />
                  <div className="text-center pr-6">
                    <div className="text-xs text-gray-500 mb-1">Upto</div>
                    <div className="text-lg md:text-xl font-bold text-gray-900">
                      ₹{item.PER_SQFT_RATE}
                    </div>
                    <div className="text-xs text-gray-500">per sqft.</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  </div>
);

// <div className=" p-6 space-y-4 bg-main rounded-lg">
//       {/* Vitrified Tiles */}
//       <div className=" rounded-lg p-4">
//         <div className="flex items-center md:gap-6">
//           <div className="flex-shrink-0">
//             <div className="text-sm font-medium text-gray-700 mb-2">
//               Verified tiles
//             </div>
//             <img
//               src={FLOORING_CATEGORY.VETRIFIED_IMAGE || "/placeholder.svg"}
//               alt="Vitrified tiles"
//               className="w-14 md:w-20 md:h-20 object-cover rounded"
//             />
//           </div>
//           <div className="flex-1">
//             <RadioGroup
//               value={selectedVitrified}
//               onValueChange={handleVetrifiedTile}
//             >
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
//                 {FLOORING_CATEGORY.VETRIFIED_TILES.map((item, index) => (
//                   <div key={index} className="relative ">
//                     <div
//                       className={`bg-white rounded-lg border-2 p-4 cursor-pointer transition-all ${
//                         selectedVitrified === item.NAME
//                           ? "border-black"
//                           : "border-gray-200 hover:border-gray-300"
//                       }`}
//                       onClick={() => handleVetrifiedTile(item.NAME)}
//                     >
//                       <RadioGroupItem
//                         value={item.NAME}
//                         id={`vitrified-${index}`}
//                         className="absolute top-2 right-2"
//                       />
//                       <div className="text-center">
//                         <div className="text-xs text-gray-500 mb-1">Upto</div>
//                         <div className="text-lg font-bold">
//                           ₹{item.PER_SQFT_RATE}
//                         </div>
//                         <div className="text-xs text-gray-500">per sqft.</div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </RadioGroup>
//           </div>
//         </div>
//       </div>

//       {/* Ceramic Wall Tile */}
//       <div className="bg-yellow-50 rounded-lg md:p-4">
//         <div className="flex  items-center gap-2 md:gap-6">
//           <div className="flex-shrink-0">
//             <div className="text-xs sm:text-sm font-medium text-gray-700 mb-2">
//               Ceramic wall tile
//             </div>
//             <img
//               src={
//                 FLOORING_CATEGORY.CERAMIC_WALL_TILE_IMAGE || "/placeholder.svg"
//               }
//               alt="Ceramic wall tile"
//               className="w-14 md:w-20 md:h-20 object-cover rounded"
//             />
//           </div>
//           <div className="flex-1">
//             <RadioGroup
//               value={selectedCeramic}
//               onValueChange={handleCeremicWall}
//             >
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
//                 {FLOORING_CATEGORY.CERAMIC_WALL_TILE_TOILET_KITCHEN.map(
//                   (item, index) => (
//                     <div key={index} className="relative min-w-32">
//                       <div
//                         className={`bg-white rounded-lg border-2 p-4 cursor-pointer transition-all ${
//                           selectedCeramic === item.NAME
//                             ? "border-black"
//                             : "border-gray-200 hover:border-gray-300"
//                         }`}
//                         onClick={() => handleCeremicWall(item.NAME)}
//                       >
//                         <RadioGroupItem
//                           value={item.NAME}
//                           id={`ceramic-${index}`}
//                           className="absolute top-2 right-2"
//                         />
//                         <div className="text-center">
//                           <div className="text-xs text-gray-500 mb-1">Upto</div>
//                           <div className="text-lg font-bold">
//                             ₹{item.PER_SQFT_RATE}
//                           </div>
//                           <div className="text-xs text-gray-500">per sqft.</div>
//                         </div>
//                       </div>
//                     </div>
//                   )
//                 )}
//               </div>
//             </RadioGroup>
//           </div>
//         </div>
//       </div>

//       {/* Granite */}
//       <div className="bg-yellow-50 rounded-lg p-4">
//         <div className="flex items-center md:gap-6">
//           <div className="flex-shrink-0">
//             <div className="text-sm font-medium text-gray-700 mb-2">
//               Granite
//             </div>
//             <img
//               src={
//                 FLOORING_CATEGORY.GRANITE_DOORFRAME_IMAGE || "/placeholder.svg"
//               }
//               alt="Granite"
//               className="w-16 md:w-20 md:h-20 object-cover rounded"
//             />
//           </div>
//           <div className="flex-1">
//             <RadioGroup value={selectedGranite} onValueChange={handleGranite}>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
//                 {FLOORING_CATEGORY.GRANITE_DOORFRAME_WINDOWFRAME_KITCHENTOP_STAIRCASE.map(
//                   (item, index) => (
//                     <div key={index} className="relative min-w-72">
//                       <div
//                         className={`bg-white rounded-lg border-2 p-4 cursor-pointer transition-all ${
//                           selectedGranite === item.NAME
//                             ? "border-black"
//                             : "border-gray-200 hover:border-gray-300"
//                         }`}
//                         onClick={() => handleGranite(item.NAME)}
//                       >
//                         <RadioGroupItem
//                           value={item.NAME}
//                           id={`granite-${index}`}
//                           className="absolute top-2 right-2"
//                         />
//                         <div className="text-center">
//                           <div className="text-xs text-gray-500 mb-1">Upto</div>
//                           <div className="text-lg font-bold">
//                             ₹{item.PER_SQFT_RATE}
//                           </div>
//                           <div className="text-xs text-gray-500">per sqft.</div>
//                         </div>
//                       </div>
//                     </div>
//                   )
//                 )}
//               </div>
//             </RadioGroup>
//           </div>
//         </div>
//       </div>

//       {/* Rough Stone */}
//       <div className="bg-yellow-50 rounded-lg p-4">
//         <div className="flex items-center md:gap-6">
//           <div className="flex-shrink-0">
//             <div className="text-sm font-medium text-gray-700 mb-2">
//               Rough stone
//             </div>
//             <img
//               src={FLOORING_CATEGORY.ROUGH_STONE_IMAGE || "/placeholder.svg"}
//               alt="Rough stone"
//               className="w-14 md:w-20 md:h-20 object-cover rounded"
//             />
//           </div>
//           <div className="flex-1">
//             <RadioGroup
//               value={selectedRoughStone}
//               onValueChange={handleRoughStone}
//             >
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
//                 {FLOORING_CATEGORY.ROUGH_STONE_TERRACE_PARKINGAREA.map(
//                   (item, index) => (
//                     <div key={index} className="relative min-w-72">
//                       <div
//                         className={`bg-white rounded-lg border-2 p-4 cursor-pointer transition-all ${
//                           selectedRoughStone === item.NAME
//                             ? "border-black"
//                             : "border-gray-200 hover:border-gray-300"
//                         }`}
//                         onClick={() => handleRoughStone(item.NAME)}
//                       >
//                         <RadioGroupItem
//                           value={item.NAME}
//                           id={`stone-${index}`}
//                           className="absolute top-2 right-2"
//                         />
//                         <div className="text-center">
//                           <div className="text-xs text-gray-500 mb-1">Upto</div>
//                           <div className="text-lg font-bold">
//                             ₹{item.PER_SQFT_RATE}
//                           </div>
//                           <div className="text-xs text-gray-500">per sqft.</div>
//                         </div>
//                       </div>
//                     </div>
//                   )
//                 )}
//               </div>
//             </RadioGroup>
//           </div>
//         </div>
//       </div>
//     </div>

{
  /* <div>
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
                <div>
                  <img src={FLOORING_CATEGORY.VETRIFIED_IMAGE} />
                </div>
                {FLOORING_CATEGORY.VETRIFIED_TILES.map((item, index) => (
                  <div key={index} className="relative">
                    <RadioGroupItem
                      value={item.NAME}
                      id={`vitrified-${index}`}
                      className="absolute top-1 right-1"
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
            <div>
              <img src={FLOORING_CATEGORY.CERAMIC_WALL_TILE_IMAGE} />
            </div>
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
                        className="absolute top-1 right-1"
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

          <div className="">
            <h3 className="text-lg font-medium mb-4">
              Granite (Door/Window Frame, Kitchen Top, Staircase)
            </h3>
            <RadioGroup value={selectedGranite} onValueChange={handleGranite}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <img src={FLOORING_CATEGORY.GRANITE_DOORFRAME_IMAGE} />
                </div>
                {FLOORING_CATEGORY.GRANITE_DOORFRAME_WINDOWFRAME_KITCHENTOP_STAIRCASE.map(
                  (item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={item.NAME}
                        id={`granite-${index}`}
                        className="absolute top-1 right-1"
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
            <div>
              <img src={FLOORING_CATEGORY.ROUGH_STONE_IMAGE} />
            </div>
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
    </div> */
}
// flooring vetrified tile-{calculateVetrifiedTile()}
// ceramic title-{calculateCeremicWallTile()}
// calculate granite - {calculateGranite()}
// rough stone - {calculateRoughStone()}
