"use client"
import { useGlobalContext } from "@/context/store";
import Info from "./info";
import Sidebar from "./sidebar";
import { cn } from "@/lib/utils";

// have to remove any
function MainSidebar(mainData:any) {
    const {active}=useGlobalContext()
    // console.log("this",data.data)
    return (
        <div className={cn("h-full bg-[white] absolute sm:flex sm:relative",{
            "sm:flex":active,
            "hidden":!active
        })}>
        <div className="flex min-w-[360px] md:min-w-[390px]  lg:min-w-[443px] pt-5">
        <Sidebar />
        <div className="w-full px-3">
          <Info earningData={mainData.data.earningData} companyName={mainData.data.companyName} nickName={mainData.data.nickName} />
        </div>
      </div>
        </div>
            
    );
  }
  
  export default MainSidebar;