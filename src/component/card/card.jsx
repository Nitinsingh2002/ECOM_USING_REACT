import axios from "axios"
import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css'

export const Cardd = () => {
    const [data, setData] = useState([]);

    function loadProductData() {
        axios.get('https://fakestoreapi.com/products').
            then(res => setData(res.data))
            .catch(error => console.log("error in fectching api : ", error)
            )
    }

    useEffect(() => {
        loadProductData();
    }, [])


    return (
        <>
            <div className="card_container">

                {data.map((item, index) => (
                    <>
                        <Card key={index}  className="card">
                            <Card.Img variant="top" src={item.image} className="card_image" />
                            <Card.Body>
                                <Card.Title className="title">{item.title}</Card.Title>
                                <div className="d-flex justify-content-between">
                                    <Card.Text>
                                        {item.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                                    </Card.Text>

                                    <Card.Text className="me-2">
                                        Rating : {item.rating.rate}
                                    </Card.Text>
                                </div>

                                <Button variant="primary" className="w-100">
                                    <i class="bi bi-cart4 me-2" ></i>
                                    Add to cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </>
                ))}

            </div>
        </>
    )
}