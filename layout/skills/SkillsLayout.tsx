"use client";
import { kuraUtilit } from "@/utility";
import { jarallax, jarallaxVideo } from "jarallax";
import Image from "next/image";
import { useEffect } from "react";

const frameworksLeft = [
  {
    label: "Typescript",
    logo: "/assets/img/logo/typescript.png",
  },
  {
    label: "Next.js",
    logo: "/assets/img/logo/next-js.svg",
  },
  {
    label: "React",
    logo: "/assets/img/logo/react2.svg",
  },
  {
    label: "AWS",
    logo: "/assets/img/logo/aws.svg",
  },
  {
    label: "Node.js",
    logo: "/assets/img/logo/node.svg",
  },
  {
    label: "Rails",
    logo: "/assets/img/logo/rails.svg",
  },
]

const frameworksRight = [
  {
    label: "Python",
    logo: "/assets/img/logo/python.svg",
  },
  {
    label: "Django",
    logo: "/assets/img/logo/django.svg",
  },
  {
    label: "Android",
    logo: "/assets/img/logo/android.svg",
  },
  {
    label: "Kotlin",
    logo: "/assets/img/logo/kotlin.svg",
  },
  {
    label: "MySQL",
    logo: "/assets/img/logo/mysql.svg",
  },
  {
    label: "PostgreSQL",
    logo: "/assets/img/logo/postgres.svg",
  }
]

const Skills = () => {
  useEffect(() => {
    kuraUtilit.activeSkillProgress();
  }, []);

  useEffect(() => {
    jarallaxVideo();
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
      videoSrc: "https://www.youtube.com/watch?v=hmctonVSGZA",
    });
  });

  return (
    <div
      className="kura_tm_section w-full h-auto clear-both float-left"
      id="skills"
    >
      <div className="kura_tm_skills w-full h-auto clear-both float-left relative px-0 pt-[140px] pb-[150px]">
        <div className="container">
          <div className="skills_inner w-full h-auto clear-both float-left relative z-[3]">
            <div className="left w-[60%] pr-[200px]">
              <div className="kura_tm_main_title w-full h-auto clear-both float-left">
                <span className="inline-block mb-[10px] text-secondary-color font-poppins font-medium">
                  Skills
                </span>
                <h3 className="font-extrabold uppercase text-white">
                  Languages and Frameworks
                </h3>
              </div>
              <div
                className="text w-full float-left mt-[40px] mb-[44px] wow fadeInUp"
                data-wow-duration=".7s"
              >
                <p className="text-[#bbb]">
                  Over the years, I've worked with a variety of languages and frameworks. Here are some I'm using now or recently.
                </p>
              </div>
              <div className="w-full h-auto overflow-auto clear-both float-left relative mb-[30px]">
                <div className="float-left">
                  {frameworksLeft.map((framework) => {
                    return (
                      <div
                        key={`frameworks_${framework.label}`}
                      className="mb-[10px] wow fadeInUp"
                      >
                        <div className="list_inner flex items-center">
                          <div className="logo">
                            <Image
                              className="w-[50px] h-[50px] object-contain"
                              src={framework.logo}
                              width={60}
                              height={60}
                              alt=""
                            />
                          </div>
                          <div className="title pr-[30px] ml-[20px]">
                            <span className="text-[18px] text-white font-poppins transition-all duration-300">
                              {framework.label}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                    
                  })}
                </div>
                <div className="float-right">
                  {frameworksRight.map((framework) => {
                    return (
                      <div
                        key={`frameworks_${framework.label}`}
                      className="mb-[10px] wow fadeInUp"
                      >
                        <div className="list_inner flex items-center">
                          <div className="logo">
                            <Image
                              className="w-[50px] h-[50px] object-contain"
                              src={framework.logo}
                              width={60}
                              height={60}
                              alt=""
                            />
                          </div>
                          <div className="title pr-[30px] ml-[20px]">
                            <span className="text-[18px] text-white font-poppins transition-all duration-300">
                              {framework.label}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* <div
                className="dodo_progress wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".2s"
              >
                <div className="progress_inner" data-value={95}>
                  <span>
                    <span className="label">HTML &amp; CSS</span>
                    <span className="number">95%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value={80}>
                  <span>
                    <span className="label">JavaScript</span>
                    <span className="number">80%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value={0}>
                  <span>
                    <span className="label">WordPress</span>
                    <span className="number">90%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div
              className="right w-[40%] absolute right-0 top-0 bottom-[-220px] overflow-hidden"
              data-background-style="image"
            >
              {" "}
              {/* Background Styles: "video" and "image" // Also you can use any youtube, vimeo, and local videos */}
              <div
                className="my_video absolute inset-0 jarallax"
                data-speed={0}
                data-jarallax-video="https://www.youtube.com/watch?v=hmctonVSGZA"
              />
              <div
                className="my_image absolute inset-0 bg-no-repeat bg-cover bg-center jarallax"
                data-speed={0}
                data-img-url="assets/img/portfolio/2.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
