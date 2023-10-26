import { styled } from 'styled-components';

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2.5rem;
  min-height: 6.5rem;
  border-top: 1px solid #eee;
  
  .footer-icon-lg{
    width: 3.125rem;
    height: 3.125rem;
  }
`;

export const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FooterItemText = styled.div<{ isActive: boolean }>`
  font-size: 1.1rem;
  text-decoration: none;
  color: ${({ isActive }) => isActive ? "#33A9FF" : "#D7D8D9"};
  font-weight: 600;
`;