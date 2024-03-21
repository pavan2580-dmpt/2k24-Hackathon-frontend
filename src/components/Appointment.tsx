import { useState, useEffect } from 'react';
import axios from 'axios';
interface Data {
  patient: string;
  time: string;
  reason: string;
}

function Appointment() {
  const [appointments, setAppointments] = useState<Data[]>([]);
  const FetchAppointments =async ()=>{
    const resp = await axios.get("http://localhost:30000/")
    setAppointments(resp.data)
    console.log(resp.data)
  }

  useEffect(() => {
    FetchAppointments();
    
  }, [])


  return (
    <>
      <table className="min-w-full w-full">
        <thead>
          <tr className="border-t border-gray-200 dark:border-gray-800">
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Patient
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Time
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Reason
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
          {appointments.map((appointment, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-850' : ''}>
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="flex items-center space-x-2">
                  <div>{appointment.patient}</div>
                </div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">{appointment.time}</td>
              <td className="px-4 py-3 whitespace-nowrap">{appointment.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Appointment;
