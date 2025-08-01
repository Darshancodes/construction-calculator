export const Stone = () => {
  const calculateStonePrice = () => {
    const per_unit_rate = 750;
    const standard_quantity = 0.05;

    const ground_floor_area = 2000;
    const no_of_floors = 5;
    const total_build_up_area = ground_floor_area * no_of_floors;

    const total_quantity = total_build_up_area * standard_quantity;
    const amount = per_unit_rate * total_quantity;
    return amount;
  };
  return (
    <div>
      <h2>Stone</h2>
    </div>
  );
};
