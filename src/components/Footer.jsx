import { Fragment } from "react";
import shawerma from "../assets/wholesome-shawerma.png";
import instagram from "../assets/instagram.svg";
import dribbble from "../assets/dribbble.svg";
import github from "../assets/github.svg";

const Footer = ({ className }) => {
  return (
    <footer
      className={`${className} relative px-8 sm:px-11 text-white bg-center bg-cover bg-no-repeat`}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.6) 50%), url(${shawerma})`,
      }}
    >
      <div className="container mx-auto py-9 flex flex-col xs:flex-row justify-between items-center gap-6 flex-wrap">
        <h3 className="text-2xl xs:text-3xl font-bebas text-center">
          <span className="text-primaryRed">MCU</span> countdown
        </h3>
        <div className="">
          <p className="text-sm xs:text-base text-center">
            Made with 💖 by{" "}
            <a
              className="link"
              href="https://adhamali.tech"
              target="_blank"
              rel="nonopener noreferrer"
            >
              Adham Ali
            </a>
          </p>
          <div className="flex justify-center xs:justify-end items-center mt-2 space-x-2 ">
            <a
              className="w-6 xs:w-7 link"
              href="https://www.instagram.com/madeby.adhamali/?hl=en"
              rel="nonopener noreferrer"
              target="_blank"
            >
              <img src={instagram} alt="instagram" />
            </a>
            <a
              className="w-6 xs:w-7 link"
              href="https://dribbble.com/adham_ali"
              rel="nonopener noreferrer"
              target="_blank"
            >
              <img src={dribbble} alt="dribbble" />
            </a>
            <a
              className="w-6 xs:w-7 link"
              href="https://github.com/adhamali450"
              rel="nonopener noreferrer"
              target="_blank"
            >
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
