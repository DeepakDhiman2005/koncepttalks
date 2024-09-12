import React from "react";

// components
import NavLink from "../components/NavLink";
import MyButton from "../components/buttons/MyButton";

const Navbar = () => {
    return <>
        <nav className="flex justify-between items-center sticky top-0 left-0 w-full py-4 px-4 border-b border-solid border-gray-100 bg-white z-50 shadow-md shadow-gray-100">
            <h2 className="my-text text-[18px]">
                <span className="text-gray-900">Koncept</span>
                <span className="text-blue-700">Talks</span>
            </h2>

            <div className="flex justify-center items-center gap-x-5">
                <NavLink title="Products" menu={[
                    <a href="/product1">Product 1</a>,
                    <a href="/product2">Product 2</a>,
                    <a href="/product3">Product 3</a>,
                ]} />
                <NavLink title="Developer Tools" />
                <NavLink title="Company" />
            </div>

            <MyButton className="bg-red-700 text-white px-6 py-1 rounded-3xl text-[16px]">
                Contact Us
            </MyButton>
        </nav>
    </>
}

export default Navbar;