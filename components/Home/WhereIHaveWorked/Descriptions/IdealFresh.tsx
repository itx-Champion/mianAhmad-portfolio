import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function IdealFresh() {
  const tasks = [
    {
      text: "Developed and deployed a modern desktop-like web dashboard for IdealFresh using React, Tailwind CSS, and Firebase for real-time client data and billing management.",
      keywords: [
        "React",
        "Tailwind CSS",
        "Firebase",
        "client data",
        "billing dashboard",
      ],
    },
    {
      text: "Integrated Google Sheets API and cloud storage for seamless import/export of Excel data, replacing Apache POI with JavaScript-based solutions for better web compatibility.",
      keywords: [
        "Google Sheets API",
        "cloud storage",
        "Excel",
        "JavaScript",
        "data import/export",
      ],
    },
    {
      text: "Created RESTful APIs with Node.js and Express, connected to Oracle Database for handling legacy enterprise data, maintaining secure data exchange with JWT authentication.",
      keywords: [
        "Node.js",
        "Express",
        "Oracle Database",
        "RESTful APIs",
        "JWT authentication",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Full Stack Developer{" "}
            <span className="text-AAsecondary">@ IdealFresh</span>
          </span>

          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Dec -June 2023
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
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
