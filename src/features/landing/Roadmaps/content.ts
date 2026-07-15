export const roadmaps = {
  ml: [
    { id: "ml-1", label: "Module 01", title: "Foundations of Statistical Reasoning", description: "Probability, distributions, and inference as tools for decisions, not exam questions.", detail: "Includes hands-on estimation exercises using real, messy datasets rather than cleaned textbook data." },
    { id: "ml-2", label: "Module 02", title: "Model Building & Evaluation", description: "From baseline to a defensible model, with evaluation designed before training begins.", detail: "You'll design your own evaluation harness before you're allowed to touch a model architecture." },
    { id: "ml-3", label: "Module 03", title: "Feature Engineering & Data Judgment", description: "The decisions that matter more than the algorithm you eventually choose.", detail: "Covers leakage, drift, and the judgment calls that separate a working model from a lucky one." },
    { id: "ml-4", label: "Module 04", title: "Deployment & Monitoring", description: "Constraints that change how you build once a model has to survive in production.", detail: "Includes a case study on a model that performed well offline and failed in production — and why." },
  ],
  genai: [
    { id: "genai-1", label: "Module 01", title: "How Language Models Reason", description: "Mechanics and failure modes, examined directly rather than taken on faith.", detail: "You'll break a model on purpose to understand where its reasoning actually comes from." },
    { id: "genai-2", label: "Module 02", title: "Retrieval & Grounding", description: "Building systems that stay accurate when the model's memory isn't enough.", detail: "Includes designing a retrieval pipeline for a domain with genuinely ambiguous source documents." },
    { id: "genai-3", label: "Module 03", title: "Evaluating Open-Ended Output", description: "Measurement for systems that don't have a single correct answer.", detail: "You'll design an evaluation rubric and defend it against a skeptical mentor." },
    { id: "genai-4", label: "Module 04", title: "Cost, Latency & Reliability", description: "The trade-offs that determine whether a system survives real usage.", detail: "A capstone exercise in redesigning a system that works, but is too expensive to ship." },
  ],
};
