import axios from "axios"
import { useEffect, useState } from "react"
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css'
import { useValue } from "../../Ecom-context";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const Cardd = () => {

    const { data, handleAddToCartClick } = useValue();


    return (
        <>
            <div className="card_container">

                {data.map((item, index) => (

                    <Card key={item.id} className="card">
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


                            <Button variant="contained"
                                endIcon={<ShoppingCartOutlinedIcon />}
                                className="w-100"
                                onClick={() => { handleAddToCartClick(item.id) }}
                            >
                                Add to cart
                            </Button>

                        </Card.Body>
                    </Card>

                ))}

            </div>
        </>
    )
}