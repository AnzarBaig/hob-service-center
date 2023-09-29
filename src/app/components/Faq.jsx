"use client";

import { Accordion } from "flowbite-react";

export default function FAQAccordion() {
  return (
    <>
      <hr class="dark:bg-gray-900"></hr>
      <h1 className="text-3xl font-semibold py-4 flex items-center justify-center bg-gray-100">
        FAQ
      </h1>
      <hr class="dark:bg-gray-900"></hr>
      <div className="flex items-center justify-center">
        <div className="m-2 shadow-xl sm:w-3/4">
          {/* <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          Frequently Asked Questions (FAQ)
        </h2> */}
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title>
                How can I request a gas stove repair service?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Requesting a gas stove repair service is easy. You can either
                  book a service appointment through our website or call our
                  hotline. Our friendly customer support team will guide you
                  through the process and schedule a convenient appointment for
                  you.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                Which areas do you serve for gas stove services?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Our gas stove repair services are available in Delhi NCR,
                  Hyderabad, and Bangalore. We have a wide service network in
                  these regions to ensure quick and efficient service. If you
                  reside in these areas, got you covered for all your gas stove
                  needs.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                What is the typical turnaround time for gas stove repairs?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Our goal is to provide fast and reliable service. The
                  turnaround time for gas stove repairs usually depends on the
                  complexity of the issue. However, we strive to complete most
                  repairs on the same day of your appointment. Our technicians
                  come equipped to handle common issues efficiently.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            {/* Add more FAQ items below */}
            <Accordion.Panel>
              <Accordion.Title>
                Do you offer annual maintenance plans for gas stoves?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Yes, we offer annual maintenance plans for gas stoves. Our
                  maintenance plans are designed to keep your gas stove in
                  optimal condition throughout the year. You can choose from
                  different plans that include regular servicing and safety
                  checks to ensure your appliance works flawlessly.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                What safety measures should I follow with my gas stove?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Gas stoves require proper safety precautions. Make sure to
                  turn off the gas when not in use, check for gas leaks
                  regularly, and ensure proper ventilation in your kitchen.
                  Additionally, avoid using damaged or faulty stoves and contact
                  us for timely repairs to prevent accidents.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                Are your technicians certified and experienced?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Yes, all our technicians are certified and highly experienced
                  in gas stove repair and maintenance. They undergo regular
                  training to stay updated with the latest technologies and
                  safety standards. Rest assured, your gas stove is in capable
                  hands.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
    </>
  );
}
