import { FiHeadphones } from "react-icons/fi";
import { AiOutlineCamera } from "react-icons/ai";
import { MdOutlineSmartButton } from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdOutlinePhoneIphone } from "react-icons/md";
import type { ILinkCategory } from "@/interface/interface";
import { v4 as uuidv4 } from 'uuid';

export const LinkCategory: ILinkCategory[] = [
    {
        id: uuidv4(),
        icon: <MdOutlinePhoneIphone />,
        name: 'Phones',
        href: '/products/category/phones'
    },

    {
        id: uuidv4(),
        icon: <HiOutlineDesktopComputer />,
        name: "Computers",
        href: '/products/category/computer'
    },

    {
        id: uuidv4(),
        icon: <MdOutlineSmartButton />,
        name: "Smart Watches",
        href: '/products/category/smart-watches'
    },

    {
        id: uuidv4(),
        icon: <AiOutlineCamera />,
        name: "Cameras",
        href: '/products/category/cameras'
    },

    {
        id: uuidv4(),
        icon: <FiHeadphones />,
        name: "Headphones",
    href: '/products/category/headphones'
    }
]