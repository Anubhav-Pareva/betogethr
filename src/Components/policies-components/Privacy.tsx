import { Privacy_policy } from "../../Constants/TempData";
import RenderHtml from "./RenderHtml";

export default function Privacy(){
    return(
       <div>
        <RenderHtml htmlDoc={Privacy_policy}/>
       </div>
    )
}