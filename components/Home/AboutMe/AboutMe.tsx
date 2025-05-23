import React from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";
export default function AboutMe(props) {
  const technologies = [
    [
      "Nextjs/React",
      "TypeScript/JavaScript",
      "Tailwind CSS",
      "Redux/Redux Toolkit",
      "AWS/Google Cloud",
    ],
    ["Node.js", "Express.js", "Mongodb", "Firebase", "GraphQL/RESTful APIs"],
  ];
  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      className="snap-start flex flex-col  items-center py-20 bg-AAprimary"
    >
      {/* // ? 0.1 About Me */}
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <ArrowIcon
              className={
                "flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"
              }
            />
            <span className="text-AAsecondary font-Header text-sm  sm:text-xl">
              {" "}
              01.
            </span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        {/* // ? Paragraphs */}

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header text-justify">
              <span className="text-gray-400 ">
                Hello! My name is{" "}
                <span className="text-AAsecondary">Mian Ahmad</span>, and
                I&apos;m a dedicated{" "}
                <span className="text-AAsecondary">
                  Full Stack MERN Developer
                </span>{" "}
                with over{" "}
                <span className="text-AAsecondary">
                  3 years of hands-on experience
                </span>{" "}
                in building scalable and performant web applications. My journey
                in development began with a deep curiosity for technology, which
                soon evolved into a passion for creating impactful digital
                solutions.
              </span>
            </div>

            <div className="font-Header text-justify">
              <span className="text-gray-400 ">
                Over the years, I’ve worked on a variety of professional
                projects involving{" "}
                <span className="text-AAsecondary">
                  MongoDB, Express.js, React.js, and Node.js
                </span>
                , delivering end-to-end solutions from front-end interfaces to
                back-end logic and API integrations. I&apos;ve collaborated with
                both startups and teams, contributing to products in{" "}
                <span className="text-AAsecondary">e-commerce</span>,{" "}
                <span className="text-AAsecondary">portfolio platforms</span>,
                and <span className="text-AAsecondary">custom CMS systems</span>
                . My focus is always on writing clean, maintainable code and
                developing smooth, responsive user experiences.
              </span>
            </div>

            <div className="font-Header tracking-wide text-justify">
              <span className="text-gray-400 ">
                I’m passionate about continuous learning, and I stay updated
                with modern technologies like{" "}
                <span className="text-AAsecondary">React Query</span>,{" "}
                <span className="text-AAsecondary">Tailwind CSS</span>,{" "}
                <span className="text-AAsecondary">Redux Toolkit</span>, and{" "}
                <span className="text-AAsecondary">Framer Motion</span> to build
                production-ready applications. My goal is to keep pushing the
                boundaries of what I can do with MERN stack and contribute to
                building innovative, high-performance web applications.
              </span>
            </div>

            <div className="font-Header tracking-wide flex flex-row space-x-16  justify-center lg:justify-start">
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[0].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[1].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/img/myPic.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
            <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img
                src={"/img/myPic.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full  bg-AAsecondary opacity-10 md:opacity-60  rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
