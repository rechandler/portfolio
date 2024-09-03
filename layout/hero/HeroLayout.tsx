"use server";
import Image from 'next/image'
import { PortableText } from "next-sanity";
import { SettingsQueryResult } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/utils";

const Hero = (
  {settings}: {settings: SettingsQueryResult}) => {

  const myImage = urlForImage(settings?.picture);
  return (
    <div
      className="kura_tm_section w-full h-auto clear-both float-left"
      id="home"
    >
      <div className="kura_tm_hero w-full min-h-[100vh] float-left clear-both bg-[#f9f9f9]">
        <div className="container min-h-full">
          <div className="content w-full min-h-[100vh] flex items-center relative">
            <div className="left w-1/2 pr-[50px] relative opacity-0 invisible top-[20px] transition-all duration-[400ms]">
              <span className="name text-[45px] inline-block mb-[16px] text-secondary-color font-poppins font-medium">
                {settings?.title}
              </span>
              <h3 className="job leading-[1.4] uppercase mb-[25px]">
                <PortableText
                  value={settings?.description?.length ? settings.description : []}
                />
              </h3>
              <div className="short_info w-full h-auto clear-both float-left">
                <ul>
                  <li className="mr-[50px] mb-[15px] py-0 inline-block">
                    <div className="list_inner flex items-center">
                      <h3 className="text-[45px] font-semibold">{settings?.yearsOfExperience}</h3>
                      <span className="font-poppins pl-[15px] inline-block leading-[1.4] relative top-[-3px] text-[14px]">
                        Years of
                        <br />
                        Experience
                      </span>
                    </div>
                  </li>
                  <li className="mb-[15px] py-0 inline-block">
                    <div className="list_inner flex items-center">
                      <h3 className="text-[45px] font-semibold">{"</>"}</h3>
                      <span className="font-poppins pl-[15px] inline-block leading-[1.4] relative top-[-3px] text-[20px]">
                        Javascript, Typescript
                        <br />
                        Ruby, Python
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="services w-full h-auto clear-both float-left mt-[35px] mb-[35px]">
                <PortableText value={settings?.aboutMe? settings.aboutMe : []} />
              </div>
            </div>
            <div className="right w-1/2 text-right pl-[200px] relative opacity-0 invisible top-[20px] transition-all duration-[400ms]">
              <div className="image relative">
                {myImage && <Image
                  className="min-w-full relative opacity-0"
                  width="500"
                  height="500"
                  src={myImage?.url()}
                  alt=""
                />}
                <div
                  className="main drop-shadow-lg absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-[400ms]"
                  data-img-url={myImage?.url()}
                />
                <div className="shape drop-shadow-md" />
              </div>
            </div>
            <div className="down anchor">
              <a href="#posts">
                <img
                  className="svg"
                  src="assets/img/svg/down-arrow.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
