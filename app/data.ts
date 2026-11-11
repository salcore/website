import type { IconName } from "./components/Icon";

type Domain = {
  name: string;
  icon: IconName;
  title: string;
  description: string;
  topics: string[];
};

export const navigation: [string, string][] = [
  ["About Us", "#about"],
  ["Mission", "#mission"],
  ["Our Projects", "https://github.com/salcoreai"],
  ["Domains", "#domains"],
];

export const domains: Domain[] = [
  {
    name: "ML Systems",
    icon: "server",
    title: "ML Systems & Production Engineering",
    description:
      "How models move from experimentation to scalable, maintainable production environments. The backbone of applied AI engineering.",
    topics: [
      "ML System Design and Architecture",
      "MLOps and Production Pipelines",
      "Model Deployment and Monitoring",
      "API Design and System Reliability",
      "Backend Engineering for AI",
      "Model Evaluation and Iteration",
    ],
  },
  {
    name: "Perception",
    icon: "eye",
    title: "Perception & Computer Vision",
    description:
      "Building systems that understand the world through images, video, and sensory data.",
    topics: [
      "Image Classification",
      "Object Detection",
      "Image Segmentation",
      "Video Understanding",
      "Multimodal Learning",
      "Vision Model Evaluation",
    ],
  },
  {
    name: "Foundation Models",
    icon: "brain",
    title: "Foundation Models & Generative AI",
    description:
      "Explore modern foundation models and turn their capabilities into useful, reliable applications.",
    topics: [
      "Large Language Models",
      "Retrieval-Augmented Generation",
      "Fine-tuning",
      "AI Agents",
      "Multimodal Systems",
      "Evaluation and Safety",
    ],
  },
  {
    name: "ML Models",
    icon: "math",
    title: "Machine Learning Foundations",
    description:
      "Develop the mathematical understanding and practical skills behind effective machine learning.",
    topics: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Deep Learning",
      "Feature Engineering",
      "Optimisation",
      "Experiment Design",
    ],
  },
  {
    name: "Responsible AI",
    icon: "shield",
    title: "Responsible AI",
    description:
      "Build AI systems with accountability, transparency, and people at the centre.",
    topics: [
      "Fairness and Bias",
      "Explainability",
      "Data Privacy",
      "Model Safety",
      "AI Governance",
      "Responsible Deployment",
    ],
  },
];

export const mission = [
  "Build real, end-to-end AI projects",
  "Develop strong engineering habits — version control, experimentation, documentation",
  "Engage with research in a practical, implementation-focused manner",
  "Contribute meaningfully to open-source and public technical work",
  "Grow into AI practitioners ready for internships, research, and industry",
];
export const vision = [
  "Members capable of building, evaluating, and responsibly deploying modern AI systems",
  "Develop members from beginners into technical leads",
  "Encourage research-informed development alongside practical implementation",
  "Contribute to the broader AI ecosystem through open-source collaboration",
  "Build a reputation for engineering excellence and technical seriousness",
];
export const audience = [
  "Are serious about building AI systems or exploring research-informed development",
  "Seek structured growth and progressive skill development in a technical community",
  "Are committed to disciplined learning, consistent improvement, and taking ownership",
  "Want to build a publicly visible portfolio and contribute to open-source work",
  "Are aiming for internships, research roles, or industry positions in AI/ML",
];
export const prerequisites = [
  "Strong interest in AI, Machine Learning, Deep Learning, or Data Science",
  "Fundamental Python proficiency; or genuine willingness to develop it quickly",
  "Basic understanding of mathematics, statistics, and algorithmic thinking",
  "Commitment to consistent effort, not just bursts of motivation",
  "Willingness to collaborate, give feedback, and learn in public",
];
