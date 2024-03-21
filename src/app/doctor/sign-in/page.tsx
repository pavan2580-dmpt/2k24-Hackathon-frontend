"use client";
import Image from "next/image";
import DoctorImage from "../assests/WhatsApp Image 2024-03-15 at 15.05.02_f4863e44.jpg";
import { CgMail } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import { SubmitHandler, useForm } from "react-hook-form";

interface Login {
  email: string;
  password: string;
}

function DoctorSignin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();

  const onSubmit: SubmitHandler<Login> = async (data) => {
    try {
      console.log(data);
      localStorage.setItem("DoctorData", data.email);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        className="Doctor-page-main-container-signup-page w-full h-[100vh] bg-gradient-to-r from-[#45DDBB] 
      to-[#18CBE0] flex justify-center items-center"
      >
        <div className="Doctor-sign-in-from-area w-[80%] h-[80vh] bg-white rounded-[20px] flex flex-wrap overflow-hidden">
          <div className="Doctor-from-area-inputs w-full h-[100%] p-10  box-border flex flex-col items-center justify-center lg:w-[50%] lg:h-[100%">
            <h1 className="text-[20px] xl:text-[35px] xl:font-bold text-center">
              The guesswork when it comes your health{" "}
            </h1>
            <p className="text-gray-500 mt-6 text-center">
              Welcome back ,please login to your acoount
            </p>

            <form onClick={handleSubmit(onSubmit)}>
              <div className="email w-[250px] h-[50px] bg-sky-100 ml-5 rounded-md  mt-[20px] flex justify-center items-center lg:w-[300px]">
                <CgMail className="text-sky-500 text-2xl  " />
                <input
                  type="email"
                  id="email"
                  className=" bg-transparent outline-none lg:w-[250px]"
                  placeholder="Email"
                  {...register("email", { required: "Email is required *" })}
                />
              </div>
              {errors.email && (
                <p className="text-red-400 ml-5">{errors.email.message}</p>
              )}
              {/* password */}
              <div className="email w-[250px] h-[50px] bg-sky-100 ml-5 rounded-md  mt-[20px] flex justify-center items-center lg:w-[300px]">
                <RiLockPasswordLine className="text-sky-500 text-2xl" />
                <input
                  type="password"
                  id="password"
                  className="bg-transparent outline-none lg:w-[250px] "
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required *",
                  })}
                />
              </div>
              {errors.password && (
                <p className="text-red-400 ml-5">{errors.password.message}</p>
              )}
              <p className="text-blue-600 mt-[14px] md:ml-6 lg:ml-6">
                Forgot Password?
              </p>
              <center>
                <button
                  type="submit"
                  className=" bg-gradient-to-r from-[#45DDBB]  to-[#18CBE0] w-[250px] h-[40px] text-xl text-white rounded-md mt-[15px] lg:w-[300px]"
                >
                  Login
                </button>
              </center>
            </form>
          </div>
          {/* image */}
          <div className="Doctor-from-area-image overflow-hidden flex justify-center items-center md:w-[50%] md:h-[100%] md:p-2 box-border ">
            <Image
              src={DoctorImage}
              alt="doctor image"
              width={500}
              className="rounded-[20px] "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorSignin;
