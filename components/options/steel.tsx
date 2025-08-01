export const Steel = () => {
  const steelBrands = ["tata tiscon", "jindal Panther", "ambhuja", "ultratech"];
  const ground_floor_area = 2000;
  const no_of_floors = 5;
  const single_unit_rate = 75;
  const total_buildup_area = ground_floor_area * no_of_floors;
  const standard_quantity = 3.5;
  const total_quantity = total_buildup_area * standard_quantity;
  const totalAmount = total_quantity * single_unit_rate;
  return (
    <div>
      <h2>Select Brand</h2>
      {steelBrands?.map((steel) => (
        <h3>{steel}</h3>
      ))}
    </div>
  );
};
