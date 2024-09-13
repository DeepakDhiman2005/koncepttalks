import React, { useState } from "react";

import { Button } from "@material-tailwind/react";
import { Calendar } from "antd";

// icons
import { FaArrowRight } from "react-icons/fa6";
import moment from "moment";

const DemoCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateAndTime = (dateTime) => {
        if (dateTime) {
            const formattedDate = moment(dateTime).format("MMMM Do YYYY");
            console.log(formattedDate);
            setSelectedDate(formattedDate)
        }
    }
    return <>
        <div className="w-1/2 py-5 px-6 border-l flex flex-col justify-between items-start border-solid border-gray-300 h-full">
            <div className="flex flex-col justify-start items-start gap-y-3">
                <h2 className="font-poppins not-italic leading-normal text-[18px] font-medium">Select a Date & Time</h2>
                <Calendar fullscreen={false} onChange={handleDateAndTime} />
            </div>

            <div className="flex justify-end w-full items-center">
                <Button className={`${selectedDate ? "bg-gray-200 active:scale-95 transition-all duration-500": "bg-gray-300 cursor-not-allowed"} text-[#000] font-poppins not-italic leading-normal text-[14px] capitalize font-semibold py-2 px-5 flex justify-center items-center gap-x-2`}>
                    Next
                    <FaArrowRight size={14} />
                </Button>
            </div>
        </div>
    </>
}

export default DemoCalendar;