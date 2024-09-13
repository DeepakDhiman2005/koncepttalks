import React from "react";

// icons
import { MdAccessTime } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";

const DemoDetails = () => {
    // components
    const Div = ({ children }) => {
        return <div className="flex justify-start text-gray-500 font-poppins not-italic leading-normal items-center gap-x-2">
            {children}
        </div>
    }
    return <>
        <div className="py-5 px-6 flex flex-col justify-between w-1/2 items-start h-full">
            <div className="flex flex-col justify-start gap-y-3 items-start">
                <div className="flex flex-col justify-start items-start">
                    <h2 className="font-poppins not-italic leading-normal font-semibold text-[15px] text-gray-500">Hello From Koncepttalks</h2>
                    <h2 className="font-poppins not-italic leading-normal font-semibold text-[21px] text-gray-800">Koncepttalks Quick Connect</h2>
                </div>

                <Div>
                    <MdAccessTime size={18} />
                    <span>15 min</span>
                </Div>

                <Div>
                    <CiVideoOn size={26} />
                    <span className="text-[15px]">Web conferencing details provided upon confirmation.</span>
                </Div>
            </div>

            <div className="flex justify-between items-center">
                <p className="underline text-blue-700 cursor-pointer hover:text-blue-800">Cookie Settings</p>
            </div>
        </div>
    </>
}

export default DemoDetails;