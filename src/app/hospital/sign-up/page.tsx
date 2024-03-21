"use client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "@/app/globals.css";
import Image from "next/image";
import Imagges from "../assets/3d-business-female-doctor-and-male-doctor-standing-together.png";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
interface Register {
  name: string;
  password: string;
  email: string;
  phone: number;
  state: string;
  city: string;
  street: string;
  country: string;
  pinecode: number;
  hospitalId: string;
}

function page() {
  const route = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Register>();

  const [Loader, SetLoader] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Register> = async (data) => {
    try {
      console.log(data);
      const response = await axios.post(
        "http://localhost:5000/auth/hospital/signup",
        {
          name: data.name,
          hospitalId: data.hospitalId,
          email: data.email,
          phone: data.phone,
          password: data.password,
          address: {
            country: data.country,
            state: data.state,
            city: data.city,
            pincode: data.pinecode,
            street: data.street,
          },
        }
      );
      if (response.status === 201) {
        route.push("/hospital/login");
      }
      SetLoader(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className="Hospital_sign-up-main-container  w-[100%] h-auto sm:h-[100vh] flex sm:justify-center sm:p-5 box-border
    sm:items-center
     bg-gradient-to-r from-emerald-400 to-cyan-500 p-10 rounded-md"
      >
        <div className="flex gap-4 w-full max-w-[900px] bg-white border max-h-[600px] rounded-md">
          <form
            className="p-4 w-full md:w-[50%] md:pl-10 max-h-[650px] overflow-scroll no-scrollbar"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-2xl text-center mb-4 font-semibold">Sign Up</h1>
            <div className="w-full">
              <label htmlFor="name">Hospital Name :</label>
              <br />
              <input
                type="text"
                id="name"
                placeholder="Hospital Name"
                className="p-2 border border-gray-300 rounded-md w-full mb-5"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-400 ">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="Id">Hospital Id :</label>
              <br />
              <input
                type="text"
                id="Id"
                placeholder="Hospital Id"
                className="p-2 border border-gray-300 rounded-md w-full mb-5 "
                {...register("hospitalId", { required: "Name is hospital Id" })}
              />
              {errors.hospitalId && (
                <p className="text-red-400 ">{errors.hospitalId.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email">Hospital Email :</label>
              <br />
              <input
                type="Email"
                id="email"
                placeholder="Hospital Email"
                className="p-2 border border-gray-300 rounded-md w-full mb-5 "
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-400 ">{errors.email.message}</p>
              )}
            </div>

            <div className="phone">
              <label htmlFor="pho">Hospital Phone Number :</label>
              <br />
              <input
                type="tel"
                id="pho"
                placeholder="Hospital Phone Number"
                className="p-2 border border-gray-300 rounded-md w-full mb-5 "
                {...register("phone", { required: "phone number is required" })}
              />
              {errors.phone && (
                <p className="text-red-400 ">{errors.phone.message}</p>
              )}
            </div>

            <div className="pass">
              <label htmlFor="pho">Password :</label>
              <br />
              <input
                type="password"
                id="pass"
                placeholder="password"
                className="p-2 border border-gray-300 rounded-md w-full mb-5 "
                {...register("password", { required: "password is required" })}
              />
              {errors.password && (
                <p className="text-red-400 ">{errors.password.message}</p>
              )}
            </div>

            {/* -------------------address---------------- */}

            <div>
              <label htmlFor="Country">Country :</label>
              <br />
              <input
                type="text"
                id="Country"
                placeholder="Country "
                className="p-2 border border-gray-300 rounded-md w-full mb-5 "
                {...register("country", { required: "country is required" })}
              />
              {errors.country && (
                <p className="text-red-400 ">{errors.country.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="State">State :</label>
              <br />
              <input
                type="text"
                id="State"
                placeholder="Hospital State"
                className="p-2 border border-gray-300 rounded-md w-full mb-5 "
                {...register("state", { required: "state is required" })}
              />
              {errors.state && (
                <p className="text-red-400 ">{errors.state.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="City">City :</label>
              <br />
              <input
                type="text"
                id="City"
                placeholder="City"
                className="p-2 border border-gray-300 rounded-md w-full mb-5 "
                {...register("city", { required: "city is required" })}
              />
              {errors.city && (
                <p className="text-red-400 ">{errors.city.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="Street">Street :</label>
              <br />
              <input
                type="text"
                id="Street"
                placeholder="Street"
                className="p-2 border border-gray-300 rounded-md w-full mb-5 "
                {...register("street", { required: "street is required" })}
              />
              {errors.street && (
                <p className="text-red-400 ">{errors.street.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="PineCode">Area PineCode :</label>
              <br />
              <input
                type="tel"
                id="PineCode"
                placeholder="Area PineCode"
                className="p-2 border border-gray-300 rounded-md w-full mb-5 "
                {...register("pinecode", { required: "PineCode is required" })}
              />
              {errors.pinecode && (
                <p className="text-red-400 ">{errors.pinecode.message}</p>
              )}
            </div>
            <p>
              Already have Account?
              <Link
                href={"/hospital/login"}
                className="text-blue-400 cursor-pointer"
              >
                Sign In.
              </Link>
            </p>

            {!Loader ? (
              <center>
                <button className="w-[250px] bg-cyan-300 text-white py-2 mt-5 rounded-md text-xl">
                  Continue
                </button>
              </center>
            ) : (
              Loader && (
                <center>
                  <div className="w-[250px] bg-cyan-300 text-white py-2 mt-5 rounded-md text-xl flex justify-center items-center loader_btn">
                    <div className=" Loader_animate"></div>
                  </div>
                </center>
              )
            )}
          </form>
          <div className="hidden md:flex justify-center items-center md:w-[50%] bg-gradient-to-b from-green-200 to-green-400">
            <Image src={Imagges} alt="Doctors" className="w-[250px]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
