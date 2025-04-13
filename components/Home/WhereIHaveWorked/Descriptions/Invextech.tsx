import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function CooperBuildCRM() {
  const tasks = [
    {
      text: "Engineered a custom CRM dashboard using React.js and Tailwind CSS, integrated with a Node.js/Express backend and MongoDB for dynamic client and project data management.",
      keywords: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "CRM dashboard",
      ],
    },
    {
      text: "Developed reusable components for lead tracking, task management, and contact automation, improving workflow efficiency and reducing manual processes.",
      keywords: [
        "reusable components",
        "lead tracking",
        "task management",
        "workflow automation",
      ],
    },
    {
      text: "Integrated RESTful APIs and third-party services to enable communication workflows and CRM email triggers.",
      keywords: ["RESTful APIs", "SendGrid", "Twilio", "CRM email triggers"],
    },
    {
      text: "Collaborated with cross-functional teams to implement user roles and permissions, ensuring data privacy and role-based access within the CRM system.",
      keywords: [
        "user roles",
        "permissions",
        "data privacy",
        "role-based access",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Senior Full Stack Engineer{" "}
            <span className="text-AAsecondary">@ Cooper Build (CRM)</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Jun 2024 - Present
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://www.cooperbuild.com", "_blank")}
          >
            www.cooperbuild.com
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
