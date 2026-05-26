import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import header from "../assets/portfolio.svg";
import { coded, workingOn } from "@/lib/portfolio";

const tabs = [
  { value: "all", label: "All", projects: [...coded, ...workingOn] },
  { value: "coded", label: "Coded", projects: coded },
  { value: "workingOn", label: "Working On", projects: workingOn },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

function ProjectGrid({ projects }: { projects: string[] }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project, index) => (
        <motion.div
          key={`${project}-${index}`}
          variants={item}
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden"
        >
          <img
            src={project}
            alt="Project"
            className="h-full w-full object-cover transition-transform duration-500"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

function Portfolio() {
  return (
    <div
      id="Portfolio"
      className="w-full overflow-hidden bg-[#1A1A1A] font-heading text-white"
    >
      <motion.header
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative w-full"
      >
        <img
          src={header}
          alt="Portfolio"
          className="h-auto w-full object-cover"
        />

        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center border-[3px] border-black px-4 py-2 text-center text-[12px] font-[700] tracking-[0.35em] text-black uppercase sm:px-6 sm:py-3 sm:text-[16px] md:border-[5px] md:px-8 md:py-4 md:text-[22px] lg:border-[8px] lg:px-12 lg:py-5 lg:text-[30px]"
        >
          PORTFOLIO
        </motion.p>
      </motion.header>

      <div className="pt-8">
        <Tabs defaultValue="all">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-[32px] flex justify-center px-4"
          >
            <TabsList
              variant="line"
              className="w-full max-w-[587px] justify-center gap-[20px] border-b border-white/30 bg-transparent sm:gap-[30px] md:gap-[45px] lg:w-[587px]"
            >
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="bg-transparent text-[12px] font-[600] text-[#7C7C7C] uppercase transition-all duration-300 hover:bg-transparent hover:text-white data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:after:bg-white sm:text-[14px]"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          {tabs.map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className="m-0 mt-[32px]"
            >
              <ProjectGrid projects={tab.projects} />
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <motion.footer
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-8 text-center"
      >
        <p className="text-[16px] font-[600] sm:text-[18px] md:text-[20px]">
          And many more to come!
        </p>
      </motion.footer>
    </div>
  );
}

export default Portfolio;
