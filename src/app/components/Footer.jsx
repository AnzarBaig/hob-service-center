"use client";

import { Footer } from "flowbite-react";

export default function FooterComponent() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            alt="Hob Service Center Logo"
            href="#"
            name="Hob Service Center"
            src="/logo.webp"
          />
          <Footer.LinkGroup className="flex items-center justify-center mt-4 sm:mt-0 sm:flex sm:space-x-4">
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <Footer.Link href="/aboutus">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="/contactus">Contact</Footer.Link>
            </div>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright by="Hob Service Center" href="/" year={2023} />
        {/* <p className="text-sm">The d</p> */}
      </div>
    </Footer>
  );
}
