'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menuData from "./menuData";

const Navbar = () => {
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
    <header
  className={`fixed left-0 top-0 z-99999 w-full sm:py-5 ${
    stickyMenu ? "bg-white shadow-sm transition duration-10" : ""
  }`}
>
  <div className="relative mx-auto max-w-c-1390 items-center px-4 md:px-8 xl:flex 2xl:px-0">
    {/* Logo/Brand */}
    <div
      className={`flex w-full items-center justify-center font-semibold text-2xl xl:justify-start xl:w-1/4`}
    >
      <a href="/" className="pt-2 sm:pt-0">Travel Kannur</a>
    </div>

    {/* Nav Menu */}
    <div
      className={`invisible h-0 w-full mt-4 xl:mt-0 items-center xl:visible flex xl:w-3/4 xl:justify-center`}
    >
      <nav>
        <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10 xl:justify-center">
          {menuData.map((menuItem, key) => (
            <li key={key} className={menuItem.submenu && "group relative"}>
              {menuItem.submenu ? (
                <>
                  <button
                    onClick={() => setDropdownToggler(!dropdownToggler)}
                    className="flex cursor-pointer items-center justify-between gap-3 hover:text-primary"
                  >
                    {menuItem.title}
                    <span>
                      <svg
                        className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                      </svg>
                    </span>
                  </button>

                  <ul className={`dropdown ${dropdownToggler ? "flex" : ""}`}>
                    {menuItem.submenu.map((item, key) => (
                      <li key={key} className="hover:text-primary">
                        <Link href={item.path || "#"}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={`${menuItem.path}`}
                  className={
                    pathUrl === menuItem.path
                      ? "text-primary hover:text-primary"
                      : "hover:text-primary"
                  }
                >
                  {menuItem.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </div>
</header>

  );
};

export default Navbar