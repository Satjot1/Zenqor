'use client';

import { BackgroundBeamsWithCollision } from '@/components/background-beams-with-collision';
import Footer from '@/components/Footer';
import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

function Page() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Function to convert a name to a slug
    const createSlug = (text: string) =>
        text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Convert the name to a slug
        const nameSlug = createSlug(name);

        // Log the form data to the console
        console.log('Submitted:', { name, email, message });

        // Clear the form fields
        setName('');
        setEmail('');
        setMessage('');

        // Redirect to the confirmation page with the name slug
        router.push(`/confirmation/${nameSlug}`);
    };

    return (
        <div className='bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative'>
            <title>Feel free to ask anything.</title>
            <BackgroundBeamsWithCollision className='absolute top-0 left-0 w-full h-full z-0 min-h-screen'>
                <div className="max-w-2xl mx-auto pt-20 p-5 relative z-10">
                    <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
                        Contact Us
                    </h1>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
                        We&apos;re here to help with any questions about us. 
                        Reach out and let us know how you feel about our ideas.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                            required
                        />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email address"
                            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                            required
                        />
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Your message"
                            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                            rows={5}
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </BackgroundBeamsWithCollision>
        </div>
    );
}

export default Page;
