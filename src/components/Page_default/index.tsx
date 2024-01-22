import { Footer } from "../Footer"
import { Nav_bar } from "../Nav_bar"
import { Outlet } from "react-router-dom"
import { Menu_lateral } from "../Menu_lateral/"

export const Page_default = () => {

    return (
        
        <>
        <header>
            <Nav_bar />

            <Menu_lateral />
        </header>
    
        <main>
            <Outlet />
        </main>

        <footer>
            <Footer />
        </footer>
        </>
    
    )
}