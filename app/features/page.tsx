import {
  SparklesIcon,
  ShieldCheckIcon,
  LightbulbIcon,
  ArrowRightIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function FeaturesPage() {
  const { userId } = await auth();
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-gray-100 overflow-hidden pt-20">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center py-10">
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4">
            Generate high quality social media content with the power of AI.
          </p>
        </div>

        {/* Features Grid */}
        <div className="py-16" id="features">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                title: "AI-Powered Suggestions",
                icon: <LightbulbIcon className="w-12 h-12 text-yellow-400" />,
                description:
                  "Get smart recommendations to optimize your content for engagement.",
              },
              {
                title: "Auto-Generated Hashtags",
                icon: <SparklesIcon className="w-12 h-12 text-pink-400" />,
                description:
                  "Boost reach with AI-curated hashtags tailored to your content.",
              },
              {
                title: "Grammar & Tone Enhancement",
                icon: <ShieldCheckIcon className="w-12 h-12 text-blue-500" />,
                description:
                  "Ensure your posts are professional and on-brand with AI-powered refinements.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="text-2xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-10 relative">
          <h2 className="text-3xl font-bold text-white">
            Ready to Take Your Content to the Next Level?
          </h2>

          {userId ? (
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 mt-6"
            >
              <Link href="/generate">
                Generate Content Now <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          ) : (
            <SignUpButton mode="modal">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 mt-6">
                Get Started Free <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </SignUpButton>
          )}

          <p className="mt-4 text-gray-400">No credit card required</p>
        </div>
      </main>
    </div>
  );
}
