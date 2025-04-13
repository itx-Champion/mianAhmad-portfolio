import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function JudiciaryBahamas() {
  const tasks = [
    {
      text: "Built and deployed an AI-enhanced judiciary platform for the Bahamas government using React.js, Node.js, and MongoDB to streamline court data and automate documentation workflows.",
      keywords: [
        "AI-enhanced",
        "judiciary platform",
        "React.js",
        "Node.js",
        "MongoDB",
        "documentation workflows",
      ],
    },
    {
      text: "Developed intelligent search and classification features using machine learning models to help legal professionals access case files with greater speed and accuracy.",
      keywords: [
        "intelligent search",
        "machine learning",
        "legal case classification",
        "AI",
      ],
    },
    {
      text: "Created secure role-based user access using JWT and Express middleware, ensuring compliance with judiciary data regulations.",
      keywords: [
        "JWT",
        "role-based access",
        "Express middleware",
        "data security",
      ],
    },
    {
      text: "Integrated cloud storage and version control for sensitive legal documents, using Amazon S3 and Node.js to handle real-time file uploads and updates.",
      keywords: ["Amazon S3", "cloud storage", "file uploads", "Node.js"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Lead Full Stack Engineer{" "}
            <span className="text-AAsecondary">@ Judiciary Bahamas</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Jan - Jun 2024
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            onClick={() =>
              window.open("https://www.bahamasjudiciary.com", "_blank")
            }
          >
            www.bahamasjudiciary.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
