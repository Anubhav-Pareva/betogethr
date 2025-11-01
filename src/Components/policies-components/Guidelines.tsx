import { Guidelines_policy } from "../../Constants/TempData";
import RenderHtml from "./RenderHtml";

export default function Guidelines() {
  return (
    <div>
      <RenderHtml htmlDoc={Guidelines_policy} />
    </div>
  );
}
