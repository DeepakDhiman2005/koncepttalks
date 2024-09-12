import { Spin } from "antd";
import React from "react";

const Loader = () => {
    return <>
        <div className="w-full h-full justify-center fixed z-50 bg-white items-center flex">
            <Spin />
        </div>
    </>
}

export default Loader;