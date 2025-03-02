import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Is ${siteDetails.siteName} secure?`,
        answer: 'Absolutely. We use bank-level encryption to protect your data and never store your login information. Plus, our biometric authentication adds an extra layer of security.',
    },
    {
        question: `Can I use ${siteDetails.siteName} on multiple devices?`,
        answer: 'Absolutely! Your TraceSphere account syncs seamlessly across all your devices - smartphone, tablet, and computer.',
    },
    {
        question: 'What if I need help using the app?',
        answer: 'Our dedicated support team is available 24/7 via chat or email. Plus, we offer extensive in-app tutorials and a comprehensive knowledge base to help you make the most of TraceSphere.',
    }
];