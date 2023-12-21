import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <section className="lg:px-16 px-4 lg:py-10 mx-auto bg-yellow-100 ">
        <div className="flex items-start justify-between lg:mb-20 max-w-7xl mx-auto">
          <div>
            <Image
              src={"/img/Job_vista.png"}
              alt={"logo"}
              width={150}
              height={100}
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Services</h2>
            <p className="mb-2 text-lg cursor-pointer">Browse Jobs</p>
            <p className="mb-2 text-lg cursor-pointer">Companies</p>
            <p className="mb-2 text-lg cursor-pointer">Candidates</p>
            <p className=" text-lg cursor-pointer">Pricing</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Company</h2>
            <p className="mb-2 text-lg cursor-pointer">About Us</p>
            <p className="mb-2 text-lg cursor-pointer">Blogs</p>
            <p className="mb-2 text-lg cursor-pointer">FAQ's</p>
            <p className=" text-lgv">Contact</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Support</h2>
            <p className="mb-2 text-lg cursor-pointer">Terms of use</p>
            <p className="mb-2 text-lg cursor-pointer">Companies</p>
            <p className="mb-2 text-lg cursor-pointer">Candidates</p>
            <p className="text-lg cursor-pointer">Pricing</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Newsletter</h2>
            <p className="mb-3 text-lg font-medium">
              Join & get important new regularly
            </p>
            <div className="relative">
              <input
                className="mb-2 px-3 py-5 rounded-md w-full bg-slate-100 footer_input"
                type="text"
                placeholder="Enter your Email*"
              />
              <button
                type="button"
                className="bg-gray-500 z-10 px-4 py-2 rounded-md absolute right-3 top-3 font-semibold text-white hover:bg-gray-600"
              >
                Send
              </button>
            </div>
            <p className="text-lg">
              We only send interesting and relevant emails.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <p className="font-semibold text-lg mr-4 cursor-pointer">
              Privacy & Terms.
            </p>
            <p className="font-semibold text-lg cursor-pointer">Contact Us</p>
          </div>
          <p className="font-medium text-lg">Copyright @2023 JobVista inc.</p>
          <div>
            <i className="fa-brands fa-whatsapp mr-4 text-xl cursor-pointer"></i>
            <i className="fa-brands fa-facebook mr-4 text-xl cursor-pointer"></i>
            <i className="fa-brands fa-google mr-4 text-xl cursor-pointer"></i>
            <i className="fa-brands fa-instagram mr-4 text-xl cursor-pointer"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
