export const Plumbing = () => {
  const calculatePVC = () => {
    const per_sqft_rate = 35;
    const ground_floor_area = 2000;
    const no_of_floors = 5;
    const total_build_up_area = ground_floor_area * no_of_floors;
    const amount = per_sqft_rate * total_build_up_area;
    return amount;
  };
  const calculateCPVC = () => {
    const per_sqft_rate = 30;
    const ground_floor_area = 2000;
    const no_of_floors = 5;
    const total_build_up_area = ground_floor_area * no_of_floors;
    const amount = per_sqft_rate * total_build_up_area;
    return amount;
  };
  const calculateCPVitreous = () => {
    const per_unit_rate = 35000;
    const standard_quantity = 2;
    const no_of_floors = 5;
    const total_quantity = standard_quantity * no_of_floors;
    const amount = per_unit_rate * total_quantity;
    return amount;
  };
  return <div>Plumbing</div>;
};
