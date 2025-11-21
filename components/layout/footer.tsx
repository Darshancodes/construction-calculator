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
      <footer className="bg-gray-100  py-12 md:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            {/* Company Info */}
            <div className="space-y-4 max-w-xs">
              <div className="flex items-center space-x-2">
                <div className="">
                  <Image
                    src="/radius-infra.svg"
                    width={10}
                    height={10}
                    alt="Construction workers with building plans"
                    className="object-cover rounded-lg w-8 "
                  />
                </div>
                <span className="text-xl font-semibold text-gray-900">
                  Reidius Infra
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Architectural design-based construction company
              </p>
              <div className="space-y-1 text-sm text-gray-600">
                <p>Email: mail@reidiusinfra.com</p>
                <p>Contact: +91 9057344344</p>
              </div>
              <div className="flex space-x-3 pt-2">
                {/* LinkedIn */}
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0A66C2">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient
                        id="instaGrad"
                        x1="0%"
                        y1="100%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#FFDC80" />
                        <stop offset="25%" stopColor="#F77737" />
                        <stop offset="50%" stopColor="#E1306C" />
                        <stop offset="75%" stopColor="#C13584" />
                        <stop offset="100%" stopColor="#5851DB" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#instaGrad)"
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                    />
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#FF0000">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                {/* Pinterest */}
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#E60023">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="flex flex-col md:flex-row flex-1 flex-wrap gap-12 md:gap-28 justify-end ">
              {/* Services Column */}
              <div className="space-y-3">
                <ul className="space-y-2 text-sm text-gray-800">
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

              {/* Company Column */}
              <div className="space-y-3">
                <ul className="space-y-2 text-sm text-gray-800">
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
                  <li className="pt-2">
                    <p className="text-sm text-gray-600">
                      Book{" "}
                      <span className="bg-yellow-300 px-1.5 py-0.5 rounded text-xs font-medium text-gray-900">
                        FREE
                      </span>
                    </p>
                    <a
                      href="#"
                      className="text-sm text-gray-900 font-medium hover:underline"
                    >
                      Appointment now →
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal Column */}
              <div className="space-y-3">
                <ul className="space-y-2 text-sm text-gray-800">
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 flex items-center gap-1"
                    >
                      <span className="text-gray-400">◇</span> Payment
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

                <div className="pt-4">
                  <button className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg transition-colors">
                    <div className="w-5 h-5 bg-yellow-400 rounded flex items-center justify-center">
                      <Download className="h-3 w-3 text-gray-900" />
                    </div>
                    <span className="text-sm text-gray-900 font-medium">
                      Download Portfolio
                    </span>
                  </button>
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
