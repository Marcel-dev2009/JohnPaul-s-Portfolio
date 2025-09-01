'use client'
import Type2 from "./Type2"
import {motion , AnimatePresence} from 'framer-motion'
import { useState , useEffect } from "react"
import Image from "next/image"
import ContactForm from "./contact"
import { IoLogoGoogleplus } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWikipediaW } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import secret from "../../public/images/little-secret.png"
import forest from "../../public/images/JP--forest.jpg"
import Footer from "./footer"
import angry from "../../public/images/Angry-graves.jpg"
import pains from "../../public/images/Beyond-Pains.jpg"
import Link from 'next/link'
import crew from "../../public/images/JP's-image.jpg"
import { EffectCards , Pagination , Autoplay} from "swiper/modules";
import {Swiper , SwiperSlide} from "swiper/react"
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import FAQ from "./faq"
import ResponsiveTable from "./Table";
import Services from "./service";
export default function Projects() {
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
   <>
   <div className="overflow-x-hidden overflow-y-auto">
     <div className="grid place-content-center">
     <Type2/>
     </div>
      <AnimatePresence mode="wait">
        <motion.div 
        initial={{ opacity : 0.5 , y : -1000}}
        animate={{ opacity : 1, y : 0}}
        transition={{duration : 3, ease : 'easeIn',  type : 'spring' , damping : 20 , stiffness:100, mass : 1}}
        className="text-center flex justify-center items-center font-bold mt-2.5" 
        >
         <h2 className=" text-[1.25rem] md:text-3xl border-r px-6 dark:border-r-gray-300 border-r-gray-600">JP INTERNATIONAL</h2> 
         <pre className="px-6 ">What We Do</pre>
        </motion.div>
      </AnimatePresence>
      <section>
      <div className="z-100 flex flex-col lg:flex-row gap-[4rem]" id="about">
             <p className={` mt-10 ml-8 transform text-[1.2rem] font-semibold border dark:border-white/5 border-gray-600 rounded-lg p-6 ${Narrow ? '-translate-x-3.5' : ''} `}>
              {Narrow ? (
                <p>
                    JP Film International is a global film production and promotion company that aims to produce high-quality movies from Nollywood standard to global film standard. Our mission is to showcase Nigerian culture and talent to the world, while promoting cultural exchange and understanding through film.
                </p>
              ) : (
                <p>
                JP Film International is a global film production and promotion company that aims to produce high-quality movies from Nollywood standard to global film standard. Our mission is to showcase Nigerian culture and talent to the world, while promoting cultural exchange and understanding through film.
                JP Film International is a global film production and promotion company that aims to
                 produce high-quality movies from Nollywood standard to global film standard. Our mission is to
                  showcase Nigerian culture and talent to the world, while promoting cultural exchange and understanding through film.
                </p>
              )}
              </p>
             <Image src={crew} alt="John Paul Nwanganaga" className=" w-[100%] md:w-[35%] mt-4 border dark:border-white/5 border-gray-600 p-2 rounded-lg bg-white/5"/>
           </div> <br />
           
           <div>
               <h2 className="text-center text-3xl font-bold">Our Mission</h2> <br />
            <p className="text-center font-bold">Our mission is to educate, inspire, and promote positive values through engaging storytelling.</p>
             <div className={` ${ Narrow ? "w-full" : "ml-90"} border dark:border-white/5 transform shadow-lg border-gray-600 rounded-lg h-auto w-[50%]  mb-10 mt-6`}>
             <div  className="py-3 border-b dark:border-b-white/5 border-b-gray-600 ">
           <h3 className=" ml-[7rem] whitespace-nowrap md:translate-x-40 transform font-bold ">Our Achievements</h3>
            <p className={`${Narrow ? 'ml-[2rem] whitespace-nowrap w-full' : 'translate-x-45 transform '}`}>Over 50+ movies produced internationally</p>
            </div>  
            <div className={`flex gap-3.5 mt-6 mb-5 ${Narrow ? 'ml-[7rem] whitespace-nowrap' : 'translate-x-40 transform '}`}>
              <Link href="www.goggle.com"><IoLogoGoogleplus  className={`text-orange-700/25 transition duration-300 hover:scale-50 ${Narrow ? 'text-2xl' : 'text-6xl'}`}/></Link>
             <Link href="www.facebook.com"> <FaFacebookF  className={`text-blue-500/25 transition duration-300 hover:scale-50 ${Narrow ? 'text-2xl' : 'text-6xl'}`}/></Link>
              <Link href="www.instagram.com"><FaInstagramSquare  className={`text-pink-500/25 transition duration-300 hover:scale-50 ${Narrow ? 'text-2xl' : 'text-6xl'}`}/></Link>
            <Link href="www.wikipedia.com">   <FaWikipediaW  className={`text-gray-500/25 transition duration-300 hover:scale-50 ${Narrow ? 'text-2xl' : 'text-6xl'}`}/></Link>
              <span className={` ${Narrow ? 'text-[0.5rem] px-4]' : 'text-[1.5rem]'}mt-5`}>+5 More....</span>
             </div> 

            </div> 
            <div>
            <div id="project gallery">
            <Swiper
        effect="cards"
        grabCursor={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[EffectCards, Pagination, Autoplay]}
        className={`mySwiper ${Narrow ? 'transform translate-y-30' : ''}`}
        style={{ width: '50%', height: 400 }}
      >
        <SwiperSlide>
          <div className={`flex items-center justify-center  text-white bg-white/5 text-2xl rounded-xl shadow-xl border dark:border-white/5 border-gray-600 ${Narrow ? 'h-auto' : 'h-full'}`}>
           <Image src={secret} alt="Yul Edochie" className="rounded-lg"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`flex items-center justify-center ${Narrow ? 'h-auto' : 'h-full'} border bg-white/5 dark:border-white/5 border-gray-600 text-white text-2xl rounded-xl shadow-xl`}>
           <Image src={pains} alt="Mama-G" className="rounded-lg"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`flex items-center justify-center ${Narrow ? 'h-auto' : 'h-full'} border bg-white/5 dark:border-white/5 border-gray-600 text-white text-2xl rounded-xl shadow-xl`}>
            <Image src={angry} alt="Chinewtelu-Agu" className="rounded-lg"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`flex items-center justify-center ${Narrow ? 'h-auto' : 'h-full'} border bg-white/5 dark:border-white/5 border-gray-600 text-white text-2xl rounded-xl shadow-xl`}>
            <Image src={forest} alt="JohnPaul Nwanganga" className="rounded-lg"/>
          </div>
        </SwiperSlide>
      </Swiper>
                   </div>  {/* swiper end */}
            </div>  
            <div >
             <h2 className="ml-[31rem] mb-6 font-bold text-2xl border-b dark:border-b-white w-fit border-b-gray-700 py-4">Services Offered + Training Details</h2>        
          </div> <br />
          <div>
            <div className="text-center font-bold mb-6">We offer a range of services to help you achieve your goals, including:</div>
            <div id="service">
             <Services/>
            </div>
            </div> <br />
           <div>
            <ResponsiveTable/>
           </div>
           <div id="contact">
             <ContactForm/>
           </div>
           <div>
            <FAQ/>
           </div>
           </div>
      </section>
      <footer>
          <Footer/>
      </footer>
   </div>
   </>
  )
}