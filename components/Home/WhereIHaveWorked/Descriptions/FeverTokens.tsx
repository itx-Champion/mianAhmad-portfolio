import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function FeverTokens() {
  const tasks = [
    {
      text: "Led the development of a scalable web application for FeverTokens using Next.js, Node.js, MongoDB, and Express, ensuring maintainability and modular architecture.",
      keywords: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Express",
        "modular architecture",
      ],
    },
    {
      text: "Collaborated with a team of developers to build dynamic dashboards using React and Tailwind CSS, implementing responsive design principles and reusable components.",
      keywords: [
        "React",
        "Tailwind CSS",
        "responsive",
        "dashboard",
        "component-based",
      ],
    },
    {
      text: "Developed secure backend APIs using Express and JWT for user authentication and integrated with cloud storage services for file and asset management.",
      keywords: ["Express", "JWT", "authentication", "API", "cloud storage"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Lead Full Stack Engineer{" "}
            <span className="text-AAsecondary">@ FeverTokens</span>
          </span>

          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Jun - Jan 2024
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https:///www.fevertokens.io", "_blank")}
          >
            www.fevertokens.io
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
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
