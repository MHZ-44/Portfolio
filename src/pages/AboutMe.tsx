import spreator from "../assets/separatorBlack.png"
import desgin from "../assets/design.png"
import maintenance from "../assets/maintenance.png"
import development from "../assets/development.png"

function AboutMe() {
  return (
    <div id="About" className="text-center font-heading">
      <p className="mx-auto mt-[142px] flex h-[107px] w-[404px] items-center justify-center border-8 border-black text-[30px] leading-[1.28] font-[700] tracking-[35.54%] uppercase">
        ABOUT ME
      </p>
      <p className="mx-auto mt-[71px] flex h-[47px] w-[763px] items-center justify-center text-[15px] leading-[1.28] font-[400]">
        Software Engineering student at Yarmouk Private University (10/2021 -
        07/2026), with frontend development experience using React and
        TypeScript and building reusable components.
      </p>
      <p className="mx-auto mt-[67px] inline-block h-[32px] w-[139px] border-r-2 border-l-2 border-black px-[16px] py-[4px] font-[700] tracking-[10%] uppercase">
        Explore
      </p>
      <img className="mx-auto mt-[85px]" src={spreator} alt="Separator" />
      <div className="mx-auto mt-[108px] w-[1066px]">
        <div className="grid grid-cols-2 justify-items-center gap-x-[80px]">
          <div className="w-[431px] text-left">
            <div className="flex items-center gap-4">
              <img
                className="h-[64px] w-auto opacity-70"
                src={desgin}
                alt="Design"
              />
              <p className="ml-[-35px] text-[22px] leading-none font-[700] tracking-[18.54%] uppercase">
                Design
              </p>
            </div>
            <p className="mt-[4px] ml-[43px] w-[350px] text-justify text-[14px] leading-none font-[400]">
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>

          <div className="w-[431px] text-left">
            <div className="flex items-center gap-4">
              <img
                className="h-[64px] w-auto opacity-100"
                src={development}
                alt="Development"
              />
              <p className="ml-[-35px] text-[22px] leading-none font-[700] tracking-[18.54%] uppercase">
                Development
              </p>
            </div>
            <p className="mt-[4px] ml-[45px] w-[350px] text-justify text-[14px] leading-none font-[400]">
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>
        </div>

        <div className="mt-[64px] flex justify-center">
          <div className="w-[431px] text-left">
            <div className="flex items-center gap-4">
              <img
                className="h-[64px] w-auto opacity-100"
                src={maintenance}
                alt="Maintenance"
              />
              <p className="mt-[20px] ml-[-35px] text-[22px] leading-none font-[700] tracking-[18.54%] uppercase">
                Maintenance
              </p>
            </div>
            <p className="mt-[4px] ml-[63px] w-[350px] text-justify text-[14px] leading-none font-[400]">
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>
        </div>
      </div>
      <img className="mx-auto mt-[80px]" src={spreator} alt="Separator" />
    </div>
  )
}

export default AboutMe
