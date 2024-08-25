import { FC, useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar: FC<{ isResume?: boolean }> = ({ isResume }) => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = isResume
    ? [
        { name: "HOME", link: "/#home" },
        { name: "RESUME", link: "/resume" },
      ]
    : [
        { name: "HOME", link: "#home" },
        { name: "ABOUT", link: "#about" },
        { name: "PROJECTS", link: "#projects" },
        { name: "RESUME", link: "/resume" },
        { name: "CONTACT", link: "#contact" },
      ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white/60  text-gray-900" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-4xl font-bold capitalize">divyata</h4>
        </div>
        <div
          className={` ${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                {menu?.link.includes("#") ? (
                  <a href={menu?.link}>{menu?.name}</a>
                ) : (
                  <Link to={menu?.link}>{menu?.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-900" : "text-gray-100"
          } text-3xl md:hidden m-5`}
        >
          <CiMenuFries />
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-cyan-600"
              >
                <Link to={menu?.link}>{menu?.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
