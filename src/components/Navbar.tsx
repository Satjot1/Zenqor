'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-manu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home" />

                </Link>
                <MenuItem setActive={setActive} active={active} item="About">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/about">More about us</HoveredLink>
                    <HoveredLink href="/goals">Our Goals</HoveredLink>
                    <HoveredLink href="/products">Our Products</HoveredLink>
                </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Company">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/contact">Contact us</HoveredLink>
                    <HoveredLink href="/joinus">Join us</HoveredLink>
                </div>
                </MenuItem>
            </Menu>
        </div>
    )
}

export default Navbar