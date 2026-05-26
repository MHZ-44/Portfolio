import { motion } from "framer-motion";

import separator from "../assets/separatorBlack.png";
import design from "../assets/design.png";
import maintenance from "../assets/maintenance.png";
import development from "../assets/development.png";

const services = [
  {
    title: "Design",
    icon: design,
    rotate: -8,
    delay: 0.2,
    text: "I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.",
  },
  {
    title: "Development",
    icon: development,
    rotate: 8,
    delay: 0.4,
    text: "I can build responsive, user-friendly interfaces using React, TypeScript, and clean reusable components.",
  },
  {
    title: "Maintenance",
    icon: maintenance,
    rotate: -8,
    delay: 0.6,
    text: "I can improve existing pages, fix layout issues, and keep the code simple, readable, and easy to maintain.",
  },
];

function AboutMe() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
      },
    }),
  };

  const cardHover = {
    rest: {
      scale: 1,
      y: 0,
    },
    hover: {
      scale: 1.03,
      y: -8,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div
      id="About"
      className="overflow-hidden px-4 py-10 text-center font-heading md:px-8"
    >
      <p className="mx-auto flex w-fit items-center justify-center border-[4px] border-black px-6 py-3 text-[16px] font-[700] tracking-[0.35em] uppercase sm:px-10 sm:py-4 sm:text-[22px] md:border-[6px] md:px-14 md:py-5 md:text-[26px] lg:border-[8px] lg:px-20 lg:py-6 lg:text-[30px] mt-[71px]">
        ABOUT ME
      </p>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.2}
        className="mx-auto mt-10 w-full max-w-[763px] text-[14px] leading-[1.8] font-[400] md:mt-[71px] md:text-[15px]"
      >
        Software Engineering student at Yarmouk Private University (10/2021 -
        07/2026), with frontend development experience using React and
        TypeScript and building reusable components.
      </motion.p>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.4}
        whileHover={{
          scale: 1.08,
          letterSpacing: "0.2em",
        }}
        className="mx-auto mt-12 inline-flex h-[32px] w-[139px] cursor-pointer items-center justify-center border-r-2 border-l-2 border-black px-4 py-1 text-[14px] font-[700] tracking-[10%] uppercase md:mt-[67px]"
      >
        Explore
      </motion.p>

      <motion.img
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto mt-14 w-full max-w-[170px] md:mt-[85px]"
        src={separator}
        alt="Separator"
      />

      <div className="mx-auto mt-16 w-full max-w-[1066px] md:mt-[108px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-[80px]">
          {services.slice(0, 2).map((service) => (
            <motion.div
              key={service.title}
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              className="mx-auto w-full max-w-[431px] text-left"
            >
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={service.delay}
                className="flex items-center gap-4"
              >
                <motion.img
                  whileHover={{ rotate: service.rotate, scale: 1.1 }}
                  className="h-[48px] w-auto md:h-[64px]"
                  src={service.icon}
                  alt={service.title}
                />

                <p className="text-[18px] leading-none font-[700] tracking-[0.18em] uppercase md:text-[22px]">
                  {service.title}
                </p>
              </motion.div>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={service.delay + 0.1}
                className="mt-4 text-justify text-[14px] leading-[1.7] font-[400] md:pl-[60px]"
              >
                {service.text}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:mt-[64px]">
          <motion.div
            variants={cardHover}
            initial="rest"
            whileHover="hover"
            className="w-full max-w-[431px] text-left"
          >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={services[2].delay}
              className="flex items-center gap-4"
            >
              <motion.img
                whileHover={{ rotate: services[2].rotate, scale: 1.1 }}
                className="h-[48px] w-auto md:h-[64px]"
                src={services[2].icon}
                alt={services[2].title}
              />

              <p className="text-[18px] leading-none font-[700] tracking-[0.18em] uppercase md:text-[22px]">
                {services[2].title}
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={services[2].delay + 0.1}
              className="mt-4 text-justify text-[14px] leading-[1.7] font-[400] md:pl-[60px]"
            >
              {services[2].text}
            </motion.p>
          </motion.div>
        </div>
      </div>

      <motion.img
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto mt-16 w-full max-w-[170px] md:mt-[80px]"
        src={separator}
        alt="Separator"
      />
    </div>
  );
}

export default AboutMe;
