export const bricks = () => {
  const brands = [
    "fly ash bricks",
    "renwal or other red clay brick",
    "kanota or hanumargarah",
  ];
  const calculateWaterProofing = () => {
    const per_sqft_rate = 40;
    const standard_quantity = 0.3;
    const ground_floor_area = 2000;
    const total_quantity = standard_quantity * ground_floor_area;
    const amount = per_sqft_rate * total_quantity;
    return amount;
  };
  const calculateTermiteSolution = () => {
    const per_sqft_rate = 15;
    const standard_quantity = 0.9;
    const ground_floor_area = 2000;
    const total_quantity = standard_quantity * ground_floor_area;
    const amount = per_sqft_rate * total_quantity;
    return amount;
  };
  return (
    <div>
      {brands?.map((brand) => (
        <h2>{brand}</h2>
      ))}
      <div>water proofing - yes or no {calculateWaterProofing()}</div>
      <div>termite solution - yes or no{calculateTermiteSolution()}</div>
    </div>
  );
};
