import Navbar from "./components/navbar/Navbar";
import React, {useState} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import Catalog from "./pages/catalog/Catalog";
import SignIn from './pages/signin/SignIn';
import NewProduct from './pages/newProduct/NewProduct';
import EditPage from './pages/editPage/EditPage';
import Sidebar from "./components/sidebar/Sidebar";
import {useSelector} from 'react-redux';
import ErrorPage from './components/404/ErrorPage';
import { createGlobalStyle } from 'styled-components';
import ProductPage from './pages/product/ProductPage';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    min-height: 100vh;
  }
`;


function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const isLoggin = useSelector(state => state.isSignIn);
  
  return (
    <>
    <GlobalStyle/>
    <Navbar isLoggin={isLoggin} toggleShow={handleShow} /> 
    <Sidebar isLoggin={isLoggin} isOpen={show}  toggle={handleShow}/>
      <Switch>
       <Route exact path="/" component={Catalog}/>
       <Route exact path="/signin" component={SignIn}/>
       <Route exact path="/product/:id" component={ProductPage} />
       <Route exact path="/newProduct" render={()=> (
          isLoggin ? (<NewProduct/>) : (<Redirect to="/signin" />)
       )}/>
       <Route exact path="/editProduct/:id" render={() => (
          isLoggin ?  (<EditPage/>) : (<Redirect  to="/"/>)
       )}/>
       <Route path="*" component={ErrorPage}/> 
     </Switch> 
    
    </>
  );
}

export default App;
