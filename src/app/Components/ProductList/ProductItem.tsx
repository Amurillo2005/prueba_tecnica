"use client"
import { useProductContext } from "@/app/Context/ProductContext"
import { Product } from "@/app/Interfaces/Product"

interface Props {
    product: Product
}

export const ProductItem = ({ product }: Props) => {

    const { deleteProduct } = useProductContext()

    const handleDelete = () => {
        if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
            deleteProduct(product.codigo)
        }
    };

    return (
        <>
            <li className="border p-4 rounded-md shadow-sm flex justify-between items-center bg-gray-50">
                <div>
                    <p><span className="font-semibold">Código:</span> {product.codigo}</p>
                    <p><span className="font-semibold">Nombre:</span> {product.nombre}</p>
                    <p><span className="font-semibold">Descripción:</span> {product.descripcion}</p>
                    <p><span className="font-semibold">Cantidad:</span> {product.cantidad}</p>
                    <p className="text-sm text-gray-500">
                        Creado: {new Date(product.creacion).toLocaleString()}
                    </p>
                </div>
                <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">Eliminar</button>
            </li>
        </>
    )
}
