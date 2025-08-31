"use client";
import React, { useState } from "react";
import { Home, Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      {/* Main header */}
      <header className="w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <Link href={"/"} className="flex items-center space-x-2">
              <div className="flex items-center">
                <Image
                  src={"/radius-infra.svg"}
                  alt="radius-infra"
                  width={0}
                  height={0}
                  className="w-6 h-6"
                />
                <span className="ml-2 text-xl font-bold text-black tracking-tight">
                  Reidius Infra
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors font-medium"
              >
                All Projects
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors font-medium"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors font-medium"
              >
                Careers
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors font-medium"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors font-medium"
              >
                Learn
              </a>
            </nav>

            {/* Desktop Download Portfolio Button */}
            <div className="hidden md:flex">
              <Button
                variant="outline"
                className="flex items-center space-x-2 border-gray-200 hover:bg-gray-50 bg-white rounded-md px-4 py-2"
              >
                <div className="w-5 h-5 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded transform rotate-12 flex items-center justify-center shadow-sm">
                  <Download className="h-3 w-3 text-white" />
                </div>
                <span className="font-medium">Download Portfolio</span>
              </Button>
            </div>

            {/* Mobile Portfolio Button */}
            <div className="md:hidden flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-2 border-gray-200 hover:bg-gray-50 bg-white rounded-md px-3 py-2"
              >
                <div className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded transform rotate-12 flex items-center justify-center">
                  <Download className="h-2.5 w-2.5 text-white" />
                </div>
                <span className="text-sm font-medium">Portfolio</span>
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[300] md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/55" onClick={toggleMenu} />

          {/* Menu Panel */}
          <div className="fixed top-0 left-0 right-0 bg-black text-white transform transition-transform duration-300">
            <div className="px-4 py-4">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between mb-8">
                <Link
                  href={"/"}
                  className="flex items-center space-x-2"
                  onClick={toggleMenu}
                >
                  {/* <Home className="h-6 w-6 text-white" /> */}
                  <Image
                    src={"/radius-infra.svg"}
                    alt="radius-infra"
                    width={0}
                    height={0}
                    className="w-4 h-4"
                  />
                  <span className="text-xl font-bold text-white">
                    Reidius Infra
                  </span>
                </Link>
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-md hover:bg-gray-800 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="space-y-6">
                <a
                  href="#"
                  className="block text-2xl font-light text-gray-200 hover:text-white transition-colors py-2"
                  onClick={toggleMenu}
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="block text-2xl font-light text-gray-200 hover:text-white transition-colors py-2"
                  onClick={toggleMenu}
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block text-2xl font-light text-gray-200 hover:text-white transition-colors py-2"
                  onClick={toggleMenu}
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="block text-2xl font-light text-gray-200 hover:text-white transition-colors py-2"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="block text-2xl font-light text-gray-200 hover:text-white transition-colors py-2"
                  onClick={toggleMenu}
                >
                  Learn
                </a>
              </nav>

              {/* Mobile Portfolio Button */}
              <div className="mt-12">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center space-x-3 border-gray-600 hover:bg-gray-800 bg-transparent text-white rounded-md py-4"
                  onClick={toggleMenu}
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded transform rotate-12 flex items-center justify-center">
                    <Download className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg font-medium">Portfolio</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// export const Header = () => {
//   return (
//     <div className="w-full mb-2 md:mb-10 ">
//       {/* Main header */}
//       <header className="w-full bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo/Brand */}
//             <Link href={"/"} className="flex items-center space-x-2">
//               <Home className="h-6 w-6 text-black" />
//               <span className="text-xl font-semibold text-black">
//                 Reidius Infra
//               </span>
//             </Link>

//             {/* Navigation */}
//             <nav className="hidden md:flex items-center space-x-8">
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-black transition-colors"
//               >
//                 All Projects
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-black transition-colors"
//               >
//                 About Us
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-black transition-colors"
//               >
//                 Contact
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-black transition-colors"
//               >
//                 Learn
//               </a>
//             </nav>

//             {/* Download Portfolio Button */}
//             <Button
//               variant="outline"
//               className="flex items-center space-x-2 border-gray-300 hover:bg-gray-50 bg-transparent"
//             >
//               <div className="w-5 h-5 bg-yellow-600 rounded transform rotate-12 flex items-center justify-center">
//                 <Download className="h-3 w-3 text-white" />
//               </div>
//               <span>Download Portfolio</span>
//             </Button>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };
