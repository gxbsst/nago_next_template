"use client";
import Link from "next/link";
import {Menu} from "@nago/graphql";
import {Image} from "@nago/components/Image";
import {useRef, useState} from "react";
import {cn} from "@nago/utils/ui";


interface THeaderProps {
  menu: Menu | null;
}

const Dropdown = (props: any) => {
  const {label, nodes} = props;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={dropdownRef} className="relative h-full group hover:bg-secondary hover:text-secondary-foreground"
         onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="h-full text-[20px] dropdown-toggle  px-3 flex items-center gap-1 group">
        <span className="pointer-events-none">{label}</span>
        <svg className="fill-current w-[20px]  duration-500 ease-in-out transition-all font-bold rotate-90" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
          <path
            d="M728.223744 520.22784a42.467328 42.467328 0 0 1-11.393024 20.503552L374.90688 882.65728c-16.662528 16.662528-43.677696 16.662528-60.340224 0s-16.662528-43.677696 0-60.340224L626.449408 510.43328 314.614784 198.598656c-16.662528-16.662528-16.662528-43.677696 0-60.340224 16.661504-16.662528 43.676672-16.662528 60.3392 0L716.879872 480.18432c10.860544 10.860544 14.642176 26.120192 11.343872 40.04352z"
            ></path>
        </svg>
      </button>
      <div
        className={cn("dropdown-menu transition-all duration-500 ease-in-out overflow-hidden  group-hover:flex-col gap-2 opacity-0  w-full text-center bg-white absolute z-10 text-secondary-foreground", isOpen ? 'group-hover:flex group-hover:opacity-100 group-hover:max-h-48' : 'max-h-0 opacity-0')}>
        {
          nodes.map(({label, uri, id}: any) => {
            return <Link
              key={id}
              className="py-2 px-1 block text-[16px] hover:bg-[#f0f0f0]"
              href={uri}>
              {label}

            </Link>
          })
        }
      </div>
    </div>

  );
};

const MobileMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <button className="mobile-menu-button" onClick={() => setMenuOpen(!isMenuOpen)}>
        Toggle Mobile Menu
      </button>
      <div className={`navigation-menu ${isMenuOpen ? '' : 'hidden'}`}>
        {/* Navigation menu items */}
      </div>
    </div>
  );
};


export default function Header(props: THeaderProps) {
  const {menu} = props;
  return (
    <nav className="bg-primary text-white  z-10 w-full h-full">
      <div className="h-full mx-auto px-4 md:flex  gap-6 justify-between items-stretch">
        <div className="flex items-center justify-between md:w-auto w-full">
          <Link href="#" className="flex items-center  px-2 text-white flex-1">
            <Image fill={false} width={120} height={50} className="md:rounded-br"
                   src='http://nadi_next.home/app/uploads/2024/04/钠谛bai-logo.svg' alt="alt"/>
          </Link>
        </div>
        <div
          className="md:flex md:flex-row flex-col items-center justify-start md:space-x-1 pb-3 md:pb-0 navigation-menu gap-6">
          {
            // @ts-ignore
            menu?.menuItems?.nodes!.map(({label, uri, id, childItems: {nodes}}) => {
              if (nodes.length == 0) {
                return <Link
                  key={id}
                  className={cn("h-full text-[20px] transition-all duration-500 flex justify-center items-center py-3 px-3", label === '搜索' ? '' : 'hover:bg-secondary hover:text-secondary-foreground')}
                  href={uri}>
                  {
                    label === '搜索' ? <div className="flex -mt-[4px]">
                      <svg viewBox="0 0 1024 1024" version="1.1"
                           width="18" height="18">
                        <path
                          d="M781.9264 691.1232l236.928 236.9216-90.816 90.8032-236.9152-236.9216c-72.032 53.3568-161.184 84.9088-257.7088 84.9088C194.048 866.8352 0 672.7872 0 433.408 0 194.048 194.048 0 433.4144 0c239.3728 0 433.4208 194.048 433.4208 433.4144 0 96.5248-31.552 185.6768-84.9088 257.7088z m-348.512 47.2896c168.448 0 304.9984-136.5504 304.9984-304.9984S601.8624 128.4224 433.4144 128.4224 128.4224 264.9728 128.4224 433.408c0 168.448 136.5504 304.9984 304.992 304.9984z"
                          fill="#FFF"></path>
                      </svg>
                    </div> : label
                  }
                </Link>
              } else {
                return <Dropdown key={label} nodes={nodes} label={label}/>
              }
            })
          }
        </div>
      </div>

    </nav>
  );
}
