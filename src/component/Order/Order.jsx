import axios from "axios";
import { useEffect, useState } from "react";
import './Order.css'


export default function Order() {
    const [orderItem, setOrderItem] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=2')
            .then(res => setOrderItem(res.data))
            .catch(error => console.log("error in fetching api", error));
    }, []);

    return (
        <>
            <div>
                <h1 className=" text-center mt-2 mb-5">Your Orders</h1>

                <div className="indivisual_table">
                    {orderItem.map(item => (
                        <div key={item.id} className="real_i_table">
                            <h4 className="text-center fw-bolder">Ordered On: 31/02/2024</h4>
                            <table className="table table-hover mt-3">
                                <thead>
                                    <tr>
                                        <th scope="col">Title</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Preview</th>
                                        <th scope="col">TotalPrice</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>{item.title}</td>
                                        <td>{item.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</td>
                                        <td><img src={item.image} style={{ height: "50px", width: "50px" }} alt={item.title} /></td>
                                        <td>{item.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</td>
                                    </tr>
                                    <tr>
                                    <td colSpan="3"></td>
                                        <td className="fw-bold">Total Order Value:</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
