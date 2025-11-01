import { NavLink } from "react-router-dom";

interface FooterNavListProps {
  title: string;
  data: any[];
}

export default function FooterNavList({ title, data }: FooterNavListProps) {
  return (
    <div>
      <h3 className="font-semibold text-white mb-3">{title}</h3>
      <ul className="space-y-2">
        {data.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.url}
              className="text-blue-50 hover:text-gray-400 transition"
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
