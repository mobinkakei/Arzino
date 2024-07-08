import { FC, useState } from "react";
import { LuMenu } from "react-icons/lu";
import NetworkSwitcher from "./NetworkSwitcher";

export const AppBar: FC = (props) => {
  // Menu Rendering
  const menu = [
    {
      name: "خــانه",
      link: "#home",
    },
    {
      name: "ابــزارهـا",
      link: "#tools",
    },
    {
      name: "ساخت توکن",
      link: "#tools",
    },
    {
      name: "سوالات متداول",
      link: "#faq",
    },
    {
      name: "تماس باما",
      link: "#contact",
    },
    {
      name: "درباره ما",
      link: "#aboutus",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <header id="navbar-sticky" className="navbar">
        <div className="container">
          <nav className="flex items-center justify-between">
            <a href="/" className="logo">
              <img
                src="assets/images/logo1.png"
                alt="لوگو ارزینو"
                className="h-10"
              />
            </a>
            <div className="ml-auto flex items-center px-2.5 lg:hidden">
              <button
                className="bg-default-100/5 inline-flex h-9 w-12 items-center justify-center rounded-md border border-white/20"
                type="button"
                onClick={toggleMobileMenu}
              >
                <LuMenu className="stroke-white" />
              </button>
            </div>
            <div
              className={`hs-collapse ${
                isMobileMenuOpen ? "block" : "hidden"
              } mx-auto mt-2 basis-full items-center justify-center transition-all duration-300 lg:mt-0 lg:flex lg:basis-auto`}
              id="mobileMenu"
            >
              <ul id="navbar-navlist" className="navbar-nav flex flex-col lg:flex-row">
                {menu.map((list, index) => (
                  <li className="nav-item" key={index}>
                    <a href={list.link} className="nav-link">
                      {list.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <NetworkSwitcher />
          </nav>
        </div>
      </header>
      {props.children}
    </div>
  );
};
