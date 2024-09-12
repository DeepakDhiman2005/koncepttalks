import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

// loader
import Loader from "../common/Loader";

const ProvidedRoutes = ({ children }) => {
    return <>
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                {children}
            </Suspense>
        </BrowserRouter>
    </>
}

export default ProvidedRoutes;