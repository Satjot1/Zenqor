"use client"

import { useState, useEffect } from "react";
import Link from "next/link";

function Footer() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentYear(new Date().getFullYear());
        }, 3600000); // Update every hour (3600000 ms)
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
                    <ul>
                        <li>
                            <Link
                                href="/"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="hover:text-white transition-colors duration-300"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/goals"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Our Goals
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/joinus"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Join us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
                    <p>Pithoragarh, Uttarakhand, India</p>
                    <p>262501</p>
                    <Link href="tel:+918958568597" className="hover:text-white transition-colors duration-300">
                        Phone: +91 89585 68597
                    </Link>
                </div>
            </div>
            <p className="text-center text-xs pt-8">© {currentYear} Zenqor. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
