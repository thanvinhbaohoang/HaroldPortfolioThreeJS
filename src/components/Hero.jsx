import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="flex flex-col">
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Harold Than</span>
            </h1>
            
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I love Code, CAD, and Cryptography
            </p>
          </div>
          
          <div className="mt-8 z-10 ">
            <button class="relative inline-flex items-center justify-center p-0.5 mr-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <a href= "src/constants/Harold-College-CS-Resume.pdf" title="" download class="relative px-5 py-2.5 transition ease duration-75 hover:scale-105 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  My Resume
              </a>
            </button>

            <button class="relative inline-flex items-center justify-center p-0.5 mr-4 overflow-hidden text-sm font-medium  text-gray-900 rounded-lg group  group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white ">
              <a href="#contact" class="relative px-5 py-2.5 transition ease duration-75 hover:scale-105 bg-white dark:bg-gradient-to-br from-pink-500 to-orange-400 rounded-md group-hover:bg-opacity-0">
                  Let's Talk !
              </a>
            </button>
          </div>

        </div>



      </div>

      <ComputersCanvas />
   

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
