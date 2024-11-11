"use client";

import teamData from "../data/team_data.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";


function OurTeam() {
    return (
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className=" mt-2 mb-2 text-3xl leading-8 font-mono tracking-tight text-white sm:text-4xl">Our Team</h2>
                    <p className="text-base text-blue-500 font-semibold tracking-wide uppercase">Driven innovators transforming industries with quantum AI and technology.</p>
                </div>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {teamData.team.map((members) => (
                        <div key={members.id} className="flex justify-center">
                            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <div className="relative w-28 h-28"> {/* Added this div for fixed dimensions */}
                                        <Image 
                                            alt="Member-image" 
                                            src={members.image} 
                                            quality={100} 
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            style={{ objectFit: "cover" }} 
                                            className="rounded-2xl" 
                                        />
                                    </div>
                                    <div className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{members.name}</div>
                                    <div className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow p-2">{members.description}</div>
                                    <div className="text-neutral-400 text-sm">-{members.title}</div>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurTeam