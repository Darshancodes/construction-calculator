import { useStepStore } from "@/store/useStepStore";

export const Cement = () => {
  const { nextStep, prevStep } = useStepStore();
  const brands = ["UltraTech or Ambhuja", "JK", "Wonder or shree"];
  const calculateCementPrice = () => {
    const per_unit_rate = 340;
    const ground_floor_area = 2000;
    const standard_quantity = 0.17;
    const total_build_up_area = 10000; // ground_floor_area * total_no_of_floors = 2000*5
    const total_quantity = total_build_up_area * standard_quantity;
    const amount = total_quantity * per_unit_rate;
    return amount;
  };
  return (
    <div>
      {brands?.map((brand) => (
        <h2 key={brand}>{brand}</h2>
      ))}
      {calculateCementPrice()}
      <button
        className="mt-6 w-44 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
        onClick={nextStep}
      >
        nextStep
      </button>
      <button
        className="mt-6 w-44 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
        onClick={prevStep}
      >
        prevStep
      </button>
    </div>
  );
};
