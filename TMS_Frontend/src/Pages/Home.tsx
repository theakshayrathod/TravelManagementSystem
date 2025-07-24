import Navbar from "../components/OperaterNavbar"
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