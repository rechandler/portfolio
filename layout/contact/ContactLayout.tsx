const Contact = () => {
  return (
    <div
      className="kura_tm_section w-full h-auto clear-both float-left"
      id="contact"
    >
      <div className="kura_tm_contact w-full h-auto clear-both float-left bg-[#f9f9f9] px-0 pt-[140px] pb-[119px]">
        <div className="container">
          <div className="kura_tm_main_title w-full h-auto clear-both float-left">
            <span className="inline-block mb-[10px] text-secondary-color font-poppins font-medium">
              Contact
            </span>
            <h3 className="font-extrabold uppercase">Get in Touch</h3>
          </div>
          <div className="contact_inner w-full h-auto clear-both float-left mt-[40px] flex">
            <div
              className="left w-1/2 pr-[100px] wow fadeInUp"
              data-wow-duration=".7s"
            >
              <div className="text w-full float-left mb-[42px]">
                <p>
                  Please feel free to add me as a contact on linkedin, or send me an email. 
                  I'm always open to networking.
                </p>
              </div>
              <div className="short w-full float-left">
                <ul>
                  <li className="mb-[23px] w-full float-left">
                    <div className="list_inner w-full h-auto clear-both float-left relative pl-[30px]">
                      {/* If you want to change or add any svg icons you can download here for free www.flaticon.com */}
                      <img
                        className="svg absolute left-0 w-[18px] h-[18px] top-1/2 mt-[-1px] translate-y-[-50%] text-secondary-color"
                        src="assets/img/svg/placeholder.svg"
                        alt=""
                      />
                      <span className="text-[18px] text-black font-poppins">
                        Nashville, TN
                      </span>
                    </div>
                  </li>
                 
                  <li className="mb-[23px] w-full float-left">
                    <div className="list_inner w-full h-auto clear-both float-left relative pl-[30px]">
                      <a href="mailto:ryann.chandler@gmail.com" target="_blank">
                        <img
                          className="svg absolute left-0 w-[18px] h-[18px] top-1/2 mt-[-1px] translate-y-[-50%] text-secondary-color"
                          src="assets/img/svg/mail.svg"
                          alt=""
                        />
                        <span className="text-[18px] text-black font-poppins">
                          Send me an email
                        </span>
                      </a>

                    </div>
                  </li>
                  <li className="mb-[23px] w-full float-left">
                    <div className="list_inner w-full h-auto clear-both float-left relative pl-[30px]">
                      <img
                        className="svg absolute left-0 w-[22px] h-[22px] top-1/2 mt-[-1px] translate-y-[-50%] text-secondary-color"
                        src="assets/img/logo/linkedin.svg"
                        alt=""
                      />
                      <span className="text-[18px] text-black font-poppins">
                        Find me on LinkedIn
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="right w-1/2 pl-[100px] wow fadeInUp"
              data-wow-duration=".7s"
            >
              <h3 className="font-extrabold uppercase">Powered By</h3>
              <div className="fields w-full h-auto float-left">
                <div className="list_inner pt-4 w-full h-auto clear-both float-left relative grid gap-4 grid-cols-3 ">
                  <img
                      className="svg left-0 w-full h-[80px] top-1/2 mt-[-1px] text-secondary-color"
                      src="assets/img/logo/nextjs-2.svg"
                      alt=""
                    />
                    <img
                      className="svg left-0 w-full h-[200px] top-1/2 mt-[-1px] translate-y-[-30%] text-secondary-color"
                      src="assets/img/logo/sanity.svg"
                      alt=""
                    />
                  <img
                      className="svg left-0 w-full h-[200px] top-1/2 mt-[-1px] translate-y-[-30%] text-secondary-color"
                      src="assets/img/logo/vercel.svg"
                      alt=""
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
