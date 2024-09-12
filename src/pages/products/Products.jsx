import React from "react";
import MyButton from "../../components/buttons/MyButton";
import { FaArrowRightLong } from "react-icons/fa6";
import MyForm from "../../components/forms/MyForm";

import useAbility from "../../hooks/useAbility";
import usePath from "../../hooks/usePath";

const Products = () => {
    const path = usePath();
    const ability = useAbility();

    const {
        title = "",
        message = "",
        points = [],
    } = ability.can("product", path.endPoint);

    // console.log(ability.can("product", path.endPoint))
    return <>
        <div className="flex justify-center py-6 px-4 items-start w-full">
            <div className="w-1/2 py-6 px-5 flex flex-col justify-start items-start gap-y-5">
                {/* <h2 className="text-4xl text-blue-800 font-bold my-text">Complete WhatsApp Marketing Platform</h2>
                <p className="my-text font-medium text-[16px]">WhatsApp Promotion, CRM, Catalog, Cart, Payments, all in one place!</p>
                <ul className="my-text font-light list-disc px-5">
                    <li>Broadcast Promotional Offers</li>
                    <li>Product Selling using Catalogs</li>
                    <li>Chatbots for 24/7 support</li>
                </ul> */}
                <h2 className="text-4xl text-blue-800 font-bold my-text">{title}</h2>
                <p className="my-text font-medium text-[16px]">{message}</p>
                <ul className="my-text font-light list-disc px-5">
                    {
                        points && (points?.map((item) => (<li>{item}</li>)))
                    }
                </ul>

                <div className="flex justify-start gap-x-6 items-center">
                    <MyButton className="bg-blue-700 text-white px-6 py-1 rounded-3xl text-[16px]">
                        Contact Us
                    </MyButton>

                    <button className="flex justify-center transition-all hover:text-gray-700 items-center gap-x-2 my-text ">
                        Schedule Free Demo
                        <FaArrowRightLong size={18} />
                    </button>
                </div>
            </div>
            <div className="w-1/2 flex justify-start items-start px-6">
                <MyForm />
            </div>
        </div>
    </>
}

export default Products;