import Navbar from "@/components/Navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};
const HomeLayout = ({ children }: Props) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 h-[100vh] flex flex-col">
      <Navbar />
      <div className="w-10/12 mx-auto my-3 h-full grow">{children}</div>
    </div>
  );
};

export default HomeLayout;
