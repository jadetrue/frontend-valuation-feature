import styled, { css } from "styled-components";

export const AccountList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const AccountLabel = styled.div`
  font-size: ${(props) => props.theme.typography.xl.fontSize};
  line-height: ${(props) => props.theme.typography.xl.lineHeight};
  color: ${(props) => props.theme.colors.neutral[900]};
  margin-bottom: ${(props) => props.theme.space.s};
`;

export const AccountHeadline = styled.h2`
  font-size: ${(props) => props.theme.typography["2xl"].fontSize};
  line-height: ${(props) => props.theme.typography["2xl"].lineHeight};
  color: ${(props) => props.theme.colors.neutral[800]};
  margin-bottom: ${(props) => props.theme.space.s};
`;

export const InfoText = styled.div`
  line-height: 1.6;
  font-size: ${(props) => props.theme.typography.l.fontSize};
  color: ${(props) => props.theme.colors.neutral[800]};
  display: flex;
  margin-bottom: ${(props) => props.theme.space.s};

  p {
    margin-bottom: ${(props) => props.theme.space.s};
  }
`;

export const Inset = styled.div`
  padding: 0 ${(props) => props.theme.space.m};
`;

export const AccountSection = styled.div`
  padding: ${(props) => props.theme.space.m} 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${(props) => props.theme.colors.neutral[200]};
  }
}
`;

export const AccountListItem = styled.div`
  display: flex;

  &:not(:last-of-type) {
    margin-bottom: ${(props) => props.theme.space.s};
  }
`;

export const RowContainer = styled.div`
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
