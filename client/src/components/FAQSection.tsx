"use client";
import { CardStack } from "../components/ui/card-stack";
import { cn } from "../lib/utils";
export default function CardStackDemo() {
  return (
    <div className="h-fit  mt-16 flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "How do I get started with Budgetly?",

    content: (
      <p>
        To get started with Budgetly, simply click on the
        <Highlight> "Join Now"</Highlight> button on the homepage. You can sign
        up using your email address or social media accounts. Once registered,
        you can start tracking your expenses and managing your budget
        efficiently.
      </p>
    ),
  },
  {
    id: 1,
    name: "Is Budgetly free to use?",

    content: (
      <p>
        Yes, Budgetly offers a <Highlight>free plan</Highlight> that includes
        all the essential features for personal finance management. We also
        offer premium plans with advanced features for users who need more
        comprehensive tools.
      </p>
    ),
  },
  {
    id: 2,
    name: "How secure is my data with Budgetly?",

    content: (
      <p>
        We take your <Highlight> privacy and data security</Highlight>{" "}
        seriously. Budgetly uses industry-standard{" "}
        <Highlight>encryption</Highlight> to protect your data. We also
        regularly update our security measures to ensure your information
        remains safe and secure.
      </p>
    ),
  },
  {
    id: 3,
    name: "What platforms does Budgetly support?",

    content: (
      <p>
        Budgetly is a <Highlight>web-based application</Highlight> accessible
        from any device with an internet connection. We are also working on
        mobile apps for <Highlight> iOS and Android</Highlight> to provide you
        with seamless access on the go.
      </p>
    ),
  },
  {
    id: 4,
    name: "Can I share my budget with family or friends?",

    content: (
      <p>
        Yes, Budgetly allows you to share your budget with
        <Highlight> family members or friends</Highlight>. You can invite them
        to collaborate on managing expenses and setting financial goals
        together.
      </p>
    ),
  },
];
