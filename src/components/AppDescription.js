
import React from 'react';

import styled from 'styled-components';

const Description = styled.div `
  margin-left: 10px;
`

class AppDescription extends React.Component {
  render() {
    return (
        <Description>
          <h1>
            We are Bondbase
          </h1>
          <h2>
            *insert info about the company*
          </h2>
        </Description>
      );
   }
}

export default AppDescription;