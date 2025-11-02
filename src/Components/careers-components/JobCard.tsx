import { Link } from "react-router-dom";

interface JobCardProps {
  job: any;
}
export default function JobCard({ job }: JobCardProps) {
  return (
    <Link
      to={`/careers/detail/${job.id}`}
      className="flex flex-col gap-2 justify-between w-[300px] bg-white rounded-2xl p-3 hover:scale-95 transition duration-300 ease-in-out"
    >
      <div className="flex gap-1 items-center">
        <p className="text-[20px] font-bold">Posted</p>
        <p className="text-gray-400 text-[14px] font-semibold">
          {job.createdAt}
        </p>
      </div>
      <h1 className="my-2 text-4xl font-semibold">
        {job.job_title.slice(0, 12)}...
      </h1>
      <p className="text-[14px] text-gray-600">
        {job.description.slice(0, 120)}...
      </p>
      <hr className="border-gray-300" />
      <div className="flex gap-2">
        <div className="bg-gray-400 flex px-2 rounded-lg items-center justify-center">
          <p className="text-gray-800 text-sm">{job.salary}</p>
        </div>
        <div className="bg-gray-400 flex px-2 rounded-lg items-center justify-center">
          <p className="text-gray-800 text-sm">{job.office_time}</p>
        </div>
        <div className="bg-gray-400 flex px-2 rounded-lg items-center justify-center">
          <p className="text-gray-800 text-sm">{job.work_type}</p>
        </div>
      </div>
    </Link>
  );
}
