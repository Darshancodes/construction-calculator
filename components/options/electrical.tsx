export const Electrical = () => {
  const brands = ["shiva/jindal", "other brands"];

  const calculateSlabWallMaterial = () => {
    const per_sqft_rate = 20;
    const ground_floor_area = 2000;
    const total_build_up_area = 10000;
    const amount = per_sqft_rate * total_build_up_area;
    return amount;
  };
  const calculateWiresCables = () => {
    const per_sqft_rate = 70;
    const ground_floor_area = 2000;
    const total_build_up_area = 10000;
    const amount = per_sqft_rate * total_build_up_area;
    return amount;
  };
  const calculateSheetsSwitches = () => {
    const per_sqft_rate = 12;
    const ground_floor_area = 2000;
    const total_build_up_area = 10000;
    const amount = per_sqft_rate * total_build_up_area;
    return amount;
  };
  return (
    <div>
      <div>
        Electrical slab & wall material -
        {brands?.map((brand) => (
          <h2>{brand}</h2>
        ))}
        {calculateSlabWallMaterial()}
      </div>
      <div>
        Wires & cables (EWC0100)-{" "}
        {brands?.map((brand) => (
          <h2>{brand}</h2>
        ))}
        {calculateWiresCables()}
      </div>
      <div>
        sheet & switches - anchor penta,havells,Schneider/GM
        {calculateSheetsSwitches()}
      </div>
    </div>
  );
};
