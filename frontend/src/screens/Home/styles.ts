import styled from "styled-components";

export const Subtitle = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 500;
  padding: 1.5rem 0;
  color: #33A9FF;
`;

export const TimeFilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  padding-right: 2.5rem;
`;

export const TimeFilterItem = styled.div`
  background-color: #CEEAFF;
  padding: 0.35rem 2rem;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 2rem;
`;

export const FilteredCardContainer = styled.div`
  margin-bottom: 3rem;

  .date{
    font-size: 1.65rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;
export const FilteredCard = styled.div`
  width: 33rem;
  height: 18rem;
  border-radius: 2rem;
  background-color: #33A9FF;
  padding: 2rem;
`;

export const CardItem = styled.div`
  position: relative;
  top: -10rem;
  z-index: 100;
`

export const UpcomingContainer = styled.div`
  
`
export const UpcomingHeader = styled.div`
  font-size: 1.65rem;
  font-weight: 600;
  margin-bottom: 1rem;
`