import { FaBus, FaRegCalendarAlt } from "react-icons/fa"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

export function Home() {



    return (
        <>


            <Navbar />

            <main className="flex-grow" >
                
                <Outlet/>

                 
                
            </main>


           



               


          



            <Footer />




        </>
    )
}