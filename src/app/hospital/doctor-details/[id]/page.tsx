// function Page({ params }: { params: { id: string } }) {
//   return <h1>Doctor Details: {params.id}</h1>;
// }

// export default Page;
"use client";
import Link from "next/link";
import Image from "next/image";
import Appointment from "../../../../components/Appointment";
import Profile from "../../assets/casual-life-3d-female-doctor-at-desk.png";
function page() {
  return (
    <div className="bg-gray-100 ">
      <div className="py-12 sm:py-16">
        <div className="container px-4">
          <div className="grid gap-6 sm:gap-8 lg:gap-10">
            <div className="grid md:grid-cols-3 md:gap-6 items-start">
              <div className="space-y-4 md:col-span-2">
                <div className="flex items-center space-x-4">
                  <div className="space-y-1.5">
                    <h1 className="text-2xl font-bold tracking-tight">
                      Dr. Jane Doe
                    </h1>
                    <div className="flex items-center space-x-2 text-sm">
                      <CalendarIcon className="w-4 h-4 flex-shrink-0" />
                      <span>Cardiologist</span>
                    </div>
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-2 items-start gap-2 text-sm">
                    <div>Doctor ID</div>
                    <div>123456</div>
                    <div>Specialty</div>
                    <div>Cardiology</div>
                    <div>Department</div>
                    <div>Heart Center</div>
                    <div>Experience</div>
                    <div>10 years</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-6 grid gap-2 text-sm">
                <Image
                  alt="Dr. Jane Doe"
                  className="rounded-full"
                  height="96"
                  src={Profile}
                  style={{
                    aspectRatio: "96/96",
                    objectFit: "contain",
                  }}
                  width="200"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div>
                  <div>Appointments</div>
                </div>
                <div className="p-0">
                  <div className="overflow-auto">
                    {/* ------------------------------appointments-goes here */}
                    <Appointment />
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

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default page;
