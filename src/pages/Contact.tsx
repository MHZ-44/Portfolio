import { motion } from "framer-motion";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiMailLine,
} from "react-icons/ri";
import separator from "../assets/separatorBlack.png";
import top from "../assets/top.svg";

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

function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div
      id="Contact"
      className="overflow-hidden bg-white text-center font-heading text-black"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-4 pt-24 sm:px-6 md:px-8 lg:pt-32"
      >
        <p className="mx-auto flex w-fit items-center justify-center border-[4px] border-black px-6 py-3 text-[16px] font-[700] tracking-[0.35em] uppercase sm:px-10 sm:py-4 sm:text-[22px] md:border-[6px] md:px-14 md:py-5 md:text-[26px] lg:border-[8px] lg:px-20 lg:py-6 lg:text-[30px]">
          CONTACT
        </p>

        <p className="mx-auto mt-10 max-w-[763px] text-[14px] leading-relaxed font-[400] text-[#1A1A1A] sm:text-[15px] md:text-[16px]">
          Software Engineering student at Yarmouk Private University (10/2021 -
          07/2026), with frontend development experience using React and
          TypeScript and building reusable components.
        </p>

        <img
          className="mx-auto mt-6 w-[120px] sm:w-[140px]"
          src={separator}
          alt="Separator"
        />
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto mt-16 flex w-full max-w-[700px] flex-col gap-10 px-4 sm:px-6"
      >
        <Input
          placeholder="ENTER YOUR NAME*"
          className="h-[55px] rounded-none border-0 border-b-[4px] border-l-[4px] border-black bg-transparent px-5 text-[14px] font-[700] tracking-[0.08em] text-[#8A8A8A] placeholder:text-[#8A8A8A] transition-all duration-300 focus-visible:border-[#1A1A1A] focus-visible:ring-0 focus-visible:ring-offset-0 sm:text-[16px] md:text-[20px] lg:text-[24px]"
        />

        <Input
          placeholder="ENTER YOUR EMAIL*"
          className="h-[55px] rounded-none border-0 border-b-[4px] border-l-[4px] border-black bg-transparent px-5 text-[14px] font-[700] tracking-[0.08em] text-[#8A8A8A] placeholder:text-[#8A8A8A] transition-all duration-300 focus-visible:border-[#1A1A1A] focus-visible:ring-0 focus-visible:ring-offset-0 sm:text-[16px] md:text-[20px] lg:text-[24px]"
        />

        <Input
          placeholder="PHONE NUMBER"
          className="h-[55px] rounded-none border-0 border-b-[4px] border-l-[4px] border-black bg-transparent px-5 text-[14px] font-[700] tracking-[0.08em] text-[#8A8A8A] placeholder:text-[#8A8A8A] transition-all duration-300 focus-visible:border-[#1A1A1A] focus-visible:ring-0 focus-visible:ring-offset-0 sm:text-[16px] md:text-[20px] lg:text-[24px]"
        />

        <Textarea
          placeholder="YOUR MESSAGE*"
          className="min-h-[180px] rounded-none border-0 border-b-[4px] border-l-[4px] border-black bg-transparent px-5 py-4 text-[14px] font-[700] tracking-[0.08em] text-[#8A8A8A] placeholder:text-[#8A8A8A] transition-all duration-300 focus-visible:border-[#1A1A1A] focus-visible:ring-0 focus-visible:ring-offset-0 sm:text-[16px] md:text-[20px] lg:text-[24px]"
        />

        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="flex justify-center"
        >
          <Button
            type="submit"
            className="h-[50px] w-[180px] rounded-none border-0 border-r-[4px] border-l-[4px] border-black bg-transparent text-[14px] font-[700] tracking-[0.12em] text-black uppercase transition-all duration-300 hover:bg-black hover:text-white sm:w-[197px] sm:text-[16px]"
          >
            Submit
          </Button>
        </motion.div>
      </motion.form>

      <footer className="mt-20 bg-[#1A1A1A] px-4 py-16 text-center text-white sm:px-6">
        <motion.a
          whileHover={{ y: -4 }}
          href="#Main"
          className="mx-auto inline-flex flex-col items-center text-[13px] font-[700] tracking-[0.18em] uppercase sm:text-[15px]"
        >
          <img src={top} alt="Top" className="mb-2 h-[15px] w-[15px]" />
          BACK TO TOP
        </motion.a>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <motion.a
            whileHover={{ y: -4, scale: 1.08 }}
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <RiFacebookBoxLine className="h-[30px] w-[30px] sm:h-[35px] sm:w-[35px]" />
          </motion.a>

          <motion.a
            whileHover={{ y: -4, scale: 1.08 }}
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            <RiLinkedinBoxLine className="h-[30px] w-[30px] sm:h-[35px] sm:w-[35px]" />
          </motion.a>

          <motion.a
            whileHover={{ y: -4, scale: 1.08 }}
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <RiInstagramLine className="h-[30px] w-[30px] sm:h-[35px] sm:w-[35px]" />
          </motion.a>

          <motion.a
            whileHover={{ y: -4, scale: 1.08 }}
            href="https://www.gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <RiMailLine className="h-[30px] w-[30px] sm:h-[35px] sm:w-[35px]" />
          </motion.a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-center">
          <p className="text-[16px] font-[700] sm:text-[18px]">@2026 MHZ</p>

          <span className="text-[16px] font-[400] sm:text-[18px]">
            All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
