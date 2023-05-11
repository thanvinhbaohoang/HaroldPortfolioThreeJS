import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 flex flex-col justify-center items-center text-neutral-400' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <div className="hover:-translate-y-1 hover:text-white font-semibold transition cursor-default">{technology.name}</div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
