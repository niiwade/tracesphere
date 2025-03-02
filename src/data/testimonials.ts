import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'John Smith',
        role: 'CEO at Company',
        message: `${siteDetails.siteName}'s AI-driven insights have transformed how we approach contract management for our clients. It's an invaluable resource in the modern document management`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'Jane Doe',
        role: 'CTO at Startup',
        message: `As a CTO, I'm impressed by ${siteDetails.siteName}'s robust security measures and seamless integrations. It's rare to find an app that balances user-friendliness with such advanced technology.`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'Emily Johnson',
        role: 'Product Manager',
        message: `${siteDetails.siteName} is revolutionizing contract management. Its intuitive design and powerful features make it an indispensable tool for anyone serious about contract management by AI.`,
        avatar: '/images/testimonial-3.webp',
    },
];