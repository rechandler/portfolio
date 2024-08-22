const Priceing = () => {
  return (
    <div
      className="kura_tm_section w-full h-auto clear-both float-left"
      id="accomplishments"
    >
      <div className="kura_tm_pricing w-full h-auto clear-both float-left px-0 pt-[80px] pb-[150px] bg-[#f9f9f9]">
        <div className="container">
          <div className="pricing_inner w-full h-auto clear-both flex">
            <div className="left w-1/2 pr-[100px]">
              <div className="kura_tm_sticky_section">
                <div className="kura_tm_main_title w-full h-auto clear-both float-left mt-[58px]">
                  <span className="inline-block mb-[10px] text-secondary-color font-poppins font-medium">
                    Accomplishments
                  </span>
                  <h3 className="font-extrabold uppercase">Work I'm proud of</h3>
                </div>
                <div className="text w-full float-left pt-[40px]">
                  <p>
                    I've had the privaledge of working on some amazing projects with some amazing people. 
                    Here are a few of the things I've accomplished in my career.
                  </p>
                </div>
                <div className="text w-full float-left pt-[40px]">
                  <p>
                    Eventbrite has exposed me to working at a massive and global scale, and has provided me opportunities 
                    to work on a variety of projects, mentor engineers, be a mentee, research new technologies, and implement 
                    new services and features.
                  </p>
                </div>
                <div className="text w-full float-left pt-[40px]">
                  <p>
                    Leading the creation of the Verification Service at Eventbrite allowed me to introduce my team to Typescript 
                    while building a serverless service from the ground up using SST framework, AWS lambdas, DynamoDB, Api Gateway,
                    Lambda Authorizers, and Twilio.
                  </p>
                </div>
              </div>
            </div>
            <div className="right w-1/2 pl-[100px]">
              <div className="kura_tm_sticky_section">
                <ul className="mt-[58px]">
                  <li
                    className="w-full float-left mb-[30px] wow fadeInUp"
                    data-wow-duration=".7s"
                  >
                    <div className="list_inner w-full h-auto clear-both flex justify-between items-center relative py-[30px] pr-[30px] pl-[60px] bg-white rounded-[10px] transition-all duration-300">
                      <div className="title pr-[30px]">
                        <span className="text-[18px] text-black font-poppins transition-all duration-300">
                          Helped plan and lead the implementation of Auth0 from Eventbrite's own authentication system.
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    className="w-full float-left mb-[30px] wow fadeInUp"
                    data-wow-duration=".7s"
                    data-wow-delay=".2s"
                  >
                    <div className="list_inner w-full h-auto clear-both flex justify-between items-center relative py-[30px] pr-[30px] pl-[60px] bg-white rounded-[10px] transition-all duration-300">
                      <div className="title pr-[30px]">
                        <span className="text-[18px] text-black font-poppins transition-all duration-300">
                          Designed, planned, and implemented a serverless service to allow users to SMS authenticate into Eventbrite.
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    className="w-full float-left mb-[30px] wow fadeInUp"
                    data-wow-duration=".7s"
                    data-wow-delay=".4s"
                  >
                    <div className="list_inner w-full h-auto clear-both flex justify-between items-center relative py-[30px] pr-[30px] pl-[60px] bg-white rounded-[10px] transition-all duration-300">
                      <div className="title pr-[30px]">
                        <span className="text-[18px] text-black font-poppins transition-all duration-300">
                          Learned Android and took over responsibilities of implementing new UI designes for all Identity team flows.
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    className="w-full float-left mb-[30px] wow fadeInUp"
                    data-wow-duration=".7s"
                    data-wow-delay=".6s"
                  >
                    <div className="list_inner w-full h-auto clear-both flex justify-between items-center relative py-[30px] pr-[30px] pl-[60px] bg-white rounded-[10px] transition-all duration-300">
                      <div className="title pr-[30px]">
                        <span className="text-[18px] text-black font-poppins transition-all duration-300">
                          Implemented Auth0 authentication for the Eventbrite Android app.
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    className="w-full float-left wow fadeInUp"
                    data-wow-duration=".7s"
                    data-wow-delay=".8s"
                  >
                    <div className="list_inner w-full h-auto clear-both flex justify-between items-center relative py-[30px] pr-[30px] pl-[60px] bg-white rounded-[10px] transition-all duration-300">
                      <div className="title pr-[30px]">
                        <span className="text-[18px] text-black font-poppins transition-all duration-300">
                        Planned and implemented the upgrade of legacy Backbone.js systems to React at Intrepid by VitalSource.
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Priceing;
