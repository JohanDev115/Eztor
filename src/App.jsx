import { Routes, Route, BrowserRouter, Link } from "react-router-dom"
import { Home } from "./pages/Home"
import { Account } from "./pages/Account"
import { Orders } from "./pages/Orders"
import { Order } from "./pages/Order"
import { Login } from "./pages/Login"
import { NavBar } from "./components/NavBar"
import { ProductContextProvider } from "./context/products"


function App() {
  return (
    <ProductContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/orders/order" element={<Order />}>
            <Route path=":slug" element={<h2>Not found</h2>}></Route>
          </Route>
          <Route path="/category" element={<Home />}>
            <Route path=":slug" element={<h2>Not found</h2>}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<p>Not found</p>}></Route>
        </Routes>
      </BrowserRouter>
    </ProductContextProvider>
  )
}

export default App
