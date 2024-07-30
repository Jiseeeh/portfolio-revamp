"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa6";

import { ProjectModel } from "@/models/ProjectModel";
import { Tag } from "@/components/ui/Tag";

const Project: React.FC<ProjectModel> = ({
  date,
  description,
  imageAlt,
  imageFileName,
  isUnderDevelopment,
  projectGithubLink,
  projectTags,
  title,
  source,
}) => {
  return (
    <section className="project-section">
      <div className=" h-full flex flex-col lg:flex-row lg:space-x-40 lg:justify-center lg:items-center handle-max-w">
        <h4 className="uppercase font-black text-5xl lg:[writing-mode:vertical-lr] lg:rotate-180 lg:text-center lg:w-5/12 lg:text-7xl xl:text-8xl xl:w-2/12">
          {title}
        </h4>
        <div className="flex flex-col space-y-2">
          <p className="text-xl lg:text-2xl">{description}</p>
          <p className="font-black uppercase">{date}</p>
          <div className="group relative self-start w-full">
            <Image
              className={`object-cover w-full max-h-72 xl:max-h-[25rem] rounded-sm ${
                source &&
                "group-hover:brightness-50 transition-all duration-500"
              }`}
              src={`/images/${imageFileName}`}
              quality={100}
              width={1200}
              height={520}
              alt={imageAlt}
            />
            {source && (
              <div className="absolute top-0 right-0 p-2 opacity-0 font-black group-hover:opacity-100 transition duration-300 ease-in-out">
                <span className="link">
                  <a href={source} target="_">
                    Source
                  </a>
                </span>
              </div>
            )}
          </div>
          {isUnderDevelopment ? (
            <p className="text-center text-2xl font-bold">
              Currently under development!
            </p>
          ) : (
            Array.isArray(projectTags) && (
              <div className="flex justify-center md:justify-start items-center mt-2 flex-wrap gap-3">
                {projectTags.map((tag) => {
                  return <Tag key={tag} content={tag} />;
                })}
                <a href={projectGithubLink} target="_">
                  <FaGithub className="size-10 cursor-pointer hover-translate-up" />
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export { Project };
