"use client"
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
//const { Navbar } = require("react-bootstrap")

const MyNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",

    ];
    return (
        <Navbar isBordered variant="sticky" className='flex p-4 bg-gradient-to-r from-lime-50 to-slate-300' onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>

                {/* <NavbarContent className=" bg-inherit" justify="center">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                </NavbarContent> */}
                <NavbarBrand>
                    <img src="https://puneethkumar02.carrd.co/assets/images/image01.jpg?v=aaf72d7c" alt="Logo" className="w-10 h-10 rounded-full" />
                    {/* <p className="font-bold  text-black">PKC</p> */}
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4 font-bold  text-black" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#about" aria-current="page">About</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="https://puneethkumar02.carrd.co/">
                        Projects
                    </Link>
                </NavbarItem>
            </NavbarContent>
            {/* <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent> */}
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href={item.href}
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};
export default MyNavbar