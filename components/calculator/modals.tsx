import { Minus, Plus, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { getFloorsText } from "./construction-estimator-2";
import { createPortal } from "react-dom";

// Desktop Modal Component
export const DesktopModal = ({
  setShowDesktopModal,
  location,
  setLocation,
  formData,
  handleAreaChange,
  handleAreaBlur,
  handleFloorsChange,
  handleSubmit,
}) => (
  <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-lg w-full max-w-4xl mx-4 relative">
      {/* Close button */}
      <button
        onClick={() => setShowDesktopModal(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        {/* Left side - Form */}
        <div className="p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-8">
            Add your dream home details
          </h2>

          {/* Location */}
          <div className="mb-6">
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
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Built-up area
            </label>
            <div className="flex items-center gap-2">
              <Input
                type="text"
                // inputMode="numeric"
                // pattern="[0-9]*"
                value={formData.ground_floor_area}
                onChange={(e) => handleAreaChange(e.target.value)}
                onBlur={handleAreaBlur}
                className="flex-1"
                placeholder="2000"
              />
              {/* <Input
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={formData.ground_floor_area}
                  onChange={(e) => handleAreaChange(e.target.value)}
                  onBlur={handleAreaBlur}
                  className="flex-1"
                  placeholder="2000"
                /> */}
              {/* <Input
                  type="number"
                  value={formData.ground_floor_area}
                  onChange={(e) => handleAreaChange(e.target.value)}
                  className="flex-1"
                  placeholder="2000"
                /> */}
              <span className="text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded">
                Sq.ft.
              </span>
            </div>
          </div>

          {/* Number of Floors */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of floors
            </label>
            <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleFloorsChange(false)}
                disabled={formData.no_of_floors <= 1}
                className="h-8 w-8"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-sm text-gray-600 text-center px-4">
                {formData.no_of_floors} ({getFloorsText(formData.no_of_floors)})
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
            className="w-full bg-black text-white hover:bg-gray-800 py-3 text-base"
          >
            Submit →
          </Button>
        </div>

        {/* Right side - Summary and House Illustration */}
        <div className="bg-gray-50 p-8 rounded-r-lg flex flex-col justify-center">
          <div className="space-y-6">
            {/* Total built-up area */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
                <span className="text-sm text-gray-600">
                  Total built-up area
                </span>
              </div>
              <div className="text-lg font-semibold text-gray-900">
                {(
                  formData.ground_floor_area * formData.no_of_floors
                ).toLocaleString()}{" "}
                sq.ft.
              </div>
            </div>

            {/* Number of floors */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
                <span className="text-sm text-gray-600">Number of floors</span>
              </div>
              <div className="text-lg font-semibold text-gray-900 capitalize">
                {getFloorsText(formData.no_of_floors)}
              </div>
            </div>

            {/* House Illustration */}
            <div className="w-full flex justify-center items-center">
              <img src="/steps-images/home.svg" alt="Home" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Mobile Modal Component
export const MobileModal = ({
  setShowMobileModal,
  location,
  setLocation,
  MobileInputRef,
  formData,
  handleAreaChange,
  handleFloorsChange,
  handleAreaBlur,
  handleSubmit,
}) => {
  return createPortal(
    <div
      style={{ WebkitOverflowScrolling: "touch" }}
      className="fixed inset-0 bg-black/90 bg-opacity-50 z-[300] flex items-center justify-center p-4"
    >
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
              <SelectTrigger className="w-full relative z-10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent
                className="z-[500]"
                position="popper"
                // Ensure it renders above the modal
                sideOffset={4}
              >
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
                ref={MobileInputRef}
                type="text"
                // inputMode="numeric"
                // pattern="[0-9]*"
                value={formData.ground_floor_area}
                autoComplete="off"
                onChange={(e) => handleAreaChange(e.target.value)}
                onBlur={handleAreaBlur}
                className="flex-1"
                placeholder="2000"
                style={{ fontSize: "16px" }}
              />
              {/* <Input
                ref={MobileInputRef}
                type="tel" // Use text type to have better control
                inputMode="numeric"
                pattern="[0-9]*"
                value={formData.ground_floor_area}
                autoComplete="off"
                onChange={(e) => handleAreaChange(e.target.value)}
                className="flex-1"
                placeholder="2000"
                style={{ fontSize: "16px" }}
              /> */}
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
                disabled={formData.no_of_floors <= 1}
                className="h-8 w-8"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-sm text-gray-600 text-center px-4">
                {formData.no_of_floors} ({getFloorsText(formData.no_of_floors)})
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
    </div>,
    document.body
  );
};
