import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import PageNotFound from "./components/PageNotFound";
import Search from "./components/Search";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";

function App() {
 
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
             <Search />
              <HomePage />
            </Layout>
          }
        ></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
