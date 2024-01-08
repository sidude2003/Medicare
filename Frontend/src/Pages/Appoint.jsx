import { useState } from "react";
import { BASE_URL } from "../../Configuration/config";
import { toast } from "react-toastify";
const Appoint = () => {
  const [formData, setFormData] = useState({
    user: "",
    doctor: "",
    appointment_time: "",
    phone: "",
    appointment_reason: "",
  });
  const [loading, setLoading] = useState(false);
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = async (event) => {
    console.log(formData);
    event.preventDefault();
  };
  return (
    <div className="hero__section flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <section>
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-irisBlueColor">
          Appointment Booking
        </h2>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={submitHandler} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-[15px] font-medium leading-6 text-gray-900"
              >
                Email ID
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  autocomplete="text"
                  placeholder="Enter Appointment Reason"
                  name="user"
                  value={formData.user}
                  onChange={handleInputChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-[15px] font-medium leading-6 text-gray-900"
              >
                Doctor Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  autocomplete="text"
                  placeholder="Enter Doctor Name"
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleInputChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-[15px] font-medium leading-6 text-gray-900"
              >
                Appointment Date
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  placeholder="Enter Appointment Date"
                  name="appointment_time"
                  value={formData.appointment_time}
                  onChange={handleInputChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="reason"
                className="block text-[15px] font-medium leading-6 text-gray-900"
              >
                Appointment Reason
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  autocomplete="text"
                  placeholder="Enter Appointment Reason"
                  name="appointment_reason"
                  value={formData.appointment_reason}
                  onChange={handleInputChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-irisBlueColor text-white py-2 px-6 font-[600] rounded-[5px] mt-4"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Appoint;
