import { createRef, useEffect, useState } from "react";
import QrScanner from "qr-scanner";

import HomeLayout from "@/Layouts/HomeLayout";

const Scan = () => {
  const [result, setResult] = useState("");
  const videoRef = createRef<HTMLVideoElement>();

  useEffect(() => {
    if (videoRef.current) {
      const qrScanner = new QrScanner(
        videoRef.current,
        (result) => setResult(result.data),
        {
          /* your options or returnDetailedScanResult: true if you're not specifying any other options */
          returnDetailedScanResult: true,
          highlightScanRegion: true,
        }
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
        <p>{result}</p>
      </section>
    </HomeLayout>
  );
};

export default Scan;
