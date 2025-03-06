import BlockTitle from "../../common/BlockTitle";
import { ListBlockProps } from "../../common/interfaces/interfaces";
import { StyledDivider, StyledList, StyledListBlock, StyledListitem } from "./styled";

const ListBlock: React.FC<ListBlockProps> = ({ title, content }) => {
    return (
        <StyledListBlock>
            <BlockTitle title={title} />
            <StyledDivider />
            <StyledList>
                {content.map((item, index) => (
                    <StyledListitem key={index}>{item}</StyledListitem>
                ))}
            </StyledList>
        </StyledListBlock>

    )
};

export default ListBlock;