import type { ReactNode } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai"
type Page = "httpHistory" | "settings";

interface SidebarProps {
  onSelect: (page: Page) => void;
  activePage: Page;
}

interface ButtonMenuItem {
  label: string;
  page: Page;
  icon?: ReactNode;
}

interface Section {
  title: string;
  items: ButtonMenuItem[];
}

const sections: Section[] = [
  {
    title: "Proxy",
    items: [
      { label: "HTTP History", page: "httpHistory", icon: <AiOutlineUnorderedList /> },
      // { label: "Repeat", page: "repeat", icon: <GoArrowBoth /> },
      // { label: "", page: "analytics", icon: <GoArrowDown /> },
    ],
  },
  {
    title: "Settings",
    items: [
      // { label: "Profile", page: "profile", icon: <GoArrowBoth /> },
      { label: "System", page: "settings", icon: <AiOutlineSetting /> },
      // { label: "Certificate", page: "certificate", icon: <GoArrowDown /> },
    ],
  },
];

export default function Sidebar({ onSelect, activePage }: SidebarProps) {
  return (
    <aside className='col-start-1 row-start-2 row-end-3 min-w-fit min-h-0'>
      <div className="h-full flex flex-col pt-2 rounded-md  bg-[#161B22] ">
        <div className="flex flex-col justify-between items-center gap-2 min-h-0 w-full flex-1">

          <div className="flex-1 flex flex-col items-center gap-2 overflow-y-auto scrollbar-hide">
            <div className="w-48 p-1">
              {sections.map((section) => (
                <div key={section.title} className="mb-1">
                  <h3 className="text-xs text-[#9ca3af] mb-1 px-2">
                    {section.title}
                  </h3>
                  <div className="flex flex-col gap-1">
                    {section.items.map((item) => (
                      <button
                        key={item.page}
                        onClick={() => onSelect(item.page)}
                        className={`flex text-sm items-center cursor-pointer gap-2 w-full text-left px-2 py-1 rounded-md transition 
                      ${activePage === item.page
                            ? "bg-gray-800 text-white"
                            : "hover:bg-gray-800 text-white"
                          }`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </aside>
  );
}

/*<div className="flex-1 flex flex-col items-center gap-2 overflow-y-auto scrollbar-hide">
            <div className="w-48 rounded-md" >
             
            </div>
          </div>*/

