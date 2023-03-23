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

    const removeFromShopCart = (payload) => {
        setState({...state, cart: state.cart.filter(item => item.id !== payload.id)})
    };

    return {state, addToShopCart, removeFromShopCart};
};

export {useInitialState};