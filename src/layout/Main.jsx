import { CheckoutDetails } from "../components/CheckoutDetails"
import { ProductDetails } from "../components/ProductDetails"

function Main({children}) {
  return (
    <>
      <main className="p-6 lg:p-14 flex flex-col items-center">
        {children}
      </main>
      <ProductDetails />
      <CheckoutDetails />
    </>
  )
}

export { Main }