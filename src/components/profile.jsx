import React from "react";

export default function Profile() {
  return (
    <div id="profile" className="section">
      <div className="container mx-auto max-w-[1200px] p-3 overflow-hidden">
        <div
          className="font-secondary text-center font-bold b-12"
          data-aos="fade-down-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="800"
          data-aos-delay="0"
        >
          <h4 className="text-secondary  mb-3 text-[20px]">My Skill</h4>
          <h2 className="text-gradient font-primary max-w-[750px] mx-auto  text-[24px]">
            These are the skills I have mastered for web application development
            using various technologies.
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-between mt-10">
          <div
            className="text-center w-full max-w-[250px] mx-auto mb-[50px]"
            data-aos="fade-up-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
            data-aos-delay="0"
          >
            <h2 className="text-gradient text-[30px] mt-20px ml-10">
              Egin Tia Yulanda
            </h2>
            <div className="min-w-[300px] min-h-[300px] bg-gradient pt-[50px] rounded-full overflow-hidden ">
              <img src="/images/profile.png" alt="" />
            </div>
          </div>
          <div
            className="w-full lg:pt-[50px] lg:ml-16"
            data-aos="fade-up-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
            data-aos-delay="0"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                    alt="React Logo"
                  />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">React</h4>
                      </div>
                      <p className="text-[12px]">
                        A modern JavaScript framework for building dynamic and
                        responsive user interfaces.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png"
                    alt="React Logo"
                    className="w-full h-auto"
                  />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">Laravel</h4>
                      </div>
                      <p className="text-[12px]">
                        A PHP framework designed to simplify backend development
                        and create robust web applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
                    alt="React Logo"
                    className="w-full h-auto"
                  />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">Tailwind</h4>
                      </div>
                      <p className="text-[12px]">
                        A utility-first CSS framework for creating fast,
                        scalable, and responsive designs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"
                    alt="React Logo"
                    className="w-full h-auto"
                  />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">Bootstrap</h4>
                      </div>
                      <p className="text-[12px]">
                        A popular CSS framework for building responsive,
                        mobile-first websites.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img
                    src="https://seeklogo.com/images/H/html5-without-wordmark-color-logo-14D252D878-seeklogo.com.png"
                    alt="React Logo"
                    className="w-full h-auto"
                  />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">HTML</h4>
                      </div>
                      <p className="text-[12px]">
                        The backbone of every web page, providing structure and
                        semantic meaning to web content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
