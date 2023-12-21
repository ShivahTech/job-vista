import React from "react";

const HowItWorks = () => {
  return (
    <>
      <section className="lg:px-16 px-4 lg:mb-24 max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="title_font text-center text-6xl font-semibold text-gray-700 relative  how_work">
            <span className="bg-white px-6">How it's Work?</span>
          </h2>
        </div>

        <div className="flex items-center justify-between  border-b border-gray-300">
          <div className="flex flex-col items-center justify-center pb-14 border-b-2 border-transparent hover:border-b-2 hover:border-yellow-500 transition-all">
            <div className="bg-yellow-300 rounded-lg px-3 py-2 font-semibold mb-7">
              01
            </div>
            <h2 className="font-semibold text-2xl mb-4">Create Account</h2>
            <p className="font-light text-center">
              It’s very easy to open an account and start your journey.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center pb-14 border-b-2 border-transparent hover:border-b-2 hover:border-yellow-500 transition-all">
            <div className="bg-yellow-300 rounded-lg px-3 py-2 font-semibold mb-7">
              02
            </div>
            <h2 className="font-semibold text-2xl mb-4">
              Complete your profile
            </h2>
            <p className="font-light text-center">
              Complete your profile with all the info to get attention of
              client.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center pb-14 border-b-2 border-transparent hover:border-b-2 hover:border-yellow-500 transition-all">
            <div className="bg-yellow-300 rounded-lg px-3 py-2 font-semibold mb-7">
              03
            </div>
            <h2 className="font-semibold text-2xl mb-4">Apply job or hire</h2>
            <p className="font-light text-center">
              Apply & get your preferable jobs with all the requirements and get
              it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
