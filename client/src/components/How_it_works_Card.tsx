import { GlareCard } from "../components/ui/glare-card";

export default function GlareCardDemo() {
  const data = [
    {
      title: "Sign Up",
      description:
        "Create a free account in just a few minutes. Simply provide your details and start your financial journey",
    },
    {
      title: "Add Your Expenses",
      description:
        "Easily track your expenses by adding them manually or importing them from your bank account. Stay on top of your spending!",
    },
    {
      title: "Get Insights",
      description:
        "Receive personalized insights and recommendations based on your spending habits. Understand where your money goes!",
    },
    {
      title: "Optimize Budget",
      description:
        "Set and manage budgets to reach your financial goals. Let our AI-powered tools guide you toward smarter spending.",
    },
  ];
  return (
    <section className="w-full flex items-center justify-between px-5 0 h-fit">
      {data.map((items, ind) => (
        <GlareCard
          key={ind}
          className="flex flex-col items-center px-2 justify-center"
        >
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative z-10">
            {items.title}
          </h1>
          <p className="font-normal text-center text-sm text-gray-50 relative z-10 my-4">
            {items.description}
          </p>
        </GlareCard>
      ))}
    </section>
  );
}
