import BlockTitle from "../../common/BlockTitle";
import { ListBlockProps } from "../../common/interfaces/interfaces";
import { StyledDivider, StyledListBlock } from "./styled";

const ListBlock: React.FC<ListBlockProps> = ({ title, content }) => {
    return (
        <StyledListBlock>
            <BlockTitle title={title} />
            <StyledDivider />
            <ul>
                {content.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </StyledListBlock>

    )
};

export default ListBlock;