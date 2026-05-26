import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function MainPage() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay,
      },
    }),
  };

  const fadeDown = {
    hidden: { opacity: 0, y: -40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
      },
    }),
  };

  return (
    <div id="Main">
      <div className="relative flex min-h-screen overflow-hidden lg:min-h-[1022px]">
        <div className="relative z-10 flex w-full items-center justify-center px-6 py-24 font-heading lg:h-[1022px] lg:w-1/2 lg:block lg:px-0 lg:py-0">
          <div className="text-center lg:text-left">
            <motion.p
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              custom={0}
              className="text-[28px] leading-none font-[700] lg:absolute lg:top-[351px] lg:left-[150px] lg:text-[40px]"
            >
              Hi, I am
            </motion.p>

            <motion.p
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="mt-6 text-[42px] leading-[1.05] font-[700] lg:absolute lg:top-[463px] lg:left-[165px] lg:mt-0 lg:text-[60px] lg:leading-[0.95] lg:whitespace-nowrap"
            >
              Muhammad Hamzah
            </motion.p>

            <motion.p
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="mt-4 text-[18px] leading-none font-[800] text-[#909090] lg:absolute lg:top-[560px] lg:left-[165px] lg:mt-0 lg:text-[25px]"
            >
              Frontend Developer
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-[-192px] left-[850px] hidden h-[1400px] w-[1300px] rotate-[9.67deg] bg-black lg:block"
        />

        <div className="absolute top-0 left-0 z-20 w-full lg:left-auto lg:right-0 lg:w-1/2">
          <header className="flex items-center justify-center gap-4 px-3 py-6 text-center font-heading text-[12px] font-[700] text-black sm:gap-8 sm:px-6 sm:text-[14px] md:gap-10 md:px-8 md:text-[15px] lg:absolute lg:top-[40px] lg:left-[64px] lg:justify-start lg:gap-[80px] lg:px-0 lg:py-0 lg:text-[16px] lg:text-white xl:gap-[137px] xl:text-[17px]">
            <motion.a
              variants={fadeDown}
              initial="hidden"
              animate="visible"
              custom={0}
              whileHover={{ y: -3 }}
              href="#About"
              className="whitespace-nowrap"
            >
              About Me
            </motion.a>

            <motion.a
              variants={fadeDown}
              initial="hidden"
              animate="visible"
              custom={0.1}
              whileHover={{ y: -3 }}
              href="#Skills"
              className="whitespace-nowrap"
            >
              Skills
            </motion.a>

            <motion.a
              variants={fadeDown}
              initial="hidden"
              animate="visible"
              custom={0.2}
              whileHover={{ y: -3 }}
              href="#Portfolio"
              className="whitespace-nowrap"
            >
              Portfolio
            </motion.a>

            <motion.div
              variants={fadeDown}
              initial="hidden"
              animate="visible"
              custom={0.3}
              whileHover={{ scale: 1.05 }}
            >
              <Button
                asChild
                className="h-[34px] rounded-full bg-black px-3 text-[12px] font-[700] text-white hover:bg-[#222] sm:h-[40px] sm:px-5 sm:text-[14px] md:h-[42px] md:px-6 md:text-[15px] lg:h-[44px] lg:bg-white lg:text-[16px] lg:text-black xl:px-[32px] xl:text-[17px]"
              >
                <a href="#Contact">Contact Me</a>
              </Button>
            </motion.div>
          </header>
        </div>
      </div>

      <footer className="bg-[#1A1A1A] px-6 py-14 text-white md:px-[102px] md:py-[49px]">
        <div className="font-heading">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[24px] leading-none font-[700] tracking-[0.18em] uppercase md:text-[30px]"
          >
            IT BERRIES
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-[1148px] text-[14px] leading-[28px] font-[400]"
          >
            Motivated front-end developer with a strong focus on building
            responsive, user-friendly web applications using React and
            TypeScript. Skilled in writing clean, maintainable code and
            integrating REST APIs to create dynamic, data-driven interfaces.
            Eager to continue improving technical skills and contribute to
            real-world projects through teamwork and problem solving.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{
              scale: 1.05,
              letterSpacing: "0.15em",
            }}
            href="#About"
            className="mt-8 inline-block border-r border-l px-4 py-1 text-[14px] font-[600] tracking-[10%] uppercase"
          >
            Read More
          </motion.a>
        </div>
      </footer>
    </div>
  );
}

export default MainPage;
