import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import header from "../assets/portfolio.svg"
import { coded, workingOn } from "@/lib/portfolio"

function Portfolio() {
  return (
    <div
      id="Portfolio"
      className="bg-[#1A1A1A] text-center font-heading text-white"
    >
      <header className="relative mx-auto mt-[162px]">
        <img src={header} alt="Portfolio" />
        <p className="absolute top-1/2 left-1/2 flex h-[107px] w-[404px] -translate-x-1/2 -translate-y-1/2 items-center justify-center border-8 border-black text-[30px] leading-[1.28] font-[700] tracking-[43.54%] text-black uppercase">
          PORTFOLIO
        </p>
      </header>
      <div>
        <Tabs defaultValue="all">
          <div className="mt-[32px] flex justify-center">
            <TabsList variant="line" className="w-[587px] gap-[45px] border-b">
              <TabsTrigger
                value="all"
                className="text-[14px] font-[600] text-[#7C7C7C] uppercase hover:text-white data-[state=active]:text-white data-[state=active]:after:bg-white"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="coded"
                className="text-[14px] font-[600] text-[#7C7C7C] uppercase hover:text-white data-[state=active]:text-white data-[state=active]:after:bg-white"
              >
                Coded
              </TabsTrigger>
              <TabsTrigger
                value="workingOn"
                className="text-[14px] font-[600] text-[#7C7C7C] uppercase hover:text-white data-[state=active]:text-white data-[state=active]:after:bg-white"
              >
                Working On
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-[32px]">
            <div className="mx-auto flex w-full flex-wrap">
              {coded.map((project, index) => (
                <img
                  key={index}
                  src={project}
                  alt="Project"
                  className="h-auto w-[640px]"
                />
              ))}
              {workingOn.map((project, index) => (
                <img
                  key={index}
                  src={project}
                  alt="Project"
                  className="h-auto w-[640px]"
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="coded" className="mt-[32px]">
            <div className="mx-auto flex w-full flex-wrap">
              {coded.map((project, index) => (
                <img
                  key={index}
                  src={project}
                  alt="Project"
                  className="h-auto w-[640px]"
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="workingOn" className="mt-[32px]">
            <div className="mx-auto flex w-full flex-wrap">
              {workingOn.map((project, index) => (
                <img
                  key={index}
                  src={project}
                  alt="Project"
                  className="h-auto w-[640px]"
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <footer>
        <p className="p-[11px] text-[20px] font-[600]">
          And many more to come!
        </p>
      </footer>
    </div>
  )
}

export default Portfolio
