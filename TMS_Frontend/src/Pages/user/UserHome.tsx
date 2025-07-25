import { UserNavbar } from "../../components/user/UserNavbar"
import Footer from "../../components/Footer"
import { Outlet } from "react-router-dom"

export function UserHome() {
 return (
        <>
            <UserNavbar />
            <main className="flex-grow" > 
                <Outlet />
            </main>
            <Footer />
        </>
     )
}