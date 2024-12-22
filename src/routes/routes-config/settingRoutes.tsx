import AboutUs from "@/pages/setting/AboutUs";
import ContactUs from "@/pages/setting/ContactUs";
import DeliveryPolicy from "@/pages/setting/DeliveryPolicy";
import FAQ from "@/pages/setting/FAQ";
import PrivacyPolicy from "@/pages/setting/PrivacyPolicy";
import RefundPolicy from "@/pages/setting/RefundPolicy";
import Support from "@/pages/setting/Support";
import TermsAndConditions from "@/pages/setting/TermsAndConditions";
import { Outlet } from "react-router-dom";


const settingsRoute = {
    path: '',
    element: <Outlet />,
    children: [
        {
            path: '/contact',
            element: <ContactUs />,
        },

        {
            path: '/about-us',
            element: <AboutUs />
        },

        {
            path: '/faq',
            element: <FAQ />,
        },

        {
            path: '/privacy-policy',
            element: <PrivacyPolicy />,
        },

        {
            path: '/terms-and-conditions',
            element: <TermsAndConditions />,
        },

        {
            path: '/support',
            element: <Support />,
        },

        {
            path: '/refund-policy',
            element: <RefundPolicy />
        },

        {
            path: '/delivery-policy',
            element: <DeliveryPolicy />
        }
    ]
};

export default settingsRoute;