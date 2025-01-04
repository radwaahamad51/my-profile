import AboutMe from "./assets/Pages/about";
import BannerSection from "./assets/Pages/bannaer";
import ContactSection from "./assets/Pages/contactme";
import Project from "./assets/Pages/Myproject";
import SkillsAndEducationCard from "./assets/skils";


const Mainaitem =()=>{
    return(
        <div>
            <BannerSection></BannerSection>
             <AboutMe></AboutMe>
             <SkillsAndEducationCard></SkillsAndEducationCard>
            <Project></Project>
            <ContactSection></ContactSection>

        </div>
    )
};
export default Mainaitem