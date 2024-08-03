"use client";
import { cn } from "../lib/utils";

export default function CardDemo() {
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
      title: "Optimize Your Budget",
      description:
        "Set and manage budgets to reach your financial goals. Let our AI-powered tools guide you toward smarter spending.",
    },
  ];
  return (
    <div className="w-[100%]  flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-center">
      {data.map((item, ind) => (
        <div
          key={ind}
          className={cn(
            "w-[22%] cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
            "bg-[url(https://4kwallpapers.com/images/walls/thumbs_3t/8324.png)] bg-cover"
          )}
        >
          <div className="text content flex flex-col justify-end h-full">
            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
              Step {ind + 1} : {item.title}
            </h1>
            <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
