'use client'
import Image from "next/image"
import img from "../../public/images/JP--In-style.png"
import Jp from "../../public/images/JP--self.png"
import bodyImg from "../../public/images/JpBody.png"
import Link from "next/link"
import { useState , useEffect } from "react"
import Type from "./Type"
import { Button } from "@/components/ui/button"
import crew from "../../public/images/JP's--crew team.jpg"
import Footer from '../components/footer'
export default function Body() {
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
  const text = `I'm JohnPaul Nwanganga`
  return (
    <>
    <div className="flex flex-col md:flex-row justify-between">
      <div className="mt-[10rem]">
        <h2 className="font-bold text-4xl ml-16 flex">{text}</h2>
         <span className="text-[1.2rem]"><Type/></span>  <br />
         <span>
           <p className="px-4">...Through his work, Johnpaul continues to contribute to the growth and development of Nigeria vibrant  <br />film industry...</p>
         </span>
      </div> 
      <div className={`border  ${Narrow ? 'ml-10 translate-x-4' : ''}  transform mr-16 my-6 rounded-lg dark:bg-black/5  bg-gray-200  shadow-lg`}>
          <Image src={img} alt="JohnPaul Nwangaga" loading="lazy"/>
      </div>
    </div> {/* Intro end */}


    <section>
           <div className="grid place-content-center font-bold text-[1.2rem] md:text-3xl">
            <h2 id="about">About Me </h2>
           </div> <br />
         <article className={`border dark:border-white/5 shadow-xl border-gray-600 m-2 rounded-lg max-w-[1500px] dark:bg-gray-900/5 ${Narrow ? 'w-full' : ''}`}>
         <div className="z-100 flex flex-col lg:flex-row ">
             <p className={`absolute top-[50rem]  md:text-[1.2rem] font-semibold border dark:border-white/5 border-gray-600 rounded-lg p-6 ${Narrow ? 'left-0' : 'left-15 w-[50%]'}`}>
               {Narrow ? (
                <p className="text-center">
                   I am Johnpaul Nwanganga a distinguished filmmaker, director, and actor with a proven track record in the Nigerian film industry. 
                 Having honed my craft through various roles, including production assistant and crew positions, I have risen to prominence as a prolific director, 
                 known for my compelling storytelling and technical expertise.
                </p>
               ) : (
                 <p>
                 I am Johnpaul Nwanganga a distinguished filmmaker, director, and actor with a proven track record in the Nigerian film industry. 
                 Having honed my craft through various roles, including production assistant and crew positions, I have risen to prominence as a prolific director, 
                 known for my compelling storytelling and technical expertise.
                 A respected leader in the industry, I serve as the National Director of Social and 
                 Welfare for the Directors Guild of Nigeria (DGN). I previously held esteemed positions,
                 including President of the Igbo   filmmakers & Igbo Movie Producers Association of Nigeria (IMPAN)
                 and Chapter Chairman of the Association of Movie Producers (AMP), Enugu State Chapter. Update Member 
                 of Actors Guild of Nigeria.`
                 </p>
               )}
              </p>
             <Image src={bodyImg} alt="JohnPaul Nwanganga" className={`absolute right-6 border dark:border-white/5 border-gray-600 rounded-lg h-auto transform mt-4 ${Narrow ? 'translate-y-[20rem] translate-x-7' : ''} `}/>
           </div>
        <div className="grid place-content-center dark:opacity-[0.05] opacity-[0.3]"> 
          <Image src={Jp} alt="John Paul Nwanganga" loading="lazy"/>
        </div>
         </article> <br />
        <article>
            <div>
              <h1 className={`absolute left-6 font-bold mt-4 border-b ${Narrow ? 'translate-y-[20rem]' : ''} dark:border-b-white/5 border-b-gray-600`}> JP INERNATIONAL</h1>
            </div>
            <div className={`border dark:border-white/5 shadow-xl border-gray-600 m-2 rounded-lg max-w-[1500px] dark:bg-gray-900/5 py-10 ${Narrow ? 'translate-y-[20rem] mb-50' : ''} `}>
               <p className="px-6 font-semibold mt-10">
               Johnpaul Nwanganga is a distinguished filmmaker, director, and actor in the Nigerian film industry, known for his compelling storytelling and technical expertise. He serves as the National Director of Social and Welfare for the Directors Guild of Nigeria (DGN) and has held leadership roles in the Igbo filmmakers community and the Association of Movie Producers in Enugu State. <br/>
               </p> <br />
               <p className="px-6 font-semibold mt-10">
               JP Film International is his global production company focused on creating high-quality films that showcase Nigerian culture to promote cultural exchange.<br/>
              Thinkers Base Film Studio is another venture dedicated to producing educational and inspirational content, particularly for <br />family and children, with the mission of promoting positive values through storytelling.
               </p> <br />
               <div className="grid place-content-center">
               <Button asChild className="animate-bounce">
                  <Link href="/projects">View Projects Worked on</Link>
               </Button>
               </div>
            </div>
          </article> <br /> 
            <div className={`border transform dark:border-white/5 py-6 border-gray-500 w-fit m-6 rounded-lg
              ${Narrow ? 'translate-y-[5rem] mb-20 mt-10' : ''}`}>
                <Image src={crew} alt="JohnPaul Nwanganga" className={` transform w-[30%] h-[30%px] rounded-lg shadow-lg ${Narrow ? 'ml-12 w-[70%]' : 'ml-[30rem] '}`}/>
            </div>
       </section> <br />
       <footer>
           <Footer/>
       </footer>
    </>
  )
}