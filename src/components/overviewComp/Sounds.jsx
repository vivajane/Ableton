import React from 'react'
import { MdNavigateNext } from "react-icons/md";

const Sounds = () => {
  return (
    <div className='lg:px-28 px-8 pt-12 pb-20 lg:pb-52 bg-black text-white'>
        <div className='text-left'><h1 className='sm:text-3xl text-2xl lg:text-4xl font-semi-bold py-12 '>Sound selections
        </h1>
        <p className='text-lg font-light pb-16 lg:w-1/2'>Move comes with all the sounds you need to make a track. Choose from over 1500 samples, presets and drum hits from Ableton’s sound design team, plus special collaborations with BNYX, DECAP, L.Dre, Sound Oracle and more.</p></div>
        <div className='lg:flex justify-between w-full gap-20 items-center '>
            <div>
                <a href="#">
                    <img src="https://ableton-production.imgix.net/components/text-beside-media/tour-image-07.jpg?auto=compress%2Cformat&w=768" alt="v" />
                </a>
            </div>
            <div>
                <h1 className='sm:text-3xl text-left text-2xl lg:text-4xl font-semi-bold py-12'>Add some color</h1>
                <p className='text-lg text-left font-light'>Bring more depth and texture to your sounds with Move’s built-in audio effects, including a reverb, delay and saturator.</p>
                <div className='flex gap-2 items-center'>
                <a className='py-8 font-light' href="#">Discover Move’s effects</a>

                <span><MdNavigateNext  /></span>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Sounds
