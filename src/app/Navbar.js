'use client'
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
const logo = require("./Assets/vrrlogo.png")

const Sidebar = () => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (item) => {
    setOpenSubmenu(openSubmenu === item ? null : item);
  };

  const navItems = [
    {
      title: 'Dashboard',
      link: '/',
    },
    {
      title: 'ORDERS',
      subItems: [
        { name: 'NEW ORDER', link: '/Orders/NewOrder' },
       
        {name:"ALL ORDERS", link:"/Orders/Allorders"},
      ],
    },
    {
      title: 'Team Management',
      subItems: [
        { name: 'Teams', link: '/teams' },
      ],
    },
    {
      title: 'Delivery',
      link: '/settings',
    },
    {
        title: 'BRANCH REPORT',
        link: '/Branch/branch-report',
      },
  ];

  return (
    <div className="w-64 h-screen bg-white text-black shadow-lg flex flex-col p-4 fixed">
      <div className="text-2xl font-bold mb-6"
      >
        <Image
        src={logo}
        width={250}
        height={40}
        alt='vvr logo'
        />
      </div>
      <nav className="flex flex-col gap-2">
        {navItems.map((item, idx) => (
          <div key={idx}>
            {item.subItems ? (
              <>
                <button
                  onClick={() => toggleSubmenu(item.title)}
                  className="w-full flex justify-between items-center px-3 py-2 hover:bg-blue-200 rounded"
                >
                  <span>{item.title}</span>
                  {openSubmenu === item.title ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openSubmenu === item.title && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.subItems.map((sub, subIdx) => (
                      <a
                        key={subIdx}
                        href={sub.link}
                        className="block px-3 py-1 text-sm hover:bg-blue-200 rounded"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <a
                href={item.link}
                className="px-3 py-2 hover:bg-blue-200 rounded block"
              >
                {item.title}
              </a>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
