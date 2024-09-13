import React from "react";
import DemoDetails from "./DemoDetails";
import DemoCalendar from "./DemoCalendar";

const Demo = () => {
    return <>
        <div className="flex justify-center items-center mt-12">
            <div className="flex justify-center border rounded-md h-[75vh] overflow-hidden border-gray-300 border-solid shadow-md shadow-gray-300 w-[55%] bg-white">
                <DemoDetails />
                {/* <div className="h-full w-[1px] bg-gray-300"></div> */}
                <DemoCalendar />
            </div>
        </div>
    </>
}

export default Demo;