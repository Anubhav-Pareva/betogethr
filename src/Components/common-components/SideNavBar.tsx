import { NavLink } from "react-router-dom";

interface SideNavBarProps {
  data: any[];
}

export default function SideNavBar({ data }: SideNavBarProps) {
  return (
    <nav className="flex flex-col gap-2">
      {data.map((item: any) => (
        <NavLink key={item.id} to={item.url} end className={({isActive})=>`flex gap-2 items-center px-2 py-3 rounded-xl cursor-pointer ${isActive? "bg-gray-900/70 text-blue-50" : "bg-white/40 text-gray-900"}`}>
          {({isActive})=>{ return (<> <img src={isActive ? item.iconwhite : item.iconblack} className="w-8 h-8"/>   {item.title} </>)}}
        </NavLink>
      ))}
    </nav>
  );
}
