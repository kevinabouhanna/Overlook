// Import service images
import salesHiringImage from "../assets/images/services/sales-hiring.jpg";
import salesTrainingImage from "../assets/images/services/sales-training.jpg";
import salesProcessImage from "../assets/images/services/sales-process.jpg";
import performanceMetricsImage from "../assets/images/services/performance-metrics.jpg";

// Define the services data
export const servicesData = [
  {
    id: "sales-hiring",
    title: "Sales Hiring",
    description: "Find and hire the right sales talent for your organization.",
    image: salesHiringImage,
    longDescription:
      "Our Sales Hiring service helps you identify, attract, and hire top sales talent that fits your company culture and goals. We use a data-driven approach to assess candidates and build high-performing sales teams.",
    benefits: [
      "Reduce hiring mistakes and turnover",
      "Identify candidates with the right skills and cultural fit",
      "Streamline your hiring process",
      "Build a high-performing sales team",
    ],
    features: [
      {
        title: "Sales Talent Assessment",
        description:
          "We use proven assessment tools to evaluate candidates' sales aptitude, personality traits, and cultural fit.",
      },
      {
        title: "Candidate Sourcing",
        description:
          "We help you find and attract top sales talent through our extensive network and targeted recruitment strategies.",
      },
      {
        title: "Interview Process Design",
        description:
          "We design a structured interview process that effectively evaluates candidates' skills, experience, and potential.",
      },
      {
        title: "Onboarding Program",
        description:
          "We develop a comprehensive onboarding program that gets new hires up to speed quickly and sets them up for success.",
      },
    ],
  },
  {
    id: "sales-training",
    title: "Sales Training",
    description: "Equip your team with the skills they need to succeed.",
    image: salesTrainingImage,
    longDescription:
      "Our Sales Training programs are designed to equip your team with the skills, knowledge, and confidence they need to excel. We offer customized training solutions that address your specific challenges and goals.",
    benefits: [
      "Improve sales skills and performance",
      "Increase win rates and deal sizes",
      "Reduce sales cycle length",
      "Build team confidence and motivation",
    ],
    features: [
      {
        title: "Customized Training Programs",
        description:
          "We develop training programs tailored to your team's specific needs, industry, and sales process.",
      },
      {
        title: "Sales Methodology Implementation",
        description:
          "We help you implement proven sales methodologies that align with your business model and customer journey.",
      },
      {
        title: "Role-Specific Skill Development",
        description:
          "We provide targeted training for different sales roles, from SDRs to account executives to sales managers.",
      },
      {
        title: "Ongoing Coaching",
        description:
          "We offer ongoing coaching and reinforcement to ensure that new skills are applied and sustained over time.",
      },
    ],
  },
  {
    id: "sales-process",
    title: "Sales Process Optimization",
    description: "Streamline your sales operations for maximum efficiency.",
    image: salesProcessImage,
    longDescription:
      "Our Sales Process Optimization service helps you streamline your sales operations, eliminate bottlenecks, and maximize efficiency. We analyze your current process and implement improvements that drive results.",
    benefits: [
      "Streamline your sales workflow",
      "Reduce administrative burden on sales reps",
      "Improve handoffs between teams",
      "Increase overall sales efficiency",
    ],
    features: [
      {
        title: "Sales Process Audit",
        description:
          "We conduct a thorough audit of your current sales process to identify strengths, weaknesses, and opportunities for improvement.",
      },
      {
        title: "CRM Implementation and Optimization",
        description:
          "We help you implement or optimize your CRM to better support your sales process and provide valuable insights.",
      },
      {
        title: "Sales Enablement Tools",
        description:
          "We integrate tools and technologies that make your sales team more effective and efficient.",
      },
      {
        title: "Process Automation",
        description:
          "We identify opportunities to automate repetitive tasks and streamline workflows to free up more selling time.",
      },
    ],
  },
  {
    id: "performance-metrics",
    title: "Performance Metrics",
    description: "Measure and improve your sales team's performance.",
    image: performanceMetricsImage,
    longDescription:
      "Our Performance Metrics service helps you measure and improve your sales team's performance through data-driven insights. We develop KPIs, dashboards, and coaching frameworks that drive continuous improvement.",
    benefits: [
      "Gain visibility into sales performance",
      "Identify areas for improvement",
      "Make data-driven decisions",
      "Drive continuous improvement",
    ],
    features: [
      {
        title: "KPI Development",
        description:
          "We help you define and track the right key performance indicators (KPIs) for your sales organization.",
      },
      {
        title: "Performance Dashboard Creation",
        description:
          "We build dashboards that provide real-time visibility into sales performance at individual, team, and organizational levels.",
      },
      {
        title: "Data-Driven Coaching",
        description:
          "We develop coaching frameworks that use performance data to guide targeted skill development.",
      },
      {
        title: "Incentive Program Design",
        description:
          "We design incentive programs that motivate the right behaviors and drive desired outcomes.",
      },
    ],
  },
];

// Create a map for easier lookup by ID
export const servicesMap = servicesData.reduce((acc, service) => {
  acc[service.id] = service;
  return acc;
}, {});
