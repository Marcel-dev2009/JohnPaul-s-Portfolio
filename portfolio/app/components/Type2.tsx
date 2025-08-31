'use client'
import TypewriterComponent from "typewriter-effect"
function Type2() {
  return (
    <div className="text-[1rem]">
        <TypewriterComponent
        options={{
          strings : [
            `This Page Emphasizes on what we do and produce in our company "JP INTERNATIONAL" `,
            `This page Showcases  few of our projects and recongnition gained worldwide `,
            'This Page Displays the type of training the new recruits are trained one in a Detailed manner ',
            `Enjoy Your Survey`,        
          ],
          delay : 70,
          deleteSpeed : 50,
          autoStart : true ,
          loop : false,
        }}
        >
          
    </TypewriterComponent>   
    </div>
  )
}
export default Type2