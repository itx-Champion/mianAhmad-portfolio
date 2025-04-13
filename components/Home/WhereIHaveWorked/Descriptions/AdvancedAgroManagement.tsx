import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function AdvancedAgroManagement() {
  const tasks = [
    {
      text: "Designed and developed full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), focusing on scalability and modular code architecture.",
      keywords: [
        "MERN stack",
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "full-stack",
      ],
    },
    {
      text: "Integrated RESTful APIs for seamless communication between frontend and backend services, utilizing tools like Postman for testing and debugging.",
      keywords: [
        "RESTful APIs",
        "Postman",
        "frontend-backend integration",
        "debugging",
      ],
    },
    {
      text: "Implemented user authentication and authorization using JSON Web Tokens (JWT) and Bcrypt for secure login systems.",
      keywords: [
        "JWT",
        "Bcrypt",
        "authentication",
        "authorization",
        "security",
      ],
    },
    {
      text: "Built complex data models and managed database queries using Mongoose in MongoDB, ensuring efficient CRUD operations and optimized indexing.",
      keywords: ["Mongoose", "MongoDB", "data modeling", "CRUD operations"],
    },
    {
      text: "Utilized Redux Toolkit for efficient state management in React applications, improving performance and maintainability.",
      keywords: ["Redux Toolkit", "state management", "React performance"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Full Stack Web Developer{" "}
            <span className="text-AAsecondary">@ Web Development</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Jan 18 -May 2022{" "}
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
