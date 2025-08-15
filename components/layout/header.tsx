import { Download, Home } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-full mb-2 md:mb-10">
      {/* Main header */}
      <header className="w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <Link href={"/"} className="flex items-center space-x-2">
              <Home className="h-6 w-6 text-black" />
              <span className="text-xl font-semibold text-black">
                Reidius Infra
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-black transition-colors"
              >
                All Projects
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black transition-colors"
              >
                Learn
              </a>
            </nav>

            {/* Download Portfolio Button */}
            <Button
              variant="outline"
              className="flex items-center space-x-2 border-gray-300 hover:bg-gray-50 bg-transparent"
            >
              <div className="w-5 h-5 bg-yellow-600 rounded transform rotate-12 flex items-center justify-center">
                <Download className="h-3 w-3 text-white" />
              </div>
              <span>Download Portfolio</span>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};
