"use client";
import Image from "next/image";
import React, { useState } from "react";
import ListingCard from "./ListingCard";
import { map } from "lodash";

const JobListing = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleBookmark = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const listing = [
    {
      src: "/img/youtube.png",
      type: "Fulltime",
      title: "Developer & expert in java c++",
      date: "18 Jul 2024",
      place: "Spain, Bercelona",
    },
    {
      src: "/img/hacker.png",
      type: "Part time",
      title: "Animator & Expert in maya 3D",
      date: "25 Jul 2024",
      place: "USA,New York",
    },
    {
      src: "/img/atica.png",
      type: "Part time",
      title: "Marketing Specialist in SEO & SMM",
      date: "25 Jan 2024",
      place: "USA,Alaska",
    },
    {
      src: "/img/fossa.png",
      type: "Fulltime",
      title: "Developer & expert in java c++",
      date: "10 Feb 2024",
      place: "USA,California",
    },
    {
      src: "/img/pine.png",
      type: "Fulltime",
      title: "Lead & Product Designer",
      date: "15 Feb 2024",
      place: "UK,London",
    },
  ];
  return (
    <>
      <section className="lg:px-16 px-4 lg:py-20 lg:mb-24 mx-auto bg-yellow-50">
        <div className="flex items-center justify-between lg:mb-20">
          <h2 className=" text-6xl font-medium">New job listing</h2>
          <div className="flex items-center justify-between">
            <p className="mr-7 text-yellow-600 font-semibold border-b-2 border-yellow-600 pb-1 text-lg cursor-pointer">
              All Categories
            </p>
            <p className="mr-7 text-black font-semibold text-lg cursor-pointer">
              Design
            </p>
            <p className="mr-7 text-black font-semibold text-lg cursor-pointer">
              Developer
            </p>
            <p className="mr-7 text-black font-semibold text-lg cursor-pointer">
              Marketing
            </p>
            <p className="text-black font-semibold text-lg cursor-pointer">
              Business
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-stretch justify-between">
          {map(listing, (item: any, index: any) => (
            <ListingCard
              src={item.src}
              jobType={item.type}
              jobTitle={item.title}
              date={item.date}
              place={item.place}
              key={index}
              isBookmark={activeIndex === index}
              toggle={() => handleBookmark(index)}
            />
          ))}
          <div className="bg-yellow-300 px-9 py-6 rounded-xl mb-10 lg:w-[361px] relative hover:-translate-y-2 listing_last">
            <h3 className="text-7xl title_font mb-5">13k+</h3>
            <h3 className="text-xl font-medium">Job already posted</h3>
            <div className="absolute right-9 bottom-9">
              <button
                type="button"
                className="border border-gray-700 rounded-full px-4 py-3 listing_last_btn"
              >
                <i className="fa fa-arrow-right text-4xl -rotate-45"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobListing;
