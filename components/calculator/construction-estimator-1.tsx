import { useDataStore } from "@/store/useDataStore";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Minus, Plus, RefreshCw, X } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export const ConstructionEstimator = () => {
  const { constructionData, updateConstructionData, calculateTotal } =
    useDataStore();
  const [location, setLocation] = useState("Bikaner");
  const [showMobileModal, setShowMobileModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleAreaChange = (value: string) => {
    const area = Number.parseInt(value) || 0;
    updateConstructionData({ ground_floor_area: area });
  };

  const handleFloorsChange = (increment: boolean) => {
    const newFloors = increment
      ? constructionData.no_of_floors + 1
      : Math.max(1, constructionData.no_of_floors - 1);
    updateConstructionData({ no_of_floors: newFloors });
  };

  const getFloorsText = (floors: number) => {
    if (floors === 1) return "Ground floor";
    if (floors === 2) return "Ground + 1st floor";
    return `Ground + ${floors - 1} floors`;
  };

  const handleRefresh = () => {
    calculateTotal();
  };

  const handleSubmit = () => {
    calculateTotal();
    setShowMobileModal(false);
  };

  // Mobile Modal Component
  const MobileModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md mx-4 relative">
        {/* Close button */}
        <button
          onClick={() => setShowMobileModal(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Add details of your dream home
          </h2>

          {/* Location */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location in Rajasthan
            </label>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Bikaner">Bikaner</SelectItem>
                <SelectItem value="Jaipur">Jaipur</SelectItem>
                <SelectItem value="Jodhpur">Jodhpur</SelectItem>
                <SelectItem value="Udaipur">Udaipur</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Built-up Area */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              built-up area
            </label>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                value={constructionData.ground_floor_area}
                onChange={(e) => handleAreaChange(e.target.value)}
                className="flex-1"
                placeholder="2000"
              />
              <span className="text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded">
                Sq.ft.
              </span>
            </div>
          </div>

          {/* Number of Floors */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of floors
            </label>
            <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleFloorsChange(false)}
                disabled={constructionData.no_of_floors <= 1}
                className="h-8 w-8"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-sm text-gray-600 text-center px-4">
                {constructionData.no_of_floors} (
                {getFloorsText(constructionData.no_of_floors)})
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleFloorsChange(true)}
                className="h-8 w-8"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            className="w-full bg-black text-white hover:bg-gray-800 py-3"
          >
            Submit →
          </Button>
        </div>
      </div>
    </div>
  );

  // Mobile View - Summary Card with Add Details Button
  const MobileView = () => (
    <div className="bg-gray-100 py-4 px-4">
      <div className="flex flex-col gap-4 my-4">
        <h1 className="text-2xl font-bold text-gray-900">
          Home construction estimator
        </h1>
        <p className="text-gray-600 text-lg">
          Get an accurate estimate for your dream home in minutes
        </p>
      </div>

      {/* Summary Card */}
      <Card className="mb-4">
        <CardContent className="p-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded">
                <div className="w-4 h-4 bg-gray-400 rounded"></div>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total built-up area</p>
                <p className="text-xl font-bold text-gray-900">
                  {constructionData.total_build_up_area.toLocaleString()} sq.ft.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded">
                <div className="w-4 h-4 bg-gray-400 rounded"></div>
              </div>
              <div>
                <p className="text-sm text-gray-600">Number of floors</p>
                <p className="text-lg font-semibold text-gray-900">
                  {getFloorsText(constructionData.no_of_floors)}
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <img
                src="/steps-images/home.svg"
                alt="Home"
                className="w-20 h-20"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Add Details Button */}
      <Button
        onClick={() => setShowMobileModal(true)}
        className="w-full py-3 text-lg"
      >
        Add Details of Your Dream Home
      </Button>

      {/* Mobile Modal */}
      {showMobileModal && <MobileModal />}
    </div>
  );

  // Desktop View (Original)
  const DesktopView = () => (
    <div className="bg-gray-100 py-4 px-2">
      <div className="">
        {/* Header */}
        <div className="flex flex-col gap-2 my-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Home construction estimator
          </h1>
          <p className="text-gray-600 text-lg">
            Get an accurate estimate for your dream home in minutes
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Left Side - Construction Detail */}
          <Card className="">
            <CardContent className="">
              <h2 className="text-xl font-semibold text-gray-900">
                Construction detail
              </h2>

              {/* Location */}
              <div className="">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location in Rajasthan
                </label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Bikaner">Bikaner</SelectItem>
                    <SelectItem value="Jaipur">Jaipur</SelectItem>
                    <SelectItem value="Jodhpur">Jodhpur</SelectItem>
                    <SelectItem value="Udaipur">Udaipur</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Built-up Area */}
              <div className="">
                <label className="block text-sm font-medium text-gray-700">
                  built-up area
                </label>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    value={constructionData.ground_floor_area}
                    onChange={(e) => handleAreaChange(e.target.value)}
                    className="flex-1 bg-white"
                  />
                  <span className="text-sm text-gray-600 bg-gray-200 px-3 py-2 rounded">
                    Sq.ft.
                  </span>
                </div>
              </div>

              {/* Number of Floors */}
              <div className="flex flex-col w-full gap-3 mt-2">
                <label className="block text-sm font-medium text-gray-700">
                  Number of floors
                </label>
                <div className="flex gap-4 flex-col md:flex-row w-full">
                  {/* Floor Counter */}
                  <div className="flex w-full md:w-1/2 items-center justify-between bg-gray-100 rounded-lg p-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleFloorsChange(false)}
                      disabled={constructionData.no_of_floors <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-sm text-gray-600 text-center">
                      {constructionData.no_of_floors} (
                      {getFloorsText(constructionData.no_of_floors)})
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleFloorsChange(true)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Refresh Button */}
                  <Button
                    onClick={handleRefresh}
                    className="w-full md:w-1/2 h-16 flex items-center justify-center rounded-lg"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Refresh
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Side - Summary */}
          <Card>
            {/* Total Built-up Area */}
            <CardContent className="flex flex-col md:flex-row bg-white h-full">
              <div className="flex flex-col gap-3 w-full py-2 px-2 justify-center">
                <div className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded">
                    <div className="w-4 h-4 bg-gray-400 rounded"></div>
                  </div>
                  <div>
                    <p className="text-lg text-gray-600">Total built-up area</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {constructionData.total_build_up_area.toLocaleString()}{" "}
                      sq.ft.
                    </p>
                  </div>
                </div>

                {/* Number of Floors */}
                <div className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded">
                    <div className="w-4 h-4 bg-gray-400 rounded"></div>
                  </div>
                  <div>
                    <p className="text-lg text-gray-600">Number of floors</p>
                    <p className="text-xl font-semibold text-gray-900">
                      {getFloorsText(constructionData.no_of_floors)}
                    </p>
                  </div>
                </div>
              </div>
              {/* House Illustration */}
              <div className="w-full flex justify-center items-center">
                <img src="/steps-images/home.svg" alt="Home" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  return isMobile ? <MobileView /> : <DesktopView />;
};
