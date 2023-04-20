import Image from "next/image";
import { Inter } from "next/font/google";
import { HiMail } from "react-icons/hi";
import {
  BsLinkedin,
  BsArrowRight,
  BsFillCloudArrowDownFill,
  BsWhatsapp,
  BsGithub,
} from "react-icons/bs";
import {
  Css,
  Git,
  HTML,
  JavaScript,
  Next,
  ReactIcon,
  Tailwind,
  TypeScript,
  Flutter,
  FlutterIcon,
  Unitec,
} from "@/components/Icons";
import { PortfolioBox } from "@/components/PortfolioBox";
import { useEffect, useRef, useState } from "react";
import { portfolioArray } from "@/utils/data";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const scrollToProfile = useRef<HTMLInputElement>(null);
  const scrollToSkills = useRef<HTMLInputElement>(null);
  const scrollToExperience = useRef<HTMLInputElement>(null);
  const scrollToPortfolio = useRef<HTMLInputElement>(null);
  const [category, setCategory] = useState("All");

  const iconArray = [
    <HTML key="html" className="w-[80px] h-[80px]" />,
    <Css key="css" className="w-[80px] h-[80px]" />,
    <TypeScript key="ts" className="w-[80px] h-[80px]" />,
    <img key="postgresql" src="/postgresql.png" className="h-[80px]" />,
    <img key="express" src="/express.png" className="h-[80px]" />,
    <ReactIcon key="react" className="w-[80px] h-[80px]" />,
    <ReactIcon key="rn" className="w-[80px] h-[80px]" />,
    <img key="hardhat" className="h-[80px]" src="/hardhat.png" alt="hardhat" />,
    <Next key="next" className="w-[80px] h-[80px]" />,
    <img key="mongodb" src="/mongodb.png" className="h-[80px]" />,
    <img key="flutter" className="h-[80px]" src="/flutter.png" alt="flutter" />,
    <img
      key="solidity"
      className="h-[80px]"
      src="/solidity.png"
      alt="solidity"
    />,
  ];

  const filterPortfolio = (data: any) => {
    if (category === "All") {
      return data;
    }
    for (let i = 0; i < data.categories.length; i++) {
      if (data.categories[i].name === category) {
        return data;
      }
    }
  };

  const filteredData = portfolioArray.filter(filterPortfolio);

  return (
    <div>
      <Head>
        <title>Stanly Sukmajaya</title>
      </Head>
      <nav className="bg-white py-5 px-[100px] border-b border-gray fixed h-[10vh] w-full z-50">
        <ul className="flex justify-between items-center">
          <li className="hidden md:block">
            <a className="text-black cursor-pointer font-bold text-[25px]">
              Stanly
            </a>
          </li>
          <ul className="flex gap-x-5">
            <li>
              <a
                onClick={() => {
                  scrollToProfile.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }}
                className="text-black cursor-pointer"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  scrollToSkills.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }}
                className="text-black cursor-pointer"
              >
                Keahlian
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  scrollToExperience.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }}
                className="text-black cursor-pointer"
              >
                Pengalaman
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  scrollToPortfolio.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }}
                className="text-black cursor-pointer"
              >
                Portfolio
              </a>
            </li>
          </ul>
        </ul>
      </nav>
      <div
        ref={scrollToProfile}
        className="bg-gray pt-[13vh] pb-10 flex gap-x-12 justify-center items-center px-[100px] md:gap-y-0 gap-y-12 md:px-[300px] flex-col md:flex-row"
      >
        <Image
          src="/stanly.png"
          width={300}
          height={300}
          alt="profile-picture"
          className="rounded-full"
        />
        <div className="text-black flex flex-col gap-y-2 text-center md:text-left">
          <p className="md:text-[16px] text-[14px]">Web & Mobile Developer</p>
          <p className="font-bold text-[25px] md:text-[45px]">
            Stanly Sukmajaya Kwok
          </p>
          <p className="md:text-[16px] text-[14px]">
            Hello, I&apos;m a full-stack Web, Mobile and Web3 Developer. I
            specialize in using React for Web Development, Flutter & React
            Native for Mobile development and React & Solidity for Web3
            Development. I use Node JS for backend development, and PostgreSQL
            as the database.
          </p>
          <div className="flex gap-x-3 mt-3 justify-center md:justify-start">
            <a
              href={`mailto:stanlyskwok@gmail.com`}
              target="_blank"
              className="p-3 bg-darkGray rounded-[10px] inline-block text-[20px] cursor-pointer"
            >
              <HiMail />
            </a>
            <a
              href="https://www.linkedin.com/in/stanly-kwok/"
              target="_blank"
              className="p-3 bg-darkGray rounded-[10px] inline-block text-[20px] cursor-pointer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://wa.me/6281357202812"
              target="_blank"
              className="p-3 bg-darkGray rounded-[10px] inline-block text-[20px] cursor-pointer"
            >
              <BsWhatsapp />
            </a>
            <a
              href="https://github.com/stanlys96"
              target="_blank"
              className="p-3 bg-darkGray rounded-[10px] inline-block text-[20px] cursor-pointer"
            >
              <BsGithub />
            </a>
          </div>
          <div className="flex gap-x-3 mt-3 justify-center md:justify-start">
            <a
              onClick={() => {
                scrollToPortfolio.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
              className="py-2 px-3 rounded-[10px] bg-black text-white cursor-pointer cursor-pointer inline-block flex gap-x-2 items-center"
            >
              <span>Portfolio</span>
              <BsArrowRight />
            </a>
            <a
              href="/stanly-sukmajaya.pdf"
              target="_blank"
              className="py-2 px-3 rounded-[10px] border border-black text-black cursor-pointer cursor-pointer inline-block flex gap-x-2 items-center"
            >
              <span>Download CV</span>
              <BsFillCloudArrowDownFill />
            </a>
          </div>
        </div>
      </div>
      <div ref={scrollToSkills} className="bg-white px-[100px] py-10">
        <p className="text-black text-center text-[30px] font-bold mb-4">
          SKILLS
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 items-center">
          {iconArray.map((icon, idx) => (
            <div
              key={idx}
              className="border border-gray px-10 py-5 flex justify-center items-center gap-x-5 flex-col lg:flex-row"
            >
              {icon}
              {idx === 6 && (
                <p className="text-black text-[18px] text-center lg:text-left">
                  React&nbsp;Native
                </p>
              )}
              {idx === 7 && <p className="text-black text-[18px]">Hardhat</p>}
            </div>
          ))}
        </div>
      </div>
      <div ref={scrollToExperience} className="bg-gray px-[100px] py-10">
        <p className="text-black text-center text-[30px] font-bold mb-4">
          EXPERIENCE
        </p>
        <p className="text-black text-left text-[20px] mb-4">Education</p>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="bg-white rounded-[10px] p-4 flex gap-x-2">
            <Unitec className="w-[80px] h-[80px]" />
            <div className="flex flex-col gap-y-1">
              <p className="text-black font-bold text-base md:text-[20px]">
                Unitec Institute of Technology
              </p>
              <p className="text-black text-sm md:text-base">2015 - 2019</p>
              <p className="text-black text-sm md:text-base">
                Bachelor of Business (Accounting)
              </p>
              <p className="text-black text-sm md:text-base">
                Auckland, New Zealand
              </p>
            </div>
          </div>
        </div>
        <p className="text-black text-left text-[20px] my-4">Work</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-white rounded-[10px] p-4">
            <div className="flex flex-col gap-y-1">
              <div className="flex justify-between">
                <div className="flex flex-col gap-y-1">
                  <p className="text-black font-bold text-base md:text-[20px]">
                    Metabase
                  </p>
                  <p className="text-black text-sm md:text-base">
                    Full Stack Developer
                  </p>
                  <p className="text-black text-sm md:text-base">
                    2023 - present
                  </p>
                  <p className="text-black text-sm md:text-base">
                    Responsibilities:
                  </p>
                </div>
                <div>
                  <img className="h-[80px]" src="/metabase.png" alt="flutter" />
                </div>
              </div>
              <ul className="list-disc px-4">
                <li className="text-black">
                  Developing and maintaining scalable and efficient frontend
                  architectures that support the development of high-quality web
                  or mobile applications.
                </li>
                <li className="text-black">
                  Collaborating with designers, developers, and stakeholders to
                  develop functional and intuitive user interfaces.
                </li>
                <li className="text-black">
                  Writing clean and maintainable code that is scalable,
                  efficient, and adheres to established coding standards.
                </li>
                <li className="text-black">
                  Troubleshooting and debugging code to ensure that web
                  applications work smoothly and efficiently.
                </li>
                <li className="text-black">
                  Managing and optimizing mobile application build processes,
                  including the use of task runners, bundlers, and
                  preprocessors.
                </li>
                <li className="text-black">
                  Integrating frontend code with backend systems, including APIs
                  and databases.
                </li>
                <li className="text-black">
                  Developing and maintaining decentralized applications (dApps)
                  on blockchain platforms.
                </li>
              </ul>
              <hr className="my-4" />
              <p className="text-black text-sm md:text-base">Tech Stacks:</p>
              <ul className="list-disc px-4 grid grid-cols-2 text-[12px] md:text-[16px] text-[12px] md:text-[16px]">
                <li className="text-black">React</li>
                <li className="text-black">React Native</li>
                <li className="text-black">Node JS</li>
                <li className="text-black">Adonis JS</li>
                <li className="text-black">PostgreSQL</li>
              </ul>
              <hr className="my-4" />
              <p className="text-black text-sm md:text-base">Applications:</p>
              <ul className="list-disc px-4 grid grid-cols-2 text-[12px] md:text-[16px]">
                <li className="text-black">Hyfen.gg</li>
                <li className="text-black">Hyfen Tools</li>
                <li className="text-black">Hyfen Play</li>
                <li className="text-black">Hyfen Pay</li>
                <li className="text-black">Hyfen Admin</li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-[10px] p-4 h-fit">
            <div className="flex flex-col gap-y-1">
              <div className="flex justify-between">
                <div className="flex flex-col gap-y-1">
                  <p className="text-black font-bold text-base md:text-[20px]">
                    Adira Finance
                  </p>
                  <p className="text-black text-sm md:text-base">
                    Flutter Developer
                  </p>
                  <p className="text-black text-sm md:text-base">2021 - 2022</p>
                  <p className="text-black text-sm md:text-base">
                    Responsibilities:
                  </p>
                </div>
                <div>
                  <img className="h-[80px]" src="/adira.png" alt="flutter" />
                </div>
              </div>
              <ul className="list-disc px-4">
                <li className="text-black">
                  Developing mobile apps and web applications for Adira&apos;s
                  internal use.
                </li>
                <li className="text-black">
                  Developing and maintaining scalable and efficient frontend
                  architectures that support the development of high-quality
                  mobile applications.
                </li>
                <li className="text-black">
                  Collaborating with designers, developers, and stakeholders to
                  develop functional and intuitive user interfaces.
                </li>
                <li className="text-black">
                  Writing clean and maintainable code that is scalable,
                  efficient, and adheres to established coding standards.
                </li>
                <li className="text-black">
                  Troubleshooting and debugging code to ensure that web or
                  mobile applications work smoothly and efficiently.
                </li>
                <li className="text-black">
                  Integrating frontend code with backend systems, including APIs
                  and databases.
                </li>
              </ul>
              <hr className="my-4" />
              <p className="text-black text-sm md:text-base">Tech Stacks:</p>
              <ul className="list-disc px-4 grid grid-cols-2 text-[12px] md:text-[16px]">
                <li className="text-black">Flutter</li>
                <li className="text-black">Vue JS</li>
                <li className="text-black">Java Springboot</li>
                <li className="text-black">PostgreSQL</li>
              </ul>
              <hr className="my-4" />
              <p className="text-black text-sm md:text-base">Applications:</p>
              <ul className="list-disc px-4 grid grid-cols-2 text-[12px] md:text-[16px]">
                <li className="text-black">Ad1Sales</li>
                <li className="text-black">Adira Web Admin</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div ref={scrollToPortfolio} className="bg-lightGray px-[100px] py-10">
        <p className="text-black text-center text-[30px] font-bold mb-4">
          PORTFOLIO
        </p>
        <div className="flex justify-center items-center gap-x-5 mb-5">
          <a
            onClick={() => setCategory("All")}
            className={`px-5 py-3 border ${
              category === "All"
                ? "border-darkBlue bg-darkBlue text-white"
                : "text-black"
            } rounded-[10px] cursor-pointer transition-all duration-300 hover:bg-darkBlue hover:text-white`}
          >
            <p>All</p>
          </a>
          <a
            onClick={() => setCategory("Website")}
            className={`px-5 py-3 border ${
              category === "Website"
                ? "border-darkBlue bg-darkBlue text-white"
                : "text-black"
            } rounded-[10px] cursor-pointer transition-all duration-300 hover:bg-darkBlue hover:text-white`}
          >
            <p>Website</p>
          </a>
          <a
            onClick={() => setCategory("Mobile")}
            className={`px-5 py-3 border ${
              category === "Mobile"
                ? "border-darkBlue bg-darkBlue text-white"
                : "text-black"
            } rounded-[10px] cursor-pointer transition-all duration-300 hover:bg-darkBlue hover:text-white`}
          >
            <p>Mobile&nbsp;Apps</p>
          </a>
          <a
            onClick={() => setCategory("Web3")}
            className={`px-5 py-3 border ${
              category === "Web3"
                ? "border-darkBlue bg-darkBlue text-white"
                : "text-black"
            } rounded-[10px] cursor-pointer transition-all duration-300 hover:bg-darkBlue hover:text-white`}
          >
            <p>Web3</p>
          </a>
        </div>
        <p className="text-black mb-5">Total: {filteredData.length} projects</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredData.map((portfolioData: any, idx: any) => (
            <PortfolioBox
              key={idx}
              id={portfolioData.id}
              img_url={portfolioData.img_url}
              name={portfolioData.name}
              categories={portfolioData.categories}
              description={portfolioData.description}
              stacks={portfolioData.stacks}
              status={portfolioData.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
