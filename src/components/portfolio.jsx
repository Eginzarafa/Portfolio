import React from "react";

export default function Portfolio() {
  return (
    <div id="portfolio" className="section mt-20">
      <div className="container mx-auto max-w-[1200px] p-3 pt-3 pb-20 overflow-hidden">
        <div className="font-secondary  font-bold b-12">
          <h4 className="text-secondary  mb-3 text-[40px]">My Project</h4>
          <h2 className="text-gradient font-primary  mx-auto  text-[20px]">
            These are the skills I have mastered for web application development
            using various technologies.
          </h2>
        </div>
        <div className="w-full lg:pt-50px] lg:ml-0 mt-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-center">
            <div
              className="w-full"
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="800"
              data-aos-delay="0"
            >
              <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                <img src="/images/emovie.png" alt="" />
                <div className="absolute p-5 bg-primary w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition ease-linear">
                  <div className="text-center w-full text-white mt-[-60px] group-hover:mt-0 transition-all">
                    <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                      <h4 className="text-gradient">E-Movie</h4>
                    </div>
                    <p className="text-[12px]">
                      Project Website Film yang dibuat menggunakan ReactJs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-full"
              data-aos="fade-left"
              data-aos-easing="ease-in-sine"
              data-aos-duration="800"
              data-aos-delay="0"
            >
              <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                <img src="/images/lokasani.png" alt="" />
                <div className="absolute p-5 bg-primary w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition ease-linear">
                  <div className="text-center w-full text-white mt-[-60px] group-hover:mt-0 transition-all">
                    <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                      <h4 className="text-gradient">LokaSani</h4>
                    </div>
                    <p className="text-[12px]">
                      LokaSani merupakan website Pameran UMKM yang dibuat
                      menggunakan ReactJs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-full"
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="800"
              data-aos-delay="0"
            >
              <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                <img src="/images/dataexpress.png" alt="" />
                <div className="absolute p-5 bg-primary w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition ease-linear">
                  <div className="text-center w-full text-white mt-[-60px] group-hover:mt-0 transition-all">
                    <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                      <h4 className="text-gradient">Si Data Express</h4>
                    </div>
                    <p className="text-[12px]">
                      Si Data Express merupakan website dokumen audit PT.Pupuk
                      Sriwidjaja Palembang sebagai syarat penyelesaian
                      interntship menggunakan ReactJs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-full"
              data-aos="fade-left"
              data-aos-easing="ease-in-sine"
              data-aos-duration="800"
              data-aos-delay="0"
            >
              <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                <img src="/images/fdc.png" alt="" />
                <div className="absolute p-5 bg-primary w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition ease-linear">
                  <div className="text-center w-full text-white mt-[-60px] group-hover:mt-0 transition-all">
                    <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                      <h4 className="text-gradient">Web Klinik FDC</h4>
                    </div>
                    <p className="text-[12px]">
                      Web Klinik FDC merupakan website sistem pendaftaran dan
                      rekap data pasien sebagai studi kasus Laporan tugas Akhir
                      dibuat menggunakan Framework Laravel
                    </p>
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
