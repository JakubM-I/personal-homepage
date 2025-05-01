import { StyledSubtitle } from "../../common/styled/styled";
import spinner from "../../common/images/icon-spinner.png";
import { StyledLoading, StyledSpinner } from "./styled";

const Loading: React.FC = () => {
    return (
        <StyledLoading>
            <StyledSubtitle>Please wait, projects are being loaded...</StyledSubtitle>
            <StyledSpinner src={spinner} alt="Loading spinner" width={160} height={160} />
        </StyledLoading>
    )
};

export default Loading;