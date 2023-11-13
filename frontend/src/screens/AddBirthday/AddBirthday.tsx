import React, { useState } from 'react';
import moment from 'moment';
import { useMutation } from '@apollo/client';

import ballons from "../../svgs/balloons.png"
import { FormButton, FormItem, ImageContainer, TitleContainer } from './styles';
import { ADD_BIRTHDATE } from '../../graphql/Mutation';
import { GET_BIRTHDATES } from '../../graphql/Query';

type Props = {}

const AddBirthday = (props: Props) => {
  const [birthDayDetails, setBirthdayDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
  });

  const [addUser] = useMutation(ADD_BIRTHDATE)

  const handleChange = (e: React.FormEvent<EventTarget>) => {
    const { name, value } = e.target as HTMLInputElement;
    setBirthdayDetails({ ...birthDayDetails, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    const { firstName, lastName, email, dob } = birthDayDetails;
    e.preventDefault();
    console.log("birthDayDetails_client = ", birthDayDetails)
      addUser({
        variables: {
          firstName,
          lastName,
          email,
          dob: moment(dob)
        },
        refetchQueries: [{
          query: GET_BIRTHDATES
        }]
      })
  }

  return (
    <div>
      <ImageContainer>
        <img src={ballons} />
      </ImageContainer>
      <TitleContainer>
        <h1>BirthYay</h1>
        <p>Never miss important events of the people you care for!</p>
      </TitleContainer>
      <form onSubmit={handleSubmit}>
        <FormItem>
          <label>First name</label>
          <input
            placeholder="Enter your first name"
            name="firstName"
            value={birthDayDetails.firstName}
            onChange={handleChange}
          />
        </FormItem>
        <FormItem>
          <label>Last name</label>
          <input
            placeholder="Enter your last name"
            name="lastName"
            value={birthDayDetails.lastName}
            onChange={handleChange}
          />
        </FormItem>
        <FormItem>
          <label>Email</label>
          <input
            name="email"
            placeholder="Enter your email"
            value={birthDayDetails.email}
            onChange={handleChange}
          />
        </FormItem>
        <FormItem>
          <label>BirthDate</label>
          <input
            type='date'
            name="dob"
            placeholder="Enter your birthdate"
            value={birthDayDetails.dob}
            onChange={handleChange}
            min="1975-01-01"
            max="2000-12-31"
          />
        </FormItem>
        <div style={{ textAlign: "right" }}>
          <FormButton type="submit" className='right-align'>
            Add
          </FormButton>
        </div>
      </form>
    </div>
  )
}

export default AddBirthday