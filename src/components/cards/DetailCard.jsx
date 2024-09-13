import React from "react";

const DetailCard = ({
    icon,
    title = "",
    desc = "",
}) => {
    return <>
        <div className="rounded-md border border-gray-300 shadow-md shadow-gray-300 p-3 flex flex-col justify-start items-start gap-y-2">
            <div className="text-blue-900">
            {icon}
            </div>
            <h2 className="font-semibold font-poppins not-italic leading-normal text-[20px] text-blue-900">{title}</h2>
            <p className="font-poppins not-italic leading-normal font-light text-[16px]">{desc}</p>
        </div>
    </>
}

export default DetailCard;