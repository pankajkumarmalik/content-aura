"use client";

import { Navbar } from "@/components/Navbar";
import React from "react";

const DocsPage = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      <main className="container mx-auto px-8 py-20">
        <div className="p-6 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">
            ContentAura - Documentation
          </h1>

          <section className="mb-6">
            <p>
              Welcome to the <strong>ContentAura</strong>, your ultimate tool
              for effortlessly creating high-quality, engaging content for your
              Social Media. Whether you need Twitter Threads, Instagram Captions
              or LinkedIn Post, our AI delivers{" "}
              <strong>fast, accurate, and premium-quality results</strong> with
              just a few clicks.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
            <ul className="list-disc list-inside">
              <li>
                <strong>Enter Your Topic:</strong> Provide a keyword, topic, or
                brief description.
              </li>

              <li>
                <strong>Generate Content:</strong> Click the 'Generate' button
                and let AI craft high-quality content.
              </li>
              <li>
                <strong>Preview & Edit:</strong> Review and make quick edits if
                needed.
              </li>
              <li>
                <strong>Copy & Use:</strong> Copy your final content instantly.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Points & Pricing</h2>
            <p>
              <strong>Each content generation deducts 5 points.</strong>
            </p>
            <p>
              Need more points? Visit the <strong>Pricing Section</strong> to
              choose a suitable plan.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
            <ul className="list-disc list-inside">
              <li>
                ✅ <strong>AI-Powered Precision:</strong> Get relevant,
                engaging, and error-free content.
              </li>
              <li>
                ✅ <strong>Content Preview:</strong> Review before finalizing.
              </li>

              <li>
                ✅ <strong>Fast & Reliable:</strong> Generate content in
                seconds.
              </li>
              <li>
                ✅ <strong>User-Friendly Interface:</strong> Clean, intuitive,
                and fully responsive.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Get Started</h2>
            <p>
              Sign up today and start generating{" "}
              <strong>professional-quality content</strong> effortlessly.
              Elevate your content game with AI-powered innovation! 🚀
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DocsPage;
