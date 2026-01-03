import React from "react";
import ColouredLine from "./ColouredLine";
import MediaWall from "../public/2dFlatMediawall.png";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="mt-36 md:mt-64">
      <div className="grid grid-cols-1 md:grid-cols-2 text-center w-5/6 md:max-w-screen-lg gap-12 md:gap-28 mx-auto">
        <div className="mb-4">
          <div className="grid justify-start md:justify-start text-left">
            <h2 className="text-mediumAccent text-md font-semibold mb-2 ">
              WEST MIDLANDS BASED
            </h2>
            <h2 className="text-darkAccent text-xl font-bold ">
              Technology Enthusiasts
            </h2>
            <h2 className="text-mediumAccent text-xl font-bold mb-6">
              Commited To Service
            </h2>
          </div>
          <div className="w-3/4">
            <ColouredLine colour="red" />
          </div>
          <p className=" text-lg md:text-xl text-left text-darkAccent font-medium mt-16">
            Established in 2019, Bluephase Electrical was created to serve the
            local area of the west midlands and its surrounding counties. We
            take a very personal approach when it comes to business. As experts
            in the field of electrical installation we know how disruptive
            having major electrical work can be., so our business was designed
            with the number one goal of making it as stress free as possible.
            Whilst also responding to the needs of whats required of a home
            rewire in todays day and age
          </p>
        </div>

        <div className="mt-4">
          <Image
            src={MediaWall}
            alt="photo of media wall"
            placeholder="blur"
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
