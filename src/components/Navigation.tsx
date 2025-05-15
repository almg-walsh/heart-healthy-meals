import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #f5f5f5;
  padding: 0.75rem;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavLink = styled(Link)`
  margin: 0 0.25rem;
  text-decoration: none;
  color: #0366d6;
  font-size: 0.9rem;
  display: inline-block;
  padding: 0.25rem 0.5rem;

  @media (max-width: 480px) {
    margin: 0 0.15rem;
    font-size: 0.8rem;
  }
`;

const Navigation: React.FC = () => {
  return (
    <Nav>
      <NavLink to="/">🏠 Home</NavLink> |
      <NavLink to="/breakfast">🍳 Breakfast</NavLink> |
      <NavLink to="/lunch">🥗 Lunch</NavLink> |
      <NavLink to="/dinner">🍛 Dinner</NavLink> |
      <NavLink to="/snacks">🍌 Snacks</NavLink> |
      <NavLink to="/meal-plan">📅 Meal Plan</NavLink>
    </Nav>
  );
};

export default Navigation; 