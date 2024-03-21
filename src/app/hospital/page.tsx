"use client";
import DoctorCard from "@/components/DoctorCard";
import DoctorBanner from "./assets/3d-business-two-doctors-making-finger-heart.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

function page() {
  const [name, setname] = useState();
  useEffect(() => {
    const dataString = localStorage.getItem("details_all");
    if (dataString) {
      const data = JSON.parse(dataString);
      // Now you can access the hospital name
      setname(data.hospital.name);
    }
  }, []);
  return (
    <>
      <div className="nav shadow-lg w-full h-[60px] flex items-center justify-between px-5 box-border">
        <h1 className="text-2xl ">HealthEase</h1>
        <div>
          '
          <Link href={"hospital/create-account"}>
            <button className="bg-red-500 text-white px-8 py-2 rounded-lg">
              Add Doctor
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y md:gap-0">
        <div className="bg-gray-100">
          <div className="container py-12">
            <div className="grid items-center gap-8 lg:gap-12">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-center">
                  Welcome to {name} Hospital
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Providing compassionate care for our community.
                </p>
              </div>
              <center>
                <Image
                  alt="Doctor"
                  height="250"
                  src={DoctorBanner}
                  width="300"
                />
              </center>
            </div>
          </div>
        </div>
        <div className="bg-gray-50">
          <div className="container py-12">
            <div className="grid items-center gap-8 lg:gap-12">
              {/* --------------------------------- */}
              <div className="p-4 bg-gray-50 dark:bg-gray-950">
                <h2 className="text-2xl font-bold">Hospital Dashboard</h2>
                <p className="text-2xl text-gray-500 dark:text-gray-400 ">
                  Welcome back!
                </p>
              </div>
              <div className="p-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6" />
                    <div className="space-y-1">
                      <h3 className="text-sm font-medium">Patients</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        230
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6" />
                    <div className="space-y-1">
                      <h3 className="text-sm font-medium">Available Beds</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        40
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6" />
                    <div className="space-y-1">
                      <h3 className="text-sm font-medium">Occupancy Rate</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        83%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ---------------------------------- */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tight">
                    Our Mission and Values
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    We are dedicated to providing exceptional healthcare
                    services with a focus on compassion, respect, and integrity.
                    Our mission is to improve the health and well-being of the
                    communities we serve through patient-centered care and
                    innovation.
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tight">
                    Our Services
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Mercy Hospital offers a wide range of medical services,
                    including emergency care, diagnostic imaging, surgical
                    procedures, maternity services, and specialized treatments
                    for various health conditions. Our team of healthcare
                    professionals is committed to delivering high-quality care
                    to our patients with expertise and empathy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-gray-100 py-12">
        <div className="container">
          <div className="grid items-center gap-8 lg:gap-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">
                Avaliable Doctors
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Our team of experienced physicians and specialists is dedicated
                to providing personalized care to our patients. Learn more about
                our doctors and their areas of expertise.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-5 box-border">
              {/* -------doctors cards goes here ------------------------- */}
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
