import TypewriterComponent from "typewriter-effect";
export default function Type () {
      return (
     <div className="ml-16">
        <TypewriterComponent
options={{
   strings:[
    " A Nollywood Film Director",
     "An Actor", 
     " A Film maker", 
    " A Content Creator"
   ],
   delay : 100,
   autoStart : true,
   loop : true,
  deleteSpeed :50
}}
 
>

</TypewriterComponent>  
     </div>
      )    
}