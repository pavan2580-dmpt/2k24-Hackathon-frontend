"use client";
import Modal from "@/components/modal";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";

interface Register {
  name: string;
  specilaization: string;
  phone: string;
  experience: string;
}

function page() {
  const [form, setForm] = useState({
    image: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Register>();

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file: any = e.target.files?.[0];

    if (!file) return;
    if (!file.type.includes("image")) {
      return alert("Uplaod an image file");
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      handleStateChange("image", result);
    };
  };

  const handleStateChange = (fieldName: string, value: string) => {
    console.log(`Updating state for ${fieldName}: ${value}`);
    setForm((preState) => ({ ...preState, [fieldName]: value }));
  };

  const onSubmit: SubmitHandler<Register> = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal>
        <h3 className="modal-head-text">Create account for doctor.</h3>
        <div className="flex items-center justify-start  w-full lg:min-h-[400px] min-h-[200px] relative">
          <label
            htmlFor="poster"
            className="flex justify-center items-center  z-10 text-center w-full h-full p-20 text-gray-300 border-2 border-gray-400 border-dashed"
          >
            {!form.image && "choose a poster for your project"}
          </label>
          <input
            id="image"
            type="file"
            accept="image/"
            required
            className="absolute z-30 w-full opacity-0 h-full cursor-pointer"
            onChange={handleChangeImage}
          />
          {form.image && (
            <Image
              src={form?.image}
              className="sm:p-10 object-contain z-20"
              alt="project poster"
              fill
            />
          )}
        </div>

        <div className="flex items-center justify-start flex-col w-full gap-4 mt-10">
          <label className="w-full ">Doctor Name:</label>
          <input
            type="input"
            className="w-full outline-0 bg-gray-200 rounded-xl p-4 "
            placeholder="Enter Doctor Name"
            {...register("name", { required: "Name is required*" })}
          />
        </div>
        {errors.name && <p className="text-red-400 ">{errors.name.message}</p>}
        <div className="flex items-center justify-start flex-col w-full gap-4 mt-10">
          <label className="w-full ">Doctor Specialization:</label>
          <input
            type="input"
            className="w-full outline-0 bg-gray-200 rounded-xl p-4 "
            placeholder="Enter Doctor Name"
            {...register("specilaization", {
              required: "Specialization required *",
            })}
          />
        </div>
        {errors.specilaization && (
          <p className="text-red-400 ">{errors.specilaization.message}</p>
        )}

        <div className="flex items-center justify-start flex-col w-full gap-4 mt-10">
          <label className="w-full ">Doctor Phone Number:</label>
          <input
            type="input"
            className="w-full outline-0 bg-gray-200 rounded-xl p-4 "
            placeholder="Enter Doctor Name"
            {...register("phone", { required: "Phone number is required *" })}
          />
        </div>
        {errors.phone && (
          <p className="text-red-400 ">{errors.phone.message}</p>
        )}

        <div className="flex items-center justify-start flex-col w-full gap-4 mt-10">
          <label className="w-full ">Doctor Experience:</label>
          <input
            type="input"
            className="w-full outline-0 bg-gray-200 rounded-xl p-4 mb-6 "
            placeholder="Enter Doctor Name"
            {...register("experience", {
              required: "Experience is required *",
            })}
          />
        </div>
        {errors.experience && (
          <p className="text-red-400 ">{errors.experience.message}</p>
        )}

        <button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          className="bg-blue-400 py-2 text-white rounded-md w-[200px] mt-3"
        >
          Create
        </button>
      </Modal>
    </>
  );
}

export default page;
