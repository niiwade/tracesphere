import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Intelligent Document Analysis",
        description: "Extract key information automatically from any document. Our AI identifies crucial elements without tedious manual review.",
        bullets: [
            {
                title: "Entity Recognition",
                description: "Automatically identifies people, organizations, dates, and monetary values.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Section Classification",
                description: "Identifies document structure and categorizes content by purpose and function.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Key Information Extraction",
                description: "Pulls out critical details like payment terms, deadlines, and obligations.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/dashboard.png"
    },
    {
        title: "Smart Document Comparison",
        description: "Compare any two documents with precision. Our engine highlights changes, additions, and removals with color-coded clarity.",
        bullets: [
            {
                title: "Side-by-Side Comparison",
                description: "View differences between documents with intuitive highlighting and navigation.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Semantic Understanding",
                description: "Detects meaning changes even when wording is different.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Change Summary",
                description: "Get a comprehensive overview of all differences categorized by importance.",
                icon: <FiPieChart size={26} />
            }
        ],
           imageSrc: "/images/dashboard.png"
    },
    {
        title: "Compliance Validation",
        description: "Ensure your documents meet all legal and regulatory requirements. Our system checks against current standards and flags potential issues.",
        bullets: [
            {
                title: "Regulatory Checks",
                description: "Validates documents against GDPR, HIPAA, financial regulations, and more.",

                icon: <FiLock size={26} />
            },
            {
                title: "Missing Clause Detection",
                description: "Identifies required sections or clauses that should be present.",

                icon: <FiUser size={26} />
            },
            {
                title: "Risk Assessment",
                description: "Evaluates potential legal and compliance risks with severity ratings.",
                icon: <FiShield size={26} />
            }
        ],
           imageSrc: "/images/dashboard.png"
    },
    {
        title: "Interactive Visualizations",
        description: "Transform complex document data into clear, actionable insights through intuitive visual representations.",
        bullets: [
            {
                title: "Compliance Dashboards",
                description: "View compliance scores and issues through color-coded gauges and charts.",
                icon: <FiLock size={26} />
            },
            {
                title: "Entity Relationship Maps",
                description: "Visualize connections between parties, clauses, and obligations.",
                icon: <FiUser size={26} />
            },
            {
                title: "Risk Heatmaps",
                description: "Identify high-risk areas in your documents at a glance.",
                icon: <FiShield size={26} />
            }
        ],
          imageSrc: "/images/dashboard.png"
    },
]