import Projects from '../components/projects'
import Header from "../components/header"
export default function Page() {
  return (
    <>
     <div className='overflow-x-hidden'>
     <Header/>
     <Projects/>
     </div>
    </>
  )
}