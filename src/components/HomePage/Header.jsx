"use client";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

import Image from "next/image.js";
import { useState } from "react";
import logo from "../../../public/twitter-bird-logo-pictures-0.png";

export default function Header() {
  const [user, setUser] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Pricing", link: "/pricing" },
    { name: "Contact", link: "/Contact" },
    { name: "About", link: "/About" },
  ];
  return (
    <Navbar isBordered shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      {/*  For Logo And Name  */}
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden  text-black"
        />
        <NavbarBrand>
          <Image
            src={logo}
            width={30}
            height={20}
            alt="Logo"
            className="mr-2 max-sm:hidden"
          />
          <p className="font-extrabold text-black max-sm:hidden">EmbroiD</p>
        </NavbarBrand>
      </NavbarContent>

      {/* For Category */}
      <NavbarContent className="flex gap-3 max-sm:hidden font-semibold">
        <NavbarItem>
          <Link color="foreground" href="#">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground">
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* For Search  */}
      <NavbarContent justify="end">
        <NavbarContent className="" justify="end">
          <Input
            isBordered
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10 ",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-200/20 ",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<i className="ri-search-2-line" />}
            type="search"
          />
        </NavbarContent>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            size="sm"
            radius="large"
            className="text-black font-bold"
          >
            Sign In
          </Button>
        </NavbarItem>
      </NavbarContent>
      {user && (
        <div className="items-center" justify="end">
          <Dropdown placement="bottom-end" className="text-black">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="primary"
                name="Jason Hughes"
                size="sm"
                src="/logo.png"
              />
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem
                isBordered
                key="profile"
                className="h-14 gap-2 border-dashed"
              >
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      )}

      <NavbarMenu className="sm:max-w-[4rem] bg-transparent">
        <div className="flex">
          <Link href="/">
            <Image
              src={logo}
              width={30}
              height={20}
              alt="Logo"
              className="mr-2 sm:hidden"
            />
            <p className="font-extrabold text-black sm:hidden">
              Embroi<strong className="text-blue-400">D</strong>
            </p>
          </Link>
        </div>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link className="text-black font-bold" href={item.link}>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
