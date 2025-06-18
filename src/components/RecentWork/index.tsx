"use client";
import { ExternalLink } from "lucide-react";

export default function PortfolioShowcase() {
  const projects = [
    {
      id: 1,
      name: "NowvPlay",
      description: "A platform for everything sports.",
      bgColor: "bg-gradient-to-br from-teal-400 to-teal-600",
      textColor: "text-white",
      logo: "/api/placeholder/200/80",
      url: "https://nowvplay.com",
      alt: "NowvPlay logo",
      tags: ["Sports", "Entertainment"],
    },
    {
      id: 2,
      name: "InvestPlay",
      description: "Investing and gaming has never been this fun.",
      bgColor: "bg-gradient-to-br from-red-400 to-red-600",
      textColor: "text-white",
      url: "https://www.invplay.com",
      logo: "/api/placeholder/200/80",
      alt: "InvestPlay logo",
      tags: ["Finance", "Gaming"],
    },
    {
      id: 3,
      name: "OhhNft",
      description: "The Everything app built for Web3 communities",
      bgColor: "bg-gradient-to-br from-blue-400 to-blue-600",
      textColor: "text-white",
      url: "https://ohhnft.io",
      logo: "/api/placeholder/200/80",
      alt: "OhhNft logo",
      tags: ["Web3", "Community"],
    },
    {
      id: 4,
      name: "GoodFynd",
      description:
        "Point of Sale platform built specifically for mobile businesses.",
      bgColor: "bg-gradient-to-br from-green-500 to-green-700",
      textColor: "text-white",
      url: "https://www.goodfynd.com",
      logo: "/api/placeholder/200/80",
      alt: "GoodFynd logo",
      tags: ["POS", "Mobile"],
    },
    {
      id: 5,
      name: "AtypicallyMe",
      description: "Find your safe space, your way.",
      bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-100",
      textColor: "text-gray-800",
      url: "https://atypicallyme.com",
      logo: "/api/placeholder/200/80",
      alt: "AtypicallyMe logo",
      tags: ["Wellness", "Community"],
    },
    {
      id: 6,
      name: "u4ria",
      description: "Zen app for meditation and mindfulness.",
      bgColor: "bg-gradient-to-br from-cyan-900 to-cyan-950",
      textColor: "text-white",
      url: "https://u4riahub.com",
      logo: "/api/placeholder/200/80",
      alt: "u4ria logo",
      tags: ["Meditation", "Wellness"],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
        My Recent Work
      </h2>

      <p className="text-center text-gray-800 mb-12 max-w-2xl mx-auto">
        Here are a few past design projects I&apos;ve worked on. Want to see
        more?{" "}
        <a
          href="mailto:ali13nadeem@gmail.com"
          className="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-2"
        >
          Email me
        </a>
        .
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${project.bgColor} rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl group h-64 relative`}
            onClick={() => {
              window.open(project?.url, "_blank");
            }}
          >
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className={`font-bold text-lg ${project.textColor}`}>
                    {project.name.charAt(0)}
                  </span>
                </div>

                <div
                  className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${project.textColor}`}
                >
                  <ExternalLink size={20} />
                </div>
              </div>

              <div>
                <h3 className={`text-2xl font-bold mb-2 ${project.textColor}`}>
                  {project.name}
                </h3>
                <p className={`${project.textColor} opacity-85 text-sm`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`text-xs px-2 py-1 rounded-full ${
                        project.textColor === "text-white"
                          ? "bg-white/20"
                          : "bg-gray-800/20"
                      } ${project.textColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
