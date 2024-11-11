import React from 'react'
import { WavyBackground } from './ui/wavy-background'

function QuoteQuanton() {
  return (
    <div className='relative h-screen overflow-hidden flex items-center justify-center'>
        <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Why chossing us?
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
      Choosing Zenqor means joining a transformative journey where quantum computing meets AI to reshape industries and drive impactful change. With our team’s expertise, innovation, and dedication, we push the limits of technology, offering forward-thinking solutions that tackle complex challenges and create a future full of possibilities.
      </p>
    </WavyBackground>
    </div>
  )
}

export default QuoteQuanton