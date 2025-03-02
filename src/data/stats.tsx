import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "20M+",
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
        description: "Documemts processed securely every day, providing real-time insights."
    },
    {
        title: "5.0",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Star rating, consistently maintained across review websites."
    },
    {
        title: "10+ ",
        icon: <PiGlobeFill size={34} className="text-green-600" />,
        description: "Integrations, seamlessly integrated, so you can be productivity."
    }
];