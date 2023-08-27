import { useProducts } from "../context/products"
import { SideMenu } from "../layout/SideMenu";

function ProductDetails() {

  const {productDetailIsOpen, selectedProduct} = useProducts();

  if (productDetailIsOpen) {
    return (
      <SideMenu>
          <div className="w-full h-[320px] pb-3">
            <img className="w-full h-full object-contain" src={selectedProduct.image} alt={selectedProduct.title} />
          </div>
          <h2 className="w-full text-black text-[23px] font-medium pb-2">{selectedProduct.title}</h2>
          <p className="text-primary text-[26px] font-semibold pb-2">${selectedProduct.price}</p>
          <p className="self-stretch text-black text-base pb-6 font-normal">{selectedProduct.description}</p>
      </SideMenu>
    )
  }
}

export { ProductDetails }