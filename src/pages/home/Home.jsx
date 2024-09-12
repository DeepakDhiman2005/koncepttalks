import React from "react";

// components
import Introduction from "./Introduction";
import ConnectCustomer from "./ConnectCustomer";

const Home = () => {
    return <>
        <main className="w-full flex flex-col">
            <Introduction />
            <ConnectCustomer/>
        </main>
    </>
}

export default Home;