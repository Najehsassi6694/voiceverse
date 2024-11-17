import React from 'react'
import { FaLocationArrow } from 'react-icons/fa';
import Heading from './Heading';
import MusicWave from './MusicWave';
import Image from 'next/image';
import { IoMailOutline } from 'react-icons/io5';
const labels = [
    {
      id: 1,
      name: 'Accessibility',
      icon: '1',
      top: '15rem',
      left: '60rem',
      transform: 'translateX(3.72556px) translateY(-13.6604px) translateZ(0px)',
      color: 'bg-red-600',
      svgClass: '-rotate-90 -top-4 -left-4',
    },
    {
      id: 2,
      name: 'Education',
      icon: '2',
      top: '15rem',
      left: '0rem',
      transform: 'translateX(0px) translateY(.83019px) translateZ(0px)',
      color: 'bg-blue-600',
      svgClass: '-top-4 -right-4',
    },
    {
      id: 3,
      name: 'Convenience',
      icon: '3',
      top: '6.18322rem',
      left: '5.72949rem',
      transform:
        'translateX(0.0250712px) translateY(0.0167141px) translateZ(0px)',
      color: 'bg-purple-600',
      svgClass: 'rotate-90 -bottom-4 -right-4',
    },
    {
      id: 4,
      name: 'Automation',
      icon: '4',
      top: '0.734152rem',
      left: '39.2705rem',
      transform: 'none',
      color: 'bg-pink-600',
      svgClass: '-rotate-180 -bottom-4 -left-4',
    },
    {
      id: 5,
      name: 'Entertainment',
      icon: '5',
      top: '0.734152rem',
      left: '20.7295rem',
      transform: 'none',
      color: 'bg-green-600',
      svgClass: 'rotate-90 -bottom-4 -right-4',
    },
  
    {
      id: 6,
      name: 'Assistance',
      icon: '7',
      top: '6.18322rem',
      left: '54.2705rem',
      transform: 'translateX(0.12546px) translateY(-0.052825px) translateZ(0px)',
      color: 'bg-lime-600',
      svgClass: 'rotate-180 -bottom-4 -left-4',
    },
  ];
  
  
  
const Hero = () => {
  return (
    <div className="relative z-20 flex flex-col justify-center text-center items-center w-full mt-20">
      <div className="flex justify-center w-full absolute -top-10 left-[250px] right-0">
        <div className="w-full flex flex-col justify-center items-center text-center z-20 relative">
          {labels.map((item: any) => (
            <div key={item.id} className={`floating absolute mx-auto rounded-md ${item.color}`}
            style={{top:item.top, left:item.left,transform:item.transform}}
            >
                <FaLocationArrow className= { `h-4 w-4 absolute transform ${item.svgClass} text-black`}/>
                <p className='text-xs rounded-md px-1 py-1 text-white'>
                    {item.name}
                </p>
            </div>
          ))}
        </div>
      </div>
<div className="w-[600px]">
    <div className="relative z-20 mt-10">
        <Heading
         title={'AI Powered,<br/> Human Like'} 
        desc={'create natural sounding Text to Speech (TTS) using our latest neural AI Voice Generator.Accelerate video production using our TTS'
          
        }
        />
    </div>
    <div className="absolute inset-0 -top-28 opacity-30">
      <MusicWave/>
    </div>
    <div className='w-full flex justify-center relative overflow-hidden z-20 py-10'>
      <form className='lex relative overflow-hidden w-[500px] h-fit px-4 pr-1 py-1 custom_background'>
        <div className="absolute inset-0 grid items-center left-2 z-20">
<IoMailOutline className='w-[20px] h-[20px]' color='white'/>

        </div>
        <div className="relative w-full flex items-center">
  <input
    placeholder="Your email"
    className="w-full focus:outline-none bg-transparent relative z-20 text-white pl-5"
  />
<button 
  className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-b from-[#af207a] to-[#470c31] text-white text-sm font-medium py-2 px-3 z-30"
>
  Get free
</button>

</div>

      </form>

    </div>
</div>

    </div>
  );
};


export default Hero
