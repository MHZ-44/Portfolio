import { Learning, OtherSkills, UsingNow } from "@/lib/skills"

function Skills() {
  return (
    <div id="Skills" className="text-center font-heading">
      <p className="mx-auto mt-[142px] flex h-[107px] w-[404px] items-center justify-center border-8 border-black text-[30px] leading-[1.28] font-[700] tracking-[35.54%] uppercase">
        SKILLS
      </p>
      <p className="mt-[79px] ml-[-750px] text-center text-[30px] font-[700] tracking-[18.54%] uppercase">
        USING NOW:
      </p>
      <div className="mx-auto mt-[75px] flex w-[1004px] flex-wrap items-start justify-start gap-x-[157px] gap-y-[65px]">
        {UsingNow.map((skill) => (
          <div key={skill.name} className="w-[124px] text-center">
            <div className="flex h-[100px] items-center justify-center">
              <img
                src={skill.src}
                alt={skill.name}
                className="h-[100px] object-contain"
              />
            </div>
            <p className="mt-[17px] text-[18px] font-[400] tracking-[13.54%]">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-[102px] ml-[-780px] text-center text-[30px] font-[700] tracking-[18.54%] uppercase">
        LEARNING:
      </p>
      <div className="mx-auto mt-[81px] flex w-[1004px] flex-wrap items-start justify-start gap-x-[157px] gap-y-[65px]">
        {Learning.map((skill) => (
          <div key={skill.name} className="w-[124px] text-center">
            <div className="flex h-[100px] items-center justify-center">
              <img
                src={skill.src}
                alt={skill.name}
                className="h-[100px] object-contain"
              />
            </div>
            <p className="mt-[17px] text-[18px] font-[400] tracking-[13.54%]">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-[74px] ml-[-700px] text-center text-[30px] font-[700] tracking-[18.54%] uppercase">
        OTHER SKILLS:
      </p>
      <div className="mx-auto mt-[82px] flex w-[1004px] flex-wrap items-start justify-start gap-x-[157px] gap-y-[65px]">
        {OtherSkills.map((skill) => (
          <div key={skill.name} className="w-[124px] text-center">
            <div className="flex h-[100px] items-center justify-center">
              <img
                src={skill.src}
                alt={skill.name}
                className="h-[100px] object-contain"
              />
            </div>
            <p className="mt-[17px] text-[18px] font-[400] tracking-[13.54%]">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
