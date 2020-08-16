import React from 'react'
import styled from 'styled-components';
const StyledCard = styled.div`
  width: ${({ contain }) => (contain ? contain : '100%')};
  outline: none;
  padding: 1.2rem 5rem;
  font-size: 30px;
  color: white;
  font-weight: 700;
  box-shadow: 0rem 0.5rem 3.5rem rgba(63, 67, 0) ;
  background-color: ${({ color }) => (color? color : 'white')};
  border: none;
  text-align:center;
  transition: all 0.2s;
  @media (max-width: 768px) {
    width: 100%;
  }
  &:hover {
    cursor:pointer;
    transform: translateY(-3px);
  }
 
  
`;

const Button = ({ children, contain, color, ...rest }) => {
  return (
    <StyledCard color={color} contain={contain} {...rest}>
      {children}
    </StyledCard>
  );
};

export default Button;