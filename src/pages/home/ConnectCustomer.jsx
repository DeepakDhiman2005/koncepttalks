import React from "react";
import ProductCard from "../../components/cards/ProductCard";

// icons
import { IoLogoWhatsapp } from "react-icons/io";
import { TbMessageFilled } from "react-icons/tb";
import { SiMinutemailer } from "react-icons/si";
import { CgLoadbarSound } from "react-icons/cg";
import { MdAppRegistration } from "react-icons/md";
import { TbReport } from "react-icons/tb";

const ConnectCustomer = () => {
    return <>
        <div className="flex flex-col justify-center my-3 w-full items-center">
            <h2 className="my-text font-medium text-3xl">Connect with your customers anywhere in the world</h2>

            <div className="grid grid-cols-3 px-6 gap-x-3 gap-y-5 py-8 w-full">
                <ProductCard
                    icon={<IoLogoWhatsapp size={70} />}
                    title="WhatsApp Business API"
                    text="Elevate promotional campaigns with WhatsApp's interactive features"
                />

                <ProductCard
                    icon={<TbMessageFilled size={75} />}
                    title="Bulk SMS Services"
                    text="Leverage Bulk SMS for OTPs, the most secured method for authentication."
                />

                <ProductCard
                    icon={<SiMinutemailer size={75} />}
                    title="Bulk Email Solutions"
                    text="Share all important updates with your customers with cost-effective email campaigns"
                />


                <ProductCard
                    icon={<CgLoadbarSound size={80} />}
                    title="IVR Solutions"
                    text="Automate your regular outreach to boost customer acquisition & sales"
                />

                <ProductCard
                    icon={<MdAppRegistration size={70} />}
                    title="DLT Registration Solutions"
                    text="Stay compliant and streamline your business communication with our DLT Registration Solutions"
                />

                <ProductCard
                    icon={<TbReport size={70} />}
                    title="Click to Call Solutions"
                    text="Boost engagement and conversions with our Click to Call Solutions."
                />
            </div>
        </div>
    </>
}

export default ConnectCustomer;