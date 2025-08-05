"use client";
import { Steel } from "../options/steel";
import { Bricks } from "../options/bricks";
import { Cement } from "../options/cement";
import { Electrical } from "../options/electrical";
import { Flooring } from "../options/flooring";
import { Door } from "../options/door";
import { Windows } from "../options/windows";
import { WallFinishes } from "../options/wall-finish";
import { HandRails } from "../options/handrail";
import { WaterTank } from "../options/water-tank";
import { Kitchen } from "../options/kitchen";
import { MixConcrete } from "../options/mix-concrete";
import { Sand } from "../options/sand";
import { Plumbing } from "../options/plumbing";
import { MiscallenousCost } from "../options/miscallenous-cost";
import { LabourCost } from "../options/labour-cost";
import { ManagementDesignFees } from "../options/management-design-fee";
import { useStepStore } from "@/store/useStepStore";
import { useDataStore } from "@/store/useDataStore";
import StepNavigation from "./step-navigation";
import { Stone } from "../options/stone";
import { TotalCost } from "../options/total-cost";
import { ConstructionEstimator } from "./construction-estimator";
import { StepIndicator } from "./step-indicator";

export const MultiStep = () => {
  const { currentStep } = useStepStore();
  const { all_prices, total_prices } = useDataStore();
  const render = () => {
    switch (currentStep) {
      case 1:
        return <Steel />;
      case 2:
        return <Bricks />;
      case 3:
        return <Cement />;
      case 4:
        return <Electrical />;
      case 5:
        return <Flooring />;
      case 6:
        return <Door />;
      case 7:
        return <Windows />;
      case 8:
        return <WallFinishes />;
      case 9:
        return <HandRails />;
      case 10:
        return <WaterTank />;
      case 11:
        return <Kitchen />;
      case 12:
        return <MixConcrete />;
      case 13:
        return <Sand />;
      case 14:
        return <Plumbing />;
      case 15:
        return <Stone />;
      case 16:
        return <TotalCost />;
    }
  };

  return (
    <div>
      <ConstructionEstimator />
      <StepNavigation />
      <div>{JSON.stringify(all_prices)}</div>
      {render()}
      <StepIndicator />
    </div>
  );
};
