"use client";
import Image from "next/image";
import photo from "../app/hospital/assets/casual-life-3d-female-doctor-at-desk.png";
import Link from "next/link";

function DoctorCard() {
  return (
    <>
      <div className="flex flex-col items-center space-y-2 border-2 border-solid border-gray-300 w-fit p-5 box-border rounded-md cursor-pointer">
        <Link href={`hospital/doctor-details/${"pavan"}`}>
          <Image
            alt="Doctor"
            className="rounded-full object-cover bg-center"
            height="200"
            src={photo}
            style={{
              aspectRatio: "200/200",
              objectFit: "contain",
            }}
            width="200"
          />
        </Link>
        <div className="text-center">
          <h3 className="text-lg font-bold">Dr. Samantha Collins</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Cardiologist
          </p>
        </div>
      </div>
    </>
  );
}

export default DoctorCard;
