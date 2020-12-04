import Head from "next/head";
import styled from "styled-components";
import Detail from "../components/properties/detail";

const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral["100"]};
  color: #000;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 80px;
  padding: 32px;
`;

const Main = styled.main`
  max-width: 960px;
  margin: 0 auto;
`;

export default function PropertyDetails() {
  return (
    <Main>
      <Detail />
    </Main>
  );
}
