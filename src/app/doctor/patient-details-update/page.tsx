"use client";
import { SubmitHandler, useForm } from "react-hook-form";

interface Update {
  disease: string;
  diagnosis: string;
  medication: string;
  file: string;
}

function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Update>();

  const onSubmit: SubmitHandler<Update> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("file", data.file[0]);
      formData.append("disease", data.disease);
      formData.append("diagnosis", data.diagnosis);
      formData.append("medication", data.medication);

      const res = await fetch("url-------------------", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());
      alert(JSON.stringify(`${res.message}, status: ${res.status}`));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="update-patient w-full h-[100vh] flex justify-center items-center bg-slate-400">
        <div className="from_fields w-[90%] bg-white rounded-2xl p-2 box-border">
          <h1 className="text-2xl text-center">Enter patient data</h1>
          <form>
            <div className="flex items-center justify-start flex-col w-full gap-4 mt-10">
              <label className="w-full ">Disease Name:</label>
              <input
                type="input"
                className="w-full outline-0 bg-gray-200 rounded-xl p-4 "
                placeholder="Enter disease Name"
                {...register("disease", {
                  required: "disease Name is required*",
                })}
              />
            </div>
            {errors.disease && (
              <p className="text-red-400 ">{errors.disease.message}</p>
            )}

            <div className="flex items-center justify-start flex-col w-full gap-4 mt-10">
              <label className="w-full ">Diagnosis:</label>
              <textarea
                className="w-full outline-0 bg-gray-200 rounded-xl p-4 "
                placeholder="Enter Doctor Name"
                {...register("diagnosis", {
                  required: "diagnosis details required*",
                })}
              ></textarea>
            </div>
            {errors.diagnosis && (
              <p className="text-red-400 ">{errors.diagnosis.message}</p>
            )}

            <div className="flex items-center justify-start flex-col w-full gap-4 mt-10">
              <label className="w-full "> Medication:</label>
              <input
                type="input"
                className="w-full outline-0 bg-gray-200 rounded-xl p-4 "
                placeholder="Enter Doctor Name"
                {...register("medication", {
                  required: "medication Name is required*",
                })}
              />
            </div>
            {errors.medication && (
              <p className="text-red-400 ">{errors.medication.message}</p>
            )}

            <div className="flex items-center justify-start flex-col w-full gap-4 mt-10">
              <label className="w-full ">Report</label>
              <input type="file" {...register("file")} />
            </div>
            <center>
              <button
                className="w-[250px] py-2 bg-red-400 rounded-md cursor-pointer hover:bg-red-600
             text-white mt-6 mb-6"
              >
                Submit
              </button>
            </center>
          </form>
        </div>
      </div>
    </>
  );
}

export default page;
