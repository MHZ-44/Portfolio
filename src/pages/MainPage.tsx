import { Button } from "@/components/ui/button"

function MainPage() {
  return (
    <div id="Main">
      <div className="relative flex min-h-[1022px] overflow-hidden">
        <div className="relative z-10 h-[1022px] w-1/2 font-heading">
          <p className="absolute top-[351px] left-[150px] text-[40px] leading-none font-[700]">
            Hi, I am
          </p>
          <p className="absolute top-[463px] left-[165px] text-[60px] leading-[0.95] font-[700] whitespace-nowrap">
            Muhammad Hamzah
          </p>
          <p className="absolute top-[560px] left-[165px] text-[25px] leading-none font-[800] text-[#909090]">
            Frontend Developer
          </p>
        </div>

        <div className="absolute top-[-192px] left-[850px] h-[1400px] w-[1300px] rotate-[9.67deg] bg-black" />

        <div className="relative z-20 w-1/2">
          <header className="absolute top-[40px] left-[64px] flex items-center gap-[137px] text-center font-heading text-[17px] font-[700] text-white">
            <a href="#About">About Me</a>
            <a href="#Skills">Skills</a>
            <a href="#Portfolio">Portfolio</a>
            <Button
              asChild
              className="h-[44px] rounded-full bg-white px-[32px] text-[17px] font-[700] text-black"
            >
              <a href="#Contact">Contact Me</a>
            </Button>
          </header>
        </div>
      </div>

      <footer className="h-[313px] bg-[#1A1A1A] text-white">
        <div className="px-[102px] pt-[49px] font-heading">
          <p className="text-[30px] leading-none font-[700] tracking-[18.54%] uppercase">
            IT BERRIES
          </p>
          <p className="mt-[32px] max-w-[1148px] text-[14px] leading-[24px] font-[400]">
            Motivated front-end developer with a strong focus on building
            responsive, user-friendly web applications using React and
            TypeScript. Skilled in writing clean, maintainable code and
            integrating REST APIs to create dynamic, data-driven interfaces.
            Eager to continue improving technical skills and contribute to
            real-world projects through teamwork and problem solving.
          </p>
          <a
            href="#About"
            className="mt-[24px] inline-block border-r border-l px-[16px] py-[4px] text-[14px] font-[600] tracking-[10%] uppercase"
          >
            Read More
          </a>
        </div>
      </footer>
    </div>
  )
}

export default MainPage
