export const Flooring = () => {
  const calculateVetrifiedTile = () => {
    const per_sqft_rate = 50;
    const total_build_up_area = 10000;
    const amount = per_sqft_rate * total_build_up_area;
    return amount;
  };
  const calculateCeremicWallTile = () => {
    const per_sqft_rate = 50;
    const total_build_up_area = 10000;
    const standard_quantity = 0.4;
    const total_quantity = total_build_up_area * standard_quantity;
    const amount = per_sqft_rate * total_quantity;
    return amount;
  };
  const calculateGranite = () => {
    const per_sqft_rate = 75;
    const total_build_up_area = 10000;
    const standard_quantity = 0.2;
    const total_quantity = total_build_up_area * standard_quantity;
    const amount = per_sqft_rate * total_quantity;
    return amount;
  };
  const calculateRoughStone = () => {
    const per_sqft_rate = 40;
    const total_build_up_area = 10000;
    const standard_quantity = 1.25;
    const total_quantity = total_build_up_area * standard_quantity;
    const amount = per_sqft_rate * total_quantity;
    return amount;
  };
  return (
    <div>
      flooring vetrified tile-{calculateVetrifiedTile()}
      ceramic title-{calculateCeremicWallTile()}
      calculate granite - {calculateGranite()}
      rough stone - {calculateRoughStone()}
    </div>
  );
};
