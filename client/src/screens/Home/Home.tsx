import React from 'react'
import { CardItem, FilteredCard, FilteredCardContainer, Subtitle, TimeFilterContainer, TimeFilterItem, Title, UpcomingContainer, UpcomingHeader } from './styles'
import { LiaBirthdayCakeSolid } from "react-icons/lia";

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Subtitle>Hi, here are the today's updates:</Subtitle>
      <Title>Calender</Title>

      <TimeFilterContainer>
        <TimeFilterItem>Today</TimeFilterItem>
        <TimeFilterItem>Week</TimeFilterItem>
        <TimeFilterItem>Month</TimeFilterItem>
        <TimeFilterItem>Year</TimeFilterItem>
      </TimeFilterContainer>

      <FilteredCardContainer>
        <div className='date'>28-Oct Thursday</div>
        <FilteredCard>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div><LiaBirthdayCakeSolid size={20} color='#D7D8D9'></LiaBirthdayCakeSolid></div>
              <div><LiaBirthdayCakeSolid size={20} color='#D7D8D9'></LiaBirthdayCakeSolid></div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
              <div style={{ marginTop: "1rem", marginLeft: "5rem" }}><LiaBirthdayCakeSolid size={20} color='#D7D8D9'></LiaBirthdayCakeSolid></div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
              <div style={{ marginRight: "5rem", marginBottom: "1rem" }}><LiaBirthdayCakeSolid size={20} color='#D7D8D9'></LiaBirthdayCakeSolid></div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div><LiaBirthdayCakeSolid size={20} color='#D7D8D9'></LiaBirthdayCakeSolid></div>
              <div><LiaBirthdayCakeSolid size={20} color='#D7D8D9'></LiaBirthdayCakeSolid></div>
            </div>
          </div>
          <CardItem>Inside Card</CardItem>
        </FilteredCard>
      </FilteredCardContainer>

      <UpcomingContainer>
        <UpcomingHeader>Upcoming birthdays</UpcomingHeader>
      </UpcomingContainer>

    </div>
  )
}

export default Home