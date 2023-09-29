import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
export default function Navbar() {
  const whatsappNumber = "7899327800";
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/aboutus">About Us</a>
            </li>
            <li>
              <a href="/contactus">Contact Us</a>
            </li>
            <li>
              <a href="/aboutus">Our Services</a>
            </li>
          </ul>
        </div>
        <Image src="/logo.webp" alt="logo" height={40} width={30} href="/" />
        <a href="/" className="btn btn-ghost normal-case text-xl">
          Hob Service Center
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/aboutus">About Us</a>
          </li>
          <li>
            <a href="/contactus">Contact Us</a>
          </li>
          <li>
            <a href="/aboutus">Our Services</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:underline text-xl ml-2"
        >
          <FaWhatsapp className="inline-block mx-2 text-3xl" />
        </a>
      </div>
    </div>
  );
}
