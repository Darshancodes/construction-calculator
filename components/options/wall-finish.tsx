export const WallFinishes = () => {
  const calculatePopFalseCeiling = () => {
    const per_sqft_rate = 120;
    const standard_quantity = 0.7;
    const ground_floor_area = 2000;
    const no_of_floors = 5;
    const total_build_up_area = ground_floor_area * no_of_floors;
    const total_quantity = total_build_up_area * standard_quantity;
    const amount = per_sqft_rate * total_quantity;
    return amount;
  };
  const calculatePopInWalls = () => {
    const per_sqft_rate = 18;
    const standard_quantity = 3;
    const ground_floor_area = 2000;
    const no_of_floors = 5;
    const total_build_up_area = ground_floor_area * no_of_floors;
    const total_quantity = total_build_up_area * standard_quantity;
    const amount = per_sqft_rate * total_quantity;
    return amount;
  };
  const calculateInternalWallPaint = () => {
    const per_sqft_rate = 45;
    const standard_quantity = 3.5;
    const ground_floor_area = 2000;
    const no_of_floors = 5;
    const total_build_up_area = ground_floor_area * no_of_floors;
    const total_quantity = total_build_up_area * standard_quantity;
    const amount = per_sqft_rate * total_quantity;
    return amount;
  };
  return <div>WallFinishes</div>;
};
