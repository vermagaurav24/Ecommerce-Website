import React, { useEffect, useState } from "react";
import { createContext } from "react";
// import {products} from '../assets/assets'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    useEffect(() => {
        try {
            const stored = localStorage.getItem("cartItems");
            if (stored) {
                const parsed = JSON.parse(stored);
                if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
                    setCartItems(parsed);
                } else {
                    setCartItems({});
                }
            }
        } catch (err) {
            console.error("Could not load cart from localStorage:", err);
            setCartItems({});
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const [products, setProducts] = useState([]);
    // const [token, setToken] = useState('');
    const [token, setToken] = useState(localStorage.getItem("token") || '');
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {

        if (!size) {
            toast.error('Select product size');
            return;
        }
        let cartData = structuredClone(cartItems || {});
        if (!cartData[itemId]) cartData[itemId] = {};

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);

        if (token) {
            try {
                const userId = localStorage.getItem('userId');
                await axios.post(backendUrl + '/api/cart/add', { userId, itemId, size }, { headers: { Authorization: `Bearer ${token}` } })

            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {

                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity) => {

        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);

        if (token) {
            try {
                const userId = localStorage.getItem('userId');
                await axios.post(backendUrl + '/api/cart/update', { userId, itemId, size, quantity }, { headers: { Authorization: `Bearer ${token}` } })

            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {

                }
            }
        }
        return totalAmount;
    }

    const getProductsData = async () => {
        try {
            const response = await axios.post(backendUrl + '/api/product/list')
            if (response.data.success) {
                setProducts(response.data.products)
            }
            else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const getUserCart = async (token) => {
        try {
            const userId = localStorage.getItem('userId');
            const response = await axios.post(backendUrl + '/api/cart/get', { userId }, { headers: { Authorization: `Bearer ${token}` } })
            if (response.data.success) {
                if (response.data.cartData && Object.keys(response.data.cartData).length > 0) {
                    setCartItems(response.data.cartData);
                }
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getProductsData();
    }, [])

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
            // getUserCart(localStorage.getItem('token'))
        }
    }, [])

    useEffect(() => {
        if (token) {
            getUserCart(token);
        }
    }, [token]);

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, setCartItems,
        getCartCount, updateQuantity,
        getCartAmount, navigate, backendUrl,
        setToken, token
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;