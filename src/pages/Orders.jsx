import { OrdersCard } from "../components/OrdersCard"
import { useProducts } from "../context/products"
import { Main } from "../layout/Main"

function Orders() {

  const {ordersList} = useProducts();

  return (
    <Main>
      <h1 className="text-primary mb-6 text-3xl font-semibold grow text-center">My Orders</h1>
      <div className="w-full max-w-sm flex flex-col-reverse gap-4">
        {ordersList.map((order) => (
          <OrdersCard key={order.id} order={order} />
        ))}
      </div>
      {ordersList.length <= 0 && <h2 className="opacity-50 text-xl font-semibold text-center">You have not any orders at this moment 🫠</h2>}
    </Main>
  )
}

export { Orders }