"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Hero() {
  const router = useRouter();

  const handleContactUsClick = () => {
    // Use the router to navigate to the Contact Us page
    router.push("/contactus");
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content container mx-auto p-4 lg:p-8">
          <div className="lg:flex">
            <div className="lg:w-1/2 m-4 mb-0">
              <Image
                src="/gas-stove-home.webp"
                alt="Gas Stove Repair Service"
                // sizes="(max-width: 768px) 100vw"
                width={500}
                height={300}
              />
            </div>
            <div className="lg:w-1/2 lg:flex lg:flex-col justify-center">
              <div class="text-center pb-8">
                <h1 class="text-5xl font-extrabold text-indigo-800 tracking-wide">
                  <span class="gradient-text">Welcome to</span>
                </h1>
                <h2 class="text-3xl font-semibold text-gray-600 mb-4 gradient-text">
                  India Gas Stove Services
                </h2>
                <p class="text-lg text-gray-500">
                  Your Trusted Partner for Gas Stove Repairs
                </p>
              </div>

              <p className="text-lg mb-6">
                Welcome to India Gas Stove Services, your one-stop solution for
                Gas Stove Repair & Services, Hob Repair & Services, Gas Stove
                Burner Repair & Services, and more. We are dedicated to
                providing top-notch appliance repair services right at your
                doorstep.
              </p>
              <div className="flex justify-center items-center">
                <button
                  className="btn btn-primary bg-slate-800 border border-black text text-white "
                  onClick={handleContactUsClick}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
