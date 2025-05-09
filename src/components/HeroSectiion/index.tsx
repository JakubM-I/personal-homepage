import { StyledButton, StyledIntroText } from "../../common/styled/styled";
import { isDarkModeSelector, toogleTheme } from "../../features/themeSwitch/themeSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { StyledButtomWrapper, StyledHeroDescription, StyledHeroImage, StyledHeroSection, StyledHeroTitle, StyledThemeButton, StyledThemeSwitcher, StyledThemeSwitchTxt } from "./styled";

const HeroSection: React.FC = () => {
    const dispatch = useAppDispatch();
    const isDarkMode = useAppSelector(isDarkModeSelector);


    return (
        <StyledHeroSection>
            <StyledButtomWrapper>
                <StyledThemeSwitchTxt>Dark mode {isDarkMode ? "on" : "off"}</StyledThemeSwitchTxt>
                <StyledThemeButton onClick={() => dispatch(toogleTheme())}>
                     <StyledThemeSwitcher dark={isDarkMode}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_31344_122)">
                            <path d="M6.99989 2.7179C4.63495 2.7179 2.71777 4.63507 2.71777 7.00001C2.71777 9.36495 4.63495 11.2821 6.99989 11.2821C9.36483 11.2821 11.282 9.36495 11.282 7.00001C11.282 4.63507 9.36483 2.7179 6.99989 2.7179ZM6.99989 10.5V3.50002C8.66175 3.4956 10.0949 4.6667 10.4217 6.29611C10.526 6.75959 10.526 7.24044 10.4217 7.70392C10.0949 9.3334 8.66175 10.5045 6.99989 10.5Z" fill="currentColor"/>
                            <path d="M10.4412 3.55866C10.5134 3.63235 10.6118 3.67449 10.7149 3.67599C10.8181 3.67453 10.9165 3.63235 10.9887 3.55866L11.9468 2.60056C12.1196 2.47095 12.1546 2.22585 12.025 2.05306C11.8954 1.88026 11.6503 1.84527 11.4775 1.97484C11.4478 1.99707 11.4215 2.02341 11.3993 2.05306L10.4412 3.01116C10.29 3.14986 10.2799 3.38489 10.4186 3.53605C10.4258 3.54391 10.4333 3.55144 10.4412 3.55866Z" fill="currentColor"/>
                            <path d="M3.48036 10.4415C3.34132 10.3372 3.15011 10.3372 3.01107 10.4415L2.05297 11.3996C1.90177 11.5383 1.89167 11.7733 2.03041 11.9245C2.03759 11.9323 2.04515 11.9399 2.05297 11.9471C2.19167 12.0983 2.42671 12.1084 2.57787 11.9696C2.58573 11.9624 2.59325 11.9549 2.60044 11.9471L3.55854 10.9889C3.68815 10.8162 3.65315 10.5711 3.48036 10.4415Z" fill="currentColor"/>
                            <path d="M11.9471 11.3995L10.989 10.4414C10.8162 10.3118 10.5711 10.3468 10.4415 10.5196C10.3372 10.6587 10.3372 10.8499 10.4415 10.9889L11.3996 11.947C11.5383 12.0982 11.7733 12.1083 11.9245 11.9696C11.9323 11.9624 11.9399 11.9548 11.947 11.947C12.0982 11.8083 12.1083 11.5733 11.9696 11.4221C11.9625 11.4142 11.9549 11.4067 11.9471 11.3995Z" fill="currentColor"/>
                            <path d="M3.01095 3.55866C3.14965 3.70986 3.38468 3.71997 3.53585 3.58123C3.54371 3.57404 3.55123 3.56648 3.55842 3.55866C3.70962 3.41996 3.71972 3.18493 3.58098 3.03377C3.5738 3.02591 3.56624 3.01838 3.55842 3.0112L2.60031 2.0531C2.42752 1.92349 2.18242 1.95852 2.05281 2.13132C1.94854 2.27035 1.94854 2.46156 2.05281 2.6006L3.01095 3.55866Z" fill="currentColor"/>
                            <path d="M6.99995 2.13129C7.21593 2.13129 7.39101 1.95621 7.39101 1.74023V0.391063C7.39101 0.175078 7.21593 0 6.99995 0C6.78396 0 6.60889 0.175078 6.60889 0.391063V1.74023C6.60889 1.95621 6.78396 2.13129 6.99995 2.13129Z" fill="currentColor"/>
                            <path d="M6.99995 11.8688C6.78396 11.8688 6.60889 12.0439 6.60889 12.2598V13.609C6.60889 13.825 6.78396 14.0001 6.99995 14.0001C7.21593 14.0001 7.39101 13.825 7.39101 13.609V12.2598C7.39101 12.0439 7.21593 11.8688 6.99995 11.8688Z" fill="currentColor"/>
                            <path d="M13.6089 6.60901H12.2597C12.0437 6.60901 11.8687 6.78409 11.8687 7.00007C11.8687 7.21605 12.0437 7.39113 12.2597 7.39113H13.6089C13.8249 7.39113 13.9999 7.21605 13.9999 7.00007C13.9999 6.78409 13.8248 6.60901 13.6089 6.60901Z" fill="currentColor"/>
                            <path d="M2.13129 7.00007C2.13129 6.78409 1.95621 6.60901 1.74023 6.60901H0.391063C0.175078 6.60901 0 6.78409 0 7.00007C0 7.21605 0.175078 7.39113 0.391063 7.39113H1.74023C1.95621 7.39113 2.13129 7.21605 2.13129 7.00007Z" fill="currentColor"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_31344_122">
                            <rect width="14" height="14" fill="currentColor"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </StyledThemeSwitcher>
                </StyledThemeButton>
            </StyledButtomWrapper>

            <StyledHeroImage src="" alt="" />
            <div>
                <StyledIntroText>This is</StyledIntroText>
                <StyledHeroTitle>Jakub Musiałowski</StyledHeroTitle>
                <StyledHeroDescription>I'm a Frontend Developer and i will do page for you :)</StyledHeroDescription>
                <StyledButton 
                    onClick={() => window.location.href = "mailto:mds@mds.biz.pl"}
                    title="I invite you to contact me"
                    >
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.2676 9.56116L13.0022 12.9954C12.1949 13.6283 11.0634 13.6283 10.2562 12.9954L5.9541 9.56116" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.88787 4H16.3158C17.6752 4.01525 18.969 4.58993 19.896 5.5902C20.823 6.59048 21.3022 7.92903 21.222 9.29412V15.822C21.3022 17.1871 20.823 18.5256 19.896 19.5259C18.969 20.5262 17.6752 21.1009 16.3158 21.1161H6.88787C3.96796 21.1161 2 18.7407 2 15.822V9.29412C2 6.37545 3.96796 4 6.88787 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                    Hire me</StyledButton>
            </div>
        </StyledHeroSection>

    )
};
export default HeroSection;
