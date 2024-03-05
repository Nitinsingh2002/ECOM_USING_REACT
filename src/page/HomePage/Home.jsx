
import CollapsibleNavbar from "../../component/Navbar/Navbar"
import SerachBar from "../../component/SearchBar/SearchBar"
import { SideBar } from "../../component/SideBar/sideBar"
import { Cardd } from "../../component/card/card"
import './home.css'


import './home.css'
export const Home = () => {
    return (
        <>
            <CollapsibleNavbar />
            <SerachBar />

            <div className="  parent "   >
                <div className="sidebar">
                    <SideBar />
                </div>

                <div className="cardd">
                    < Cardd />
                </div>
            </div>



        </>
    )
}