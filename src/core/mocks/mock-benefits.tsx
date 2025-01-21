import { FaHandsHelping } from "react-icons/fa"; 
import { RiRefund2Line } from "react-icons/ri"; 
import { BiSupport } from "react-icons/bi"; 
import { BsListCheck } from "react-icons/bs"; 
import { FaShippingFast } from "react-icons/fa"; 
import { v4 as uuidv4 } from 'uuid';
import { RiSecurePaymentLine } from 'react-icons/ri';
import type { IBenefits } from "@/interface/interface";


export const BenefitsElements: IBenefits[] = [
    {
        id: uuidv4(),
        icon: <FaShippingFast />,
        content: "Fast Delivery",
        link: "/delivery-policy",
        delay: 0.1,
    },

    {
        id: uuidv4(),
        icon: <BsListCheck />,
        content: "Good terms and conditions",
        link: "/terms-and-conditions",
        delay: 0.3,
    },

    {
        id: uuidv4(),
        icon: <BiSupport />,
        content: "customer services",
        link: "/support",
        delay: 0.5,
    },

    {
        id: uuidv4(),
        icon: <RiSecurePaymentLine />,
        content: "easy and secure payment",
        link: "/credit-and-payment",
        delay: 0.7,
    },

    {
        id: uuidv4(),
        icon: <FaHandsHelping />,
        content: "24/7 assistance",
        link: "/service-contact",
        delay: 0.9,
    },

    {
        id: uuidv4(),
        icon: <RiRefund2Line />,
        content: "quick and easy return",
        link: "/refund-policy",
        delay: 1,
    },
]