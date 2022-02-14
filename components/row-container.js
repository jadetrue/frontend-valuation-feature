import styled, {css} from "styled-components";
import PropTypes from "prop-types";

// This is an example component
// You shouldn't need to make any changes here
const ClickableContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
${(props) =>
  props.onClick &&
  css`
    cursor: pointer;
  `}
&:not(:last-child) {
  margin-bottom: ${(props) => props.theme.space.m};
}
`;

const RowContainer = ({children, onClick}) => (
    <ClickableContainer onClick={onClick}>
        {children}
    </ClickableContainer>
)

RowContainer.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
}

export default RowContainer