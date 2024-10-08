import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { socials } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const SocialCard = ({ index, title, icon,link }) => (
  <Tilt className='xs:w-[250px]'>
    <a href={link} target="_blank" rel="noopener noreferrer">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[180px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
    </a>
  </Tilt>
);

const Social = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Connect with me</p>
        <h2 className={styles.sectionHeadText}>Social.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {socials.map((social, index) => (
          <SocialCard key={social.title} index={index} link={social.link} {...social} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Social, "social");