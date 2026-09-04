import { AboutProject } from "../Home/AboutProject"
import { Amenities } from "../Home/Ameinities"
import { ComboSection } from "../Home/comboSection"
import { CTA } from "../Home/CTASection"
import { HeroSection } from "../Home/HeroSection"
import { ProjectStates } from "../Home/Projects"
import { Testimonials } from "../Home/Testimonials"
import { WhyChooseUs } from "../Home/WhyChooseUs"
import { Footer } from "../layout/Footer"
import { NavBar } from "../layout/NavBar"

export const HomePage = () =>{
    return (
        <main>
            <NavBar/>
            <HeroSection/>
            <ProjectStates/>
            <AboutProject/>
            <WhyChooseUs/>
            <Amenities/>
            <ComboSection/>
            <Testimonials/>
            <CTA/>
            <Footer/>
        </main>
    )
}
/**
 HeroSection
      ↓
ProjectStats
      ↓
AboutProject
      ↓
WhyChooseUs
      ↓
Amenities
      ↓
ApartmentOptions
      ↓
Gallery
      ↓
Testimonials
      ↓
LeadForm
      ↓
FAQ
      ↓
CTASection
      ↓
Footer*/ 