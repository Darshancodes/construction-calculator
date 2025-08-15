import { PersonalDetailPopup } from "@/components/calculator/personal-detail-popup";
import { Footer } from "@/components/layout/footer";
import { TotalCost } from "@/components/options/total-cost";

const TotalCostPage = () => {
  return (
    <>
      <PersonalDetailPopup />
      <TotalCost />
      <Footer />
    </>
  );
};

export default TotalCostPage;
