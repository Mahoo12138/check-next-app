/*
 * @Author: Mahoo12138 mahoo12138@qq.com
 * @Date: 2024-12-02 17:13:50
 * @LastEditors: Mahoo12138 mahoo12138@qq.com
 * @LastEditTime: 2024-12-03 13:46:31
 * @FilePath: \check-next-app\components\Sidebar\SidebarItem.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import NextLink from "next/link";
import SidebarDropdown from "./SidebarDropdown";
import { usePathname } from "next/navigation";
import { Box, Link } from "@chakra-ui/react";

const SidebarItem = ({ item, pageName, setPageName }: any) => {
  const handleClick = () => {
    const updatedPageName =
      pageName !== item.label.toLowerCase() ? item.label.toLowerCase() : "";
    return setPageName(updatedPageName);
  };

  const pathname = usePathname();

  const isActive = (item: any) => {
    if (item.route === pathname) return true;
    if (item.children) {
      return item.children.some((child: any) => isActive(child));
    }
    return false;
  };

  const isItemActive = isActive(item);

  return (
    <>
      <li>
        <Link
          as={NextLink}
          href={item.route}
          onClick={handleClick}
          color="rgb(222 228 238)"
          position="relative"
          display="flex"
          rounded="sm"
          transitionDuration=".3s"
          py="2"
          px="4"
          css={{
            alignItems: 'center'
          }}
          className={`${isItemActive ? "bg-graydark dark:bg-meta-4" : ""} group gap-2.5 px-4 py-2  ease-in-out hover:bg-graydark dark:hover:bg-meta-4`}
        >
          {item.icon}
          {item.label}
          {item.children && (
            <svg
              className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${pageName === item.label.toLowerCase() && "rotate-180"
                }`}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                fill=""
              />
            </svg>
          )}
        </Link>

        {item.children && (
          <Box
            overflow="hidden"
            hidden={pageName !== item.label.toLowerCase()}
            className={`translate transform overflow-hidden}`}
          >
            <SidebarDropdown item={item.children} />
          </Box>
        )}
      </li>
    </>
  );
};

export default SidebarItem;
