import React from "react";
import { useForm } from "react-hook-form";

// fields
import InputField from "../fields/InputField";
import { Button } from "@material-tailwind/react";

const MyForm = () => {
    const {
        control,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm();

    let businessType = [
        { label: 'BFSI', value: 'BFSI' },
        { label: 'Fintech', value: 'Fintech' },
        { label: 'Logistics', value: 'Logistics' },
        { label: 'Travel', value: 'Travel' },
        { label: 'Hospitality', value: 'Hospitality' },
        { label: 'Healthcare', value: 'Healthcare' },
        { label: 'Edtech', value: 'Edtech' },
        { label: 'Other', value: 'Other' }
    ];


    return <>
        <div className="rounded-md bg-white border p-3 py-10 gap-y-4 flex justify-start items-start flex-col border-solid w-full border-gray-300 shadow-md shadow-gray-300">
            <InputField
                control={control}
                type="text"
                errors={errors}
                name="name"
                placeholder="Your Name"
                label={<h2>Name <span className="text-red-600">*</span></h2>}
            />

            <InputField
                control={control}
                type="email"
                errors={errors}
                name="email"
                placeholder="Your Email"
                label={<h2>Email <span className="text-red-600">*</span></h2>}
            />

            <InputField
                control={control}
                type="text"
                errors={errors}
                name="mobile"
                placeholder="Your Mobile"
                label={<h2>Mobile <span className="text-red-600">*</span></h2>}
            />

            <InputField
                control={control}
                type="option"
                options={businessType}
                errors={errors}
                name="businessType"
                placeholder="Your Business Type"
                label={<h2>Business Type <span className="text-red-600">*</span></h2>}
            />

            <Button className="capitalize my-text text-[15px] bg-blue-700 py-2 px-4 font-medium rounded-md mt-4">
                Submit
            </Button>
        </div>
    </>
}

export default MyForm;