import styled, { css } from "styled-components";

export const AccountList = styled.ul`
  list-style: none;
`;

export const AccountLabel = styled.div`
  font-size: ${(props) => props.theme.typography.xl.fontSize}px;
  line-height: ${(props) => props.theme.typography.xl.lineHeight};
  color: ${(props) => props.theme.colors.neutral[900]};
  margin-bottom: ${(props) => props.theme.space.s};
`;

// export const BodyText = styled(Typography.Body)`
//   color: ${neutral(800)};
//   margin-bottom: ${push(1.5)};
// `;

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

export const Flex = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.space.s};
`;

// export const AccountWrapper = styled.div`
//   margin-bottom: ${push(2)};
// `;

export const AccountListItem = styled.div`
  display: flex;

  &:not(:last-of-type) {
    margin-bottom: ${(props) => props.theme.space.s};
  }
`;

// export const Dialog = styled.div`
//   display: flex;
//   flex-direction: column;
//   max-width: 450px;
//   max-height: 90%;
//   border-radius: ${push(1)};
//   margin: ${({ theme }) => theme.layout.push(2)}px;
//   background: ${({ theme }) => theme.colours.lightest};
//   padding: ${({ theme }) => theme.layout.push(3)}px;
//   color: ${neutral(800)};
// `;

// export const FlexLabel = styled.label`
//   display: flex;
//   align-items: center;
//   margin: ${push(1.5)} 0;
// `;

// export const Label = styled.div`
//   color: ${neutral(800)};
//   margin-left: ${push(2)};
// `;

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

export const Chevron = styled.div`
  margin-left: ${(props) => props.theme.space.m};
  opacity: 0.3;
`;

// export const FormContainer = styled.div`
//   min-height: ${push(20)};
// `;

// export const CustomRadio = styled.div`
//   display: grid;
//   place-items: center;
//   width: ${push(3.5)};
//   height: ${push(3.5)};
//   border-radius: 50%;
//   border: ${push(0.25)} solid ${({ theme }) => theme.colours.primary};

//   &::before {
//     content: "";
//     width: ${push(1.5)};
//     height: ${push(1.5)};
//     box-shadow: inset ${push(1.5)} ${push(1.5)}
//       ${({ theme }) => theme.colours.primary};
//     border-radius: 50%;
//     transition: 180ms transform ease-in-out;
//     transform: scale(0);
//   }
// `;

// export const Input = styled.input`
//   opacity: 0;
//   width: 0;
//   height: 0;

//   &:checked + ${CustomRadio} {
//     background: radial-gradient(
//       ${({ theme }) => theme.colours.primary} 50%,
//       rgba(255, 0, 0, 0) 60%
//     );
//   }

//   &:checked + ${CustomRadio}::before {
//     transform: scale(1);
//   }

//   &:focus + ${CustomRadio} {
//     box-shadow: 0 0 0 0.05em #fff,
//       0 0 0.15em 0.1em ${({ theme }) => theme.colours.primary};
//   }
// `;
// export const Divider = styled.div`
//   margin: ${push(1.5)} 0;
//   border-top: 1px solid ${neutral(200)};
// `;
