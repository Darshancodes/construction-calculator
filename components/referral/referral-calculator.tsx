"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ReferralCalculator = () => {
  const [serviceModel, setServiceModel] = useState("fully-furnished");
  const [groundFloorArea, setGroundFloorArea] = useState(2000);
  const [numFloors, setNumFloors] = useState(1);
  const [referralCount, setReferralCount] = useState(5);

  // Calculate total sq ft from ground floor area and number of floors
  const totalSqFt = groundFloorArea * numFloors;

  const serviceModels = {
    "fully-furnished": { price: 299, label: "Fully furnished" },
    "semi-furnished": { price: 249, label: "Semi furnished" },
    "upto-civil": { price: 149, label: "Upto civil work" },
  };

  const basePrice = serviceModels[serviceModel].price;
  const earningPerSqFt = basePrice * 0.1; // 10% of base price
  const totalEarningFromProject = earningPerSqFt * totalSqFt;
  const totalPotentialEarning = totalEarningFromProject * referralCount;

  // Log values whenever they change
  useEffect(() => {
    console.log("=== Referral Calculator Values ===");
    console.log("Service Model:", serviceModel);
    console.log("Base Price: ₹" + basePrice);
    console.log("Earning per sq.ft: ₹" + earningPerSqFt.toFixed(2));
    console.log("Ground Floor Area:", groundFloorArea, "sq.ft");
    console.log("Number of Floors:", numFloors);
    console.log("Total Sq. Ft:", totalSqFt, "sq.ft");
    console.log("Referral Count:", referralCount);
    console.log(
      "Total Earning from Project: ₹" +
        Math.round(totalEarningFromProject).toLocaleString()
    );
    console.log(
      "Total Potential Earning: ₹" +
        Math.round(totalPotentialEarning).toLocaleString()
    );
    console.log("==================================");
  }, [
    serviceModel,
    groundFloorArea,
    numFloors,
    referralCount,
    basePrice,
    earningPerSqFt,
    totalSqFt,
    totalEarningFromProject,
    totalPotentialEarning,
  ]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Your Earnings Potential
        </h2>
        <div className="mb-10">
          <p className="text-sm text-gray-600 mb-4">Choose a service model:</p>
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(serviceModels).map(([key, { price, label }]) => (
              <button
                key={key}
                onClick={() => setServiceModel(key)}
                className={`p-4 border-2 rounded-lg text-left transition ${
                  serviceModel === key
                    ? "border-black bg-gray-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <p className="text-sm text-gray-600 mb-1">{label}</p>
                <p className="text-2xl font-bold">₹{price}</p>
                <p className="text-xs text-gray-500">per sq ft</p>
              </button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm text-gray-700">
                  Earning/sq.ft* (approx.)
                </label>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold">
                    {earningPerSqFt.toFixed(1)}
                  </span>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    Rs./sq.ft.
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm text-gray-700">
                  Ground floor area
                </label>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold">{groundFloorArea}</span>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    Sq.ft.
                  </span>
                </div>
              </div>
              <input
                type="range"
                min="1000"
                max="5000"
                step="100"
                value={groundFloorArea}
                onChange={(e) => setGroundFloorArea(parseInt(e.target.value))}
                className="range-slider w-full"
                style={{
                  ["--value" as any]: `${
                    ((groundFloorArea - 1000) / (5000 - 1000)) * 100
                  }%`,
                }}
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm text-gray-700">
                  Number of floors
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setNumFloors(Math.max(1, numFloors - 1))}
                    className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="text-lg font-bold">
                    {numFloors} (ground)
                  </span>
                  <button
                    onClick={() => setNumFloors(numFloors + 1)}
                    className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm text-gray-700">Total sq. ft.</label>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold">{totalSqFt}</span>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    Sq.ft.
                  </span>
                </div>
              </div>
              <div className="text-xs text-gray-500 italic">
                Calculated as: Ground floor area × Number of floors
              </div>
            </div>

            <p className="text-xs text-gray-500">
              *Commission can be deferred following a direct discussion.
            </p>
          </div>

          <div className="space-y-6 ">
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col justify-center items-center">
              <p className="text-sm text-gray-600 mb-2">
                Total earning from this project would be
              </p>
              <p className="text-4xl font-bold text-gray-900">
                ₹{Math.round(totalEarningFromProject).toLocaleString()}
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-700">If you refer more</span>
                <select
                  value={referralCount}
                  onChange={(e) => setReferralCount(parseInt(e.target.value))}
                  className="bg-white border border-gray-300 rounded px-3 py-1"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
                <span className="text-sm text-gray-700">
                  projects like this
                </span>
              </div>
              <div className="text-center">
                <div className=" mb-4 flex justify-center items-center ">
                  <Image
                    src={"/icons/cash-pink.png"}
                    width={100}
                    height={100}
                    className="w-16 h-16 filter-pink"
                    alt="cash"
                  />
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Your total earning can be
                </p>
                <p className="text-5xl font-bold text-gray-900 mb-1">
                  ₹{Math.round(totalPotentialEarning).toLocaleString()}
                </p>
                <p className="text-xs text-gray-500">Approx.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export const ReferralCalculator = () => {
//   const [serviceModel, setServiceModel] = useState("fully-furnished");
//   const [groundFloorArea, setGroundFloorArea] = useState(2000);
//   const [numFloors, setNumFloors] = useState(1);
//   const [totalSqFt, setTotalSqFt] = useState(6000);
//   const [referralCount, setReferralCount] = useState(5);

//   const serviceModels = {
//     "fully-furnished": { price: 299, label: "Fully furnished" },
//     "semi-furnished": { price: 249, label: "Semi furnished" },
//     "upto-civil": { price: 149, label: "Upto civil work" },
//   };

//   const basePrice = serviceModels[serviceModel].price;
//   const earningPerSqFt = basePrice * 0.1; // 10% of base price
//   const totalEarningFromProject = earningPerSqFt * totalSqFt;
//   const totalPotentialEarning =
//     totalEarningFromProject *
//     (referralCount * (totalEarningFromProject * basePrice * 0.1));

//   // const earningPerSqFt = serviceModels[serviceModel].price;
//   // const total_sqft = groundFloorArea * numFloors;

//   // const totalEarningFromProject =
//   //   Math.round((earningPerSqFt * totalSqFt) / 100) * 100;
//   // const totalPotentialEarning =
//   //   (totalEarningFromProject * referralCount) / 100000;

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-gray-900 mb-12">
//           Your Earnings Potential
//         </h2>
//         <div className="grid md:grid-cols-2 gap-12">
//           <div className="space-y-8">
//             <div>
//               <p className="text-sm text-gray-600 mb-4">
//                 Choose a service model:
//               </p>
//               <div className="grid grid-cols-3 gap-4">
//                 {Object.entries(serviceModels).map(
//                   ([key, { price, label }]) => (
//                     <button
//                       key={key}
//                       onClick={() => setServiceModel(key)}
//                       className={`p-4 border-2 rounded-lg text-left transition ${
//                         serviceModel === key
//                           ? "border-black bg-gray-50"
//                           : "border-gray-200 hover:border-gray-300"
//                       }`}
//                     >
//                       <p className="text-sm text-gray-600 mb-1">{label}</p>
//                       <p className="text-2xl font-bold">₹{price}</p>
//                       <p className="text-xs text-gray-500">per sq ft</p>
//                     </button>
//                   )
//                 )}
//               </div>
//             </div>

//             <div>
//               <div className="flex justify-between items-center mb-4">
//                 <label className="text-sm text-gray-700">
//                   Earning/sq.ft* (approx.)
//                 </label>
//                 <div className="flex items-center space-x-2">
//                   <span className="text-2xl font-bold">
//                     {(earningPerSqFt * 0.1).toFixed(1)}
//                   </span>
//                   <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
//                     Rs./sq.ft.
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div className="flex justify-between items-center mb-4">
//                 <label className="text-sm text-gray-700">
//                   Ground floor area
//                 </label>
//                 <div className="flex items-center space-x-2">
//                   <span className="text-2xl font-bold">{groundFloorArea}</span>
//                   <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
//                     Sq.ft.
//                   </span>
//                 </div>
//               </div>
//               <input
//                 type="range"
//                 min="1000"
//                 max="5000"
//                 step="100"
//                 value={groundFloorArea}
//                 onChange={(e) => setGroundFloorArea(parseInt(e.target.value))}
//                 className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
//               />
//             </div>

//             <div>
//               <div className="flex justify-between items-center mb-4">
//                 <label className="text-sm text-gray-700">
//                   Number of floors
//                 </label>
//                 <div className="flex items-center space-x-4">
//                   <button
//                     onClick={() => setNumFloors(Math.max(1, numFloors - 1))}
//                     className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-50"
//                   >
//                     -
//                   </button>
//                   <span className="text-lg font-bold">
//                     {numFloors} (ground)
//                   </span>
//                   <button
//                     onClick={() => setNumFloors(numFloors + 1)}
//                     className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-50"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div className="flex justify-between items-center mb-4">
//                 <label className="text-sm text-gray-700">Total sq. ft.</label>
//                 <div className="flex items-center space-x-2">
//                   <span className="text-2xl font-bold">{totalSqFt}</span>
//                   <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
//                     Sq.ft.
//                   </span>
//                 </div>
//               </div>
//               <input
//                 type="range"
//                 min="2000"
//                 max="15000"
//                 step="100"
//                 value={totalSqFt}
//                 onChange={(e) => setTotalSqFt(parseInt(e.target.value))}
//                 className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
//               />
//             </div>

//             <p className="text-xs text-gray-500">
//               *Commission can be deferred following a direct discussion.
//             </p>
//           </div>

//           <div className="space-y-6">
//             <div className="bg-gray-50 rounded-lg p-6">
//               <p className="text-sm text-gray-600 mb-2">
//                 Total earning from this project would be
//               </p>
//               <p className="text-4xl font-bold text-gray-900">
//                 ₹{totalEarningFromProject.toLocaleString()}
//               </p>
//             </div>

//             <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6">
//               <div className="flex items-center justify-between mb-4">
//                 <span className="text-sm text-gray-700">If you refer more</span>
//                 <select
//                   value={referralCount}
//                   onChange={(e) => setReferralCount(parseInt(e.target.value))}
//                   className="bg-white border border-gray-300 rounded px-3 py-1"
//                 >
//                   {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
//                     <option key={num} value={num}>
//                       {num}
//                     </option>
//                   ))}
//                 </select>
//                 <span className="text-sm text-gray-700">
//                   projects like this
//                 </span>
//               </div>
//               <div className="text-center">
//                 <div className="text-6xl mb-4">💰</div>
//                 <p className="text-sm text-gray-600 mb-2">
//                   Your total earning can be
//                 </p>
//                 <p className="text-5xl font-bold text-gray-900 mb-1">
//                   ₹{totalPotentialEarning.toFixed(2)} Lakh
//                 </p>
//                 <p className="text-xs text-gray-500">Approx.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
