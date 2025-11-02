import { useNavigate } from "react-router-dom";
import { icons } from "../../Constants/Icons";

interface BackButtonProps{
    type?:number
}

export default function BackButton({type}:BackButtonProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };
  switch (type) {
    case 1:
      return (
        <button
          onClick={handleBack}
          className="flex items-center gap-2 px-3 py-1 rounded-xl bg-white hover:bg-gray-300 cursor-pointer text-gray-800 font-medium my-2"
        >
          <img src={icons.backArrowBlack} className="w-6 h-6" />
        </button>
      );
    default:
      return (
        <button
          onClick={handleBack}
          className="flex items-center gap-2 px-3 py-1 rounded-xl bg-gray-900 hover:bg-gray-700 cursor-pointer text-gray-800 font-medium my-2"
        >
          <img src={icons.backArrowWhite} className="w-6 h-6" />
        </button>
      );
  }
}
