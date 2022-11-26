import React, { useEffect, useRef, useState } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import background from '../assets/place.jpg'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter,FaGreaterThan } from 'react-icons/fa'
import '../assets/font.css'
function Main() {
  const MyComponent = (props) => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const myRef = useRef(null)

    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(BIRDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          birdSize: 1.60,
          quantity: 1.00,
          separation: 100.00,
          color1: 0xb5778,
          color2: 0xcbd2e3,
          backgroundAlpha: 0.00
        }))
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }, [vantaEffect])
    return <div className='bg-cover bg-scroll my-auto' style={{ backgroundImage: `url(${background})` }} >
      <div className='w-screen h-screen bg-cover bg-black bg-opacity-80 sm:bg-cover' ref={myRef}>
        <header className='flex flex-col items-center'>
          <img className='rounded-full w-40 h-40 bg-opacity-75  mt-12 shadow-2xl' src={require('../assets/swalihblack.jpeg')} alt="" />
          <h3 className='text-center mt-4 px-5 py-1 text-gray-400 text-lg font-mono'><span className='underline'>@muhammedswalih</span><br /><span className='font-mono text-gray-400'><h2 className='no-underline'>MERN Stack Developer</h2></span> </h3>
          <div className='w-[300px] h-2 mt-6 bg-gray-400 h-px sm:w-[500px] md:w-[700px]'></div>

        </header>
        <main>
          <div className='flex flex-col justify-center items-center  text-gray-300'>
            <h2 className='my-4 text-xl font-thin uppercase tracking-wider'>visit my links below</h2>
            <ul className='shadow-2xl'>
              <a href="https://github.com/muhammed-swalih"><li className=' gap-10 flex flex-row justify-between px-4 my-2 border-solid border-gray-400 text-lg py-3 border-2 sm:gap-32 md:gap-40 hover:bg-blue-600 '><FaGithub size={30} className=' hover:scale-150 transition ease-in-out duration-200'/><a className='ml-8 hover:underline decoration-gray-400  decoration-2 sm:ml-24 md:ml-36' href="https://github.com/muhammed-swalih">Github</a><span></span><FaGreaterThan/></li></a>  
              <a href="https://instagram.com/s_walihh?igshid=ZmVmZTY5ZGE="><li className=' gap-10 flex flex-row justify-between px-4 my-2 border-solid border-gray-400 text-lg py-3 border-2 sm:gap-32 md:gap-40 hover:bg-blue-600 '><FaInstagram size={30} className='hover:scale-150 transition ease-in-out duration-200'/><a className='ml-8 hover:underline decoration-gray-400 decoration-2 sm:ml-24 md:ml-36' href="https://instagram.com/s_walihh?igshid=ZmVmZTY5ZGE=">Instagram</a><span></span> <FaGreaterThan/></li></a>
              <a href="https://www.linkedin.com/in/muhammed-swalih-825748202/"><li className=' gap-10 flex flex-row justify-between px-4 my-2 border-solid border-gray-400 text-lg py-3 border-2 sm:gap-32 md:gap-40 hover:bg-blue-600 '><FaLinkedin size={30} className=' hover:scale-150 transition ease-in-out duration-200' /><a className='ml-8 hover:underline decoration-gray-400 decoration-2 sm:ml-24 md:ml-36' href="https://www.linkedin.com/in/muhammed-swalih-825748202/">Linked in</a><span></span><FaGreaterThan/></li></a>
              <li className=' gap-10 flex flex-row justify-between px-4 my-2 border-solid border-gray-400 text-lg py-3 border-2 sm:gap-32 md:gap-40 hover:bg-blue-600 '><FaTwitter size={30} className='  hover:scale-150 transition ease-in-out duration-200' /><a  className='ml-8 hover:underline decoration-gray-400  decoration-2 sm:ml-24 md:ml-36' href="">Twitter</a><span></span> <FaGreaterThan/></li>
            </ul>
          </div>
        </main>
      </div>

    </div>
  }
  return (
    <div>
      {MyComponent()}
    </div>
  )
}

export default Main
