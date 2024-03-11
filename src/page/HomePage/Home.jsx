
import CollapsibleNavbar from "../../component/Navbar/Navbar"
import SerachBar from "../../component/SearchBar/SearchBar"
import { SideBar } from "../../component/SideBar/sideBar"
import { Cardd } from "../../component/card/card"
import './home.css'
import { useValue } from "../../Ecom-context"
import { Alert } from "../../component/alert/alert"
import './home.css'
import { HashLoader } from "react-spinners"

export const Home = () => {

    const { loading, setLoading } = useValue()
    return (
        <>
            <CollapsibleNavbar />
              <Alert/>
            {
                loading ? (<div className="tspinner">
                    <HashLoader color="#007bff"  size={70}/>
                </div>) :
                    
                    (
                       <>
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




        </>
    )
}