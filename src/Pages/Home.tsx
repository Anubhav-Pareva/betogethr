import DatingIntroSection from "../Components/DatingIntroSection";
import DownloadSection from "../Components/DownloadSection";
import FaqSection from "../Components/FaqSection";
import HeroSection from "../Components/HeroSection";
import StackedCardsSection from "../Components/StackedCardsSection";
import TestimonialSlider from "../Components/TestimonialSlider";
import VideoSection from "../Components/VideoSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DatingIntroSection />
      <StackedCardsSection />
      <VideoSection/>
      <DownloadSection />
      <TestimonialSlider />
      <FaqSection />
    </>
  );
}
