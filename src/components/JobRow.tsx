import React from "react";
import Image from "next/image";
import logo from "./../../public/job-post-logo.png";

const JobRow = () => {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-lg flex gap-4">
        <div className="content-center">
          <Image src={logo} alt="Logo" width={50} height={50} />
        </div>
        <div className="grow">
          <div>Company Name</div>
          <div className="font-semibold mb-1">Frontend Developer</div>
          <div className="text-sm">
            Job Type &middot; Location &middot; Full-time
          </div>
        </div>
        <div className="content-end">
          <p className="text-gray-500 text-sm">2 weeks ago</p>
        </div>
      </div>
    </div>
  );
};

export default JobRow;
