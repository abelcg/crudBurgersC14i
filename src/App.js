import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/views/home/Home";
import Navigation from "./components/layouts/Navigation";
import Footer from "./components/layouts/Footer";
import ProductsTable from "./components/views/ProductsTable/ProductsTable";
import ProductCreate from "./components/views/productCreate/ProductCreate";
import ProductEdit from "./components/views/productEdit/ProductEdit";
import Error404 from "./components/views/error404/Error404";
import Login from "./components/views/login/Login";
import Register from "./components/views/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "./config/axiosInit"

function App() {
  const [products, setProducts] = useState([]);
  //uso de variable de entorno
  const URL = process.env.REACT_APP_API_HAMBURGUESERIA
  
  useEffect(()=>{
    getApi();
  },[]);
  

  const getApi= async ()=>{
    try {
      /* const res = await fetch(URL);
      const productApi = await res.json();
      setProducts(productApi); */

      const res = await axios.get(URL);
     // console.log(res?.data);
      const productApi = res?.data;
      setProducts(productApi);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            <Route exact path="/" element={<Home products={products}/>} />
            <Route
              exact
              path="/product/table"
              element={
                <ProductsTable products={products} URL={URL} getApi={getApi} />
              }
            />
            <Route
              exact
              path="/product/create"
              element={<ProductCreate URL={URL} getApi={getApi}/>}
            />
            <Route
              exact
              path="/product/edit/:id"
              element={<ProductEdit URL={URL} getApi={getApi}/>}
            />
             <Route
              exact
              path="/auth/login/"
              element={<Login />}
            />
            <Route
              exact
              path="/auth/register/"
              element={<Register/>}
            />
            <Route exact path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
