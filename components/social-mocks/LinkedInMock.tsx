import React from "react";
import ReactMarkdown from "react-markdown";
import { ThumbsUp, MessageSquare, Repeat, Send } from "lucide-react";

interface LinkedInMockProps {
  content: string;
}

export const LinkedInMock: React.FC<LinkedInMockProps> = ({ content }) => {
  return (
    <div className="bg-white text-black rounded-lg p-4 max-w-md mx-auto">
      <div className="flex items-center mb-3">
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
        <div>
          <p className="font-bold">Your Name</p>
          <p className="text-gray-500 text-sm">Your Title • 1st</p>
        </div>
      </div>
      {/* ✅ Fix: Use ReactMarkdown to properly format the LinkedIn post */}
      <div className="prose prose-sm prose-p:mb-3 prose-li:ml-5 prose-li:marker:text-black text-black">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
      <div className="flex justify-between text-gray-500 mt-3">
        <ThumbsUp size={18} />
        <MessageSquare size={18} />
        <Repeat size={18} />
        <Send size={18} />
      </div>
    </div>
  );
};
