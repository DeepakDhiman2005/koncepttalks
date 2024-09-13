import React from "react";

// icons
import { FaArrowRightLong } from "react-icons/fa6";

// components
import MyButton from "../../components/buttons/MyButton";
import WorkAnimation from "../../animations/WorkAnimation";
import usePath from "../../hooks/usePath";

const Introduction = () => {
    const path = usePath();

    return <>
        <div className="flex flex-col justify-center h-[500px] overflow-hidden relative px-3 gap-y-4 sm:px-5 md:px-10 items-start">
            <div className="absolute -right-4 -top-6">
                <WorkAnimation 
                    width={650}
                    height={500}
                />
            </div>
            <h2 className="my-text text-gray-500 font-medium text-sm">World’s Most Advanced PaaS for Enterprise Communications</h2>
            <div className="flex flex-col justify-start items-start text-3xl gap-y-0">
            <span className="my-text text-blue-800 font-bold ">SMS | WhatsApp | IVR | Email</span>
            <span className="my-text text-blue-800 font-bold ">| DLT Registration | Click to Call</span>
            </div>
            <h2 className="my-text text-gray-500 font-medium text-sm">We enable Enterprises to deliver messaging content in matter of seconds, across the globe.</h2>

            <div className="flex justify-start gap-x-6 items-center">
            <MyButton className="bg-blue-700 text-white px-6 py-1 rounded-3xl text-[16px]">
                Contact Us
            </MyButton>

            <button className="flex justify-center transition-all hover:text-gray-700 items-center gap-x-2 my-text "
                onClick={() => path.navigate("/koncepttalks-demo")}
            >
                Schedule Free Demo
                <FaArrowRightLong size={18} />
            </button>
            </div>
        </div> 
    </>
}

export default Introduction;