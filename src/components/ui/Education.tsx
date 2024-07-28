"use client";

import Image from "next/image";

import { EducationModel } from "@/models/EducationModel";

const Education: React.FC<EducationModel> = ({
  id,
  date,
  description,
  imageFileName,
  imageAlt,
  imageSource,
  schoolName,
}) => {
  return (
    <div
      className={`flex flex-col p-4 md:items-center md:gap-2 ${
        id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="block md:hidden">
        <h5 className="text-2xl font-black">{schoolName}</h5>
        <span className="font-bold">{date}</span>
      </div>

      <div className="group w-full relative">
        <Image
          className="object-cover rounded-sm h-full w-full group-hover:brightness-50 transition-all duration-500"
          alt={imageAlt}
          src={`/images/${imageFileName}`}
          quality={100}
          width={560}
          height={350}
        />
        <div className="absolute top-0 right-0 p-2 opacity-0 font-black group-hover:opacity-100 transition duration-300 ease-in-out">
          <span className="link">
            <a href={imageSource} target="_">
              Source
            </a>
          </span>
        </div>
      </div>

      <div className="flex flex-col md:max-w-[60%]">
        <div className="hidden md:block">
          <h5 className="text-2xl font-black lg:text-4xl">{schoolName}</h5>
          <span className="font-bold">{date}</span>
        </div>
        <p className=" lg:text-xl">{description}</p>
      </div>
    </div>
  );
};

export { Education };
