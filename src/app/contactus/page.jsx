import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { TiContacts } from "react-icons/ti";
function ContactUs() {
  const whatsappNumber = "7899327800"; // Your WhatsApp number

  return (
    <>
      <Navbar />

      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-center ">
              <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6 inline-flex items-center underline">
                <TiContacts size={30} className="mr-2" />
                Contact Us
              </h1>
            </div>
            <div className="mb-6 pb-6 border-b-2 border-gray-300">
              <h2 className="text-2xl font-semibold text-gray-800 underline">
                Contact Number
              </h2>
              <p className="text-lg text-gray-600">
                If you have any questions or need assistance, please don&apos;t
                hesitate to reach out to us.
              </p>
              <a
                href={`tel:${whatsappNumber}`}
                className="text-blue-500 hover:underline text-lg mt-2 inline-flex items-center"
              >
                <AiOutlinePhone size={20} className="mr-2" /> 789-932-7800
              </a>
            </div>
            <div className="mb-6 pb-6 border-b-2 border-gray-300">
              <h2 className="text-2xl font-semibold text-gray-800 underline">
                WhatsApp
              </h2>
              <p className="text-lg text-gray-600">
                We are on WhatsApp too. Chat with us:
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline text-xl ml-2"
                >
                  <FaWhatsapp className="inline-block mr-2 text-2xl" />
                  789-932-7800
                </a>
              </p>
            </div>
            <div className="mb-6 pb-6 border-b-2 border-gray-300">
              <h2 className="text-2xl font-semibold text-gray-800 underline">
                Email Address
              </h2>
              <p className="text-lg text-gray-600">
                Feel free to send us an email anytime. We&apos;ll get back to
                you as soon as possible.
              </p>
              <a
                href="mailto:centergasservice@gmail.com"
                className="text-blue-500 hover:underline text-lg mt-2 inline-flex items-center"
              >
                <AiOutlineMail className="mr-2" /> centergasservice@gmail.com
              </a>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 underline">
                Address
              </h2>
              <p className="text-lg text-gray-600">
                You can also visit our office at the following address:
              </p>
              <p className="text-lg text-gray-800 mt-2 flex items-center">
                <CiLocationOn size={20} className="mr-2" />
                Koramangla First Block 9cross, Bangalore Karnataka 560034
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
