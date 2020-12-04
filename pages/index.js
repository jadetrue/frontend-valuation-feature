import Head from "next/head"
import styled from "styled-components"

const Box = styled.div`
  background-color: ${({theme}) => theme.colors.neutral["100"]};
  color: #000;
  font-size: 80px;
  padding: 32px;
`

const Main = styled.main`
  max-width: 960px;
  margin: 0 auto;
`

export default function PropertyDetails() {
  return (
    <Main>
      <Box>Property Details</Box>
    </Main>
  )
}
