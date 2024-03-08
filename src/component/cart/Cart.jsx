import axios from "axios";
import { useEffect, useState } from "react";
import './cart.css'

function Cart() {
    const [cartItem, setCartItem] = useState([])

    function LoadCartData() {
        axios.get("https://fakestoreapi.com/products?limit=5")
            .then(res => setCartItem(res.data))
            .catch(error => console.log("error in fetching data", error))
    }

    function truncateString(str, num) {
        if (str.length <= num) {
            return str;
        }
        return str.slice(0, num) + '...';
    }

    useEffect(() => {
        LoadCartData();
    }, [])

    return (
        <>
            {
                cartItem.length > 0 ? (<div className="table_conatiner">
                    <table className="table table-striped table-hover ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Preview</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItem.map((item, index) => (
                                    <tr key={index}>
                                        <td>{truncateString(item.title, 25)}</td>
                                        <td><img src={item.image} style={{ height: "80px", width: "60px" }} /></td>
                                        <td>{item.price}</td>
                                        <td> <span className="bi bi-trash text-danger "></span></td>
                                    </tr>
                                ))
                            }
                        </tbody>

                        <tfoot >
                            <tr className="text-center">
                                <td className="fw-bold" colSpan="12">Total amount: 0</td>
                            </tr>
                            <tr className="text-center">
                                <td className="fw-bold" colSpan="12">
                                    <button className="btn btn-danger">Purchase</button>
                                </td>
                            </tr>
                        </tfoot>


                    </table>
                </div>

                ) :
                    (
                        <div className="empty">
                            <h1>Your cart is empty</h1>
                        </div>
                    )
            }
        </>
    )
}

export default Cart;
