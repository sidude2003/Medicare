import React from "react";
import heroImg01 from "../assets/Images/hero-img01.png";
import heroImg02 from "../assets/Images/hero-img02.png";
import heroImg03 from "../assets/Images/hero-img03.png";
import icon01 from "../assets/Images/icon01.png";
import icon02 from "../assets/Images/icon02.png";
import icon03 from "../assets/Images/icon03.png";
import { Link } from "react-router-dom";
import AboutUs from "../Components/About/AboutUs";
import ServiceList from "../Components/Services/ServiceList";
import DoctorsList from "../Components/Doctors/DoctorsList";

const Home = () => {
  return (
    <>
      <section className="hero__section pt-[60px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-bold md:text-[60px] md:leading-[70px]">
                  We Help Patients Live a Healthy and Long Life!
                </h1>
                <p className="leading-7 mt-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sequi reprehenderit modi alias nulla at repudiandae fuga,
                  perferendis neque assumenda dolorum. Laboriosam, non autem
                  aliquam quas recusandae animi est incidunt impedit.
                </p>
                <Link to="/appointments">
                  <button className="bg-primaryColor transition ease-in-out delay-110 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white py-2 px-6 font-[600] rounded-[50px] mt-4">
                    Request Appointment
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex gap-[30px] justify-end">
              <div>
                <img
                  className="w-full rounded-3xl shadow-2xl shadow-black bg-blend-normal"
                  src={heroImg01}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-full mb-[30px] shadow-2xl shadow-black rounded-3xl"
                  src={heroImg02}
                  alt=""
                />
                <img
                  className="w-full shadow-2xl shadow-black rounded-3xl"
                  src={heroImg03}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h1 className="heading text-center">
              We Provide the Best Medical Services
            </h1>
            <p className="text__para text-center">
              World class care for everyone, our services are unmatched.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700px] text-center">
                  Find a Doctor
                </h2>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-irisBlueColor hover:border-none"
                >
                  Go
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700px] text-center">
                  Find a Location
                </h2>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-irisBlueColor hover:border-none"
                >
                  Go
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700px] text-center">
                  Book Appointment
                </h2>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-irisBlueColor hover:border-none"
                >
                  Go
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutUs />
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text__para">
              World-class care for everyone. Our health system offers umatched
              services.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Amazing Doctors</h2>
            <p className="text__para">
              World-class care for everyone. Our health system offers umatched
              services.
            </p>
          </div>
        </div>
        <DoctorsList />
      </section>
    </>
  );
};

export default Home;
