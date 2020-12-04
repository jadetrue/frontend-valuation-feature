import styled from "styled-components";
import Detail from "../components/detail";
import { Banner } from "../components/banner";

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
