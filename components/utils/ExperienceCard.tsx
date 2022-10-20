import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../../sanity";
import {Experience} from "../../typings";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({experience}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 
   w-[400px] md:w-[700px] md:h-[550px] xl:w-[1000px] xl:h-[580px] sm:h-[150px] sm:w-[150px] snap-center light:bg-[#8f8d8d] dark:bg-[#292929]  p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-20 h-20 rounded-full sm:w-[100px] sm:h-[100px] xl:w-[200px] xl:h-[200px] md:w-[100px] md:h-[100px]  object-cover object-center"
        src={urlFor(experience.companyImage).url()}
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light ">{experience?.company}</h4>
        <p className="font-bold text-2xl mt-1 ">{experience?.jobTitle}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img key={technology?._id}
              className="w-8 h-8 rounded-full object-cover object-center"
              src={urlFor(technology?.image).url()}
              />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg max-h-96 overflow-y-scroll pr-5 
        scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
