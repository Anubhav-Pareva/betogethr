import { icons } from "../../Constants/Icons";
import { images } from "../../Constants/Images";


export default function DownloadSection() {
  return (
    <section className="bg-gray-900 flex flex-col px-6 md:px-12 py-20 relative overflow-hidden items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-blue-50 text-5xl md:text-[66px] font-extrabold text-center">
          Date people, not profiles
        </h1>
        <p className="text-gray-400 text-lg md:text-[21px] font-medium">
          Connect with other speed up connections
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-2 justify-between w-full md:w-[50%]">
        <div className="flex flex-col gap-3 items-center">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-blue-50 text-5xl md:text-[65px] font-extrabold">4.4/5</h1>
            <div className="flex gap-2 items-center">{[1,2,3,4].map((item)=><img key={item} src={icons.star} className="w-6 h-6"/>)}<img src={icons.add} className="w-4 h-4"/></div>

            <p className="text-gray-400 font-normal">On the iOS App Store</p>
          </div>
          <img src={images.applebtn} className="w-[185px]" />
        </div>
        <div className="flex flex-col gap-3 items-center">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-blue-50 text-5xl md:text-[65px] font-extrabold">4.2/5</h1>
            <div className="flex gap-2 items-center">{[1,2,3,4].map((item)=><img key={item} src={icons.star} className="w-6 h-6"/>)}<img src={icons.add} className="w-4 h-4"/></div>
            <p className="text-gray-400 font-normal">On the Android Play Store</p>
          </div>
          <img src={images.googlebtn} className="w-[185px]" />
        </div>
      </div>
    </section>
  );
}
