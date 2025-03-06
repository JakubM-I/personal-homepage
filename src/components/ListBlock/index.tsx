import BlockTitle from "../../common/BlockTitle";
import { StyledDivider, StyledListBlock } from "./styled";

const ListBlock = ({ title }: { title: string }) => {
    return (
        <StyledListBlock>
            <BlockTitle title={title} />
            <StyledDivider />
        </StyledListBlock>

    )
};

export default ListBlock;