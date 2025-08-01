export const Cement = () => {
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
        <h2>{brand}</h2>
      ))}
      {calculateCementPrice()}
    </div>
  );
};
