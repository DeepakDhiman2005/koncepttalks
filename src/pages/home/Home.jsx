import React from "react";

// components
import Introduction from "./Introduction";
import ConnectCustomer from "./ConnectCustomer";
import ChooseBusiness from "./ChooseBusiness";

const Home = () => {
    return <>
        <main className="w-full flex flex-col">
            <Introduction />
            <ChooseBusiness />
            <ConnectCustomer/>
        </main>
    </>
}

export default Home;