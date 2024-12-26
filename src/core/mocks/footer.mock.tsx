import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineTwitter } from "react-icons/ai";
import type { IFootersLinks, ISocialLink } from "@/interface/interface";
import { v4 as uuidv4 } from 'uuid';

export const FootersLinks: IFootersLinks[] = [
    {
        id: uuidv4(),
        title: 'App Links',
        links: [
            {
                url: '/',
                name: 'Home'
            },

            {
                url: '/products',
                name: 'Products'
            },

            {
                url: '/about-us',
                name: 'About Us'
            },

            {
                url: '/contact',
                name: 'Contact Us'
            },

            {
                url: '/blog',
                name: 'Blog'
            },

        ],
    },
    {
        id: uuidv4(),
        title: 'Services',
        links: [
            {
                url: '/',
                name: 'Bonus Program'
            },

            {
                url: '/',
                name: 'Gift Cards'
            },

            {
                url: '/',
                name: 'Credit and Payment'
            },

            {
                url: '/',
                name: 'Service Contacts'
            },

            {
                url: '/',
                name: 'Non-cash Account'
            },

            {
                url: '/checkout',
                name: 'Payment'
            },

        ],
    },
    {
        id: uuidv4(),
        title: 'Assistance to the Buyer',
        links: [
            {
                url: '/support',
                name: 'Find an Order'
            },

            {
                url: '/delivery-policy',
                name: 'Terms of Delivery'
            },

            {
                url: '/refund-policy',
                name: 'Exchange and Return of Goods'
            },

            {
                url: '/faq',
                name: 'Frequently Asked Questions'
            },

            {
                url: '/privacy-policy',
                name: 'Privacy Policie'
            },

            {
                url: '/terms-and-conditions',
                name: 'Terms of Use of the Site'
            },

        ],
    },
];

// Social links configuration
export const SocialLink: ISocialLink[] = [
    {
        id: uuidv4(),
        icon: <AiOutlineTwitter />,
        url: 'https://x.com/login?&mx=2',
        name: 'Twitter',
    },
    {
        id: uuidv4(),
        icon: <CgFacebook />,
        url: 'https://www.facebook.com/login.php/',
        name: 'Facebook',
    },
    {
        id: uuidv4(),
        icon: <FaTiktok />,
        url: 'https://www.tiktok.com/login',
        name: 'Tiktok',
    },
    {
        id: uuidv4(),
        icon: <AiFillInstagram />,
        url: 'https://www.instagram.com/accounts/login/',
        name: 'Instagram',
    },
];

