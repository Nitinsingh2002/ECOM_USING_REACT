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
    const [orderData, setOrderData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [modalBody, setModalBody] = useState('')
    const [confirmType, setConfirmType] = useState(false)
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [searchbarInput, setSerachBarInput] = useState("")



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

                if (searchbarInput.length > 0) {
                    filteredProduct = filteredProduct.filter((product) => {
                        return product.title.toLowerCase().includes(searchbarInput);
                    });
                }

                setTimeout(() => {
                    setLoading(false)
                    setData(filteredProduct)
                }, 1000)

            })

            .catch(error => console.log("error in fectching api : ", error)
            )
    }
console.log(searchbarInput.length)

    function handleShowModal() {
        setShowModal(true);
    }

    function handleCloseModal() {
        setShowModal(false);
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
        var qty = 1;
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {

                var check = cartData.find(item => item.id === res.data.id);
                if (check) {
                    check.qty += 1;
                    setCartData([...cartData]);
                    handleShowModal();
                    setModalBody("Product added to cart")
                } else {
                    const newDaata = {
                        id: res.data.id,
                        title: res.data.title,
                        description: res.data.description,
                        qty: qty,
                        price: res.data.price,
                        image: res.data.image,
                        rating: {
                            rate: res.data.rating.rate,
                            count: res.data.rating.count
                        }

                    }
                    setCartData([...cartData, newDaata]);
                    handleShowModal();
                    setModalBody("Product added to cart")
                }

            });

    }


    function handleConfirm() {
        const itemToBeDeleted = [...cartData];
        itemToBeDeleted.splice(deleteIndex, 1);
        setCartData(itemToBeDeleted);
        handleCloseModal();
        setConfirmType(false)
    }

    function deleteCartData(index) {
        setConfirmType(true);
        setModalBody("Are tou sure to delete this item from cart ?");
        handleShowModal();
        setDeleteIndex(index);

    }

    function handleOrder() {
        const newOrder = {
            orderId: new Date().getTime(),
            date: new Date().toLocaleDateString(),
            items: cartData,
            totalPrice: totalPrice
        };
        setOrderData([...orderData, newOrder]);
        setCartData([]);
        handleShowModal();
        setModalBody("Order placed successfully!")
    }


    function increaseQty(index) {
        const data = cartData[index]
        data.qty = data.qty + 1;
        setCartData([...cartData])
    }

    function decreseQty(index) {
        const data = cartData[index]
        data.qty = data.qty - 1;

        if (data.qty == 0) {
            const deletData = [...cartData]
            deletData.splice(index, 1);
            setCartData(deletData);
        }
        else {
            setCartData([...cartData])
        }
    }


    function handleSearchBarChange(e) {
        setSerachBarInput(e.target.value.toLowerCase()); 
    }

    console.log("serachBar input is ", searchbarInput)

    useEffect(() => {
        loadProductData();
        var total = 0;
        for (const product of cartData) {
            total = total + product.price * product.qty;
        }
        setTotalPrice(total);
    }, [meterValue, checkBoxValue, rating, cartData, searchbarInput])



    return (
        <EcomContext.Provider value={{
            data, setData, loadProductData,
            meterValue, meterChange, checkBoxChange,
            ratingChange, handleAddToCartClick, cartData,
            totalPrice, deleteCartData, handleOrder, orderData,
            increaseQty, decreseQty, loading, setLoading,
            modalBody, handleShowModal, handleCloseModal, showModal, handleConfirm, confirmType,
            deleteIndex, handleSearchBarChange
        }}>
            {children}
        </EcomContext.Provider>
    )
}





