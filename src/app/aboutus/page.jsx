import React from "react";
import Navbar from "../components/Navbar";
import CardWall from "../components/CardWall";
import FooterComponent from "../components/Footer";

function Page() {
  return (
    <>
      <Navbar />
      <header className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 mx-4">
            Gas Stove Repair & Services in Delhi Ncr, Bangalore, hyderabad
          </h1>
          <p className="text-lg mb-8 mx-4">
            Your Trusted Partner for Gas Stove Solutions
          </p>
        </div>
      </header>
      <section className="bg-white py-12">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-8 mx-4 p-4 bg-gray-100 rounded-lg text-gray-700">
            Are you facing issues with your gas stove, hob, or cooking range?
            Look no further!
          </p>
          <p className="text-lg mt-8 mx-4 p-4 bg-gray-100 rounded-lg text-gray-700">
            We understand the importance of a fully functional kitchen, and our
            team of experts is dedicated to ensuring your kitchen appliances
            work seamlessly. With our gas stove repair and services, you can
            enjoy hassle-free cooking and peace of mind.
          </p>
          <p className="text-lg mt-8 mx-4 p-4 bg-gray-100 rounded-lg text-gray-700">
            Our commitment to excellence means you can trust us for efficient
            and reliable gas stove repair, hob repair, and more. We serve the
            Saraipalya area in Bangalore, India, and are just a call away from
            transforming your kitchen experience.
          </p>
          <p className="text-lg mt-8 mx-4 p-4 bg-gray-100 rounded-lg text-gray-700">
            Don&apos;t let a malfunctioning gas stove disrupt your daily
            routine. Contact us today to schedule a service, and let us take
            care of your kitchen appliances, so you can focus on what you do
            best - cooking delicious meals for your loved ones.
          </p>
        </div>
      </section>
      <CardWall />
      <FooterComponent />
    </>
  );
}

export default Page;
