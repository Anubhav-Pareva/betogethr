import { Refund_policy } from "../../Constants/TempData";
import RenderHtml from "./RenderHtml";

export default function RefundPolicy() {
  return (
    <div>
      <RenderHtml htmlDoc={Refund_policy} />
    </div>
  );
}
