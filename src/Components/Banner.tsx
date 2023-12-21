"use client";
import React, { useState } from "react";
import Image from "next/image";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Banner = () => {
  const [selectedOption, setSelectedOption] = useState<any>(null);
  return (
    <>
      <section className="banner_section w-full -mt-24 pt-[233px] pb-[350px]  px-8 mb-32 ">
        <div className="flex items-center justify-center flex-col relative max-w-7xl mx-auto">
          <h1 className="title_font text-[80px] font-medium text-center leading-tight heading_text">
            Find your job without <br /> any hassle.
          </h1>
          <p className="text-[21px] lg:mt-6 lg:mb-4 text-gray-600">
            Jobs & Job search. Find jobs in global. Executive jobs & work.
          </p>
          <div className="lg:px-28 mx-auto">
            <div className="banner_sub_box overview_banner lg:after:block after:hidden relative lg:mt-9 mt-6 flex lg:items-center lg:justify-center justify-start lg:flex-nowrap flex-wrap p-3 xl:mx-auto border-b border-solid border-slate-200 lg:mb-10 mx-4 bg-white lg:px-10 lg:py-4 rounded-xl text-center lg:mx-8 lg:flex-row flex-col">
              <div className="flex-1 lg:pr-0 pr-2 flex items-center justify-normal banner_box_inner lg:pb-0 pb-2 lg:w-auto w-full lg:me-14">
                <div className="flex items-start justify-center flex-col">
                  <label
                    htmlFor="category"
                    className="text-gray-400 font-medium"
                  >
                    Job Categories
                  </label>
                  <div className="App">
                    <Select
                      className="react_select max-w-7xl mx-auto"
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                      isSearchable={false}
                      placeholder="Category"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 lg:pr-0 pr-2 flex items-center justify-normal banner_box_inner  lg:pb-0 pb-2 lg:w-auto w-full lg:mr-14">
                <div className="flex items-start justify-center flex-col">
                  <label
                    htmlFor="category"
                    className="text-gray-400 font-medium"
                  >
                    Location
                  </label>
                  <div className="App">
                    <Select
                      className="react_select"
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                      placeholder="Category"
                      isSearchable={false}
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 lg:pr-0 pr-2 flex items-center justify-normal banner_box_inner  lg:pb-0 pb-2 lg:w-auto w-full lg:me-20">
                <div className="flex items-start justify-center flex-col">
                  <label
                    htmlFor="category"
                    className="text-gray-400 font-medium"
                  >
                    Keywords or Title
                  </label>
                  <div className="App">
                    <input
                      type="text"
                      className="banner_field"
                      placeholder="Design & Branding"
                    />
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="text-base font-semibold leading-6 text-gray-900 bg-yellow-300 py-3 px-5 rounded-md register_btn"
              >
                SEARCH
              </a>
            </div>
          </div>
          <Image
            className="absolute left-20 top-5 banner_four"
            src={"/img/business.png"}
            alt={"banner_logo"}
            width={110}
            height={96}
          />
          <Image
            className="absolute left-10 bottom-24 banner_two"
            src={"/img/design.png"}
            alt={"banner_logo"}
            width={90}
            height={90}
          />
          <Image
            className="absolute right-20 top-12 banner_three"
            src={"/img/art.png"}
            alt={"banner_logo"}
            width={80}
            height={80}
          />
          <Image
            className="absolute right-10 bottom-24 banner_four"
            src={"/img/ui_design.png"}
            alt={"banner_logo"}
            width={110}
            height={96}
          />
        </div>
      </section>
    </>
  );
};

export default Banner;
