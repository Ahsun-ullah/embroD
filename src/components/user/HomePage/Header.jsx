'use client';
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
} from '@nextui-org/react';

import Image from 'next/image.js';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { headerLogo } from '../../../lib/datas/page';

const Header = ({ session }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'Pricing', link: '/pricing' },
    { name: 'Contact', link: '/Contact' },
    { name: 'About', link: '/About' },
  ];

  return (
    <Navbar isBordered shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      {/*  For Logo And Name  */}
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden  text-black "
        />
        <NavbarBrand>
          <div
            className="flex align-middle justify-center cursor-pointer"
            onClick={() => router.push('/')}
          >
            <Image
              style={{
                height: 'auto',
                width: 'auto',
              }}
              src={headerLogo}
              width={30}
              height={20}
              alt="Logo"
              className="mr-2 max-sm:hidden"
            />
            <p className="font-extrabold text-black max-sm:hidden me-10">
              EmbroiD
            </p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <Input
        style={{ width: '100%' }}
        isBordered
        classNames={{
          base: ' h-10 ',
          mainWrapper: 'h-full',
          input: 'text-small',
          inputWrapper:
            ' h-full font-normal text-default-500 bg-default-200/20 border',
        }}
        placeholder="Type to search..."
        size="md"
        startContent={<i className="ri-search-2-line" />}
        type="search"
      />

      {/* For Search  */}

      {session?.user ? (
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
                src={session?.user?.image}
              />
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem
                isBordered
                key="profile"
                className="h-14 gap-2 border-dashed"
              >
                <p className="font-semibold">{session?.user?.name} </p>
              </DropdownItem>
              <DropdownItem key="logout" isBordered className="p-2">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      ) : (
        <NavbarContent justify="end">
          <NavbarContent className="" justify="end"></NavbarContent>
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="/auth/login"
              variant="flat"
              size="sm"
              radius="large"
              className="button text-black font-bold"
            >
              Sign In
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}

      <NavbarMenu className="sm:max-w-[4rem] bg-transparent">
        <div className="flex">
          <Link href="/">
            <Image
              src={headerLogo}
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
};

export default Header;
