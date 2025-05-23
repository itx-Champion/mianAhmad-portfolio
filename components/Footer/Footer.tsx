import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
import UpworkIcon from "../Icons/UpworkIcon";
import FiverrIcon from "../Icons/FiverIcon";
const ClickableIcon = (props: any) => {
  return (
    <a href={props.href} className="" target={"_blank"} rel="noreferrer">
      <props.Icon
        className={
          "w-5 h-5 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"
        }
      />
    </a>
  );
};
const IconsData = [
  { href: "https://github.com/itx-Champion", Icon: GithubIcon },
  {
    href: "https://www.linkedin.com/in/mian-ahmad-764882262/",
    Icon: LinkedinIcon,
  },
  {
    href: "https://www.upwork.com/freelancers/~010c610903c61fe4fc",
    Icon: UpworkIcon,
  },
  { href: "https://www.fiverr.com/mianahmad121921", Icon: FiverrIcon },
];

export default function Fotter(props: {
  githubUrl: string;
  hideSocialsInDesktop: boolean;
}) {
  return (
    <div className="bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4">
      {/* // ? Reach me at */}
      <div
        className={`flex flex-row space-x-8 ${
          props.hideSocialsInDesktop ? "lg:hidden" : ""
        }`}
      >
        {IconsData.map((iconData, index) => {
          return (
            <ClickableIcon
              key={index}
              href={iconData.href}
              Icon={iconData.Icon}
            />
          );
        })}
      </div>
      <a href={props.githubUrl} className="" target={"_blank"} rel="noreferrer">
        <div
          className="group flex flex-col font-mono justify-center items-center  text-gray-400 
            text-sm  space-y-2  "
        >
          <span className="group-hover:text-AAsecondary sm:text-sm text-xs">
            Designed & Built by Mian Ahmad
          </span>

          <span className="text-xs flex flex-row items-center space-x-2 group-hover:text-AAsecondary">
            <GithubIcon
              className={
                "w-4 h-4 text-gray-400 fill-current group-hover:text-AAsecondary"
              }
            />
            <span className="">Source code - Github</span>
          </span>
        </div>
      </a>
    </div>
  );
}
