import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 flex h-[60px] items-center justify-center gap-3 bg-black px-3 font-heading text-[12px] font-[700] text-white transition-transform duration-300 sm:h-[66px] sm:gap-8 sm:px-6 sm:text-[14px] md:gap-10 md:px-8 md:text-[15px] lg:justify-end lg:gap-[80px] lg:pr-[80px] xl:gap-[137px] xl:pr-[110px] xl:text-[17px] ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <a href="#About" className="whitespace-nowrap">
        About Me
      </a>
      <a href="#Skills" className="whitespace-nowrap">
        Skills
      </a>
      <a href="#Portfolio" className="whitespace-nowrap">
        Portfolio
      </a>
      <Button
        asChild
        className="h-[34px] rounded-full bg-white px-3 text-[12px] font-[700] text-black sm:h-[40px] sm:px-5 sm:text-[14px] md:h-[42px] md:px-6 md:text-[15px] xl:h-[44px] xl:px-[32px] xl:text-[17px]"
      >
        <a href="#Contact">Contact Me</a>
      </Button>
    </header>
  );
}

export default Navbar;
