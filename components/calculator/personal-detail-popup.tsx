"use client";
import { SupabaseClient } from "@/api/client";
import { X } from "lucide-react";
import { useState } from "react";

export const PersonalDetailPopup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    accept_deals: true,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    phone_number: "",
  });

  const validateForm = () => {
    const newErrors = {
      name: "",
      phone_number: "",
    };

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Validate phone number
    if (!formData.phone_number.trim()) {
      newErrors.phone_number = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone_number.trim())) {
      newErrors.phone_number = "Please enter a valid 10-digit phone number";
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.phone_number;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    setLoading(true);
    setMessage("");
    // Handle form submission logic here
    try {
      const { data, error } = await SupabaseClient.from("user_details")
        .insert([formData])
        .select();

      if (error) {
        throw error;
      }

      setMessage("User details saved successfully!");
      setFormData({ name: "", phone_number: "", accept_deals: true });
      setErrors({ name: "", phone_number: "" });

      setIsOpen(false);
    } catch (error: any) {
      setMessage("Error: " + error.message);
      alert(error?.message);
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleReopenModal = () => {
    setIsOpen(true);
  };

  if (!isOpen) {
    return null; // Return nothing when closed
  }

  return (
    <div className="fixed inset-0 bg-black/90 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full mx-4 relative">
        {/* Modal content */}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Almost done..
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name field */}
            <div className="flex flex-col items-start">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Write your name"
                required
                className={`w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:outline-none transition-all ${
                  errors.name
                    ? "focus:ring-red-500 bg-red-50"
                    : "focus:ring-black"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Phone number field */}
            <div className="flex flex-col items-start">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone number
              </label>
              <div className="flex">
                <div className="flex items-center bg-gray-50 px-3 rounded-l-lg border-r border-gray-200">
                  <span className="text-gray-600 text-sm">+91</span>
                </div>
                <input
                  type="tel"
                  id="phone_number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  placeholder="Add your phone number"
                  className={`w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:outline-none transition-all ${
                    errors.phone_number
                      ? "focus:ring-red-500 bg-red-50"
                      : "focus:ring-black"
                  }`}
                  required
                />
              </div>
              {errors.phone_number && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone_number}
                </p>
              )}
            </div>

            {/* Checkbox */}
            <div className="flex items-start space-x-3 pt-2">
              <input
                type="checkbox"
                id="accept_deals"
                name="accept_deals"
                checked={formData.accept_deals}
                onChange={handleInputChange}
                className="mt-0.5 h-4 w-4 text-black bg-white border-gray-300 rounded focus:ring-black focus:ring-2"
              />
              <label
                htmlFor="accept_deals"
                className="text-sm text-gray-700 leading-5"
              >
                Yes, I'd love to receive exciting deals and updates!
              </label>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-black cursor-pointer text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 mt-6"
            >
              <span>Submit</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
