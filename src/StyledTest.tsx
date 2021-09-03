import React from 'react';
import styled from 'styled-components'

export default function StyledTest () {

    const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

    return <Title>Check styled components</Title>
}