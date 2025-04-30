"use client"
import { useState } from "react";
import { useProductContext } from "@/app/Context/ProductContext";
import { Product } from "@/app/Interfaces/Product";
import { useValidateForm } from "@/app/Hooks/useValidateForm";

export const ProductForm = () => {

    const { addProduct } = useProductContext();
    const [codigo, setCodigo] = useState<number>(0);
    const [nombre, setNombre] = useState<string>("");
    const [descripcion, setDescripcion] = useState<string>("");
    const [cantidad, setCantidad] = useState<number>(0);

    const { error, validate } = useValidateForm();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const values = { codigo, nombre, descripcion, cantidad };

        if (!validate(values)) {
            return;
        }


        const newProduct: Product = {
            ...values,
            creacion: new Date().toISOString()
        }

        addProduct(newProduct);
        setCodigo(0);
        setNombre("");
        setDescripcion("");
        setCantidad(0);
    }


    return (
        <>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
                <h2 className="text-2xl font-bold mb-4">Agregar Producto</h2>

                <div className="mb-4">
                    <label htmlFor="codigo" className="block text-gray-700 text-sm font-bold mb-2" >Código</label>
                    <input id="codigo" type="number" value={codigo} onChange={(e) => setCodigo(Number(e.target.value))} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    {error.codigo && <p className="text-red-500 text-xs mt-2">{error.codigo}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                    <input id="nombre" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    {error.nombre && <p className="text-red-500 text-xs mt-2">{error.nombre}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="descripcion" className="block text-gray-700 text-sm font-bold mb-2">Descripción</label>
                    <textarea id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    {error.descripcion && <p className="text-red-500 text-xs mt-2">{error.descripcion}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="cantidad" className="block text-gray-700 text-sm font-bold mb-2">Cantidad</label>
                    <input id="cantidad" type="number" value={cantidad} onChange={(e) => setCantidad(Number(e.target.value))} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    {error.cantidad && <p className="text-red-500 text-xs mt-2">{error.cantidad}</p>}
                </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"> Agregar Producto </button>
            </form>
        </>
    )
}
