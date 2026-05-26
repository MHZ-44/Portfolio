import { motion } from "framer-motion";
import { Learning, OtherSkills, UsingNow } from "@/lib/skills";

const sections = [
  { title: "USING NOW:", skills: UsingNow, rotate: 5, titleDelay: 0.2 },
  { title: "LEARNING:", skills: Learning, rotate: -5, titleDelay: 0.3 },
  { title: "OTHER SKILLS:", skills: OtherSkills, rotate: 5, titleDelay: 0.4 },
];

function Skills() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
      },
    }),
  };

  const skillContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const skillItem = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div
      id="Skills"
      className="overflow-hidden px-4 py-10 text-center font-heading md:px-8"
    >
      <p className="mx-auto mt-[142px] flex w-fit items-center justify-center border-[4px] border-black px-6 py-3 text-[16px] font-[700] tracking-[0.35em] uppercase sm:px-10 sm:py-4 sm:text-[22px] md:border-[6px] md:px-14 md:py-5 md:text-[26px] lg:border-[8px] lg:px-20 lg:py-6 lg:text-[30px]">
        SKILLS
      </p>

      {sections.map((section, index) => (
        <div key={section.title}>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={section.titleDelay}
            className={`mx-auto w-full max-w-[1004px] text-left text-[22px] font-[700] tracking-[0.18em] uppercase md:text-[30px] ${
              index === 0 ? "mt-16 md:mt-[79px]" : "mt-20 md:mt-[90px]"
            }`}
          >
            {section.title}
          </motion.p>

          <motion.div
            variants={skillContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mt-14 grid w-full max-w-[1004px] grid-cols-2 justify-items-center gap-x-4 gap-y-10 sm:grid-cols-3 md:mt-[75px] md:grid-cols-4 md:gap-x-[157px] md:gap-y-[65px]"
          >
            {section.skills.map((skill) => (
              <motion.div
                variants={skillItem}
                whileHover={{ y: -10, scale: 1.05 }}
                key={skill.name}
                className="flex w-full max-w-[124px] flex-col items-center text-center"
              >
                <div className="flex h-[60px] items-center justify-center sm:h-[70px] md:h-[100px]">
                  <motion.img
                    whileHover={{ rotate: section.rotate, scale: 1.1 }}
                    src={skill.src}
                    alt={skill.name}
                    className="h-[50px] w-auto object-contain sm:h-[60px] md:h-[100px]"
                  />
                </div>

                <p className="mt-3 text-[13px] font-[400] tracking-[0.13em] sm:text-[14px] md:mt-[17px] md:text-[18px]">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
