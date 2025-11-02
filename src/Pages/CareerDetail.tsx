import { Link, useParams } from "react-router-dom";
import BackButton from "../Components/common-components/BackButton";

export default function CareerDetail() {
    const {id} = useParams();
  return (
    <div className="px-6 py-3 bg-white flex-1">
      <BackButton/>
      <div className="flex gap-1 items-center">
        <p className="text-[20px] font-bold">Posted</p>
        <p className="text-gray-400 text-[14px] font-semibold">2023</p>
      </div>
      <h1 className="my-2 text-4xl font-semibold">Job Title...</h1>
      <hr className="border-gray-300 py-2" />
      <h1 className="my-2 text-xl font-semibold">Job Description</h1>
      <p className="text-xl text-gray-600 mb-1">
        We are looking for a skilled React Native Developer to build
        high-quality mobile applications for both Android and iOS platforms. The
        ideal candidate should have a strong understanding of React Native,
        JavaScript (ES6+), and modern mobile UI/UX principles. You will
        collaborate with designers, backend developers, and product teams to
        deliver seamless, efficient, and visually appealing apps.
      </p>
      <hr className="border-gray-300 py-2" />
      <div className="flex flex-col gap-2 mb-1">
        <h1 className="my-2 text-xl font-semibold">Other Deatils</h1>
        <div className="flex gap-2">
          <p className="text-gray-600">Package: </p>
          <div className="bg-gray-400 flex px-2 rounded-lg items-center justify-center">
            <p className="text-gray-800 text-sm">4lpa</p>
          </div>
        </div>
        <div className="flex gap-2">
          <p className="text-gray-600">Job Type: </p>
          <div className="bg-gray-400 flex px-2 rounded-lg items-center justify-center">
            <p className="text-gray-800 text-sm">Full-Time</p>
          </div>
        </div>
        <div className="flex gap-2">
          <p className="text-gray-600">Work Type: </p>

          <div className="bg-gray-400 flex px-2 rounded-lg items-center justify-center">
            <p className="text-gray-800 text-sm">WFO</p>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 py-2" />
      <Link to={`/careers/apply-job/${id}`} className="bg-gray-900 text-blue-50 py-2 px-4 rounded-lg">Apply Now</Link>
    </div>
  );
}
