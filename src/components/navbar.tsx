import React, { useEffect } from "react";
import {
  Navbar as NavbarHero,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { usePageStore } from "@stores/page";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { pathName, setPathName } = usePageStore();

  // const menuItems = ["Dzikir Pagi Petang", "Baca Alquran", "Cari Artikel"];

  const menuItems = [
    {
      label: "Dzikir Pagi Petang",
      href: `/dzikir-pagi-petang`,
    },
    {
      label: "Baca Alquran",
      href: `/baca-alquran`,
    },
  ];

  useEffect(() => {
    const pathName = window.location.pathname;
    // console.log(pathName)
    setPathName?.(pathName);
  }, []);

  return (
    <NavbarHero isBordered isBlurred onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="flex items-center gap-1">
          <Link color="foreground" href="/" className="flex items-center gap-1">
            <Icon
              icon="streamline:pen-draw-solid"
              color="#BEF264"
              fontSize={24}
            />
            <p className="font-bold text-inherit">Mutiara Ilmu</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="" justify="end">
        <NavbarItem className="hidden sm:flex">
          <Link
            color={
              pathName === "/dzikir-pagi-petang" ? "primary" : "foreground"
            }
            href="/dzikir-pagi-petang"
            className="flex items-center gap-1"
          >
            <Icon icon="lucide:sun-moon" fontSize={24} className="mb-1" />
            Dzikir Pagi Petang
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Link
            color={pathName === "/baca-alquran" ? "primary" : "foreground"}
            href="/baca-alquran"
            className="flex items-center gap-1"
          >
            <Icon icon="la:quran" fontSize={24} className="mb-0" />
            Baca Alquran
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color={pathName === "/cari-catatan" ? "primary" : "foreground"}
            href="/cari-catatan"
            className="flex items-center gap-1"
            aria-label="cari-catatan"
          >
            <Icon icon="hugeicons:search-02" fontSize={24} className="mb-0" />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="!ml-0">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className="list-none">
            <Link
              color="foreground"
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarHero>
  );
}
