"use client";
import React from "react";

const CardWall = () => {
  return (
    <>
      <hr class="dark:bg-gray-900"></hr>
      <h1 className="text-3xl font-semibold py-4 flex items-center justify-center bg-gray-100">
        Our Services
      </h1>
      <hr class="dark:bg-gray-900"></hr>
      <div className="flex justify-evenly flex-wrap gap-4 p-4 bg-gradient-to-b from-gray-100 to-transparent">
        {/* Card 1 */}
        <div className="w-96 card glass">
          <figure>
            <img src="/Chimney.jpg" alt="Chimney Repair" />
          </figure>
          <div className="card-body">
            <h2 className="card-title border-b-2 border-blue-900 pb-2">
              Chimney Repair Services
            </h2>
            <p>
              Is your chimney in need of repair or maintenance? Our expert
              technicians are here to help you with all your chimney repair
              needs.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-96 card glass">
          <figure>
            <img src="/Gas Stove Repair.jpg" alt="Gas Stove Repair" />
          </figure>
          <div className="card-body">
            <h2 className="card-title border-b-2 border-slate-500 pb-2">
              Gas Stove Repair
            </h2>
            <p>
              Is your gas stove in need of repair or maintenance? Our expert
              technicians are here to help you with all your gas stove repair
              needs.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-96 card glass">
          <figure>
            <img src="/In Build HobRepair.webp" alt="In-Built Hob Repair" />
          </figure>
          <div className="card-body">
            <h2 className="card-title border-b-2 border-green-500 pb-2">
              In-Built Hob Repair
            </h2>
            <p>
              Is your in-built hob in need of repair or maintenance? Our expert
              technicians are here to help you with all your in-built hob repair
              needs.
            </p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="w-96 card glass">
          <figure>
            <img src="/Microwave Repair.jpg" alt="Microwave Repair" />
          </figure>
          <div className="card-body">
            <h2 className="card-title border-b-2 border-red-500 pb-2">
              Microwave Repair
            </h2>
            <p>
              Is your microwave in need of repair or maintenance? Our expert
              technicians are here to help you with all your microwave repair
              needs.
            </p>
          </div>
        </div>
        {/* Card 5 */}
        <div className="w-96 card glass">
          <figure>
            <img src="/Inbuilt Oven Repair.jpg" alt="In-Built Oven Repair" />
          </figure>
          <div className="card-body">
            <h2 className="card-title border-b-2 border-purple-500 pb-2">
              In-Built Oven Repair
            </h2>
            <p>
              Is your in-built oven giving you trouble? Our skilled technicians
              specialize in in-built oven repair, ensuring your appliance works
              as good as new.
            </p>
          </div>
        </div>
        {/* Card 6 */}
        <div className="w-96 card glass">
          <figure>
            <img src="/Cooking Range Repair.webp" alt="Cooking Range Repair" />
          </figure>
          <div className="card-body">
            <h2 className="card-title border-b-2 border-yellow-500 pb-2">
              Cooking Range Repair
            </h2>
            <p>
              Are you experiencing issues with your cooking range? Our expert
              technicians specialize in cooking range repair, ensuring your
              appliance works flawlessly.
            </p>
          </div>
        </div>

        {/* Card n */}
        {/* <div className="w-96 card glass">
        <div className="w-96 card glass">
          <figure>
            <img src="/Cooking Range Repair.webp" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              // <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
};

export default CardWall;
