export const Windows = () => {
  const calculateMaterial = () => {
    const upvc = 65;
    const aluminium = 55;
    const wooden = 65;
    const ground_floor_area = 2000;
    const no_of_floors = 5;
    const total_build_up_area = ground_floor_area * no_of_floors;
    const amount = total_build_up_area * upvc;
    return amount;
  };
  return <div>Windows</div>;
};
