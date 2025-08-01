export const Door = () => {
  const calculateDoorShutter = () => {
    const per_sqft_rate = 45;
    const ground_floor_area = 2000;
    const no_of_floors = 5;
    const total_build_up_area = ground_floor_area * no_of_floors;

    const amount = total_build_up_area * per_sqft_rate;
    return amount;
  };
  const calculateFrameSingleRebate = () => {
    const per_sqft_rate = 35;
    const ground_floor_area = 2000;
    const no_of_floors = 5;
    const total_build_up_area = ground_floor_area * no_of_floors;

    const amount = total_build_up_area * per_sqft_rate;
    return amount;
  };
  const calculateMainDoor = () => {
    const unitDoorPrice = ["15000/door", "20000/door", "30000/door"];
  };
  return <div>Door</div>;
};
