export const MixConcrete = () => {
  const calculateRMC = () => {
    const per_unit_rate = 4200;
    const standard_quantity = 0.04;
    const ground_floor_area = 2000;
    const no_of_floors = 5;
    const total_build_up_area = ground_floor_area * no_of_floors;
    const total_quantity = standard_quantity * total_build_up_area;
    const amount = total_quantity * per_unit_rate;
    return amount;
  };
  const calculatePCC = () => {
    const per_unit_rate = 2800;
    const standard_quantity = 0.012;
    const ground_floor_area = 2000;
    const no_of_floors = 5;
    const total_build_up_area = ground_floor_area * no_of_floors;
    const total_quantity = standard_quantity * total_build_up_area;
    const amount = total_quantity * per_unit_rate;
    return amount;
  };
  return <div>MixConcrete</div>;
};
