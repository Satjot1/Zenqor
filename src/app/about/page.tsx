'use client';

import { Button } from '@/components/ui/moving-border';
import { Spotlight } from '@/components/ui/Spotlight';
import { Vortex } from '@/components/ui/vortex';
import Link from 'next/link';
import React from 'react'

function Page() {
    return (
        <>
            <title>About</title>
            <div className="h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto md:py-36 pt-10 pb-2 bg-black">
                <div className="p-4 relative z-10 w-full text-center">
                    <Spotlight
                        className="-top-40 left-0 md:left-60 md:-top-20"
                        fill="blue"
                    />

                    <h2 className="mt-20 md:mt-0 text-4xl md:text-4xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        Zenqor:Sharping Future
                    </h2>
                    <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-7xl mx-auto">
                        Zenqor is a pioneering initiative dedicated to transforming the future through the powerful integration of quantum computing and artificial intelligence. At Zenqor, our mission is to bridge the worlds of qubits and bits, opening the door to tackling complex problems that classical computing struggles to solve. By leveraging the unique strengths of quantum computing, we aim to create groundbreaking, real-world applications that empower people in their daily lives, solve critical challenges, and enhance human potential.
                    </p>
                    <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-7xl mx-auto">

                        Our vision spans multiple fields, with a current focus on precision medicine, environmental sustainability, and secure communication. In precision medicine, Zenqor’s quantum-AI solutions hold the potential to revolutionize the detection, targeting, and treatment of complex diseases, like cancer, by developing new quantum-driven approaches to diagnosing and curing. In environmental sustainability, we aim to harness quantum insights to design more efficient materials and energy solutions that can protect our planet and support sustainable growth.
                    </p>
                    <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-7xl mx-auto">

                        Through collaboration with leading experts and a relentless drive for innovation, Zenqor is setting new standards for technological achievement. By pushing the boundaries of what is possible with quantum-AI, we envision a future where these solutions redefine industries, accelerate scientific discoveries, and enable a more intelligent, interconnected, and sustainable world.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 px-2 gap-4">
                <Link href={"/goals"}>
                    <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        Our Goals
                    </Button>
                </Link>
                <Link href={"/joinus"}>
                    <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        Join Us
                    </Button>
                </Link>

                </div>
            </div>
        </>

    );
}

export default Page;
