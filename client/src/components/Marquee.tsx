"use client";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className=" rounded-md flex mt-5  h-fit flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    title: "Simplified Expense Tracking",
    quote:
      "Easily monitor your spending with our intuitive interface. Categorize and visualize your expenses effortlessly.",
  },
  {
    quote:
      "Leverage advanced AI technology to receive tailored budgeting advice that adapts to your financial behavior",

    title: "AI-Powered Recommendations",
  },
  {
    quote:
      "Gain valuable insights into your financial habits. Understand your spending patterns and make informed decisions.",

    title: "Comprehensive Insights",
  },
  {
    quote:
      "Set financial goals like saving for a vacation or paying off debt. Track your progress and stay motivated.",

    title: "Goal-Oriented Budgeting",
  },
  {
    quote:
      "Your data security is our priority. We ensure that your information is encrypted and kept private.",

    title: "Secure and Private",
  },
];
