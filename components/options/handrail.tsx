export const HandRails = () => {
  const calculateStairHandRail = () => {
    const per_unit_rate = 400; //rft
    const standard_quantity = 30;
    const total_no_of_floors = 5;
    const total_quantity = standard_quantity * total_no_of_floors;
    const amount = per_unit_rate * total_quantity;
    return amount;
  };
  const calculateBalconyHandRail = () => {
    const per_unit_rate = 1200; //rft
    const standard_quantity = 35;
    const total_no_of_floors = 5;
    const total_quantity = standard_quantity * total_no_of_floors;
    const amount = per_unit_rate * total_quantity;
    return amount;
  };
  return <div>Handrails</div>;
};
