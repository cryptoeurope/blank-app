import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import TeamSection from "@/components/team-section"
import GlobalTeamMap from "@/components/global-team-map"
import StrategiesSection from "@/components/strategies-section"
import ValuesSection from "@/components/values-section"
import GoalsSection from "@/components/goals-section"
import TimelineSection from "@/components/timeline-section"
import RoadmapSection from "@/components/roadmap-section"
import ProjectsSection from "@/components/projects-section"
import ThankYouSection from "@/components/thank-you-section"

// Add the import for HomeScrollHandler
import HomeScrollHandler from "@/components/home-scroll-handler"
import StrategyScrollToTop from "@/components/strategy-scroll-to-top"

// Update the Home component to include the HomeScrollHandler
export default function Home() {
  return (
    <>
      <HomeScrollHandler />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <GlobalTeamMap />
      <StrategiesSection />
      <ValuesSection />
      <GoalsSection />
      <TimelineSection />
      <RoadmapSection />
      <ProjectsSection />
      <ThankYouSection />
      <StrategyScrollToTop />
    </>
  )
}
