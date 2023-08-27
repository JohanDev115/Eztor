import { useProducts } from "../context/products"

function ProductCard({product}) {

  const {addItem, removeItem, addedProducts, openProductDetails} = useProducts();

  const productIsAdded = addedProducts.some(addedProduct => addedProduct.id == product.id)

  const addProduct = (e, productData) => {
    e.stopPropagation();
    addItem(productData);
  }

  const removeProduct = (e, productData) => {
    e.stopPropagation();
    removeItem(productData.id);
  }

  const submitProductDetails = (selectedProduct) => {
    openProductDetails(selectedProduct);
  }

  function renderButton() {
    if (productIsAdded) {
      return (
        <button onClick={(e) => removeProduct(e, product)} className="w-[35px] h-[35px] absolute top-2 right-2 flex justify-center items-center bg-primary rounded-full border border-primary">
          <span className=" text-white relative text-[30px] font-normal">✓</span>
        </button>
      )
    } else {
      return (
        <button onClick={(e) => addProduct(e, product)} className="w-[35px] h-[35px] absolute top-2 right-2 flex justify-center items-center bg-white rounded-full border border-primary">
          <span className=" text-primary relative text-[30px] font-normal">+</span>
        </button>
      )
    }
  }

  return (
    <div onClick={() => submitProductDetails(product)} className="w-[254px] h-[278px] font-poppins relative pb-2 flex-col justify-start items-start gap-3 inline-flex shadow-md cursor-pointer">
      <div className="relative">
        <div className="w-[260px] h-[230px]">
          <img loading="lazy" className="w-full h-full object-contain self-stretch grow shrink basis-0" src={product.image} />
        </div>
        {renderButton()}
        <div className="h-[23px] absolute flex justify-center items-center p-3 left-2 bottom-3 bg-primary rounded-full">
          <span className=" text-white text-[15px] font-semibold">{product.category}</span>
        </div>
      </div>
      <div className="w-full flex px-4 justify-between items-center gap-[25px]">
        <span className="text-black text-base font-light truncate">{product.title}</span>
        <span className="text-right text-primary text-xl font-semibold">${product.price}</span>
      </div>
    </div>
  )
}

export { ProductCard }