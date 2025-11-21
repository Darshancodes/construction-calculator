"use client";
import {
  Clock,
  CreditCard,
  Headphones,
  Home,
  Shield,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

// Why Choose Section Component
export function WhyChooseSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why People Choose Reidius
          </h2>
          <p className="text-gray-600 text-lg">Unlike local contractors, we:</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-row items-center gap-4 text-left">
            <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center flex-shrink-0">
              <Image
                src={"/icons/clock-loader.svg"}
                alt="radius-infra"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Charge a flat service fee
            </h3>
          </div>

          <div className="flex flex-row items-center gap-4 text-left">
            <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center flex-shrink-0">
              <Image
                src={"/icons/gpp-bad.svg"}
                alt="clock-loader"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Guarantee no hidden costs
            </h3>
          </div>

          <div className="flex flex-row items-center gap-4 text-left">
            <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center flex-shrink-0">
              <Image
                src={"/icons/multiple-sheet.svg"}
                alt="clock-loader"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Work with complete transparency
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section Component
export function CTASection() {
  const backgroundImageUrl = "/cta-images/map-image.svg";
  return (
    <section className="py-20   text-white relative overflow-hidden">
      <div className="absolute inset-0 ">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),  url(${backgroundImageUrl})`,
          }}
        ></div>
      </div>
      <div className="max-w-5xl w-full mx-auto  relative z-10 flex justify-between items-end">
        <div className="flex flex-col items-start">
          <h2 className="text-3xl md:text-3xl font-bold mb-4 w-1/2">
            <span>Join our referral network, </span>
            <span>help people build their dream homes</span>
          </h2>
          <p className="text-xl mb-8 italic text-gray-100">
            Create a reliable income stream for yourself.
          </p>
        </div>
        <button className="bg-white text-gray-900 px-1  py-3 rounded hover:bg-gray-100 transition font-semibold">
          Refer now
        </button>
      </div>
    </section>
  );
}

// Footer Component
export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src={"/radius-infra.svg"}
                alt="radius-infra"
                width={0}
                height={0}
                className="w-6 h-6 "
              />
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Architectural design-based construction company
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Email: mail@reidiusinfra.com
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Contact: +91 9057344344
            </p>
            <div className="flex space-x-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-gray-300 rounded-full"></div>
              ))}
            </div>
          </div>
          <div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  All Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Architecture
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Kitchen design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Interior design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Construction
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Learn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 inline-flex items-center"
                >
                  Book{" "}
                  <span className="ml-1 bg-yellow-300 text-xs px-2 py-0.5 rounded font-semibold">
                    FREE
                  </span>{" "}
                  Appointment now →
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  💳 Payment
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  FAQs
                </a>
              </li>
              <li>
                <button className="flex items-center space-x-2 px-3 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50 text-sm">
                  <span>📋</span>
                  <span>Download Portfolio</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

// How It Works Section Component
export function HowItWorksSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Network nodes with positions distributed around all sides and connections
  const networkNodes = [
    { id: 1, x: 0.2, y: 0.15, connections: [5, 7] }, // top-left
    { id: 2, x: 0.8, y: 0.1, connections: [1, 8] }, // top-right
    { id: 3, x: 0.05, y: 0.4, connections: [4, 6] }, // far left
    { id: 4, x: 0.15, y: 0.7, connections: [3, 6, 7] }, // bottom-left
    { id: 5, x: 0.5, y: 0.5, connections: [9, 2, 8] }, // center
    { id: 6, x: 0.35, y: 0.75, connections: [5, 4, 7] }, // bottom-middle
    { id: 7, x: 0.65, y: 0.7, connections: [1, 4, 6] }, // bottom-right
    { id: 8, x: 0.95, y: 0.45, connections: [9, 5] }, // far right
    { id: 9, x: 0.75, y: 0.25, connections: [8, 2] }, // top-right area
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.fillStyle = "#fffef0";
    ctx.fillRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = 0;
    const maxRadius = Math.min(width, height) - 20;

    // Draw concentric circles
    ctx.strokeStyle = "#fef08a";
    ctx.lineWidth = 2;
    for (let i = 1; i <= 3; i++) {
      const radius = (maxRadius / 3) * i;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Draw connection lines
    ctx.strokeStyle = "#fef08a";
    ctx.lineWidth = 2;
    const drawnConnections = new Set<string>();

    networkNodes.forEach((node) => {
      node.connections.forEach((connectedId) => {
        const connectedNode = networkNodes.find((n) => n.id === connectedId);
        if (connectedNode) {
          const key = `${Math.min(node.id, connectedId)}-${Math.max(
            node.id,
            connectedId
          )}`;
          if (!drawnConnections.has(key)) {
            const x1 = centerX + node.x * maxRadius * 2 - maxRadius;
            const y1 = centerY + node.y * maxRadius * 2 - maxRadius;
            const x2 = centerX + connectedNode.x * maxRadius * 2 - maxRadius;
            const y2 = centerY + connectedNode.y * maxRadius * 2 - maxRadius;

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            drawnConnections.add(key);
          }
        }
      });
    });
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">How It Works</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex">
            {/* Numbers column with connecting line */}
            <div className="flex-shrink-0 flex flex-col items-center mr-4">
              <div className="w-12 h-12 bg-black text-white rounded flex items-center justify-center font-bold text-lg relative overflow-hidden">
                <span className="relative z-10">01</span>
              </div>
              <div className="w-0.5 flex-1 relative my-2">
                <div
                  className="absolute inset-0 bg-black"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)" }}
                ></div>
                <div
                  className="absolute inset-0 bg-yellow-300"
                  style={{
                    clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
                  }}
                ></div>
              </div>
              <div className="w-12 h-12 bg-yellow-300 text-gray-900 rounded flex items-center justify-center font-bold text-lg">
                02
              </div>
              <div className="w-0.5 flex-1 bg-yellow-300 my-2"></div>
              <div className="w-12 h-12 bg-yellow-300 text-gray-900 rounded flex items-center justify-center font-bold text-lg">
                03
              </div>
              <div className="w-0.5 flex-1 bg-yellow-300 my-2"></div>
              <div className="w-12 h-12 bg-yellow-300 text-gray-900 rounded flex items-center justify-center font-bold text-lg">
                04
              </div>
            </div>

            {/* Content column */}
            <div className="flex-1 flex flex-col space-y-8">
              <div className="border border-gray-300 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2">
                  Sign up with Reidius Infra
                </h3>
                <p className="text-gray-600">
                  Share your name and phone number.
                </p>
              </div>
              <div className="border border-gray-300 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2">
                  Refer someone you know
                </h3>
                <p className="text-gray-600">
                  Add their basic details & submit.
                </p>
              </div>
              <div className="border border-gray-300 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2">
                  We take care of the rest
                </h3>
                <p className="text-gray-600">
                  From pricing to discussions, everything is handled by our
                  team.
                </p>
              </div>
              <div className="border border-gray-300 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2">You Get Rewarded</h3>
                <p className="text-gray-600 mb-2">
                  Once they sign the agreement, your commission is credited.
                </p>
                <a
                  href="#"
                  className="text-sm underline text-gray-900 hover:text-gray-600"
                >
                  See the payout & detailed reward structure
                </a>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-8 flex flex-col">
            {/* Semicircle network visualization at top */}
            <div className="relative w-full mb-8 overflow-hidden rounded-b-lg">
              {/* Network canvas background - clipped to show only top half */}
              <canvas
                ref={canvasRef}
                width={400}
                height={250}
                className="w-full max-w-md mx-auto"
              />

              {/* User avatars positioned over canvas */}
              <div className="absolute inset-0 flex items-start justify-center pt-0">
                <div
                  className="relative w-full max-w-md"
                  style={{ aspectRatio: "400/250" }}
                >
                  {/* Center hub icon */}
                  <div className="absolute top-0 left-1/2 z-10 w-12 h-12 rounded-md flex items-center justify-center -translate-x-1/2">
                    <Image
                      src={"/radius-infra.svg"}
                      alt="radius-infra"
                      width={0}
                      height={0}
                      className="w-6 h-6"
                    />
                  </div>

                  {/* User avatars - filtered to show only top half */}
                  {networkNodes
                    .filter((node) => node.y <= 0.5)
                    .map((node) => {
                      const x = node.x * 100;
                      const y = node.y * 100;
                      return (
                        <div
                          key={node.id}
                          className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 z-20"
                          style={{ left: `${x}%`, top: `${y}%` }}
                        >
                          <img
                            src={`/icons/user-1.svg`}
                            alt={`User ${node.id}`}
                            className="w-full h-full rounded-full border-4 border-white shadow-lg object-cover"
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>

            {/* Stats section */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <p className="text-sm text-gray-600 mb-2">Already distributed</p>
              <p className="text-5xl font-bold text-gray-900 mb-2">
                ₹30.4 Lakh
              </p>
              <p className="text-sm text-gray-600 mb-8 text-center">
                in referral payouts last year (300+ partners network)
              </p>

              {/* CTA Button */}
              <button className="w-full bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition inline-flex items-center justify-center space-x-2">
                <span>Start referring</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// <div className="">
//             <div className="flex space-x-4 space-y-2">
//               <div className="flex-shrink-0 flex flex-col items-center">
//                 <div className="w-12 h-12 bg-black text-white rounded flex items-center justify-center font-bold text-lg relative overflow-hidden">
//                   <span className="relative z-10">01</span>
//                   <div
//                     className="absolute inset-0 bg-yellow-300"
//                     style={{
//                       clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
//                     }}
//                   ></div>
//                 </div>
//                 <div className="w-0.5 h-8 bg-yellow-300"></div>
//               </div>
//               <div className="flex-1 border border-black rounded-lg p-2">
//                 <h3 className="text-xl font-bold mb-2">
//                   Sign up with Reidius Infra
//                 </h3>
//                 <p className="text-gray-600">
//                   Share your name and phone number.
//                 </p>
//               </div>
//             </div>
//             <div className="flex space-x-4 ">
//               <div className="flex-shrink-0 flex flex-col items-center ">
//                 {/* <div className="w-0.5 h-8 bg-yellow-300"></div> */}
//                 <div className="w-12 h-12 bg-yellow-300 text-gray-900 rounded flex items-center justify-center font-bold text-lg">
//                   02
//                 </div>
//                 <div className="w-0.5 h-8 bg-yellow-300"></div>
//               </div>
//               <div className="flex-1  border border-black rounded-lg p-2 ">
//                 <h3 className="text-xl font-bold mb-2">
//                   Refer someone you know
//                 </h3>
//                 <p className="text-gray-600">
//                   Add their basic details & submit.
//                 </p>
//               </div>
//             </div>
//             <div className="flex space-x-4 ">
//               <div className="flex-shrink-0 flex flex-col items-center">
//                 <div className="w-12 h-12 bg-yellow-300 text-gray-900 rounded flex items-center justify-center font-bold text-lg">
//                   03
//                 </div>
//                 <div className="w-0.5 h-8 bg-yellow-300"></div>
//               </div>
//               <div className="flex-1 border border-black rounded-lg p-2 ">
//                 <h3 className="text-xl font-bold mb-2">
//                   We take care of the rest
//                 </h3>
//                 <p className="text-gray-600">
//                   From pricing to discussions, everything is handled by our
//                   team.
//                 </p>
//               </div>
//             </div>
//             <div className="flex space-x-4 ">
//               <div className="flex-shrink-0 flex flex-col items-center">
//                 <div className="w-12 h-12 bg-yellow-300 text-gray-900 rounded flex items-center justify-center font-bold text-lg">
//                   04
//                 </div>
//               </div>
//               <div className="flex-1 border border-black rounded-lg p-2 ">
//                 <h3 className="text-xl font-bold mb-2">You Get Rewarded</h3>
//                 <p className="text-gray-600 mb-2">
//                   Once they sign the agreement, your commission is credited.
//                 </p>
//                 <a
//                   href="#"
//                   className="text-sm underline text-gray-900 hover:text-gray-600"
//                 >
//                   See the payout & detailed reward structure
//                 </a>
//               </div>
//             </div>
//           </div>

{
  /* <div className="space-y-8">
            <div className="flex space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded flex items-center justify-center font-bold text-lg">
                01
              </div>
              <div className="flex-1 border border-gray-300 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2">
                  Sign up with Reidius Infra
                </h3>
                <p className="text-gray-600">
                  Share your name and phone number.
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-300 text-gray-900 rounded flex items-center justify-center font-bold text-lg">
                02
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">
                  Refer someone you know
                </h3>
                <p className="text-gray-600">
                  Add their basic details & submit.
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-300 text-gray-900 rounded flex items-center justify-center font-bold text-lg">
                03
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">
                  We take care of the rest
                </h3>
                <p className="text-gray-600">
                  From pricing to discussions, everything is handled by our
                  team.
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-300 text-gray-900 rounded flex items-center justify-center font-bold text-lg">
                04
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">You Get Rewarded</h3>
                <p className="text-gray-600 mb-2">
                  Once they sign the agreement, your commission is credited.
                </p>
                <a
                  href="#"
                  className="text-sm underline text-gray-900 hover:text-gray-600"
                >
                  See the payout & detailed reward structure
                </a>
              </div>
            </div>
          </div> */
}
// <div className="bg-yellow-50 rounded-lg p-8 flex flex-col items-center justify-center">
//             <div className="relative w-full mb-8 overflow-hidden rounded-b-lg">
//               {/* Network canvas background */}
//               <canvas
//                 ref={canvasRef}
//                 width={400}
//                 height={350}
//                 className="w-full max-w-md mx-auto"
//               />

//               {/* User avatars positioned over canvas */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div
//                   className="relative w-full max-w-md"
//                   style={{ aspectRatio: "400/350" }}
//                 >
//                   {/* Center hub icon */}
//                   <div className="absolute top-1/2 left-1/2 z-10 w-12 h-12  rounded-md flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
//                     <Image
//                       src={"/radius-infra.svg"}
//                       alt="radius-infra"
//                       width={0}
//                       height={0}
//                       className="w-6 h-6 "
//                     />
//                   </div>

//                   {/* User avatars */}
//                   {networkNodes.map((node) => {
//                     const x = node.x * 100;
//                     const y = node.y * 100;
//                     return (
//                       <div
//                         key={node.id}
//                         className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 z-20"
//                         style={{ left: `${x}%`, top: `${y}%` }}
//                       >
//                         <img
//                           src={`/icons/user-1.svg`}
//                           alt={`User ${node.id}`}
//                           className="w-full h-full rounded-full border-4 border-white shadow-lg object-cover"
//                         />
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>

//             {/* Stats section */}
//             <p className="text-sm text-gray-600 mb-2">Already distributed</p>
//             <p className="text-5xl font-bold text-gray-900 mb-2">₹30.4 Lakh</p>
//             <p className="text-sm text-gray-600 mb-8 text-center">
//               in referral payouts last year (300+ partners network)
//             </p>

//             {/* CTA Button */}
//             <button className="w-full bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition inline-flex items-center justify-center space-x-2">
//               <span>Start referring</span>
//               <span>→</span>
//             </button>
//           </div>

// Main Hero Section
export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white pt-16 pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}

        {/* Hero Content */}
        <div className="text-center py-12">
          <div className="inline-flex items-center space-x-2 bg-yellow-300 px-4 py-2 rounded-full mb-8">
            <Users size={20} />
            <span className="font-medium text-gray-900">
              Reidius Referral program
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            We Build, You Earn!
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Turn your family, friends, and clients into happy homeowners – and
            earn a steady income while doing it.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition inline-flex items-center space-x-2">
            <span>Start referring</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

// Additional Benefits Section
export function AdditionalBenefitsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block w-32 h-px bg-gray-300 mb-4"></div>
          <h3 className="text-2xl font-bold text-gray-900">
            Additional benefits
          </h3>
          <div className="inline-block w-32 h-px bg-gray-300 mt-4"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg mb-4">
              <Image
                src={"/icons/add-card.svg"}
                alt="radius-infra"
                width={0}
                height={0}
                className="w-6 h-6 "
              />
            </div>
            <h4 className="text-lg font-semibold text-gray-900">
              Advance payment
            </h4>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg mb-4">
              <Image
                src={"/icons/headset.svg"}
                alt="radius-infra"
                width={0}
                height={0}
                className="w-6 h-6 "
              />
            </div>
            <h4 className="text-lg font-semibold text-gray-900">
              Dedicated support
            </h4>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg mb-4">
              <Image
                src={"/icons/family-grp.svg"}
                alt="radius-infra"
                width={0}
                height={0}
                className="w-6 h-6 "
              />
            </div>
            <h4 className="text-lg font-semibold text-gray-900">
              Excellent customer satisfaction
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

// Hero with Background Image Section
export function HeroWithImageSection() {
  const backgroundImage = "/cta-images/referral.svg";
  const divStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${backgroundImage})`,
    backgroundSize: "cover", // Adjust as needed (cover, contain, auto)
    backgroundPosition: "center", // Adjust as needed (top, bottom, left, right, center)
    backgroundRepeat: "no-repeat", // Adjust as needed (repeat, repeat-x, repeat-y, no-repeat)
    minHeight: "300px", // Example height
    width: "100%", // Example width
    clipPath:
      "path('M0 0 Q50% 8% 100% 0 L100% 100% L0 100% Z')" /* deeper inward curve */,
    // clipPath: "path('M0 0 Q50% 12% 100% 0 L100% 100% L0 100% Z')",
    // WebkitClipPath: "path('M0 0 Q50% 12% 100% 0 L100% 100% L0 100% Z')",
  };
  return (
    <section className="relative w-full min-h-96">
      {/* <div className="absolute inset-0 bg-cover bg-center" style={divStyle}> */}
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "360px",
          width: "100%",
          zIndex: 0,
        }}
      />

      {/* SVG overlay for inward top curve */}
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full block"
        style={{
          height: "80px", // Adjust curve depth
          zIndex: 1, // above background but below content
        }}
        aria-hidden="true"
      >
        <path
          d="M0,0 L1200,0 L1200,40 C950,100 250,100 0,40 Z"
          fill="#ffffff"
        />
      </svg>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-20 opacity-75">
        <div className="text-white max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Earn Big with Every Referral
          </h2>
          <p className="text-5xl md:text-6xl font-bold mb-4">
            Make up to ₹5 Lakh per month* just by referring.
          </p>
          <p className="text-lg mb-2">
            You get 10% of the management fee on every successful project.
          </p>
          <p className="text-sm mb-6">
            Example: On a ₹299/sq ft project, you earn around ₹29.9/sq ft.
          </p>
          <button className="bg-white text-gray-900 px-6 py-3 rounded hover:bg-gray-100 transition font-semibold">
            Show me the break-up
          </button>
          <p className="text-xs mt-4 ">
            *It depends on the number of projects and their total area
          </p>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
