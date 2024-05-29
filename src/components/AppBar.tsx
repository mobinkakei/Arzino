import { FC, useState } from "react";
import { LuMenu } from "react-icons/lu";
import NetworkSwitcher from "./NetworkSwitcher";
import { is } from "immer/dist/internal";

export const AppBar: FC = (props) => {
  // Menu Rendering
  const menu = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Tools",
      link: "#tools",
    },
    {
      name: "Create Token",
      link: "#create",
    },
    {
      name: "Documentation",
      link: "#docs",
    },
    {
      name: "Contact Us",
      link: "#contact",
    },
    {
      name: "About Us",
      link: "#aboutus",
    },
    {
      name: "Pricing",
      link: "#price",
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
          <nav>
            <a href="/" className="logo">
              <img src="assets/images/logo1.png" alt="لوگو ارزینو" className="h-10" />
            </a>
            <div className="ml-auto flex items-center px-2.5 lg:hidden">
              <button
                className="hs-collapse-toggle bg-default-100/5 inline-flex h-9 w-12 items-center justify-center rounded-md border border-white/20"
                type="button"
                onClick={toggleMobileMenu}
              >
                <i data-lucide="menue" className="stroke-white">
                  <LuMenu />
                </i>
              </button>

            </div>
            {isMobileMenuOpen && (<div className="hs-collapse mx-auto mt-2 hidden basis-full items-cenetr justify-center transition-all duration-300 lg:mt-0  lg:flex lg:basis-auto" id="mobileMenu">
              <ul id="navbar-navlist" className="navbar-nav">
                {
                  menu.map((list, index) => (
                    <li className="nav-item" key={index}>
                      <a href={list.link} className="nav-link">{list.name}</a>
                    </li>
                  ))
                }
              </ul>
            </div>)}
            <NetworkSwitcher />
            
          </nav>
        </div>
      </header>
      {props.children}
    </div>
  );
};
