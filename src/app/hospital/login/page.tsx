"use client";
import Image from "next/image";
import DoctorImage from "../assets/hand-drawn-doctor-cartoon-illustration_23-2150680327-removebg-preview.png";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { redirect } from "next/navigation";
interface Login {
  hospitalId: string;
  password: string;
}
function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();

  const onSubmit: SubmitHandler<Login> = async (data) => {
    try {
      // console.log(data);
      const resp = await axios.post(
        "http://localhost:5000/auth/hospital/login",
        {
          hospitalId: data.hospitalId,
          password: data.password,
        }
      );

      if (resp.data.message === "invalid hospital id") {
        toast("Invalid Hospital Id");
      } else if (resp.data.message === "password doesnot match") {
        toast("password does not match");
      } else {
        // push to other page---
        console.log(resp);
        const data = JSON.stringify(resp.data);
        localStorage.setItem("details_all", data);
        toast("Logined successful");
        redirect("hospital");
      }

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("HospitalId", data.hospitalId);
    } catch (error: any) {
      console.log(error.data);
    }
  };

  return (
    <>
      <div className="Hosplital-login-main-container bg-gray-200 w-[100%] h-[100vh] flex justify-center items-center">
        <Toaster />
        <div className="Hosplitail-container w-[80%] h-[80vh] 2xl:w-[50%] bg-white rounded-xl flex justify-center items-center">
          <div className="Hospital-form w-fit h-fit flex flex-col items-center">
            <h1 className="text-2xl font-bold lg:text-[35px]">Welcome back</h1>
            <p className="text-gray-400 text-center mt-5 w-[300px]">
              Welcome back! Please enter your details
            </p>

            <form onClick={handleSubmit(onSubmit)}>
              <div className="hospital_id mt-5">
                <label htmlFor="hospitalId">Hospital Id:</label>
                <br />
                <input
                  type="text"
                  id="hospitalId"
                  className="border-2 border-soild border-gray-500 rounded-sm h-[35px] w-[250px] px-2 box-border mt-2  lg:w-[300px]"
                  placeholder="Hospital Id"
                  {...register("hospitalId", {
                    required: "Hospital Id is required *",
                  })}
                />
                {errors.hospitalId && (
                  <p className="text-red-400 ">{errors.hospitalId.message}</p>
                )}
              </div>
              <div className="pass_input mt-5 mb-5">
                <label htmlFor="Hospital_password">Password:</label>
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "*Password is required *",
                  })}
                  className="border-2 border-soild border-gray-500 rounded-sm h-[35px] w-[250px] px-2 box-border mt-2
                lg:w-[300px]
                "
                  id="Hospital_password"
                />
                {errors.password && (
                  <p className="text-red-400 ">{errors.password.message}</p>
                )}
              </div>
              <p className="text-blue-400 cursor-pointer">Forgot Password?</p>
              <p>
                Don't have account ?
                <Link href="sign-up" className="text-blue-400 cursor-pointer">
                  Sign-Up
                </Link>
              </p>
              <button className="bg-blue-400 w-[250px] text-xl text-white rounded-sm mt-5 mb-3 py-1">
                Sign in
              </button>
            </form>
          </div>
          <div className="doctor_image sm:w-[50%] lg:w-[55%] sm:h-[100%] sm:flex sm:items-center sm:justify-center hidden">
            <Image
              src={DoctorImage}
              alt="Doctor image"
              className="w-fit h-fit lg:w-[100%] "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
