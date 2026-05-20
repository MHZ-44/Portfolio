import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiMailLine,
} from "react-icons/ri"
import spreator from "../assets/separatorBlack.png"
import top from "../assets/top.svg"

function Contact() {
  return (
    <div id="Contact" className="text-center font-heading">
      <p className="mx-auto mt-[142px] flex h-[107px] w-[404px] items-center justify-center border-8 border-black text-[30px] leading-[1.28] font-[700] tracking-[35.54%] uppercase">
        CONTACT
      </p>
      <p className="mx-auto mt-[59px] flex h-[47px] w-[763px] items-center justify-center text-[15px] leading-[1.28] font-[400]">
        Software Engineering student at Yarmouk Private University (10/2021 -
        07/2026), with frontend development experience using React and
        TypeScript and building reusable components.
      </p>
      <img className="mx-auto mt-[20px]" src={spreator} alt="Separator" />

      <Input
        placeholder="ENTER YOUR NAME*"
        className="mx-auto mt-[128px] flex h-[48px] w-[609px] rounded-none border-0 border-b-4 border-l-4 border-b-black border-l-black bg-transparent px-[24px] text-[38px] font-[700] tracking-[6%] text-[#8a8a8a] placeholder:text-[#8a8a8a] focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Input
        placeholder="ENTER YOUR EMAIL*"
        className="mx-auto mt-[128px] flex h-[48px] w-[609px] rounded-none border-0 border-b-4 border-l-4 border-b-black border-l-black bg-transparent px-[24px] text-[38px] font-[700] tracking-[6%] text-[#8a8a8a] placeholder:text-[#8a8a8a] focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Input
        placeholder="PHONE NUMBER"
        className="mx-auto mt-[128px] flex h-[48px] w-[609px] rounded-none border-0 border-b-4 border-l-4 border-b-black border-l-black bg-transparent px-[24px] text-[38px] font-[700] tracking-[6%] text-[#8a8a8a] placeholder:text-[#8a8a8a] focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Textarea
        placeholder="YOUR MESSAGE*"
        className="mx-auto mt-[128px] flex h-[184px] w-[609px] rounded-none border-0 border-b-4 border-l-4 border-b-black border-l-black bg-transparent px-[24px] text-[38px] font-[700] tracking-[6%] text-[#8a8a8a] placeholder:text-[#8a8a8a] focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Button
        type="submit"
        className="mx-auto mt-[40px] flex h-[45px] w-[197px] items-center justify-center rounded-none border-0 border-r-4 border-l-4 border-black bg-transparent text-[16px] leading-none font-[700] tracking-[10%] text-black uppercase hover:bg-transparent"
      >
        Submit
      </Button>
      <footer className="mt-[68px] h-[326px] bg-[#1A1A1A] pt-[69px] text-center text-white">
        <a
          href="#Main"
          className="mx-auto inline-flex w-[188px] flex-col items-center text-[15px] font-[700] tracking-[18%] uppercase"
        >
          <img src={top} alt="Top" className="mb-[7px] h-[15px] w-[15px]" />
          BACK TO TOP
        </a>
        <div className="mt-[18px] flex items-center justify-center gap-[28px]">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <RiFacebookBoxLine className="h-[35px] w-[35px]" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <RiLinkedinBoxLine className="h-[35px] w-[35px]" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <RiInstagramLine className="h-[35px] w-[35px]" />
          </a>
          <a href="https://www.gmail.com" target="_blank" rel="noreferrer">
            <RiMailLine className="h-[35px] w-[35px]" />
          </a>
        </div>
        <div className="mt-[34px] flex items-center justify-center gap-2">
          <p className="text-[18px] font-[700]">@2026 MHZ </p>
          <span className="text-[18px] font-[400]">All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  )
}

export default Contact
