import { OrderCard } from "../components/OrderCard";
import { useProducts } from "../context/products";
import { Main } from "../layout/Main"
import { Link, useNavigate, useParams } from "react-router-dom"
import BackArrow from '../assets/back-arrow.svg'

function Order() {

  const navigate = useNavigate();
  const {slug} = useParams();

  const {ordersList} = useProducts();

  const currentOrder = ordersList.find(order => order.id == slug);

  if (!currentOrder) {
    navigate('/');
  }

  const productList = currentOrder?.products;

  return (
    <Main>
      <div className="w-full max-w-xl">
        <div className="flex flex-row px-6">
          <Link to="/orders">
            <img className="w-10 h-10" src={BackArrow} alt="Go to My orders" />
          </Link>
          <h1 className="text-primary mb-6 text-3xl font-semibold grow text-center">My Order</h1>
        </div>
        <div className="flex flex-wrap flex-row gap-8 lg:gap-32 justify-between">
          <div className="flex flex-col justify-start items-start grow gap-[13px]">
            {productList?.map((product) => (
              <OrderCard key={product.id} product={product} isInOrder={true}/>
            ))}
          </div>
          <div className="mb-5">
            <p className="text-black text-[26px] font-medium">Total: </p>
            <p className="text-primary text-[26px] font-semibold">${currentOrder?.totalPrice}</p>
          </div>
        </div>
      </div>
    </Main>
  )
}

export { Order }