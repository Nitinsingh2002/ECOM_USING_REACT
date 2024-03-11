
import { Alert } from "../../component/alert/alert";
import Cart from "../../component/cart/Cart";
import CollapsibleNavbar from '../../component/Navbar/Navbar'

import './cartPage.css';

export default function CartPage() {


    return (
        <>
            <div className="parentofAll">
                <CollapsibleNavbar />
                <Alert />
                <Cart />
            </div>
        </>
    )
}