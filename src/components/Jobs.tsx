import JobRow from "./JobRow";

const Jobs = () => {
  return (
    <div className="bg-gray-200 rounded-xl p-8 text-black">
      <h2 className="font-semibold mb-4">Recent Jobs</h2>

      <div className="flex flex-col gap-4">
        <JobRow />
        <JobRow />
        <JobRow />
        <JobRow />
      </div>
    </div>
  );
};

export default Jobs;
