"use client"
import { useProductContext } from "@/app/Context/ProductContext";
import { ProductItem } from "./ProductItem"

export const ProductList = () => {

  const { products, loading } = useProductContext();

  if (loading) {
    return (
      <h2 className="text-center">Cargando lista de productos...</h2>
    )
  }

  if (products.length === 0) {
    return (
      <h2 className="text-red-600 mt-6 mb-6 text-center">No hay productos registrados</h2>
    )
  }

  return (
    <>
      <div className="mt-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Lista de Productos</h2>
        <ul className="space-y-4">
          {products.map((product) => (
            <ProductItem key={product.codigo} product={product} />
          ))}
        </ul>
      </div>
    </>
  )
}
