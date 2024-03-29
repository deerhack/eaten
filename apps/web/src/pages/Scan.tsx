import { createRef, useEffect, useState } from "react";
import QrScanner from "qr-scanner";
import Swal from "sweetalert2";

import HomeLayout from "@/Layouts/HomeLayout";
import axios from "axios";
import { useAuthHeader } from "react-auth-kit";
import { useSearchParams } from "react-router-dom";

const Scan = () => {
  const [eventId, setEventId] = useState("");
  const [id, setId] = useState("");
  const authHeaders = useAuthHeader();
  const [searchParams, _] = useSearchParams();

  const videoRef = createRef<HTMLVideoElement>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.post(
          `/api/event/${eventId}`,

          {
            ID: id,
          },
          {
            headers: {
              authorization: authHeaders(),
            },
          },
        );
        Swal.fire("", "Added Sucessfully", "success");
        console.log(result);
      } catch (err) {
        console.log(err);
        Swal.fire("", "Error", "error");
      }
    };
    if (id) fetchData();
  }, [id]);

  useEffect(() => {
    setEventId(searchParams.get("event") as string);
    if (videoRef.current) {
      const qrScanner = new QrScanner(
        videoRef.current,
        (result) => {
          console.log(result.data);
          const resultData = result.data.replaceAll("'", '"');
          const data = JSON.parse(resultData);

          if ("ID" in data && data["ID"] !== id) {
            setId(data["ID"]);
          }
        },
        {
          /* your options or returnDetailedScanResult: true if you're not specifying any other options */
          returnDetailedScanResult: true,
          highlightScanRegion: true,
        },
      );
      qrScanner.$overlay;
      // if (result !== null) qrScanner.destroy();

      qrScanner.start();
    }
  }, []);

  return (
    <HomeLayout>
      <section className="bg-white dark:bg-gray-900 p-10">
        <video ref={videoRef}></video>
        <p>{id}</p>
      </section>
    </HomeLayout>
  );
};

export default Scan;
