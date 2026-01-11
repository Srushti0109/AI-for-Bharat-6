/**
 * Kiro Heroes – Week 6: The Referee
 * Tool: Option Comparison & Trade-off Explainer
 * Run: node compare.js
 */

const decision = {
  question: "Which backend API approach should I use?",
  constraints: {
    teamLevel: "Beginner",
    budget: "Low",
    scale: "Medium",
    deliverySpeed: "Fast"
  },
  options: [
    {
      name: "REST API",
      pros: [
        "Easy to understand",
        "Fast to build",
        "Strong caching support",
        "Huge community"
      ],
      cons: [
        "Over-fetching data",
        "Multiple endpoints required"
      ],
      score: {
        ease: 5,
        cost: 5,
        scalability: 4,
        flexibility: 3
      }
    },
    {
      name: "GraphQL API",
      pros: [
        "Fetch exact data",
        "Single endpoint",
        "Very flexible for frontend"
      ],
      cons: [
        "Complex learning curve",
        "Caching is harder",
        "More server complexity"
      ],
      score: {
        ease: 2,
        cost: 3,
        scalability: 4,
        flexibility: 5
      }
    }
  ]
};

// -------- LOGIC --------

console.log("\n🧭 KIRO REFEREE MODE\n");

console.log("❓ QUESTION:");
console.log(decision.question);

console.log("\n📌 CONSTRAINTS:");
Object.entries(decision.constraints).forEach(([k, v]) =>
  console.log(`- ${k}: ${v}`)
);

decision.options.forEach(option => {
  console.log(`\n🔹 OPTION: ${option.name}`);

  console.log("✅ Pros:");
  option.pros.forEach(p => console.log("  -", p));

  console.log("❌ Cons:");
  option.cons.forEach(c => console.log("  -", c));

  option.totalScore = Object.values(option.score).reduce((a, b) => a + b, 0);
  console.log("⭐ Score:", option.totalScore);
});

const winner = decision.options.reduce((a, b) =>
  a.totalScore > b.totalScore ? a : b
);

console.log("\n🏆 RECOMMENDATION:");
console.log(winner.name);

console.log("\n🧠 REASON:");
console.log(
  winner.name === "REST API"
    ? "Best choice for beginners with low budget and fast delivery needs."
    : "Best choice for complex apps requiring high flexibility."
);

console.log("\n✅ Decision guided, not forced.\n");
