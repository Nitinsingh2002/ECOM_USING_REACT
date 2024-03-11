import axios from "axios";
import { useEffect, useState } from "react";
import './cart.css'
import { useValue } from "../../Ecom-context";

function Cart() {

    const { cartData, totalPrice, deleteCartData, handleOrder, increaseQty, decreseQty } = useValue();


    function truncateString(str, num) {
        if (str.length <= num) {
            return str;
        }
        return str.slice(0, num) + '...';
    }



    return (
        <>
            {
                cartData.length > 0 ? (
                <div className="table_conatiner table-responsive" >
                    <table className="table table-striped table-hover ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Preview</th>
                                <th scope="col">Price</th>
                                <th scope="col">Qunatity</th>
                                <th scope="col">Total price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartData.map((item, index) => (
                                    <tr key={index}>
                                        <td>{truncateString(item.title, 25)}</td>
                                        <td><img src={item.image} style={{ height: "80px", width: "60px" }} /></td>
                                        <td>{item.price}</td>
                                        <td>
                                            <i class="bi bi-dash-circle me-3" onClick={() => { decreseQty(index) }}></i>
                                            {item.qty}
                                            <i class="bi bi-plus-circle ms-3" onClick={() => { increaseQty(index) }}></i>
                                        </td>
                                        <td>{item.price * item.qty}</td>
                                        <td> <span className="bi bi-trash text-danger " onClick={() => { deleteCartData(index) }}></span></td>
                                    </tr>
                                ))
                            }
                        </tbody>

                        <tfoot >
                            <tr className="text-center">
                                <td className="fw-bold" colSpan="12">Total amount: {totalPrice}</td>
                            </tr>
                            <tr className="text-center">
                                <td className="fw-bold" colSpan="12">
                                    <button className="btn btn-danger" onClick={handleOrder}>Purchase</button>
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
