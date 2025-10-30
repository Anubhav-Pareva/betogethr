import { videos } from "../Constants/Videos";

const VideoSection = () => {
  return (
    <section className="bg-gray-900 flex flex-col items-center">
      <div className="flex justify-center items-center gap-4 p-6 max-w-7xl ">
        {/* Left Video */}
        <video
          className="w-1/3 rounded-2xl hidden md:block"
          autoPlay
          loop
          muted
          playsInline
          src={videos.video1}
        >
          Your browser does not support the video tag.
        </video>

        {/* Center Video */}
        <video
          className="w-full md:w-1/3 rounded-2xl"
          autoPlay
          loop
          muted
          playsInline
          src={videos.video2}
        >
          Your browser does not support the video tag.
        </video>

        {/* Right Video */}
        <video
          className="w-1/3 rounded-2xl hidden md:block"
          autoPlay
          loop
          muted
          playsInline
          src={videos.video3}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;
