import { Kitchen } from "./kitchen";
import { WaterTank } from "./water-tank";

export const Miscallenous = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <Kitchen />
      <WaterTank />
    </div>
  );
};
