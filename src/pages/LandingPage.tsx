import { Hero } from "../features/landing/Hero";
import { Philosophy } from "../features/landing/Philosophy";
import { WhyPhronesis } from "../features/landing/WhyPhronesis";
import { Methodology } from "../features/landing/Methodology";
import { Tracks } from "../features/landing/Tracks";
import { Roadmaps } from "../features/landing/Roadmaps";
import { WhatStudentsBuild } from "../features/landing/WhatStudentsBuild";
import { LearningExperience } from "../features/landing/LearningExperience";
import { PaperClub } from "../features/landing/PaperClub";
import { CaseStudies } from "../features/landing/CaseStudies";
import { PracticePlatform } from "../features/landing/PracticePlatform";
import { Projects } from "../features/landing/Projects";
import { Community } from "../features/landing/Community";
import { FAQ } from "../features/landing/FAQ";
import { ApplicationCTA } from "../features/landing/ApplicationCTA";

/** Section order follows the user journey map exactly — no reordering. */
export default function LandingPage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <WhyPhronesis />
      <Methodology />
      <Tracks />
      <Roadmaps />
      <WhatStudentsBuild />
      <LearningExperience />
      <PaperClub />
      <CaseStudies />
      <PracticePlatform />
      <Projects />
      <Community />
      <FAQ />
      <ApplicationCTA />
    </>
  );
}
