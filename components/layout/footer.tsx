import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, Download } from "lucide-react";

export function Footer() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-6 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-center">
            {/* Left Image - Person relaxing */}
            <div className="relative">
              <div className="relative w-full h-80 lg:h-[400px]">
                <Image
                  src="/cta-images/owner.svg"
                  alt="Person relaxing on couch"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Center Content */}
            <div className="text-center space-y-8">
              <p className="text-sm text-gray-500 uppercase tracking-widest font-medium">
                SAY HELLO TO
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                The future of
                <br />
                <span className="text-gray-900">Hassle-Free</span>
                <br />
                Construction
              </h1>
              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-base font-medium">
                Learn more
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Right Image - Construction workers */}
            <div className="relative">
              <div className="relative w-full h-80 lg:h-[400px]">
                <Image
                  src="/cta-images/building.svg"
                  alt="Construction workers with building plans"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <Image
                src="/cta-images/engineer.svg"
                width={0}
                height={0}
                alt="Construction workers with building plans"
                className="object-cover rounded-lg w-24 absolute right-4 bottom-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="text-xl font-bold text-gray-900">
                  Reidius Infra
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Architectural design-based construction company
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Email: mail@reidiusinfra.com</p>
                <p>Contact: +91 9057944394</p>
              </div>
              <div className="flex space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gray-200 rounded-full"
                  ></div>
                ))}
              </div>
            </div>

            {/* Services Column 1 */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Services</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    All Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Architecture
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Kitchen design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Interior design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Construction
                  </a>
                </li>
              </ul>
            </div>

            {/* Services Column 2 */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Company</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Learn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal & Actions */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Legal</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Payment
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    FAQs
                  </a>
                </li>
              </ul>

              <div className="pt-4 space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Download className="h-4 w-4" />
                  <span className="text-gray-900 font-medium">
                    Download Portfolio
                  </span>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    Book{" "}
                    <span className="bg-yellow-200 px-1 rounded">FREE</span>
                  </p>
                  <a
                    href="#"
                    className="text-sm text-gray-900 font-medium hover:underline"
                  >
                    Appointment now →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// <section className="relative bg-gradient-to-br from-gray-100 to-gray-200 py-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-3 gap-8 items-center">
//             {/* Left Image */}
//             <div className="relative">
//               <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden">
//                 <Image
//                   src="/cta-images/owner.svg"
//                   alt="Person relaxing"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>

//             {/* Center Content */}
//             <div className="text-center space-y-6">
//               <p className="text-sm text-gray-600 uppercase tracking-wider">
//                 SAY HELLO TO
//               </p>
//               <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                 The future of
//                 <br />
//                 <span className="text-gray-800">Hassle-Free</span>
//                 <br />
//                 Construction
//               </h1>
//               <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full">
//                 Learn more
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
//             </div>

//             {/* Right Image */}
//             <div className="relative">
//               <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden">
//                 <Image
//                   src="/cta-images/building.svg"
//                   alt="Building"
//                   fill
//                   className="object-cover"
//                 />
//                 <Image
//                   src="/cta-images/engineer.svg"
//                   alt="Construction workers"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
