import React from "react";

const FooterBanner = () => {
  return (
    <>
      <section className="footer_banner lg:px-16 px-4 lg:py-32 mx-auto relative">
        <div className="text-white flex items-center justify-between relative z-10">
          <h2 className="text-6xl font-medium">
            Complete job <br />
            portal for everyone.
          </h2>
          <div>
            <p className="text-2xl mb-10">
              Find your dream job & earn from all world <br />
              the leading brands.
            </p>
            <button className="border border-white rounded-md px-4 py-3 font-medium transition_all hover:bg-yellow-600 mr-4">
              Looking for job.
            </button>
            <button className="bg-yellow-600 rounded-md px-8 py-3 font-medium transition_all hover:bg-yellow-700 mr-4">
              Start Hiring
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterBanner;
