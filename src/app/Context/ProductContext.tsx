"use client";

import { Product } from "../Interfaces/Product";
import { createContext, useContext, useState, useEffect } from "react";
import { getProductsFromStorage, saveProductsToStorage } from "../Utils/LocalStorage";

interface ProductType {
    products: Product[];
    addProduct: (product: Product) => void;
    deleteProduct: (codigo: number) => void;
    setProducts: (products: Product[]) => void;
    loading: boolean;
}

const ProductContext = createContext<ProductType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const storedProducts = getProductsFromStorage();

        if (storedProducts) {
            setProducts(storedProducts)
        }

        setLoading(false);
    }, [])

    useEffect(() => {
        saveProductsToStorage(products);
    }, [products])

    const addProduct = (product: Product) => {
        setProducts((prevProduct) => [...prevProduct, product]);
    }

    const deleteProduct = (codigo: number) => {
        setProducts((prevProduct) => prevProduct.filter((product) => product.codigo !== codigo));
    }

    return (
        <ProductContext.Provider value={{ products, addProduct, deleteProduct, setProducts, loading }}>
            {children}
        </ProductContext.Provider>
    );

};

export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error("useProductContext debe ser usado dentro de un ProductProvider");
    }
    return context;
}