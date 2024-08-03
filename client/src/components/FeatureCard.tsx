"use client";
import { cn } from "../lib/utils";
import image1 from "../assets/back.png";

export default function CardDemo() {
  const data = [
    { name: "Expense Prediction", desc:"The Expense Prediction Model forecasts future expenses by analyzing historical financial data. Its goal is to help users manage budgets effectively and make informed spending decisions" },
    { name: "Budget Optimization", desc:"TThe Budget Optimization Model offers tailored budget recommendations based on individual spending habits. Its goal is to help users manage their finances more effectively by optimizing their budget allocation." },
    { name: "Anomaly Detection", desc:"The Anomaly Detection Model aims to identify unusual spending patterns in financial data. Its goal is to help users recognize and address potential discrepancies in their expenses." }
  ];

  return (
    <div className="w-[100%]  flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-center">
      {data.map((item, ind) => (
        <div key={ind}
          className={cn(
            "group w-full md:w-[28%] cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
            `bg-[url(${image1})] bg-cover `,
            "transition-all duration-500"
          )}
          style={{ backgroundImage: `url(${image1})` }} 
        >
          <div className="text relative z-50">
            <h1 className="font-bold text-xl md:text-3xl text-white relative">
              {item.name}
            </h1>
            <p className="font-normal text-base text-gray-50 relative my-4">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
