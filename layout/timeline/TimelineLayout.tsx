const TimeLine = () => {
  return (
    <div
      className="kura_tm_section w-full h-auto clear-both float-left"
      id="timeline"
    >
      <div className="kura_tm_timeline w-full h-auto clear-both float-left px-0 pt-[140px] pb-[113px]">
        <div className="container">
          <div className="kura_tm_main_title w-full h-auto clear-both float-left">
            <span className="inline-block mb-[10px] text-secondary-color font-poppins font-medium">
              Timeline
            </span>
            <h3 className="font-extrabold uppercase">Working History</h3>
          </div>
          <div className="timeline_list w-full h-auto clear-both float-left pt-[54px]">
            <ul>
              <li
                className="w-full float-left px-0 pt-[27px] pb-[30px] wow fadeInUp"
                data-wow-duration=".7s"
              >
                <div className="list_inner w-1/3 float-left pr-[40px]">
                  <span className="inline-block text-[18px]">
                    March, 2024 - Present
                  </span>
                  <br />
                  <span className="inline-block text-[18px]">
                    November, 2022 - March, 2024
                  </span>
                </div>
                <div className="list_inner w-1/3 float-left pr-[40px]">
                  <span className="inline-block text-[18px] text-black">
                    Staff Engineer
                  </span>
                  <span className="block text-[18px] text-black">
                    Sr. Software Engineer
                  </span>
                </div>
                <div className="list_inner w-1/3 float-left">
                  <span className="inline-block text-[18px]">
                    Eventbrite
                  </span>
                </div>
              </li>
              <li
                className="w-full float-left px-0 pt-[27px] pb-[30px] wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".4s"
              >
                <div className="list_inner w-1/3 float-left pr-[40px]">
                  <span className="inline-block text-[18px]">
                    June, 2018 - October, 2022
                  </span>
                </div>
                <div className="list_inner w-1/3 float-left pr-[40px]">
                  <span className="inline-block text-[18px] text-black">
                    Sr. Software Engineer
                  </span>
                </div>
                <div className="list_inner w-1/3 float-left">
                  <span className="inline-block text-[18px]">
                    VitalSource
                  </span>
                </div>
              </li>
              <li
                className="w-full float-left px-0 pt-[27px] pb-[30px] wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".6s"
              >
                <div className="list_inner w-1/3 float-left pr-[40px]">
                  <span className="inline-block text-[18px]">
                    April, 2017 - June 2018
                  </span>
                  <br />
                  <span className="inline-block text-[18px]">
                    June, 2015 - April, 2017
                  </span>
                </div>
                <div className="list_inner w-1/3 float-left pr-[40px]">
                  <span className="inline-block text-[18px] text-black">
                    Team Lead
                  </span>
                  <span className="block text-[18px] text-black">
                    Software Development Consultant
                  </span>
                </div>
                <div className="list_inner w-1/3 float-left">
                  <span className="inline-block text-[18px]">
                    Decision Source
                  </span>
                </div>
              </li>
              <li
                className="w-full float-left px-0 pt-[27px] pb-[30px] wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".8s"
              >
                <div className="list_inner w-1/3 float-left pr-[40px]">
                  <span className="inline-block text-[18px]">
                    December, 2013 - Jan 2015
                  </span>
                </div>
                <div className="list_inner w-1/3 float-left pr-[40px]">
                  <span className="inline-block text-[18px] text-black">
                    Intern Software Developer
                  </span>
                </div>
                <div className="list_inner w-1/3 float-left">
                  <span className="inline-block text-[18px]">
                    Vanderbilt Department of Biomedical Informatics
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimeLine;
