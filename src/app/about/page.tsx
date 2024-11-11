'use client';

import { Button } from '@/components/ui/moving-border';
import { Vortex } from '@/components/ui/vortex';
import Link from 'next/link';
import React from 'react'

function Page() {
    return (
        <>
            <title>About</title>
            <div className="min-h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto md:py-0">
                <Vortex
                    backgroundColor="black"
                    rangeY={800}
                    particleCount={1000}
                    baseHue={10}
                    className="flex items-center flex-col justify-center px-2 md:px-10 py-0 w-full h-auto min-h-screen"
                >
                    <div className="p-4 relative z-10 w-full text-center">

                        <h2 className="mt-20 md:mt-0 text-4xl md:text-4xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                            Zenqor
                        </h2>
                        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Zenqor is a pioneering initiative transforming the future through quantum computing and AI integration. Our mission bridges qubits and bits to tackle complex problems and empower daily life. With quantum-AI innovation in fields like precision medicine and environmental sustainability, Zenqor creates scalable, real-world applications to redefine industries, accelerate discoveries, and push technological limits. Through collaboration and a drive for innovation, Zenqor envisions a future where quantum-AI solutions set new standards for human achievement.</p>
                    </div>
                    <Link href={"/goals"}>
                        <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            Our Goals
                        </Button>
                    </Link>
                </Vortex>
            </div>
        </>

    );
}

export default Page;
