import Navbar from "./components/navbar/Navbar";
import React, {useState} from 'react'
import {Switch, Route} from 'react-router-dom';
import Catalog from "./pages/catalog/Catalog";
import SignIn from './pages/signin/SignIn';
import NewProduct from './pages/newProduct/NewProduct';
import EditPage from './pages/editPage/EditPage';
import Sidebar from "./components/sidebar/Sidebar";
import {useSelector} from 'react-redux';
import ErrorPage from './components/404/ErrorPage';
import { createGlobalStyle } from 'styled-components';
import ProductPage from './pages/product/ProductPage';
import RegisterPage from './pages/register/RegisterPage';
import PrivateRoute from './components/PrivateRout/PrivateRoute';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    min-height: 100vh;
    background: #f2f2f2;
    font-family: 'Courgette', cursive;
  }

  button,p,div {
    font-family: 'Courgette', cursive;
  }
`;


function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const isLoggin = useSelector(({auth}) => auth.isSignIn);
  const isAdmin = useSelector(({auth}) => auth.isAdmin);
  
  return (
    <>
    <GlobalStyle/>
    <Navbar isLoggin={isLoggin} isAdmin={isAdmin} toggleShow={handleShow} /> 
    <Sidebar isLoggin={isLoggin} isAdmin={isAdmin} isOpen={show}  toggle={handleShow}/>
      <Switch>
       <Route exact path="/" component={Catalog}/>
       <Route exact path="/signin" component={SignIn}/>
       <Route exact path="/register" component={RegisterPage}/>
       <Route exact path="/product/:id" component={ProductPage} />
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
