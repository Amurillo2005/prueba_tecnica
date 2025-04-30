import { Product } from "../Interfaces/Product";

const storageKey = "products";

export const getProductsFromStorage = (): Product[] => {

    if (typeof window === "undefined") {
        return []; 
    }
    
    const stored = localStorage.getItem(storageKey);
    return stored ? JSON.parse(stored) : []
}

export const saveProductsToStorage = (products: Product[]) => {
    
    if (typeof window === "undefined") {
        return; 
    }

    localStorage.setItem(storageKey, JSON.stringify(products));
}