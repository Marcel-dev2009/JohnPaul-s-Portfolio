'use client';
import {AnimatePresence, motion} from 'framer-motion'
import icon from '../../public/images/icon.png'
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import Link from 'next/link';
import { Home } from 'lucide-react';
import { useState , useEffect } from 'react';
import Theme from './Theme';
import Sidebar from "./sidebar"
export default function Header() {
  const win = typeof window !== "undefined" ? window   : undefined;
  const useWidth = (threshold = 1080) => {
    const [Narrow , setIsNarrow] = useState(win ? win.innerWidth <= threshold : false)
    useEffect(() => {
     function onResize(){
       setIsNarrow(window.innerWidth<= threshold)
     }
     window.addEventListener('resize' , onResize);
     onResize();
     return () => window.removeEventListener('resize' , onResize);
    } , [threshold])
    return Narrow
   }
   const Narrow = useWidth(768);
  return (
    <div className="w-full h-auto bg-white shadow-lg py-10  dark:bg-black dark:text-white overflow-hidden">
     <AnimatePresence mode='wait'>
     <motion.div 
      initial={{ top : -1000}}
       animate={{ top : 0}}
       transition={{duration : 5 , ease: 'easeIn' , type: 'spring' , damping:20 , stiffness:100}}  
       className='bg-gray-300 shadow-2xl p-6 w-fit absolute top-0 left-2.5 rounded-b-md'>
       <Image src={icon} alt='This is John Pauls Icon' width={25} height={25} className='rounded-full'/> 
       </motion.div> {/* Icon-Overlay */}
     </AnimatePresence>
      <div className='flex justify-between ml-27'>
          <h2 className=' text-[1.2rem] md:text-2xl absolute top-4 font-semibold border-r border-r-gray-600 px-4'>My Portfolio</h2>
          {Narrow ? (
            <Sidebar/>
          ) : (
            <ul className='flex gap-2.5 absolute right-10 font-normal'>
            <Link href='#about'> About Me </Link>
            <Link href='/projects'>Projects</Link>
            <Link href='#contact'>Contact</Link>
            <Button asChild>
           <Link href='/'><Home/></Link>
            </Button>
          </ul> 
          )}
      </div>
      <div className='absolute top-0 px-10 md:right-70 md:top-4'>
          <Theme/>
      </div>
    </div>
  )
}