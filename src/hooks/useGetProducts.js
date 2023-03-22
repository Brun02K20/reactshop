import { useEffect, useState } from "react";

const useGetProducts = (API) => {
    // declaro el estado
    const [products, setProducts] = useState([]);

    // traigo la api
    useEffect(async () => {
        const request = await fetch(API);
        const response = await request.json();
        setProducts(response);
    }, []);

    // añado el return de los productos para despues pasarlos como una prop al ProductList

    return products;
};

export {useGetProducts}