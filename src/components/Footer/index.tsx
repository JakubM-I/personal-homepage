import { StyledIntroText } from "../../common/styled/styled"
import { StyledFooter, StyledFooterEmail } from "./styled";

const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <StyledIntroText>Let's talk</StyledIntroText>
            <StyledFooterEmail>mds@mds.biz.pl</StyledFooterEmail>
            <p>I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to contact me</p>
        </StyledFooter>
    )
};

export default Footer;