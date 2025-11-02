import { useParams } from "react-router-dom";
import RenderHtml from "../Components/policies-components/RenderHtml";
import { blogContent } from "../Constants/TempData";
import BackButton from "../Components/common-components/BackButton";

export default function BlogDetail(){
    const {id} = useParams();
    console.log(id);
    return(
            <div className="py-3 px-2">
              <BackButton type={1}/>
              <RenderHtml htmlDoc={blogContent} />
            </div>
    )    
}