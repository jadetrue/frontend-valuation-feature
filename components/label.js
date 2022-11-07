import styled from "styled-components";

export const Label = styled.label`
    background-color: #c2f7e1;
    color: #006b57;
    text-align: center;
    font-weight: bold;
    border-radius: ${(props) => props.theme.space.xl};
    font-size: ${(props) => props.theme.typography.m.fontSize};
    padding-right: ${(props) => props.theme.space.l};
    padding-left: ${(props) => props.theme.space.l};
    width: fit;
    height: 50%;
`;
