export const tracks = [
  {
    id: "ml",
    name: "Machine Learning",
    positioning: "For engineers who want to reason about data, not just call a fit() method.",
    covers: [
      "Statistical foundations and when they actually apply",
      "Model evaluation that survives contact with real data",
      "Feature engineering and the judgment calls behind it",
      "Deployment constraints that change how you build",
    ],
    build: ["An evaluation harness you design yourself", "A model you can defend under real-world drift"],
  },
  {
    id: "genai",
    name: "Generative AI",
    positioning: "For engineers who want to build with language models, not just prompt them.",
    covers: [
      "How large language models actually reason and fail",
      "Retrieval and grounding for production systems",
      "Evaluation for open-ended, non-deterministic output",
      "Cost, latency, and reliability trade-offs at scale",
    ],
    build: ["A production RAG pipeline", "An evaluation harness for open-ended output"],
  },
];
