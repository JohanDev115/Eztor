import { useNavigate } from "react-router-dom"
import ArrowRight from '../assets/arrow-right-icon.svg'

function OrdersCard({order}) {

  const navigate = useNavigate();

  return (
    <div className="w-full h-[58px] px-[13px] py-2 border border-primary justify-start items-center gap-3 inline-flex">
      <span className="grow shrink basis-0 text-center text-black text-[15px] font-medium">{order.date}</span>
      <span className="grow shrink basis-0 text-center text-black text-[15px] font-medium">{order.totalAmount} Articles</span>
      <span className="text-primary text-xl font-semibold">${order.totalPrice}</span>
      <button onClick={() => navigate('/orders/order/'+order.id)} className="w-[29px] text-center text-black text-[51px] font-semibold">
        <img src={ArrowRight} alt="Go to Order" />
      </button>
    </div>
  )
}

export {OrdersCard}