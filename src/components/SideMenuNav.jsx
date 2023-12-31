import { NavItem } from "./NavItem"
import CloseIcon from '../assets/close-icon.svg'

function SideMenuNav({closeSideBar}) {

  return (
    <div className="lg:hidden fixed w-full max-w-md h-[calc(100vh-78px)] left-0 bg-white z-50 p-6 bottom-0">
      <button className="absolute top-3 right-3" onClick={closeSideBar}>
        <img className="w-12 h-12" src={CloseIcon} alt="close sidemenu" />
      </button>
      <div className="w-full h-full pt-5 bg-white flex-col justify-between items-start inline-flex">
        <ul className="flex-col justify-start items-start gap-[25px] flex">
          <NavItem color='text-primary' to='category/all' name='All' />
          <NavItem color='text-primary' to='category/mens-clothing' name='Mens Clothing' />
          <NavItem color='text-primary' to='category/jewerely' name='Jewerely' />
          <NavItem color='text-primary' to='category/electronics' name='Electronics' />
          <NavItem color='text-primary' to='category/womens-clothing' name='Womens Clothing' />
        </ul>
        <ul className="flex-col justify-start items-start gap-[10px] flex">
          <NavItem color='text-primary' to='/orders' name='My Orders' />
          <NavItem color='text-primary' to='/account' name='My Account' />
        </ul>
        <div className="w-full text-center"><span className="text-black text-base font-semibold">Created by </span><span className="text-primary text-base font-semibold">JohanDev</span></div>
    </div>
    </div>
  )
}

export { SideMenuNav }