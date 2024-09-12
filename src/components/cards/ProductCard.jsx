import React from "react";
import MyButton from "../buttons/MyButton";
import usePath from "../../hooks/usePath";

const ProductCard = ({
    title="",
    text="",
    icon,
}) => {
    const path = usePath();
    const navigateOn = () => {
        let query = title.toLowerCase().replaceAll(" ", "-");
        // console.log(query)
        path.navigate("products/"+query);
    }

    return <>
        <div className="flex flex-col py-5 gap-y-3 text-center justify-center items-center rounded-md border-2 shadow-md shadow-gray-200 border-solid border-gray-200 text-blue-900">
            {icon}
            <h2 className="my-text font-semibold">{title}</h2>
            <p className="text-gray-800 my-text text-[14px] px-3">{text}</p>

            <MyButton className="border border-solid font-medium border-blue-900 transition-all hover:bg-blue-900 hover:text-white rounded-3xl px-4 py-1 text-blue-900 bg-white" onClick={navigateOn}>
                Know More
            </MyButton>
        </div>
    </>
}

export default ProductCard;