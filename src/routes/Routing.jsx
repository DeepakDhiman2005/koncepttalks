import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

// import
const Home = lazy(() => import("../pages/home/Home"));
const Products = lazy(() => import("../pages/products/Products"));

const Routing = () => {
    return <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/*" element={<Products />} />
        </Routes>
    </>
}
export default Routing;