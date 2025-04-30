import { ProductForm } from "../Components/ProductForm/ProductForm"
import { ProductList } from "../Components/ProductList/ProductList"
import { SearchBar } from "../Components/SearchBar/SearchBar"

export const MainPage = () => {
  return (
    <>
        <main className="container mx-auto px-4 py-6">
            <ProductForm />
            <ProductList />
            <SearchBar />
        </main>
    </>
  )
}
