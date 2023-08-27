import { ProductCard } from "../components/ProductCard"
import { Main } from "../layout/Main"
import { useProducts } from "../context/products";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import SearchIcon from '../assets/search-icon.svg'


function Home() {

  const location = useLocation();

  const {slug} = useParams();
  const {items, searchedProducts, filterProductsByCategory, filterProductsBySearch} = useProducts();

  useEffect(() => {

    filterProductsByCategory(slug);
  }, [location])

  const productsToRender = searchedProducts ? searchedProducts : items?.data;

  return (
    <div className="w-full h-full flex flex-col ">
      <div className="grow">
        <Main>
          <div className='md:hidden flex flex-row w-full justify-around border-2 border-primary rounded-full py-1 px-3 mb-6 text-lg'>
            <input className='outline-none grow' onChange={(ev) => filterProductsBySearch(ev.target.value)} type="text" placeholder='Search...' />
            <div className='w-7 h-7'>
              <img className='w-full h-full object-contain' src={SearchIcon} alt="Order list" />
            </div>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {productsToRender?.map(item => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
          {productsToRender?.length <= 0 && <h2 className="opacity-50 text-xl font-semibold text-center">There are not results for your search 😫</h2>}
        </Main>
      </div>
      <footer className="hidden lg:inline-flex w-full p-8 justify-center items-center gap-2.5">
        <div className="text-center"><span className="text-black text-[22px] font-semibold">Created by </span><a target="blank" href="https://johandev115.github.io/JohanDev115/index.html" className="text-primary text-[26px] font-semibold">JohanDev</a></div>
      </footer>
    </div>
  )
}

export { Home }