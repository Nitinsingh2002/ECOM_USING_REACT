import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const EcomContext = createContext();

export function useValue() {
    const value = useContext(EcomContext);
    return value;
}

export function CustomEcomContext({ children }) {
    const [data, setData] = useState([]);
    const [meterValue, setMeterValue] = useState(0);
    const [checkBoxValue, setCheckBoxValue] = useState([]);
    const [rating, setRating] = useState(0);
    const [cartData, setCartData] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);


    function loadProductData() {
        axios.get('https://fakestoreapi.com/products').
            then(res => {
                let filteredProduct = res.data;

                if (meterValue > 0) {
                    filteredProduct = filteredProduct.filter((product) => product.price < meterValue)
                }

                if (checkBoxValue.length > 0) {
                    filteredProduct = filteredProduct.filter((product) => {
                        return checkBoxValue.includes(product.category);
                    })
                }

                if (rating > 0) {
                    filteredProduct = filteredProduct.filter((product) => {
                        return product.rating.rate >= rating;
                    })
                }
                setData(filteredProduct)
            })

            .catch(error => console.log("error in fectching api : ", error)
            )
    }


    function meterChange(e) {
        setMeterValue(e.target.value);
    }


    function checkBoxChange(e) {
        if (e.target.checked) {
            setCheckBoxValue([...checkBoxValue, e.target.value])
        } else {
            setCheckBoxValue(checkBoxValue.filter((item => item != e.target.value)))
        }
    }


    function ratingChange(e) {
        setRating(e.target.value);
    }


    function handleAddToCartClick(id) {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                setCartData([...cartData, res.data]);
                alert("item is added to cart");
            });
    }

    function deleteCartData(index) {
        //state data is immutable so we can't perform splice direcly on cartData
        const itemToBeDeleted = [...cartData];
        itemToBeDeleted.splice(index, 1);
        setCartData(itemToBeDeleted);
    }




    useEffect(() => {
        loadProductData();
        var total = 0;
        for (const product of cartData) {
            total = total + product.price;
        }
        setTotalPrice(total);
    }, [meterValue, checkBoxValue, rating, cartData])



    return (
        <EcomContext.Provider value={{
            data, setData, loadProductData,
            meterValue, meterChange, checkBoxChange,
            ratingChange, handleAddToCartClick, cartData,
            totalPrice, deleteCartData
        }}>
            {children}
        </EcomContext.Provider>
    )
}

