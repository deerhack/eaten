import HomeLayout from "@/Layouts/HomeLayout";
import axios from "axios";
import { useRef } from "react";
import { useAuthHeader } from "react-auth-kit";
import Swal from "sweetalert2";

const AddEvents = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const startTimeRef = useRef<HTMLInputElement>(null);
  const endTimeRef = useRef<HTMLInputElement>(null);
  const authHeaders = useAuthHeader();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(endTimeRef.current?.value);
    try {
      const result = await axios.post(
        "/api/event/",
        {
          name: nameRef.current?.value,
          start_time: startTimeRef.current?.value,
          end_time: endTimeRef.current?.value,
        },
        {
          headers: {
            authorization: authHeaders(),
          },
        }
      );
      if (result) {
        Swal.fire("", "Event Added!", "success");
      }
    } catch (err: any) {
      console.log(err);
      // console.log(err.response.data.message);
    }
  };
  return (
    <HomeLayout>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add Event
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Event Name
                </label>
                <input
                  type="text"
                  name="name"
                  ref={nameRef}
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type event name"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="startTime"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Start Time
                </label>
                <input
                  type="datetime-local"
                  name="startTime"
                  id="brand"
                  ref={startTimeRef}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Start Time"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="endTime"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  End Time
                </label>
                <input
                  type="datetime-local"
                  name="endTime"
                  ref={endTimeRef}
                  id="endTime"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="End Time"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Add Event
            </button>
          </form>
        </div>
      </section>
    </HomeLayout>
  );
};

export default AddEvents;
