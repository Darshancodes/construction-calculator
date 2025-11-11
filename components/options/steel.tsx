import { CATEGORY_NAMES, TMT_STEEL_CATEGORY } from "@/lib/constants";
import { getStoredBrand } from "@/lib/store-utils";
import { useDataStore } from "@/store/useDataStore";
import { useStepStore } from "@/store/useStepStore";
import { useState } from "react";

// const calculateSteelPrice = (name, unit_rate, standard_quantity) => {
//   // const ground_floor_area = 2000;
//   // const no_of_floors = 5;
//   const single_unit_rate = unit_rate;
//   const total_buildup_area = total_build_up_area;
//   // const standard_quantity = 3.5;
//   const total_quantity = total_buildup_area * standard_quantity;
//   const totalAmount = total_quantity * single_unit_rate;
//   addAndCalculate({
//     NAME: CATEGORY_NAMES.STEEL,
//     AMOUNT: totalAmount,
//     BRAND: name,
//   });
// };

export const Steel = () => {
  const { nextStep, prevStep } = useStepStore();
  const {
    addAndCalculate,
    total_prices,
    all_prices,
    constructionData: { total_build_up_area },
  } = useDataStore();
  const [selectedBrand, setSelectedBrand] = useState(() =>
    getStoredBrand(CATEGORY_NAMES?.["STEEL"], all_prices)
  );

  const calculateSteelPrice = (
    name: string,
    unit_rate: number,
    standard_quantity: number
  ) => {
    const single_unit_rate = unit_rate;
    const total_buildup_area = total_build_up_area;
    const total_quantity = total_buildup_area * standard_quantity;
    const totalAmount = total_quantity * single_unit_rate;

    addAndCalculate({
      NAME: CATEGORY_NAMES.STEEL,
      AMOUNT: totalAmount,
      BRAND: name,
    });
  };

  const handleBrandSelect = (product: any) => {
    setSelectedBrand(product.NAME);
    calculateSteelPrice(
      product.NAME,
      product.PER_UNIT_RATE,
      product.STANDARD_QUANTITY
    );
  };
  return (
    <div className="p-6">
      <div className="bg-yellow-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Select Brand
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {TMT_STEEL_CATEGORY.BRANDS.map((product) => (
            <Card
              key={product.NAME}
              product={product}
              isSelected={selectedBrand === product.NAME}
              onSelect={() => handleBrandSelect(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({
  product,
  isSelected,
  onSelect,
}: {
  product: any;
  isSelected: boolean;
  onSelect: () => void;
}) => {
  const hasMultipleImages = product.IMAGE2 && product.IMAGE2.trim() !== "";

  return (
    <div
      className={`bg-white rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
        isSelected ? "border-black shadow-md" : "border-gray-200"
      }`}
      onClick={onSelect}
    >
      <div className="flex flex-col items-center p-4 relative">
        {/* Radio button */}
        <div className="absolute top-3 right-3">
          <div
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              isSelected ? "border-black bg-white" : "border-gray-300 bg-white"
            }`}
          >
            {isSelected && (
              <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
            )}
          </div>
        </div>

        {/* Brand logo */}
        <div className="flex justify-center items-center mb-3 mt-2 w-full min-h-[80px]">
          {hasMultipleImages ? (
            // Display two images side by side with "Or"
            <div className="flex items-center justify-center gap-3 w-full">
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="h-20 flex items-center justify-center mb-2">
                  <img
                    src={product.IMAGE || "/placeholder.svg"}
                    alt={product.NAME}
                    className="max-w-full max-h-16 object-contain mb-2"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </div>
                <span className="text-xs font-medium text-gray-700 text-center">
                  {product.NAME}
                </span>
              </div>

              <div className="flex flex-col items-center justify-center gap-1 px-2">
                <div className="w-px h-6 bg-gray-300"></div>
                <span className="text-xs font-medium text-gray-400">Or</span>
                <div className="w-px h-6 bg-gray-300"></div>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="h-20 flex items-center justify-center mb-2">
                  <img
                    src={product.IMAGE2 || "/placeholder.svg"}
                    alt={product.NAME2}
                    className="max-w-full max-h-16 object-contain mb-2"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </div>
                <span className="text-xs font-medium text-gray-700 text-center">
                  {product.NAME2}
                </span>
              </div>
            </div>
          ) : (
            // Display single image with name below
            <div className="flex flex-col items-center justify-center w-full">
              <div className="h-20 flex items-center justify-center mb-2">
                <img
                  src={product.IMAGE || "/placeholder.svg"}
                  alt={product.NAME}
                  className="max-w-full max-h-16 object-contain mb-3"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">
                {product.NAME}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// const Card = ({
//   product,
//   isSelected,
//   onSelect,
// }: {
//   product: any;
//   isSelected: boolean;
//   onSelect: () => void;
// }) => {
//   return (
//     <div
//       className={`bg-white rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
//         isSelected ? "border-black shadow-md" : "border-gray-200"
//       }`}
//       onClick={onSelect}
//     >
//       <div className="p-4 relative">
//         {/* Radio button */}
//         <div className="absolute top-3 right-3">
//           <div
//             className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
//               isSelected ? "bgwhite" : "border-gray-300"
//             }`}
//           >
//             {isSelected && (
//               <div className="w-2 h-2 bg-black rounded-full"></div>
//             )}
//           </div>
//         </div>

//         {/* Brand logo placeholder */}
//         <div className="flex justify-center mb-4 mt-2">
//           <div className=" rounded flex items-center justify-center">
//             <img
//               src={product.IMAGE || "/placeholder.svg"}
//               alt={product.NAME}
//               className="max-w-full max-h-full object-contain"
//               onError={(e) => {
//                 const target = e.target as HTMLImageElement;
//                 target.style.display = "none";
//                 target.nextElementSibling!.textContent =
//                   product.NAME.split(" ")[0];
//               }}
//             />
//             <span className="text-xs font-medium text-gray-600 hidden">
//               {product?.NAME}
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Card = ({ product, calculate }: { product: any; calculate: any }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
//       <div className="p-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">
//           {product.NAME}
//         </h2>

//         <div className="space-y-3">
//           <div className="flex justify-between">
//             <span className="text-gray-600">Price:</span>
//             <span className="font-medium">
//               ₹{product.PER_UNIT_RATE} / {product.PER_UNIT}
//             </span>
//           </div>

//           <div className="flex justify-between">
//             <span className="text-gray-600">Standard Quantity:</span>
//             <span className="font-medium">
//               {product.STANDARD_QUANTITY} {product.STANDARD_QUANTITY_UNIT}
//             </span>
//           </div>
//         </div>

//         <button
//           onClick={() =>
//             calculate(
//               product?.NAME,
//               product?.PER_UNIT_RATE,
//               product?.STANDARD_QUANTITY
//             )
//           }
//           className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
//         >
//           Add to Estimate
//         </button>
//       </div>
//     </div>
//   );
// };
