import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

function Navbar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 flex h-[66px] items-center justify-end gap-[137px] bg-black pr-[110px] font-heading text-[17px] font-[700] text-white transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
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
  )
}

export default Navbar
