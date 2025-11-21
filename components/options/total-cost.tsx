"use client";
import { useDataStore } from "@/store/useDataStore";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PersonalDetailPopup } from "../calculator/personal-detail-popup";

export const TotalCost = () => {
  // const finalprice = material-cost + miscallenous-cost + labour-charge + design-management-fees
  const {
    total_final_cost,
    total_prices,
    labour_cost,
    management_cost,
    constructionData: { total_build_up_area, no_of_floors },
  } = useDataStore();
  // Format number with Indian currency formatting
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  // Format large numbers with commas
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-IN").format(num);
  };
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Your home construction estimation
        </h1>
        <p className="text-gray-600">
          The estimate is based on your material choice and is approximate; it
          may change during detailed design.
        </p>
      </div>

      {/* Main Content Card */}
      <Card className="w-full">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
            {/* Your Input Section */}
            <div className="p-8 bg-gray-50">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Your input
              </h2>

              <div className="space-y-6">
                {/* Total built-up area */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-300 rounded-sm mt-1 flex-shrink-0"></div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">
                      Total built-up area
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {formatNumber(total_build_up_area)} sq.ft.
                    </div>
                  </div>
                </div>

                {/* Number of floors */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-300 rounded-sm mt-1 flex-shrink-0"></div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">
                      Number of floors
                    </div>
                    <div className="text-xl font-semibold text-gray-900">
                      Ground + {no_of_floors - 1}th floor
                    </div>
                  </div>
                </div>

                {/* House illustration */}
                <div className="flex justify-center mt-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-amber-400 rounded-lg flex items-center justify-center">
                    <img
                      src="/steps-images/home.svg"
                      alt="House illustration"
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Breakup Section */}
            <div className="p-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Cost breakup
              </h2>

              <div className="space-y-6">
                {/* Material cost */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-300 rounded-sm mt-1 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 mb-1">
                      Material cost
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      {formatCurrency(total_prices)}
                    </div>
                  </div>
                </div>

                {/* Plus symbol */}
                <div className="text-center text-2xl font-bold text-gray-400">
                  +
                </div>

                {/* Labour charges */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-300 rounded-sm mt-1 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 mb-1">
                      Labour charges
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      {formatCurrency(labour_cost)}
                    </div>
                  </div>
                </div>

                {/* Plus symbol */}
                <div className="text-center text-2xl font-bold text-gray-400">
                  +
                </div>

                {/* Design & management charges */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-300 rounded-sm mt-1 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 mb-1">
                      Design & management charges
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      {formatCurrency(management_cost)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Cost Section */}
            <div className="p-8 bg-gray-50 flex flex-col justify-between">
              <div>
                {/* Equals symbol */}
                <div className="text-center text-2xl font-bold text-gray-400 mb-6">
                  =
                </div>

                <div className="text-right">
                  <div className="text-sm text-gray-600 mb-2">
                    Total estimated cost
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    ₹{formatNumber(total_final_cost)}
                  </div>
                  <div className="text-sm text-gray-500">Approx.</div>
                </div>
              </div>

              {/* Call to action */}
              <div className="mt-8">
                <div className="text-center text-sm text-gray-600 mb-4">
                  Get more personalised & detail estimation
                </div>
                <Button className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-md">
                  Book FREE appointment →
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-center items-center mt-4">
        <Link
          href={"/"}
          className="
      bg-white hover:bg-gray-200 text-black ring
      font-medium py-2 px-4 rounded-lg
      transition-colors duration-200 min-w-[300px] font-mono
      text-center
      focus:outline-none 
    "
        >
          Calculate again →
        </Link>
        {/* <Button variant={"outline"} className="border border-gray-400">
          Calculate Again <ArrowRight />
        </Button> */}
      </div>
    </div>
  );
};
