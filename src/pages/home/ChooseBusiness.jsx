import React from "react";
import DetailCard from "../../components/cards/DetailCard";

// icons
import { ImStatsBars } from "react-icons/im";
import { GiReceiveMoney } from "react-icons/gi";
import { FaListUl } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa6";

const ChooseBusiness = () => {
    return <>
        <div className="flex flex-col justify-center my-3 w-full items-center">
            <h2 className="my-text font-medium text-3xl">Connect with your customers anywhere in the world</h2>

            <div className="grid grid-cols-2 px-6 gap-x-5 gap-y-5 py-8 w-full">
                <DetailCard
                    icon={<ImStatsBars size={40} />}
                    title="Unlock 30% Savings with Cost Takeout Strategies"
                    desc="Our consultancy-based approach optimizes spend by using template improvements & selecting the best channels ensuring cost savings."
                />

                <DetailCard
                    icon={<GiReceiveMoney size={40} />}
                    title="The Price Advantage: Spend up to 20% Less"
                    desc="Our platform delivers immediate value with up to 20% cost reduction from day one."
                />

                <DetailCard
                    icon={<FaListUl size={35} />}
                    title="More Features over any other Platform"
                    desc="We offer a high-performance platform with advanced UI, API suite, and integrations, surpassing industry standards."
                />

                <DetailCard
                    icon={<BiSupport size={40} />}
                    title="Help at Your Fingertips: Responsive Support, 24/7"
                    desc="We trust our employees, whose dedication ensures an exceptional experience for enterprise needs"
                />

                <DetailCard
                    icon={<IoExtensionPuzzleSharp size={40} />}
                    title="Everything You Need, All in One Place"
                    desc="Our services include SMS, WhatsApp, RCS, Truecaller, Voice, IVR, automation, and email. We offer comprehensive messaging solutions,"
                />

                <DetailCard
                    icon={<FaHandshake size={40} />}
                    title="X Channel Complimentary onboardings"
                    desc="Onboard with us and enjoy complimentary onboarding for other channels. Plus, receive free credits and up to 5% additional savings."
                />
            </div>
        </div>
    </>
}

export default ChooseBusiness;