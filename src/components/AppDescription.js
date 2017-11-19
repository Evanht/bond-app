import React from 'react';
import styled from 'styled-components';
import { Box } from 'grid-styled'

const Description = styled(Box)`
  margin-left: 14%;
  background-color: rgba(251,251,251, 0.8);
  min-height: 50vh;
  width: 35%;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  border-radius: 5px;
`

const TextContainer = styled.div `
  margin: 15px;
  font-family: Avenir Next;
`

const SummaryList = styled.ul `
  margin-left: 30px;
  font-size: 25px;
  list-style-type: circle;
`

const Heading = styled.h1 `
  text-align: center;
  font-size: 40px;
`

const ListElement = styled.li `
  padding-top: 10%;
`


class AppDescription extends React.Component {
  render() {
    return (
        <Description px={2}>
          <TextContainer>
            <Heading>
              We are BondBase
            </Heading>
            <SummaryList>
              <ListElement>Down-to-earth trading</ListElement>
              <ListElement>Low fees</ListElement>
              <ListElement>Exit at any time</ListElement>
            </SummaryList>
          </TextContainer>
        </Description>
      );
   }
}

export default AppDescription;
