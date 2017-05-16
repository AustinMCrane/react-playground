import React from 'react';
import styled from 'styled-components';

const DisplayNumber = styled.h2`
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 5px;
    text-align: center;
`;

const Display = ({ num }) => {
    return (
        <DisplayNumber>{num}</DisplayNumber>
    );
}

export default Display;
