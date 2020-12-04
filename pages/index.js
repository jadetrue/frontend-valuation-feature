import Head from "next/head";
import styled from "styled-components";
import Detail from "../components/properties/detail";
import { Banner } from "../components/banner";

const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral["100"]};
  color: #000;
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
      <Banner>Property details</Banner>
      <Detail />
    </Main>
  );
}
