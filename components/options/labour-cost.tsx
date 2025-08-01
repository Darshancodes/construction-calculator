export const LabourCost = () => {
  const calculatelaboutCost = () => {
    const per_sqft_rate = 290;
    const ground_floor_area = 2000;
    const no_of_floors = 5;
    const total_build_up_area = ground_floor_area * no_of_floors;
    const amount = total_build_up_area * per_sqft_rate;
    return amount;
  };
  return <div>LabourCost</div>;
};
