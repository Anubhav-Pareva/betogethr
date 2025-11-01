import SideNavBar from "../Components/common-components/SideNavBar";
import { Outlet } from "react-router-dom";

interface SecondaryLayoutProps {
  data:any[];
}
export default function SecondaryLayout({ data }: SecondaryLayoutProps) {
  return (
    <div className="flex flex-col md:flex-row flex-1 " >
      {/**side bar */}
      <div className="hidden sticky md:block w-60 lg:w-90 min-h-vh bg-linear-to-b from-yellow-400 via-purple-500 to-blue-500 px-4 py-4">
        <SideNavBar data={data}/>
      </div>
      {/**main content */}
      <div className="bg-gray-900 flex-1 p-4"><Outlet/></div>
    </div>
  );
}
