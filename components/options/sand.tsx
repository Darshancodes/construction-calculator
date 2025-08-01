export const Sand = () => {
  const calculateRiverSand = () => {
    const per_unit_rate = 1250;
    const standard_quantity = 0.05;

    const ground_floor_area = 2000;
    const no_of_floors = 5;
    const total_build_up_area = ground_floor_area * no_of_floors;

    const total_quantity = total_build_up_area * standard_quantity;
    const amount = per_unit_rate * total_quantity;
    return amount;
  };
  const calculateMESand = () => {
    const per_unit_rate = 900;
    const standard_quantity = 0.05;

    const ground_floor_area = 2000;
    const no_of_floors = 5;
    const total_build_up_area = ground_floor_area * no_of_floors;

    const total_quantity = total_build_up_area * standard_quantity;
    const amount = per_unit_rate * total_quantity;
    return amount;
  };
  return <div>Sand</div>;
};
