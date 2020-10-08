import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${({background}) => background};
  color: ${({cor}) => cor};
  padding: 1rem;
  border-radius: .25rem;
  border: none;
  margin: 0rem 10px;
  cursor: pointer;
`;

const Button = ({text, ...props}) => {
  return (
    <StyledButton {...props}>
      {text}
    </StyledButton>
  );
};

export default Button;
