import { Safety_policy } from "../../Constants/TempData";
import RenderHtml from "./RenderHtml";

export default function SafetyPolicy() {
  return (
    <div>
      <RenderHtml htmlDoc={Safety_policy} />
    </div>
  );
}
