"use client"
import { useState, useEffect } from "react"
import { useProductContext } from "@/app/Context/ProductContext"
import { Product } from "@/app/Interfaces/Product"

export const SearchBar = () => {

    const { setProducts } = useProductContext()
    const [searchTerm, setSearchTerm] = useState<string>("")
    const [sortBy, setSortBy] = useState<string>("")

    
    useEffect(() => {
        const originalProducts = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("products") || "[]") : [];
        let filtered = [...originalProducts]

        if (searchTerm) {
            filtered = filtered.filter((product: Product) =>
                product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (sortBy) {
            filtered.sort((a: Product, b: Product) => {

                switch (sortBy) {
                    case "cantidad": return a.cantidad - b.cantidad

                    case "creacion": return new Date(a.creacion).getTime() - new Date(b.creacion).getTime()

                    case "codigo": return a.codigo - b.codigo

                    case "nombre": return a.nombre.localeCompare(b.nombre)

                }

                return 0
            })
        }

        setProducts(filtered)

    }, [searchTerm, sortBy, setProducts])

    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                <input type="text" placeholder="Buscar por nombre..." className="border p-2 rounded w-full md:w-1/2" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border p-2 rounded w-full md:w-1/4" >
                    <option value="">Ordenar por...</option>
                    <option value="codigo">Código</option>
                    <option value="nombre">Nombre</option>
                    <option value="cantidad">Cantidad</option>
                    <option value="creacion">Fecha de creación</option>
                </select>
            </div>
        </>
    )
}
