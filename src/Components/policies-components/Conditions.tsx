import { Conditions_policy } from "../../Constants/TempData";
import RenderHtml from "./RenderHtml";

export default function Conditions() {
  return (
    <div>
      <RenderHtml htmlDoc={Conditions_policy} />
    </div>
  );
}
