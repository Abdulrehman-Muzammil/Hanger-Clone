import './index.css'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Products from './Pages/Products/products.jsx'
import SingleProductPage from './Component/SingleProductPage/SingleProductPage.jsx'
import ScrollToTop from './ScrollToTop.js'
import Category_Cart from './Component/Category_Cart/Category_Cart.jsx'
import CategoryPage from './Pages/CategoryPage/CategoryPage.jsx'
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage.jsx'
import Login from './Pages/Login_SignUp/Login.jsx'
import SignUp from './Pages/Login_SignUp/SignUp.jsx'
const App = () => {
  return(
<>
<Header></Header>
 <ScrollToTop />
<Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/login' element={<Login></Login>}></Route>
  <Route path='/signup' element={<SignUp></SignUp>}></Route>
  <Route path='/products' element={<Products></Products>}></Route>
  <Route path='/category' element={<CategoryPage></CategoryPage>}></Route>
  <Route path='/cart' element={<Category_Cart></Category_Cart>}></Route>
  <Route path='/checkout/:productId' element={<CheckoutPage></CheckoutPage>}></Route>
  <Route path='/products/:productId' element={<SingleProductPage></SingleProductPage>}></Route>
  <Route path='/:productId' element={<SingleProductPage></SingleProductPage>}></Route>
</Routes>
<Footer></Footer>

 </> )
  
  
}

export default App
