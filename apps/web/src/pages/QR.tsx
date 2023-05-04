import { Link } from "react-router-dom";

import HomeLayout from "@/Layouts/HomeLayout";
import { useEffect, useState } from "react";
import axios from "axios";

const QR = () => {
  const [events, setEvents] = useState();
  const [selectedEvent, setSeletedEvent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/event");
      setEvents(result.data.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      // const result = await axios.
    };
    fetchData();
  }, [selectedEvent]);

  return (
    <HomeLayout>
      <section className="bg-white dark:bg-gray-900 p-10">
        <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Scan QR
        </h1>
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-3  justify-center">
          <div>
            <label
              htmlFor="events"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an event
            </label>
            <select
              onChange={(e) => {
                setSeletedEvent(e.target.value);
              }}
              id="events"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value={"select an event"} selected disabled>
                Select an Event
              </option>
              {events && events.length != 0 ? (
                events.map((event) => (
                  <option value={event.id}>{event.name}</option>
                ))
              ) : (
                <option selected>No events found</option>
              )}
            </select>
          </div>
          {selectedEvent ? (
            <Link to={"/scan"}>
              <button
                type="button"
                className="md:self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Scan QR
              </button>
            </Link>
          ) : (
            ""
          )}
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-5">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            {selectedEvent ? (
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td className="px-6 py-4">Silver</td>
                </tr>
                <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Microsoft Surface Pro
                  </th>
                  <td className="px-6 py-4">White</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Magic Mouse 2
                  </th>
                  <td className="px-6 py-4">Black</td>
                </tr>
                <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Google Pixel Phone
                  </th>
                  <td className="px-6 py-4">Gray</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple Watch 5
                  </th>
                  <td className="px-6 py-4">Red</td>
                </tr>
              </tbody>
            ) : (
              <p className="text-center text-xl font-bold">No Event Selected</p>
            )}
          </table>
        </div>
      </section>
    </HomeLayout>
  );
};

export default QR;
