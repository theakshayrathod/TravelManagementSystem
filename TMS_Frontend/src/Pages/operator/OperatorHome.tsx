import Footer from "../../components/Footer"
import { Outlet } from "react-router-dom"
import OperatorNavbar from "../../components/operator/OperaterNavbar"

export function OperatorHome() {



    return (
        <>


            <OperatorNavbar />

            <main className="flex-grow" >

                <Outlet />



            </main>













            <Footer />




        </>
    )
}