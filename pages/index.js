import Head from "next/head"
import styled from "styled-components"

const Box = styled.div`
  background-color: ${({theme}) => theme.colors.neutral["100"]};
  color: #000;
  font-family: ${({theme}) => theme.fonts.body};
  font-size: 80px;
  padding: 32px;
`

export default function Home() {
  return <Box>Hello world</Box>
}
