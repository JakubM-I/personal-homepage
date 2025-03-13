import { StyledHeroDescription, StyledHeroImage, StyledHeroIntro, StyledHeroSection, StyledHeroTitle } from "./styled";

const HeroSection: React.FC = () => {

    return (
        <StyledHeroSection>
            <StyledHeroImage src="" alt="" />
            <div>
                <StyledHeroIntro>This is</StyledHeroIntro>
                <StyledHeroTitle>Jakub Musiałowski</StyledHeroTitle>
                <StyledHeroDescription>I'm a Frontend Developer and i will do page for you :)</StyledHeroDescription>
                <button>Hire me</button>
            </div>
        </StyledHeroSection>

    )
};
export default HeroSection;
