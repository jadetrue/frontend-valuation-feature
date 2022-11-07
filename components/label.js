import styled from "styled-components";

export const Label = styled.div`
    background-color: #c2f7e1;
    color: #006b57;
    text-align: center;
    font-weight: bold;
    border-radius: ${(props) => props.theme.space.xl};
    font-size: ${(props) => props.theme.typography.m.fontSize};
    padding-right: ${(props) => props.theme.space.m};
    padding-left: ${(props) => props.theme.space.m};
    width: fit;
    height: fit;
`;
