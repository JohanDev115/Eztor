import { createContext, useContext, useEffect, useState } from "react";
import { categoryList } from "../utils/CategoryList";

const ProductsContext = createContext();

const ProductContextProvider = ({children}) => {

  //get products
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setItems({data}))
  }, [])

  //products Counter
  const [itemsCounter, setItemsCounter] = useState(0);

  //Open SideBar
  const [productDetailIsOpen, setProductDetailIsOpen] = useState(false);
  const [checkoutDetailsIsOpen, setCheckoutDetailIsOpen] = useState(false);

  //products Handlers
  const [selectedProduct, setSelectedProduct] = useState({});
  const [addedProducts, setAddedProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);

  //Orders Handlers
  const [orderTotalPrice, setOrderTotalPrice] = useState(0);
  const [order, setOrder] = useState({});
  const [ordersList, setOrdersList] = useState([]);

  /** Open SideBar Functions */

  const openProductDetails = (selectedProduct) => {
    setCheckoutDetailIsOpen(false)
    setProductDetailIsOpen(true);
    setSelectedProduct(selectedProduct);
  }

  const openCheckoutDetails = () =>{
    setProductDetailIsOpen(false)
    setCheckoutDetailIsOpen(true);
  }

  const closeSideBar = () => {
    setProductDetailIsOpen(false)
    setCheckoutDetailIsOpen(false)
  }

  /** ------------------------------------ */

  /** Product Handlers Functions */

  const addItem = (item) => {
    if (!addedProducts.some((product) => product.id === item.id)) {
      setItemsCounter(itemsCounter + 1)
      setAddedProducts([...addedProducts, item])
    }
  }

  const removeItem = (id) => {
    setItemsCounter(itemsCounter - 1)
    const newList = addedProducts.filter(product => product.id != id)
    setAddedProducts(newList);
    if (newList.length <= 0) {
      closeSideBar();
    }
  }

  const filterProductsBySearch = (value) => {

    const searchedProducts = items?.data.filter(product => product.title.toLowerCase().includes(value.toLowerCase()) || product.category.includes(value.toLowerCase()));
    setSearchedProducts(searchedProducts);
  }

  const filterProductsByCategory = (slug) => {

    const category = categoryList[slug];

    const filteredProductList = category ? items?.data.filter(product => product.category === category) : items?.data;
    setSearchedProducts(filteredProductList);
  }

  /** ------------------------------------ */

  /** Orders Functions */

  const addOrder = (order) => {
    setOrder(order);
    setOrdersList([...ordersList, order]);
    setAddedProducts([]);
    setItemsCounter(0)
    setAddedProducts([]);
    setOrderTotalPrice(0);
    closeSideBar();
  }

  /** ------------------------------------ */

  const data = {
    items,
    addItem,
    removeItem,
    itemsCounter,
    openProductDetails,
    openCheckoutDetails,
    closeSideBar,
    productDetailIsOpen,
    checkoutDetailsIsOpen,
    selectedProduct,
    addedProducts,
    searchedProducts,
    filterProductsBySearch,
    filterProductsByCategory,
    addOrder,
    order,
    ordersList,
    orderTotalPrice,
    setOrderTotalPrice,
  }

  return (
    <ProductsContext.Provider value={data}>
      {children}
    </ProductsContext.Provider>
  )
}

function useProducts() {
  return useContext(ProductsContext);
}

export { ProductContextProvider, useProducts }