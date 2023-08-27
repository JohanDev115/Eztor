import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/products"
import { SideMenu } from "../layout/SideMenu"
import { OrderCard } from "./OrderCard"
import { generateID } from "../utils/IdGenerator";

function CheckoutDetails() {

  const navigate = useNavigate();

  const {checkoutDetailsIsOpen, addedProducts, order, addOrder, ordersList, orderTotalPrice} = useProducts();

  const isEmpty = addedProducts.length <= 0;

  const submitOrder = () => {
    const orderId = generateID(ordersList);
    const date = new Date();
    addOrder({
      id: orderId,
      date: date.toLocaleDateString(),
      products: addedProducts,
      totalPrice: orderTotalPrice,
      totalAmount: addedProducts.length
    })
    navigate('/orders')
    navigate('/orders/order/'+orderId)
  }

  if (checkoutDetailsIsOpen) {
    return (
      <SideMenu>
        <div className="w-full h-full flex flex-col">
          <h1 className="text-primary text-3xl font-medium mb-6">My Order</h1>
          <div className="flex flex-col justify-start items-start gap-[13px]">
            {addedProducts.map((product) => (
              <OrderCard key={product.id} product={product} />
            ))}
            {isEmpty && <h2 className="text-xl font-medium opacity-50 text-center px-5">You have not added any products yet 🫠</h2> }
          </div>
          <div className="bg-white w-full grow flex flex-col justify-end mt-5 pb-5">
            <div className="mb-2">
              <span className="text-black text-[26px] font-medium">Total:  </span>
              <span className="text-primary text-[26px] font-semibold">${orderTotalPrice}</span>
            </div>
            <button className="w-full h-[57px] bg-primary text-white text-xl font-semibold" disabled={isEmpty} onClick={submitOrder}>
              Checkout
            </button>
          </div>
        </div>
      </SideMenu>
    )
  }
}

export { CheckoutDetails }