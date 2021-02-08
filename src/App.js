import Navbar from "./components/navbar/Navbar";
import React, {useState} from 'react'
import {Switch, Route} from 'react-router-dom';
import Catalog from "./pages/catalog/Catalog";
import SignIn from './pages/signin/SignIn';
import NewProduct from './pages/newProduct/NewProduct';
import EditPage from './pages/editPage/EditPage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import {useSelector} from 'react-redux';
import ErrorPage from './components/404/ErrorPage';
import { createGlobalStyle } from 'styled-components';
import ProductPage from './pages/product/ProductPage';
import RegisterPage from './pages/register/RegisterPage';
import PrivateRoute from './components/PrivateRout/PrivateRoute';
import CartTable from "./components/cartTable/CartTable";
import Alert from "./components/alert/Alert";
import NavMenu from "./components/nav-menu/NavMenu";
import ModalGraditude from "./components/modal-gratitude/ModalGraditude"; 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    min-height: 100vh;
    background: #f2f2f2;
    font-family: 'Big Shoulders Display', cursive;
  }

  button,p,div {
    font-family: 'Courgette', cursive;
  }
`;


function App() {
  const [show, setShow] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const handleCartShow = () => setCartOpen(!cartOpen);
  const handleShow = () => setShow(!show);
  const isLoggin = useSelector(({auth}) => auth.isSignIn);
  const isAdmin = useSelector(({auth}) => auth.isAdmin);
  const userName = useSelector(({auth}) => auth.userName);
  const alertText = useSelector(({cart}) => cart.itemText);
  const loadItemCart = useSelector(({cart}) => cart.addItem);
  const buy = useSelector(({cart}) => cart.buy);
  return (
    <>
    <GlobalStyle/>
    <Navbar isLoggin={isLoggin} toggleCart={handleCartShow} isAdmin={isAdmin} toggleShow={handleShow} /> 
    {cartOpen && <CartTable open={cartOpen} close={handleCartShow} />}
    <NavMenu isLoggin={isLoggin} toggleCart={handleCartShow} isAdmin={isAdmin}/>
    {loadItemCart && <Alert text={alertText}/>}
     {buy && <ModalGraditude/>}
      <Switch>
       <Route exact path="/"  component={Catalog}/>
       <Route exact path="/signin" component={SignIn}/>
       <Route exact path="/register" component={RegisterPage}/>
       <Route exact path="/product/:id" component={ProductPage}/>
       <Route exact path="/checkout" component={CheckoutPage}/>
       <PrivateRoute exact path="/newProduct" redirect="/signin" auth={isAdmin}>
          <NewProduct/>
       </PrivateRoute>
       <PrivateRoute exact path="/editProduct/:id" redirect="/" auth={isAdmin}>
         <EditPage/>
       </PrivateRoute>
       <Route path="*" component={ErrorPage}/> 
     </Switch> 
    
    </>
  );
}

export default App;
