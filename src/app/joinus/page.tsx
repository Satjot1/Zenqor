'use client'

import { BackgroundBeamsWithCollision } from '@/components/background-beams-with-collision'
import React, { FormEvent, useState } from 'react'

function page() {
    const [email, setEmail] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Submitted:', { email, });
    };
    return (
        <div className='bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative'>
            <title>Let's create a better future</title>
            {' '}
            <BackgroundBeamsWithCollision className='absolute top-0 left-0 w-full h-full z-0 min-h-screen'>
                <div className="max-w-2xl mx-auto pt-24 p-5 relative z-10">
                    {' '}
                    {/* Add relative and z-10 to bring content to the front */}
                    <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
                        Join us
                    </h1>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
                        Your contribution will help us more in achieving our dream.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <input type="text" placeholder='Full Name' className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700" />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email address"
                            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                            required
                        />
                        <input placeholder='Qualifications' type='text' className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700" />
                        <input placeholder='Preferred designation? (e.g., Investor)' type='text' className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700" />

                        <button
                            type="submit"
                            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                        >
                            Send request
                        </button>
                    </form>
                </div>
            </BackgroundBeamsWithCollision >
        </div >
    )

}

export default page

