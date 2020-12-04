import styled from "styled-components";

// This is an example component
// You shouldn't need to make any changes here
export const Banner = styled.div`
  background-color: ${(props) => props.theme.colors.neutral[200]};
  color: ${(props) => props.theme.colors.neutral.default};
  height: ${(props) => props.theme.space.xl};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.typography.l.fontSize};
`;
