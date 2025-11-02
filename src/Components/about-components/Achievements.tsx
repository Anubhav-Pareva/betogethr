import { pressLogData } from "../../Constants/Data";
import PressLogos from "./PressLogs";
import StateGrid from "./StateGrid";

export default function Achievements(){
    return(
        <div className="flex flex-col gap-3">
            <h1 className="text-blue-50 text-lg">
                In a short span, our dating app has grown into a thriving community of real connections and meaningful relationships. With over 100K+ downloads, 25K+ active users, and 2 million+ messages exchanged, we’re proud to be reshaping how people meet and connect. Our platform has successfully hosted 120+ virtual and offline events, helping thousands find genuine companionship. Recognized for our innovation, safety-first design, and user trust, we continue to push boundaries to make modern dating more authentic, inclusive, and fun.
            </h1>
            <StateGrid/>
            <PressLogos title="Awarded By" items={pressLogData}/>
            <PressLogos title="Featured By" items={pressLogData}/>
        </div>
    )
}