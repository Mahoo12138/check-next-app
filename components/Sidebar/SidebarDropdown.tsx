import React from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Flex, Link } from "@chakra-ui/react";

const SidebarDropdown = ({ item }: any) => {
  const pathname = usePathname();

  return (
    <>
      <Flex direction="column" as="ul" mb="1.5rem" mt="1.25rem" pl="1.5rem" gap=".625rem" >
        {item.map((item: any, index: number) => (
          <li key={index}>
            <Link
              as={NextLink}
              href={item.route}
              css={{
                color: pathname === item.route ? "rgb(255 255 255)" : "",
                "&:hover": {
                  color: "rgb(255 255 255)",
                }
              }}
              position="relative"
              px="1rem"
              display="flex"
              alignItems="center"
              gap=".625rem"
              fontWeight="medium"
              rounded="md"
              className={`group text-bodydark2 duration-300 ease-in-out }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </Flex>
    </>
  );
};

export default SidebarDropdown;
