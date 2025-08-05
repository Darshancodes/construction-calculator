import { CATEGORY_NAMES, TMT_STEEL_CATEGORY } from "@/lib/constants";
import { useDataStore } from "@/store/useDataStore";
import { useStepStore } from "@/store/useStepStore";
import { useState } from "react";

export const Steel = () => {
  const { nextStep, prevStep } = useStepStore();
  const {
    addAndCalculate,
    total_prices,
    constructionData: { total_build_up_area },
  } = useDataStore();
  const [selectedBrand, setSelectedBrand] = useState("");
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

        <div className="text-sm text-gray-600 mb-6">
          Total: ₹{total_prices} | Build-up Area: {total_build_up_area} sqft
        </div>

        <div className="flex gap-4">
          <button
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300"
            onClick={prevStep}
          >
            Previous Step
          </button>
          <button
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300"
            onClick={nextStep}
          >
            Next Step
          </button>
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
  return (
    <div
      className={`bg-white rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
        isSelected ? "border-blue-500 shadow-md" : "border-gray-200"
      }`}
      onClick={onSelect}
    >
      <div className="p-4 relative">
        {/* Radio button */}
        <div className="absolute top-3 right-3">
          <div
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              isSelected ? "border-blue-500 bg-blue-500" : "border-gray-300"
            }`}
          >
            {isSelected && (
              <div className="w-2 h-2 bg-white rounded-full"></div>
            )}
          </div>
        </div>

        {/* Brand logo placeholder */}
        <div className="flex justify-center mb-4 mt-2">
          <div className=" rounded flex items-center justify-center">
            <img
              src={product.IMAGE || "/placeholder.svg"}
              alt={product.NAME}
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                target.nextElementSibling!.textContent =
                  product.NAME.split(" ")[0];
              }}
            />
            <span className="text-xs font-medium text-gray-600 hidden"></span>
          </div>
        </div>

        {/* Brand name */}
        {/* <div className="text-center">
          <h3 className="text-sm font-medium text-gray-800">
            {product.NAME === "JSW OR RATHI" ? (
              <div className="flex items-center justify-center gap-2">
                <span>JSW</span>
                <span className="text-xs text-gray-500">Or</span>
                <span>Rathi</span>
              </div>
            ) : (
              product.NAME.replace("TATA TISCON", "TATA Tiscon").replace(
                "JINDAL PANTHER",
                "Jindal Panther"
              )
            )}
          </h3>
        </div> */}

        {/* Price info - shown on hover or when selected */}
        {isSelected && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="text-xs text-gray-600 space-y-1">
              <div className="flex justify-between">
                <span>Rate:</span>
                <span>
                  ₹{product.PER_UNIT_RATE}/{product.PER_UNIT}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Qty:</span>
                <span>
                  {product.STANDARD_QUANTITY} {product.STANDARD_QUANTITY_UNIT}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

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
