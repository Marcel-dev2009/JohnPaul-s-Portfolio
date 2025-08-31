'use client'
import { useState } from "react"
import {AnimatePresence, motion } from 'framer-motion'
import { Ellipsis , X } from "lucide-react";
import Link from "next/link";
export default function SideBar() {
 const [expanded , setExpanded] = useState(false);
  return (
    <>
<aside>
  {expanded && (
   <>
     <button onClick={() => setExpanded(false)}>
       <X className="w-5 h-5 absolute top-10   z-50 right-10 text-white "/>   
   </button>
   <AnimatePresence mode="wait">  
 <motion.div
 initial={{width : 0}}
 animate={{width : '256px'}}
  transition={{duration : 0.5 , delay:0.1 , ease: 'easeInOut'}}
  className={` fixed top-0 right-0 h-screen z-30 w-64 dark:bg-black bg-white rounded-tl-lg rounded-bl-lg`}>
   <nav className="text-white mt-[7rem] px-6 py-2">
      <ul className="flex flex-col gap-4 dark:text-white text-black ">
     <Link href='/' className="border px-20 py-2 rounded-md">Home</Link> <br />
     <Link href='#about' className="border px-20 py-2 rounded-md">About</Link> <br />
     <Link href='/projects' className="border px-20 py-2 rounded-md whitespace-nowrap">Projects</Link> <br />

     </ul>    
   </nav>
 </motion.div>     
   </AnimatePresence>
  </>
  )}
  {!expanded && (
   <button onClick={() => setExpanded(true)}><Ellipsis className="w-5 h-5 absolute top-6 z-30 right-4"/></button>
  )}          
</aside>
    </>
  )
}