
import React from 'react';

import styled from 'styled-components';

const Description = styled.div `
  margin-left: 14%;
  background-color: white;
  min-height: 50vh; 
  width: 35%;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  border-radius: 5px;
`

const TextContainer = styled.div `
  margin: 15px;
`

class AppDescription extends React.Component {
  render() {
    return (
        <Description>
          <TextContainer>
            <h1>
              We are Bondbase
            </h1>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id feugiat justo. Aliquam erat volutpat. Nunc id lorem eu massa commodo hendrerit at id risus. Donec molestie, justo id semper tristique, elit purus ornare nisi, ut suscipit sem lectus vel lacus. In hac habitasse platea dictumst. 
            </h2>
          </TextContainer>
        </Description>
      );
   }
}

export default AppDescription;