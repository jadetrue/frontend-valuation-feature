import styled from "styled-components";

// This is an example component
// You shouldn't need to make any changes here
export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary.default};
  color: #fff;
  border-radius: ${(props) => props.theme.space.m};
  min-height: ${(props) => props.theme.space.xl};
  width: 100%;
  border: none;
`;
