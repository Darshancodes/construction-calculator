import { TMT_STEEL_CATEGORY } from "@/lib/constants";
import { useStepStore } from "@/store/useStepStore";

export const Steel = () => {
  const { nextStep, prevStep } = useStepStore();
  const steelBrands = ["tata tiscon", "jindal Panther", "ambhuja", "ultratech"];
  const calculateSteelPrice = () => {
    const ground_floor_area = 2000;
    const no_of_floors = 5;
    const single_unit_rate = 75;
    const total_buildup_area = ground_floor_area * no_of_floors;
    const standard_quantity = 3.5;
    const total_quantity = total_buildup_area * standard_quantity;
    const totalAmount = total_quantity * single_unit_rate;
  };
  return (
    <div>
      <h2>Select Brand</h2>
      <div className="grid grid-cols-3">
        {TMT_STEEL_CATEGORY.PRODUCTS.map((product) => (
          <Card index={product?.NAME} product={product} />
        ))}
      </div>
      {/* {steelBrands?.map((steel) => (
        <h3 key={steel}>{steel}</h3>
      ))} */}
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
    </div>
  );
};

const Card = ({ product, index }) => {
  return (
    <div
      key={index}
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {product.NAME}
        </h2>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Price:</span>
            <span className="font-medium">
              ₹{product.PER_UNIT_RATE} / {product.PER_UNIT}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Standard Quantity:</span>
            <span className="font-medium">
              {product.STANDARD_QUANTITY} {product.STANDARD_QUANTITY_UNIT}
            </span>
          </div>
        </div>

        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300">
          Add to Estimate
        </button>
      </div>
    </div>
  );
};
