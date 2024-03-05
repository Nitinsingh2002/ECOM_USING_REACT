import axios from "axios";
import { useEffect, useState } from "react";

function Cart() {
    const [cartItem, setCartItem] = useState([])

    function LoadCartData() {
        axios.get("https://fakestoreapi.com/products").
            then(res => setCartItem(res.data)).
            catch(error => console.log("error in fetching data", error))
    }
    useEffect(() => {
        LoadCartData();
    }, [])


    return (
        <>
            <table className="table table-striped table-hover ">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Preview</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        cartItem.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{item.title}</th>
                                <td> <img src={item.image} style={{ height: "80px", width: "60px" }} /></td>
                                <td>{item.price}</td>
                            </tr>

                        ))
                    }

                </tbody>
            </table>
        </>
    )
}


export default Cart;

