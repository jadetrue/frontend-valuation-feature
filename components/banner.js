import styled from "styled-components";

// This is an example component
// You shouldn't need to make any changes here
export const Banner = styled.div`
background-color: ${(props) => props.theme.colors.white.default};
font-size: ${(props) => props.theme.typography.l.fontSize};
height: 44px;
display: flex;
justify-content: center;
align-items: center;
`
