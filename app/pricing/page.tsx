"use client";

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { CheckIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const pricingPlans = [
  {
    name: "Basic",
    price: "0",
    priceId: "basic_plan",
    features: [
      "10 AI-generated posts",
      "Generate content for Twitter, Instagram & LinkedIn",
      "Basic analytics",
    ],
  },
  {
    name: "Pro",
    price: "29",
    priceId: null,
    features: [
      "500 AI-generated posts",
      "All social media platforms",
      "Advanced analytics",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "99",
    priceId: null,
    features: [
      "Unlimited AI-generated posts",
      "All social media platforms",
      "Custom AI model training",
      "Dedicated account manager",
      "API access for automation",
    ],
  },
];

export default function PricingPage() {
  const { isSignedIn, user } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const handleBasicPlan = async () => {
    if (!isSignedIn || !user) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/update-user-points", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user.id, points: 50 }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update points");
      }

      toast.success("50 credits added to your account!", {
        description: "Enjoy your rewards 🎉",
        duration: 3000,
      });
    } catch (error) {
      console.error("Error updating user points:", error);

      toast.error("Failed to update points.", {
        description: "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      <main className="container mx-auto px-8 py-20">
        <h1 className="text-5xl font-bold mb-12 text-center text-white">
          Pricing Plans
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border border-gray-800 flex flex-col"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">
                {plan.name}
              </h2>
              <p className="text-4xl font-bold mb-6 text-white">
                ${plan.price}
                <span className="text-lg font-normal text-gray-400">
                  /month
                </span>
              </p>
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center mb-3 text-gray-300"
                  >
                    <CheckIcon className="w-5 h-5 mr-2 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              {plan.priceId === "basic_plan" ? (
                <Button
                  onClick={handleBasicPlan}
                  disabled={isLoading}
                  className="w-full bg-white text-black hover:bg-gray-200"
                >
                  {isLoading ? "Processing..." : "Choose Plan"}
                </Button>
              ) : (
                <Button
                  disabled
                  className="w-full bg-gray-700 text-gray-400 cursor-not-allowed"
                >
                  Currently not available
                </Button>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
