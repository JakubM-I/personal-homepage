import { StyledIntroText } from "../../common/styled/styled";
import { isDarkModeSelector, toogleTheme } from "../../features/themeSwitch/themeSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { StyledButtomWrapper, StyledButton, StyledHeroDescription, StyledHeroImage, StyledHeroSection, StyledHeroTitle, StyledThemeButton } from "./styled";

const HeroSection: React.FC = () => {
    const dispatch = useAppDispatch();
    const isDarkMode = useAppSelector(isDarkModeSelector);


    return (
        <StyledHeroSection>
            <StyledButtomWrapper>
                <span>Dark mode {isDarkMode ? "on" : "off"}</span>
                <StyledThemeButton onClick={() => dispatch(toogleTheme())}>Toggle Theme</StyledThemeButton>
            </StyledButtomWrapper>

            <StyledHeroImage src="" alt="" />
            <div>
                <StyledIntroText>This is</StyledIntroText>
                <StyledHeroTitle>Jakub Musiałowski</StyledHeroTitle>
                <StyledHeroDescription>I'm a Frontend Developer and i will do page for you :)</StyledHeroDescription>
                <StyledButton><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.2676 9.56116L13.0022 12.9954C12.1949 13.6283 11.0634 13.6283 10.2562 12.9954L5.9541 9.56116" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.88787 4H16.3158C17.6752 4.01525 18.969 4.58993 19.896 5.5902C20.823 6.59048 21.3022 7.92903 21.222 9.29412V15.822C21.3022 17.1871 20.823 18.5256 19.896 19.5259C18.969 20.5262 17.6752 21.1009 16.3158 21.1161H6.88787C3.96796 21.1161 2 18.7407 2 15.822V9.29412C2 6.37545 3.96796 4 6.88787 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                    Hire me</StyledButton>
            </div>
        </StyledHeroSection>

    )
};
export default HeroSection;
