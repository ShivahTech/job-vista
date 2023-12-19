import Image from "next/image";
import React from "react";

const TrustedBy = () => {
  return (
    <section className="lg:px-16 px-4 lg:pt-6 mx-auto">
      <div className="lg:pb-20 border-b border-gray-300">
        <h2 className="text-2xl text-center font-medium lg:mb-16">
          TRUSTED BY <span className="text-yellow-500">500+</span> COMPANIES
        </h2>
        <div className="flex items-center justify-between">
          <Image
            src={"/img/google.png"}
            alt={"trust_logo"}
            width={140}
            height={44}
          />
          <Image
            src={"/img/dribble.png"}
            alt={"trust_logo"}
            width={140}
            height={44}
          />
          <Image
            src={"/img/slack.png"}
            alt={"trust_logo"}
            width={140}
            height={44}
          />
          <Image
            src={"/img/vine.png"}
            alt={"trust_logo"}
            width={140}
            height={44}
          />
          <Image
            src={"/img/airbnb.png"}
            alt={"trust_logo"}
            width={140}
            height={44}
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
