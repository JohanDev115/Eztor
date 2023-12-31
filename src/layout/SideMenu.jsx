import { useProducts } from "../context/products"
import CloseIcon from '../assets/close-icon.svg'

function SideMenu({children}) {

  const {closeSideBar} = useProducts();

  return (
    <div className="fixed w-full h-[calc(100vh-78px)] md:max-w-sm lg:h-[calc(100vh-96px)] lg:max-w-[420px] overflow-y-scroll right-0 bg-white z-40 px-6 pt-6 bottom-0">
      <button className="absolute top-3 right-3" onClick={closeSideBar}>
        <img className="w-12 h-12" src={CloseIcon} alt="close sidemenu" />
      </button>
      {children}
    </div>
  )
}

export { SideMenu }