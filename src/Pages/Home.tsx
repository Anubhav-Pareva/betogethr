import DatingIntroSection from "../Components/home-components/DatingIntroSection";
import DownloadSection from "../Components/home-components/DownloadSection";
import FaqSection from "../Components/home-components/FaqSection";
import HeroSection from "../Components/home-components/HeroSection";
import StackedCardsSection from "../Components/home-components/StackedCardsSection";
import TestimonialSlider from "../Components/home-components/TestimonialSlider";
import VideoSection from "../Components/home-components/VideoSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <DatingIntroSection />
      <StackedCardsSection />
      <VideoSection />
      <DownloadSection />
      <TestimonialSlider />
      <FaqSection />
    </>
  );
}
