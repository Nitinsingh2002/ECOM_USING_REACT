import axios from "axios";
import { useEffect, useState } from "react";
import './Order.css'
import { useValue } from "../../Ecom-context";


export default function Order() {



    const { orderData, totalPrice, } = useValue()


    console.log("orderData in order", orderData)

    return (
        <>
            <div>
                {
                    orderData.length <= 0 ? (<div className="text-center"
                        style={{ height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <h3>You currently don't have any orders</h3> </div>) : (

                        <>
                            <h1 className=" text-center mt-2 mb-5">Your Orders</h1>
                            <div className="indivisual_table">
                                {orderData.map(item => (
                                    <div key={item.id} className="real_i_table">
                                        <h4 className="text-center fw-bolder">Ordered On: {item.date}</h4>

                                        <div class="table-responsive">
                                            <table className="table table-hover mt-3 tabla">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Title</th>
                                                        <th scope="col">Price</th>
                                                        <th scope="col">Preview</th>
                                                        <th scope="col">Qunatity</th>
                                                        <th scope="col">TotalPrice</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {
                                                        item.items.map(i => (
                                                            <tr className="table-responsive">
                                                                <td>{i.title}</td>
                                                                <td>{i.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</td>
                                                                <td><img src={i.image} style={{ height: "50px", width: "50px" }} alt={item.title} /></td>
                                                                <td>{i.qty}</td>
                                                                <td>{i.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</td>
                                                            </tr>
                                                        ))
                                                    }
                                                    <tr className="text-end">

                                                        <td className="fw-bold" colSpan="12">Total Order Value: {item.totalPrice.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
            </div>

        </>
    );
}


