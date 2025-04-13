import { motion } from "framer-motion";
import { Link } from "react-scroll";

const MobileMenu = (props: any) => {
  const closeMenu = () => {
    props.setRotate(!props.rotate);
    props.setShowElement(!props.ShowElement);
  };

  return (
    <>
      <motion.div
        initial={{ x: "100%" }} // Menu starts outside the screen on the right
        animate={props.rotate ? { x: "0%" } : { x: "100%" }} // Slide in from the right
        transition={{ x: { duration: 0.4 } }} // Smooth transition for sliding effect
        className="w-full fixed h-screen flex md:hidden duration-300 z-20"
      >
        {/* This is the backdrop to close the menu when clicked */}
        <div
          onClick={() => closeMenu()}
          className="w-3/4 h-full backdrop-blur-sm bg-MobileNavColor/30 hover:cursor-pointer"
        ></div>

        {/* This is the actual menu content */}
        <div className="w-[60%] xs:w-[40%] sm:w-[30%] h-full bg-MobileNavBarColor flex flex-col justify-center items-center space-y-8 font-sans">
          <Link
            to="aboutSection"
            spy={true}
            smooth={true}
            offset={-50}
            duration={200}
            onClick={() => closeMenu()}
            className="flex flex-col text-center space-y-2"
          >
            <span className="text-AAsecondary text-xs font-mono">01.</span>
            <span className="text-white font-Text2 text-sm sm:text-base hover:text-AAsecondary hover:cursor-pointer duration-300">
              About
            </span>
          </Link>

          <Link
            to="WhereIhaveWorkedSection"
            spy={true}
            smooth={true}
            offset={-250}
            duration={200}
            onClick={() => closeMenu()}
            className="flex flex-col text-center space-y-2"
          >
            <span className="text-AAsecondary text-xs font-mono hover:cursor-pointer">
              02.
            </span>
            <span className="text-white font-Text2 text-sm sm:text-base hover:text-AAsecondary hover:cursor-pointer duration-300">
              Experience
            </span>
          </Link>

          <Link
            to="SomethingIveBuiltSection"
            spy={true}
            smooth={true}
            offset={100}
            duration={200}
            onClick={() => closeMenu()}
            className="flex flex-col text-center space-y-2"
          >
            <span className="text-AAsecondary text-xs font-mono">03.</span>
            <span className="text-white font-Text2 text-sm sm:text-base hover:text-AAsecondary hover:cursor-pointer duration-300">
              Work
            </span>
          </Link>

          <Link
            to="GetInTouchSection"
            spy={true}
            smooth={true}
            offset={100}
            duration={200}
            onClick={() => closeMenu()}
            className="flex flex-col text-center space-y-2"
          >
            <span className="text-AAsecondary text-xs font-mono">04.</span>
            <span className="text-white font-Text2 text-sm sm:text-base hover:text-AAsecondary hover:cursor-pointer duration-300">
              Contact
            </span>
          </Link>

          <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
            <button className="rounded border font-Text2 border-AAsecondary hover:bg-ResumeButtonHover py-2 sm:py-4 px-5 sm:px-10 text-xs text-AAsecondary">
              Resume
            </button>
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default MobileMenu;
