import {useState} from "react";

const initialState = {
    cart: [],
};

const useInitialState = () => {
    const [state, setState] = useState(initialState);
    
    // funcion para añadir productos al carrito
    const addToShopCart = (payload) => {
        setState({...state, cart: [...state.cart, payload]})
    };

    const removeFromShopCart = (indexValue) => {
        setState({...state, cart: state.cart.filter((product,index) => index !== indexValue)})
    };

    return {state, addToShopCart, removeFromShopCart};
};

export {useInitialState};