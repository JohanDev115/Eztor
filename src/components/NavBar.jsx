import { Link, useLocation } from 'react-router-dom'
import { NavItem } from './NavItem'
import { useProducts } from '../context/products'
import MenuIcon from '../assets/menu-icon.svg'
import ShoppingCartIcon from '../assets/shopping-cart-icon.svg'
import SearchIcon from '../assets/search-icon.svg'
import { useEffect, useState } from 'react'
import { SideMenuNav } from './SideMenuNav'

function NavBar() {

  const {itemsCounter, openCheckoutDetails, filterProductsBySearch} = useProducts();

  const [IsSideMenuNavOpen, setIsSideNavMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsSideNavMenuOpen(false)
  }, [location])

  const openSideMenuNav = () => {
    if (IsSideMenuNavOpen) {
      setIsSideNavMenuOpen(false);
    } else {
      setIsSideNavMenuOpen(true);
    }
  }

  return (
    <>
      <nav className='hidden lg:flex flex-row justify-between items-center p-6 sticky w-full top-0 bg-white z-30 h-[96px] shadow-lg'>
        <label className='flex flex-row items-center gap-10'>
          <Link to='/' className='font-poppins text-5xl font-semibold text-primary'>EZTOR</Link>
          <div className='flex flex-row w-full border border-primary rounded-full py-1 pr-2 pl-4 text-lg'>
            <input className='outline-none' onChange={(ev) => filterProductsBySearch(ev.target.value)} type="text" placeholder='Search...' />
            <div className='w-7 h-7'>
              <img className='w-full h-full object-contain' src={SearchIcon} alt="Order list" />
            </div>
          </div>
        </label>
        <ul className='list-none flex flex-row items-center gap-4'>
          <NavItem to='category/all' name='All' />
          <NavItem to='category/mens-clothing' name='Mens Clothing' />
          <NavItem to='category/jewerely' name='Jewerely' />
          <NavItem to='category/electronics' name='Electronics' />
          <NavItem to='category/womens-clothing' name='Womens Clothing' />
        </ul>
        <ul className='list-none flex flex-row items-center gap-4'>
          <NavItem color='text-primary' to='/orders' name='My Orders' />
          <NavItem color='text-primary' to='/account' name='My Account' />
          <button className='flex flex-row items-center' onClick={() => openCheckoutDetails()}>
          <span className='text-lg text-primary'>{itemsCounter}</span>
            <span className='w-9 h-9'>
              <img className='w-full h-full object-contain' src={ShoppingCartIcon} alt="Order list" />
            </span>
          </button>
        </ul>
      </nav>
      <nav className='flex lg:hidden flex-row justify-between items-center p-6 sticky w-full top-0 bg-white z-30 h-[80px] shadow-md'>
        <span className='w-10 h-10' onClick={openSideMenuNav}>
          <img className='w-full h-full object-contain' src={MenuIcon} alt="Open Menu" />
        </span>
        <Link to='/' className='font-poppins text-4xl font-semibold text-primary'>EZTOR</Link>
        <button className='flex flex-row items-center' onClick={() => openCheckoutDetails()}>
          <span className='text-lg text-primary'>{itemsCounter}</span>
          <span className='w-9 h-9'>
            <img className='w-full h-full object-contain' src={ShoppingCartIcon} alt="Order list" />
          </span>
        </button>
      </nav>
      { IsSideMenuNavOpen && <SideMenuNav closeSideBar={() => setIsSideNavMenuOpen(false)} />}
    </>
  )
}

export { NavBar }