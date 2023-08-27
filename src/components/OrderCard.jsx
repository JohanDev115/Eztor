import { useProducts } from "../context/products"
import CloseCardIcon from '../assets/close-card-icon.svg'
import { useEffect, useState } from "react";

function OrderCard({product, isInOrder}) {

  const {setOrderTotalPrice, removeItem, addedProducts} = useProducts();

  const [quantity, setQuantity] = useState(product.quantity || 1);

  
  useEffect(() => {
    product.quantity = quantity;
    const totalProductsPrice = addedProducts.reduce((total, product) => total + product.price * product.quantity, 0)
    setOrderTotalPrice(totalProductsPrice);
  }, [quantity, removeItem])


  return (
    <div className="w-full self-stretch py-2 px-3 border border-primary justify-start items-center gap-2.5 inline-flex">
      <div className='w-[60px] h-[70px]'>
        <img className='w-full h-full object-contain' src={product.image} alt="Order list" />
      </div>
      <div className="grow shrink basis-0 flex-col justify-center items-start gap-[5px] inline-flex">
        <h3 className="w-[150px] truncate self-stretch text-black text-[15px] font-medium overflow-hidden">{product.title}</h3>
        {isInOrder && <p className="text-black text-sm font-medium"> Quantity: <span className="font-bold"> {product.quantity} </span></p>}
        {!isInOrder && <div>
          <button className="text-primary text-xl font-medium" disabled={quantity <= 0} onClick={() => setQuantity(quantity-1)}> - </button>
          <span className="text-black text-lg font-medium"> {quantity} </span>
          <button className="text-primary text-xl font-medium" onClick={() => setQuantity(quantity+1)}> + </button>
        </div>}
      </div>
      <span className="text-primary text-xl font-semibold">${product.price}</span>
      { !isInOrder &&
        <button className="w-6 h-6" onClick={() => removeItem(product.id)}>
          <img className='w-full h-full object-contain' src={CloseCardIcon} />
        </button>
      }
    </div>
  )
}

export {OrderCard}