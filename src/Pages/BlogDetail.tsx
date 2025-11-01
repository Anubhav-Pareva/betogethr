import { useParams } from "react-router-dom";
import RenderHtml from "../Components/policies-components/RenderHtml";
import { blogContent } from "../Constants/TempData";

export default function BlogDetail(){
    const {id} = useParams();
    console.log(id);
    return(
            <div className="py-3">
              <RenderHtml htmlDoc={blogContent} />
            </div>
    )    
}