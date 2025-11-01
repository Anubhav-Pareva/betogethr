import JobCard from "../Components/careers-components/JobCard";
import { careerData } from "../Constants/TempData";

export default function Career(){
    return(
        <div className="flex flex-wrap p-4 justify-center gap-8">
            {careerData?.length === 0 ? <h1>No Career Opportunity Available</h1> : careerData.map((job)=>(<JobCard key={job.id} job={job}/>))}
        </div>
    )
}